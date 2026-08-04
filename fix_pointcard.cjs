const fs = require('fs');

let content = fs.readFileSync('src/story/components/PointCard.tsx', 'utf-8');

content = content.replace(/<TypewriterText text=\{pointData\.title\} delay=\{0\.2\} \/>/g, '{pointData.title}');
content = content.replace(/<TypewriterText text=\{pointData\.description\} delay=\{0\.3\} \/>/g, '{pointData.description}');
// Also remove the import
content = content.replace('import { TypewriterText } from "./TypewriterText";', '');

fs.writeFileSync('src/story/components/PointCard.tsx', content);
