const fs = require('fs');
let content = fs.readFileSync('src/story/scenes/Scene02.tsx', 'utf-8');

// Add audioManager import
content = content.replace(
  "import { motion, AnimatePresence } from 'motion/react';",
  "import { motion, AnimatePresence } from 'motion/react';\nimport { audioManager } from '../utils/audioManager';"
);

// Add sound play to onClick
content = content.replace(
  "onClick={() => setIsModalOpen(true)}",
  "onClick={() => {\n                    audioManager.playSound('profile_more', 0.8);\n                    setIsModalOpen(true);\n                  }}"
);

fs.writeFileSync('src/story/scenes/Scene02.tsx', content);
