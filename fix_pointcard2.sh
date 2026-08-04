#!/bin/bash
sed -i '/style={{ background: /d' src/story/components/PointCard.tsx
sed -i 's/flex-grow overflow-hidden`}>/flex-grow overflow-hidden`} style={{ background: '\''linear-gradient(180deg, rgba(10, 18, 34, 0.7) 0%, rgba(5, 7, 13, 0.7) 45%, rgba(2, 2, 3, 0.7) 75%, rgba(0, 0, 0, 0.7) 100%)'\'' }}>/g' src/story/components/PointCard.tsx
