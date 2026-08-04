const fs = require('fs');
let content = fs.readFileSync('src/story/components/TypewriterText.tsx', 'utf-8');

// Change URL
content = content.replace(
  '"https://assets.mixkit.co/active_storage/sfx/1397/1397-preview.mp3"',
  '"https://assets.mixkit.co/active_storage/sfx/2529/2529-preview.mp3"'
);

// Replace useEffect for typing sound
const oldEffect = `  useEffect(() => {
    let timeoutIds: NodeJS.Timeout[] = [];
    
    characters.forEach((char, index) => {
      if (char !== ' ') {
        const timeout = setTimeout(() => {
          playTypewriterSound();
        }, (delay + index * charSpeed) * 1000);
        timeoutIds.push(timeout);
      }
    });

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, [text, delay]);`;

const newEffect = `  useEffect(() => {
    const timeout = setTimeout(() => {
      playTypewriterSound();
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [text, delay]);`;

content = content.replace(oldEffect, newEffect);
fs.writeFileSync('src/story/components/TypewriterText.tsx', content);
