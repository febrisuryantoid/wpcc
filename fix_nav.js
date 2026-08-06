const fs = require('fs');
const path = 'src/story/ui/Navigation.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/gap-2 md:gap-3 px-4 py-2/g, 'gap-1 sm:gap-2 md:gap-3 px-3 sm:px-4 py-1.5 sm:py-2');
content = content.replace(/pb-6 md:pb-8 pt-12 px-8/g, 'pb-4 sm:pb-6 md:pb-8 pt-8 sm:pt-12 px-2 sm:px-8');

// Replace button classes
content = content.replace(/w-9 h-9/g, 'w-7 h-7 sm:w-9 sm:h-9');
content = content.replace(/w-5 h-5/g, 'w-3.5 h-3.5 sm:w-5 sm:h-5');

fs.writeFileSync(path, content);
console.log('Done fixing nav');
