const fs = require('fs');
let storyEngine = fs.readFileSync('src/story/StoryEngine.tsx', 'utf-8');
storyEngine = storyEngine.replace(/<!--[\s\S]*?-->/g, '');
storyEngine = storyEngine.replace(/<motion\.img\s+layoutId="wp-header-logo"[\s\S]*?\/>\s*\/>/g, `<motion.img
              layoutId="wp-header-logo"
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-ML1gSOI3LDIMf_vNLeahgkoFWZaat8RgxKijhpHnWHed7N6skUY8MdjVHoanvWNiEeCcIBQVAQv7FOkNlpUUXrMnczmlFw1Aio_1O-krIAZMFIT3XkhrTVFLC1XOsSWwmZ4fnYIYZMg1xGJxe41aa5yGSlxCbvihCmkg8PIUFbIZKnUMziMg6LcmET8/s1600/wordpress-logo.png"
              alt="WordPress Logo"
              className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />`);
fs.writeFileSync('src/story/StoryEngine.tsx', storyEngine);

let scene64 = fs.readFileSync('src/story/scenes/Scene64.tsx', 'utf-8');
scene64 = scene64.replace(/<!--[\s\S]*?-->/g, '');
fs.writeFileSync('src/story/scenes/Scene64.tsx', scene64);
