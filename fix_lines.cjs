const fs = require('fs');

let content = fs.readFileSync('src/story/components/CoverPage.tsx', 'utf-8');

const newPaths = `const electronPaths = [
  // Top Right coming in (sharp circuit angles)
  "M 2100,-100 L 1700,300 L 1400,300 L 1100,600 L 800,600",
  "M 1950,-200 L 1550,200 L 1250,200 L 950,500 L 750,500",
  "M 2200,100 L 1800,500 L 1600,500 L 1300,800 L 1000,800 L 900,700 L 800,700",
  "M 1800,-50 L 1400,350 L 1200,350 L 900,650 L 700,650",
  // Bottom Left coming in (sharp circuit angles)
  "M -100,1200 L 300,800 L 600,800 L 900,500 L 1100,500",
  "M -200,1000 L 200,600 L 500,600 L 800,300 L 1000,300",
  "M 100,1300 L 500,900 L 700,900 L 1000,600 L 1200,600 L 1300,500 L 1400,500",
  "M -50,1100 L 350,700 L 550,700 L 850,400 L 1050,400",
];`;

content = content.replace(/const electronPaths = \[[^]*?\];/, newPaths);

fs.writeFileSync('src/story/components/CoverPage.tsx', content);

