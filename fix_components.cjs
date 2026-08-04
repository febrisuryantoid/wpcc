const fs = require('fs');

// Update CoverPage.tsx
let coverContent = fs.readFileSync('src/story/components/CoverPage.tsx', 'utf-8');

// Change const ElectronLines to export const ElectronLines
coverContent = coverContent.replace('const ElectronLines = () => {', 'export const ElectronLines = () => {');

// Remove <ElectronLines /> from CoverPage
coverContent = coverContent.replace('<ElectronLines />', '');

// Update paths to be curvy and more blue
coverContent = coverContent.replace(/const electronPaths = \[[\s\S]*?\];/, `const electronPaths = [
  // Top Right coming in (curvy)
  "M 2100,-100 C 1800,200 1600,0 1200,600 S 1000,500 900,650",
  "M 1950,-200 C 1700,100 1500,-100 1100,450 S 900,400 800,500",
  "M 2200,100 C 1900,400 1700,200 1300,800 S 1100,700 1000,900",
  "M 1800,-50 C 1600,150 1400,50 1000,550 S 800,450 700,650",
  // Bottom Left coming in (curvy)
  "M -100,1200 C 200,900 400,1100 800,500 S 1000,600 1100,450",
  "M -200,1000 C 100,700 300,900 700,300 S 900,400 1000,200",
  "M 100,1300 C 400,1000 600,1200 1000,600 S 1200,700 1300,500",
  "M -50,1100 C 250,800 450,1000 850,400 S 1050,500 1150,300",
];`);

// Make gradients bluer
coverContent = coverContent.replace(/stopColor="#60A5FA"/g, 'stopColor="#2563EB"');
coverContent = coverContent.replace(/stopColor="#BFDBFE"/g, 'stopColor="#60A5FA"');

// Fix WPSC icon - move up 1px by adding mt-[-1px] to its wrapper
coverContent = coverContent.replace(/<div className="relative flex items-center justify-center">/, '<div className="relative flex items-center justify-center" style={{ marginTop: "-1px" }}>');

fs.writeFileSync('src/story/components/CoverPage.tsx', coverContent);

// Update StoryEngine.tsx
let engineContent = fs.readFileSync('src/story/StoryEngine.tsx', 'utf-8');

// Import ElectronLines
engineContent = engineContent.replace("import { CoverPage } from './components/CoverPage';", "import { CoverPage, ElectronLines } from './components/CoverPage';");

// Insert ElectronLines and dark gradient just before Canvas
const backgroundUI = `
      {/* Cover Page Background Effects (Below Canvas) */}
      <AnimatePresence>
        {isCover && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[4] pointer-events-none"
          >
            {/* Dark premium gradient in center */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,3,15,0.8)_0%,rgba(0,3,15,0.4)_30%,transparent_70%)] mix-blend-multiply" />
            <ElectronLines />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Canvas Background */}
`;

engineContent = engineContent.replace('{/* 3D Canvas Background */}', backgroundUI);

// Fix footer text centering
engineContent = engineContent.replace('<div className="text-center">Febri Suryanto</div>', '<div className="text-center absolute left-1/2 -translate-x-1/2">Febri Suryanto</div>');

fs.writeFileSync('src/story/StoryEngine.tsx', engineContent);

