const fs = require('fs');
const glob = require('glob');

glob('src/**/*.tsx', (err, files) => {
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const lines = content.split('\n');
    lines.forEach((line, i) => {
      if (line.includes('{ background:')) {
        if (!line.includes('style={{')) {
          console.log(`${file}:${i+1} - ${line}`);
        }
      }
      if (line.includes('{background:')) {
         if (!line.includes('style={{')) {
          console.log(`${file}:${i+1} - ${line}`);
         }
      }
    });
  });
});
