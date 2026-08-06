const fs = require('fs');
const glob = require('glob');
const path = require('path');

// We will process all SlideXX.tsx files.
const dir = 'src/story/slide';
const files = fs.readdirSync(dir).filter(f => f.startsWith('Slide') && f.endsWith('.tsx'));

files.forEach(file => {
  const filepath = path.join(dir, file);
  let content = fs.readFileSync(filepath, 'utf8');

  // 1. Hide all descriptions on mobile by appending 'hidden sm:block' if not present
  // For <p>, <span>, <div> containing descriptions (.desc)
  
  // Example matches: <p className="text-slate-300 text-sm mt-2">{obj.desc}</p>
  // We will simply search for `{.*\.desc}` and try to find the opening tag's className to inject `hidden sm:block`
  // Actually, standardizing is easier via string replacement.
  
  // Let's replace title classes with wpcc-h4
  content = content.replace(/className="([^"]*)text-\[(?:13|14|15|16|17|18|19|20|21)px\]([^"]*)font-bold([^"]*)"/g, (match, p1, p2, p3) => {
    // If it's a huge title, don't touch
    if (p1.includes('text-2xl') || p1.includes('text-3xl')) return match;
    let newClass = `className="${p1}wpcc-h4${p2}font-bold${p3}"`;
    // Clean up duplicate text- sizes
    newClass = newClass.replace(/text-(?:xs|sm|base|lg|xl)\s/g, '');
    newClass = newClass.replace(/sm:text-\[(?:13|14|15|16|17|18|19|20|21)px\]/g, '');
    newClass = newClass.replace(/md:text-\[(?:13|14|15|16|17|18|19|20|21)px\]/g, '');
    newClass = newClass.replace(/lg:text-\[(?:13|14|15|16|17|18|19|20|21)px\]/g, '');
    return newClass;
  });

  content = content.replace(/className="([^"]*)text-(?:xs|sm|base)\s+sm:text-(?:sm|base|lg)([^"]*)font-bold([^"]*)"/g, (match, p1, p2, p3) => {
    let newClass = `className="${p1}wpcc-h4${p2}font-bold${p3}"`;
    return newClass;
  });

  // Slide02 specific
  content = content.replace(/className="text-xs sm:text-sm font-bold text-white/g, 'className="wpcc-h4 font-bold text-white');

  fs.writeFileSync(filepath, content);
});

console.log('Done processing titles');
