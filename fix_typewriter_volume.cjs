const fs = require('fs');
let content = fs.readFileSync('src/story/components/TypewriterText.tsx', 'utf-8');
content = content.replace(/noiseGain\.gain\.setValueAtTime\(0\.04, t\);/, 'noiseGain.gain.setValueAtTime(0.15, t);');
content = content.replace(/noiseGain\.gain\.exponentialRampToValueAtTime\(0\.001, t \+ 0\.02\);/, 'noiseGain.gain.exponentialRampToValueAtTime(0.01, t + 0.02);');

content = content.replace(/oscGain\.gain\.setValueAtTime\(0\.02, t\);/, 'oscGain.gain.setValueAtTime(0.1, t);');
content = content.replace(/oscGain\.gain\.exponentialRampToValueAtTime\(0\.001, t \+ 0\.02\);/, 'oscGain.gain.exponentialRampToValueAtTime(0.01, t + 0.02);');

fs.writeFileSync('src/story/components/TypewriterText.tsx', content);
