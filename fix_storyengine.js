const fs = require('fs');

let content = fs.readFileSync('src/story/StoryEngine.tsx', 'utf-8');

// 1. Add audioManager import
content = content.replace(
  "import { SearchModal } from './components/SearchModal';",
  "import { SearchModal } from './components/SearchModal';\nimport { audioManager } from './utils/audioManager';"
);

// 2. Remove the existing audio useEffect block
const oldAudioEffectRegex = /const playAudio = \(\) => \{[^}]+\};[\s\S]*?document\.addEventListener\('touchstart', playAudio, \{ once: true \}\);[\s\S]*?return \(\) => \{[^}]+\};/m;
content = content.replace(oldAudioEffectRegex, '');

// 3. Add audio setup and sound playing on start
const audioSetupCode = `  useEffect(() => {
    const sfx = [
      { key: 'open', url: 'https://assets.mixkit.co/active_storage/sfx/2739/2739-preview.mp3' },
      { key: 'wpcc_click', url: 'https://assets.mixkit.co/active_storage/sfx/900/900-preview.mp3' },
      { key: 'wpcc_transition', url: 'https://assets.mixkit.co/active_storage/sfx/2738/2738-preview.mp3' },
      { key: 'sphere_1', url: 'https://assets.mixkit.co/active_storage/sfx/2639/2639-preview.mp3' },
      { key: 'sphere_2', url: 'https://assets.mixkit.co/active_storage/sfx/3176/3176-preview.mp3' },
      { key: 'sphere_3', url: 'https://assets.mixkit.co/active_storage/sfx/3161/3161-preview.mp3' },
      { key: 'sphere_4', url: 'https://assets.mixkit.co/active_storage/sfx/3024/3024-preview.mp3' },
      { key: 'sphere_last', url: 'https://assets.mixkit.co/active_storage/sfx/811/811-preview.mp3' },
      { key: 'fullscreen_on', url: 'https://assets.mixkit.co/active_storage/sfx/890/890-preview.mp3' },
      { key: 'fullscreen_off', url: 'https://assets.mixkit.co/active_storage/sfx/913/913-preview.mp3' },
      { key: 'profile_more', url: 'https://assets.mixkit.co/active_storage/sfx/183/183-preview.mp3' },
    ];
    sfx.forEach(s => audioManager.loadSound(s.key, s.url));

    const handleFirstInteraction = () => {
      audioManager.init();
      audioManager.playSound('open', 0.5);
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);
    
    // Play immediately if browser allows
    setTimeout(() => {
      audioManager.playSound('open', 0.5);
    }, 300);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);
`;

// Insert after the hideTimerRef
content = content.replace("const hideTimerRef = useRef<NodeJS.Timeout | null>(null);\n  const audioRef = useRef<HTMLAudioElement>(null);\n  useEffect(() => {\n    \n  }, []);", "const hideTimerRef = useRef<NodeJS.Timeout | null>(null);\n  const audioRef = useRef<HTMLAudioElement>(null);\n" + audioSetupCode);

// Wait, the regex replaced `const playAudio ...` but `useEffect(() => { \n  }, []);` might still be there.
// Let's just do a string replacement for the entire old audio block.
