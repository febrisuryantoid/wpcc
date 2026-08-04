const fs = require('fs');
let content = fs.readFileSync('src/story/components/SceneLayout.tsx', 'utf-8');

// Update getGridClass for 5 elements
content = content.replace("if (count === 5) return 'grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 w-full max-w-6xl mx-auto';", "if (count === 5) return 'flex flex-wrap justify-center w-full max-w-6xl mx-auto';");

// Update rendering of points to add wrapper for flex sizing if count == 5
content = content.replace(
/(\s*)return \(\s*<PointCard\s*key=\{idx\}\s*pointData=\{pointData\}\s*index=\{idx\}\s*url=\{url\}\s*isCompact=\{isCompact\}\s*\/>\s*\);/g,
`$1const isFive = scene.points.length === 5;
$1return (
$1  <div key={idx} className={isFive ? "w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] flex" : "h-full"}>
$1    <PointCard 
$1      pointData={pointData}
$1      index={idx}
$1      url={url}
$1      isCompact={isCompact}
$1    />
$1  </div>
$1);`
);

// We also need to remove the gap from grid for flex if it's 5, or just let it use gap. Wait! flex with gap works fine in modern browsers (Tailwind gap-4).
// Wait, the container has 'grid gap-4 w-full ...'. We need to make sure 'grid' class is only there if not 5.
content = content.replace("className={`grid gap-4 w-full items-stretch ${getGridClass(scene.points.length, false)}`}", "className={`${scene.points.length === 5 ? 'flex flex-wrap justify-center' : 'grid'} gap-4 w-full items-stretch ${getGridClass(scene.points.length, false)}`}");
content = content.replace("className={`grid items-stretch ${isCompact", "className={`${scene.points.length === 5 ? 'flex flex-wrap justify-center' : 'grid'} items-stretch ${isCompact");

fs.writeFileSync('src/story/components/SceneLayout.tsx', content);
