#!/bin/bash
sed -i 's/hover:text-white hover:bg-blue-500\/20/hover:text-blue-300 hover:bg-blue-500\/20/g' src/story/StoryEngine.tsx
sed -i 's/text-blue-400/text-white/g' src/story/StoryEngine.tsx
sed -i 's/group-hover:text-blue-300/group-hover:text-blue-400/g' src/story/StoryEngine.tsx
