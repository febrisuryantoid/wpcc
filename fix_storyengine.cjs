const fs = require('fs');

let content = fs.readFileSync('src/story/StoryEngine.tsx', 'utf-8');

// 1. Add audioManager import
if (!content.includes("audioManager")) {
  content = content.replace(
    "import { SearchModal } from './components/SearchModal';",
    "import { SearchModal } from './components/SearchModal';\nimport { audioManager } from './utils/audioManager';"
  );
}

// 2. Remove the existing audio useEffect block
const oldAudioEffectRegex = /useEffect\(\(\) => \{\s*const playAudio = \(\) => \{[^}]+\};\s*document\.addEventListener\('click', playAudio, \{ once: true \}\);\s*document\.addEventListener\('touchstart', playAudio, \{ once: true \}\);\s*return \(\) => \{\s*document\.removeEventListener\('click', playAudio\);\s*document\.removeEventListener\('touchstart', playAudio\);\s*\};\s*\}, \[\]\);/;
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

content = content.replace("const audioRef = useRef<HTMLAudioElement>(null);\n", "const audioRef = useRef<HTMLAudioElement>(null);\n" + audioSetupCode);


// Change audio volume from 0.25 to 0.4
content = content.replace(/e\.currentTarget\.volume = 0\.25/g, 'e.currentTarget.volume = 0.4');

// WPCC Icon Click Handling (onStart in CoverPage)
const oldOnStart = `              onStart={() => {\n                setCurrentSceneIndex(0);\n                setRevealStep(3);\n              }}`;
const newOnStart = `              onStart={() => {
                audioManager.playSound('wpcc_click', 0.8);
                setTimeout(() => {
                  audioManager.playSound('wpcc_transition', 0.8);
                  if (audioRef.current) {
                    audioRef.current.volume = 0.4;
                    audioRef.current.play().catch(e => console.log('Audio autoplay blocked:', e));
                  }
                  setTimeout(() => {
                    setCurrentSceneIndex(0);
                    setRevealStep(3);
                  }, 800);
                }, 300);
              }}`;

content = content.replace(oldOnStart, newOnStart);

// Fullscreen toggle sounds
content = content.replace(
  "setIsPresentationMode(!isPresentationMode);",
  "setIsPresentationMode(!isPresentationMode);\n    if (!isPresentationMode) {\n      audioManager.playSound('fullscreen_on', 0.7);\n    } else {\n      audioManager.playSound('fullscreen_off', 0.7);\n    }"
);

// We should also check when user escapes fullscreen using the browser's ESC key, we need to play fullscreen_off sound.
// The ESC key is typically handled by 'fullscreenchange' event which may not be fully in React yet, 
// wait, we have document.addEventListener('fullscreenchange')? Let's check `StoryEngine.tsx` for fullscreenchange.

fs.writeFileSync('src/story/StoryEngine.tsx', content);
