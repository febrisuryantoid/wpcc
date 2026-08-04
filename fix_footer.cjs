const fs = require('fs');
let content = fs.readFileSync('src/story/StoryEngine.tsx', 'utf-8');
content = content.replace(/animate={{ opacity: isNavbarVisible \? 1 : 0 }}/g, 'animate={{ opacity: 1 }}');
fs.writeFileSync('src/story/StoryEngine.tsx', content);
