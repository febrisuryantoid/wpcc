const fs = require('fs');
let content = fs.readFileSync('src/story/StoryEngine.tsx', 'utf-8');

const updatedSphereMoveEffect = `
  useEffect(() => {
    if (currentSceneIndex === -1) return; // Skip cover
    
    if (currentSceneIndex === 0) {
      // We already play wpcc_transition on the Cover button click,
      // but if they navigate to index 0 from search or somewhere else, 
      // it might not play. Let's just let Cover handle it.
      return;
    }
    
    const moves = ['sphere_1', 'sphere_2', 'sphere_3', 'sphere_4'];
    
    if (currentSceneIndex === storyScenes.length - 1) {
      audioManager.playSound('sphere_last', 0.7);
    } else {
      audioManager.playSound(moves[(currentSceneIndex - 1) % moves.length], 0.7);
    }
  }, [currentSceneIndex, storyScenes.length]);
`;

// Find the previously added block and replace it
const regex = /useEffect\(\(\) => \{\s*if \(currentSceneIndex === -1\) return; \/\/ Skip cover[\s\S]*?\}, \[currentSceneIndex\]\);/;
content = content.replace(regex, updatedSphereMoveEffect.trim());

fs.writeFileSync('src/story/StoryEngine.tsx', content);
