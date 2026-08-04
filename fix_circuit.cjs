const fs = require('fs');

const circuitPaths = `const electronPaths = [
  // Top Right
  "M 2000,200 L 1600,200 L 1300,500 L 1100,500 L 1050,550",
  "M 1800,-100 L 1800,100 L 1400,500 L 1150,500 L 1100,550",
  "M 1900,50 L 1550,50 L 1150,450 L 950,450 L 850,550",
  "M 2100,400 L 1700,400 L 1450,650 L 1200,650 L 1100,550",
  // Bottom Left
  "M -100,800 L 400,800 L 700,500 L 850,500 L 900,450",
  "M 100,1200 L 100,900 L 400,600 L 700,600 L 800,500 L 900,500",
  "M -200,600 L 200,600 L 600,200 L 850,200 L 950,300",
  "M 300,1200 L 300,950 L 650,600 L 850,600 L 900,550",
];`;

let content = fs.readFileSync('src/story/components/CoverPage.tsx', 'utf-8');
content = content.replace(/const electronPaths = \[[^]*?\];/, circuitPaths);
fs.writeFileSync('src/story/components/CoverPage.tsx', content);
