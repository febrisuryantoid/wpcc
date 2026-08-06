const fs = require('fs');
const path = 'src/index.css';
let content = fs.readFileSync(path, 'utf8');

// Reset the base wpcc-h4
content = content.replace(/\.wpcc-h4 \{[\s\S]*?font-size:[^\}]*\}/g, `.wpcc-h4 {
  font-family: 'Lora', Georgia, serif !important;
  font-weight: 700 !important;
  line-height: 1.25 !important;
  font-size: 14px !important;
}`);

// We will also make sure the desktop size is set properly
content = content.replace(/@media \(min-width: 640px\) \{ \.wpcc-h4 \{ font-size: [^\}]*\} \}/g, '@media (min-width: 640px) { .wpcc-h4 { font-size: 16px !important; } }');

// Remove all max-width overrides for .wpcc-h4
content = content.replace(/@media \(max-width:[^\}]*\}[\s\S]*?\.wpcc-h4 \{[\s\S]*?\}[\s\S]*?\}/g, '');

// Also remove from media height overrides
content = content.replace(/h4, \.text-lg, \.text-xl, \.text-2xl, \.wpcc-h4 \{[\s\S]*?\}/g, `h4, .text-lg, .text-xl, .text-2xl {
    font-size: 14px !important;
    line-height: 1.25 !important;
  }`);

fs.writeFileSync(path, content);
console.log('Cleaned h4 sizes in index.css');
