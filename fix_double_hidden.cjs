const fs = require('fs');
const glob = require('glob');
const path = require('path');

const dir = 'src/story/slide';
const files = fs.readdirSync(dir).filter(f => f.startsWith('Slide') && f.endsWith('.tsx'));

files.forEach(file => {
  const filepath = path.join(dir, file);
  let content = fs.readFileSync(filepath, 'utf8');

  content = content.replace(/hidden sm:block (.*) hidden sm:block/g, 'hidden sm:block $1');
  
  fs.writeFileSync(filepath, content);
});

console.log('Fixed double hidden');
