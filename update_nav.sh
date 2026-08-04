#!/bin/bash
sed -i 's/hover:bg-white\/10/hover:bg-blue-500\/20/g' src/story/StoryEngine.tsx
sed -i 's/rounded-full/octagon-cut-sm/g' src/story/StoryEngine.tsx
sed -i 's/bg-emerald-600\/30 border-emerald-400\/50 text-emerald-400 shadow-\[0_0_12px_rgba(16,185,129,0.4)\]/bg-blue-600 border-blue-400 text-white shadow-[0_0_12px_rgba(59,130,246,0.5)]/g' src/story/StoryEngine.tsx
sed -i 's/text-emerald-400/text-blue-400/g' src/story/StoryEngine.tsx
sed -i 's/bg-blue-600\/30 border-blue-400\/50 text-blue-400 shadow-\[0_0_12px_rgba(59,130,246,0.4)\]/bg-blue-600 border-blue-400 text-white shadow-[0_0_12px_rgba(59,130,246,0.5)]/g' src/story/StoryEngine.tsx
sed -i 's/group-hover:text-white/group-hover:text-blue-300/g' src/story/StoryEngine.tsx
