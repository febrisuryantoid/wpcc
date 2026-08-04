const fs = require('fs');

// 1. SceneLayout.tsx
let layoutContent = fs.readFileSync('src/story/components/SceneLayout.tsx', 'utf-8');
layoutContent = layoutContent.replace(/<TypewriterText text=\{scene\.supportingSentence\}.*?\/>/g, '{scene.supportingSentence}');
fs.writeFileSync('src/story/components/SceneLayout.tsx', layoutContent);

// 2. Scene02.tsx
let scene2Content = fs.readFileSync('src/story/scenes/Scene02.tsx', 'utf-8');
if (!scene2Content.includes('TypewriterText')) {
    scene2Content = scene2Content.replace("import { SceneConfig } from '../types';", "import { SceneConfig } from '../types';\nimport { TypewriterText } from '../components/TypewriterText';");
}
scene2Content = scene2Content.replace(/\{scene\.headline \|\| "Profile"\}/, '<TypewriterText text={scene.headline || "Profile"} delay={0.1} />');
fs.writeFileSync('src/story/scenes/Scene02.tsx', scene2Content);
