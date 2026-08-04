const fs = require('fs');

let scene2Content = fs.readFileSync('src/story/scenes/Scene02.tsx', 'utf-8');
scene2Content = scene2Content.replace(/Febri Suryanto\s*<\/motion\.h1>/, '<TypewriterText text="Febri Suryanto" delay={0.2} />\n                    </motion.h1>');
fs.writeFileSync('src/story/scenes/Scene02.tsx', scene2Content);
