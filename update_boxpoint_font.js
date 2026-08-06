const fs = require('fs');
const path = 'src/story/style/BoxPoint.tsx';
let content = fs.readFileSync(path, 'utf8');

// The class was changed to text-[11px] sm:wpcc-h4 leading-tight sm:leading-tight. 
// Change it to just wpcc-h4 but with leading-tight to let css media queries take full control.
content = content.replace(/text-\[11px\] sm:wpcc-h4 leading-tight sm:leading-tight/g, 'wpcc-h4 leading-[1.1] sm:leading-tight w-full break-words');

fs.writeFileSync(path, content);
console.log('Updated BoxPoint font class');
