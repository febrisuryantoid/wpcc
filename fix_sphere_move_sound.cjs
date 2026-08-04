const fs = require('fs');
let content = fs.readFileSync('src/story/StoryEngine.tsx', 'utf-8');

const sphereMoveEffect = `
  useEffect(() => {
    if (currentSceneIndex === -1) return; // Skip cover
    if (currentSceneIndex === 0 && !isPlaying) return; // Handled by wpcc_transition if manually started, but if nexted, maybe play
    
    // Simple way: if index > 0 or auto playing
    const moves = ['sphere_1', 'sphere_2', 'sphere_3', 'sphere_4'];
    
    if (currentSceneIndex === storyScenes.length - 1) {
      audioManager.playSound('sphere_last', 0.7);
    } else {
      audioManager.playSound(moves[currentSceneIndex % moves.length], 0.7);
    }
  }, [currentSceneIndex]);
`;

// Let's insert this before the auto-play useEffect
content = content.replace("useEffect(() => {\n    if (!isPlaying) return;", sphereMoveEffect + "\n  useEffect(() => {\n    if (!isPlaying) return;");

fs.writeFileSync('src/story/StoryEngine.tsx', content);
