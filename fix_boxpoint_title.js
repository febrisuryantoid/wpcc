const fs = require('fs');
const path = 'src/story/style/BoxPoint.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/text-\[12px\] sm:wpcc-h4 leading-tight/g, 'text-[12px] sm:wpcc-h4 leading-[1.15] sm:leading-tight');

fs.writeFileSync(path, content);
console.log('Done fixing boxpoint title');
