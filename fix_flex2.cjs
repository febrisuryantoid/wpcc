const fs = require('fs');
let content = fs.readFileSync('src/story/components/SceneLayout.tsx', 'utf-8');

// For the first block:
// className={`${scene.points.length === 5 ? 'flex flex-wrap justify-center' : 'grid'} gap-4 w-full items-stretch ${getGridClass(scene.points.length, false)}`}
// This is fine since it's gap-4.

// For the second block:
// className={`${scene.points.length === 5 ? 'flex flex-wrap justify-center' : 'grid'} items-stretch ${isCompact ? 'gap-2 sm:gap-3 md:gap-3.5 max-w-7xl' : 'gap-4 sm:gap-5'} ${getGridClass(scene.points.length, !!illustration)}`}
content = content.replace(
  "className={`${scene.points.length === 5 ? 'flex flex-wrap justify-center' : 'grid'} items-stretch ${isCompact ? 'gap-2 sm:gap-3 md:gap-3.5 max-w-7xl' : 'gap-4 sm:gap-5'} ${getGridClass(scene.points.length, !!illustration)}`}",
  "className={`${scene.points.length === 5 ? 'flex flex-wrap justify-center gap-4' : `grid ${isCompact ? 'gap-2 sm:gap-3 md:gap-3.5 max-w-7xl' : 'gap-4 sm:gap-5'}`} items-stretch w-full ${getGridClass(scene.points.length, !!illustration)}`}"
);

fs.writeFileSync('src/story/components/SceneLayout.tsx', content);
