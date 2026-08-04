#!/bin/bash
sed -i '/style={{ background: /d' src/story/scenes/Scene03.tsx
sed -i '/className="relative w-full h-full z-10 backdrop-blur-2xl/s/>/ style={{ background: '\''linear-gradient(180deg, rgba(10, 18, 34, 0.85) 0%, rgba(5, 7, 13, 0.85) 45%, rgba(2, 2, 3, 0.85) 75%, rgba(0, 0, 0, 0.85) 100%)'\'' }}>/g' src/story/scenes/Scene03.tsx
