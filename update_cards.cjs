const fs = require('fs');
const glob = require('glob');
const path = require('path');

// We will process all SlideXX.tsx files.
const dir = 'src/story/slide';
const files = fs.readdirSync(dir).filter(f => f.startsWith('Slide') && f.endsWith('.tsx'));

files.forEach(file => {
  const filepath = path.join(dir, file);
  let content = fs.readFileSync(filepath, 'utf8');

  // Slide02 specific replacements
  content = content.replace(/className="text-xs sm:text-sm font-bold text-white/g, 'className="wpcc-h4 font-bold text-white');
  content = content.replace(/className="text-\[10px\] sm:text-xs text-slate-400 font-light mt-0\.5/g, 'className="wpcc-body-normal hidden sm:block text-slate-400 font-light mt-0.5');

  // Slide04
  content = content.replace(/<p className="wpcc-body-normal/g, '<p className="wpcc-body-normal hidden sm:block');

  // Fix other text sizes for title
  content = content.replace(/className="text-sm sm:text-base font-bold/g, 'className="wpcc-h4 font-bold');
  content = content.replace(/className="text-xs sm:text-sm font-bold/g, 'className="wpcc-h4 font-bold');
  
  // Fix other text sizes for desc
  content = content.replace(/className="text-\[10px\] sm:text-xs text-slate-400/g, 'className="wpcc-body-normal hidden sm:block text-slate-400');
  content = content.replace(/className="text-xs sm:text-sm text-slate-400/g, 'className="wpcc-body-normal hidden sm:block text-slate-400');
  content = content.replace(/className="text-sm text-slate-300/g, 'className="wpcc-body-normal hidden sm:block text-slate-300');

  // Ensure ALL `{.*\.desc}` blocks are within a hidden sm:block class
  // This is tricky with regex, so we'll just search for className="..." that immediately precede {.*desc} or similar and ensure they have `hidden sm:block`
  // Actually, I'll use a slightly safer replacement:
  content = content.replace(/className="([^"]*)"([^>]*)>(\s*\{[a-zA-Z0-9_]+\.desc\})/g, (match, classes, attrs, contentStr) => {
    if (!classes.includes('hidden sm:block') && !classes.includes('sm:block hidden')) {
      return `className="${classes} hidden sm:block wpcc-body-normal"${attrs}>${contentStr}`;
    }
    return match;
  });

  fs.writeFileSync(filepath, content);
});

console.log('Done processing cards');
