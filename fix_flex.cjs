const fs = require('fs');
let content = fs.readFileSync('src/story/components/SceneLayout.tsx', 'utf-8');

// Update the w-[calc] for isFive
content = content.replace(
  /"w-full sm:w-\[calc\(50%-1rem\)\] lg:w-\[calc\(33.333%-1rem\)\] flex"/g,
  '"w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)] flex"'
);

fs.writeFileSync('src/story/components/SceneLayout.tsx', content);
