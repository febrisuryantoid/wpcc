const fs = require('fs');
let content = fs.readFileSync('src/story/scenes/Scene02.tsx', 'utf-8');
if (!content.includes('import { TypewriterText }')) {
    content = content.replace("import { SceneProps } from '../types';", "import { SceneProps } from '../types';\nimport { TypewriterText } from '../components/TypewriterText';");
    fs.writeFileSync('src/story/scenes/Scene02.tsx', content);
}
