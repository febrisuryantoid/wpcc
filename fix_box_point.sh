#!/bin/bash
sed -i 's/bg-white\/\[0.03\] group-hover:bg-\[#020617\] z-10/z-10/g' src/story/components/PointCard.tsx
sed -i 's/bg-white\/\[0.03\] group-hover:bg-\[#020617\] z-10/z-10/g' src/story/scenes/Scene03.tsx

# For PointCard.tsx
sed -i '/isCompact ? '\''p-3/i \      style={{ background: '\''linear-gradient(180deg, rgba(10, 18, 34, 0.85) 0%, rgba(5, 7, 13, 0.85) 45%, rgba(2, 2, 3, 0.85) 75%, rgba(0, 0, 0, 0.85) 100%)'\'' }}' src/story/components/PointCard.tsx

# For Scene03.tsx
sed -i '/className="relative w-full h-full z-10 backdrop-blur-2xl/a \                      style={{ background: '\''linear-gradient(180deg, rgba(10, 18, 34, 0.85) 0%, rgba(5, 7, 13, 0.85) 45%, rgba(2, 2, 3, 0.85) 75%, rgba(0, 0, 0, 0.85) 100%)'\'' }}' src/story/scenes/Scene03.tsx
