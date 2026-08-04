const fs = require('fs');

let content = fs.readFileSync('src/story/StoryEngine.tsx', 'utf-8');

// Add fullscreenchange listener inside StoryEngine useEffect
const fullscreenCode = `
    const handleFullscreenChange = () => {
      if (document.fullscreenElement) {
        audioManager.playSound('fullscreen_on', 0.7);
      } else {
        audioManager.playSound('fullscreen_off', 0.7);
      }
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
`;

const cleanupFullscreenCode = `      document.removeEventListener('fullscreenchange', handleFullscreenChange);\n`;

// Insert into the main useEffect
content = content.replace("sfx.forEach(s => audioManager.loadSound(s.key, s.url));", "sfx.forEach(s => audioManager.loadSound(s.key, s.url));\n" + fullscreenCode);
content = content.replace("document.removeEventListener('touchstart', handleFirstInteraction);\n    };", "document.removeEventListener('touchstart', handleFirstInteraction);\n" + cleanupFullscreenCode + "    };");

// Also remove any direct sound plays from fullscreen toggle in CoverPage and StoryEngine if I added them earlier.
content = content.replace(
  "setIsPresentationMode(!isPresentationMode);\n    if (!isPresentationMode) {\n      audioManager.playSound('fullscreen_on', 0.7);\n    } else {\n      audioManager.playSound('fullscreen_off', 0.7);\n    }",
  "setIsPresentationMode(!isPresentationMode);"
);

fs.writeFileSync('src/story/StoryEngine.tsx', content);

// And wait, CoverPage might have a fullscreen toggle too, but it doesn't need to play sound since StoryEngine will catch it.
