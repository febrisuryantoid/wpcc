# WPCC SCENE BIBLE: CHAPTER 5 & 6

==================================================
## SCENE 14
==================================================
**Scene Number:** 14
**Chapter:** 5 - The Digital Showroom
**Scene Title:** Website Types
**Learning Goal:** Showcase the versatility of what can be built using the anatomy and foundation learned so far.
**Audience Emotion:** Inspiration, Possibility.
**Expected Audience Reaction:** "I can build all of that?"
**Headline:** Infinite Possibilities
**Supporting Sentence:** From portfolios to enterprise commerce.
**Estimated Speaking Time:** 50 seconds

**Presenter Script:**
"Dengan fondasi yang telah kita pelajari, batasannya hanyalah imajinasi. Apakah kalian ingin membangun sebuah portofolio minimalis yang elegan? Atau mungkin sebuah platform e-commerce raksasa dengan ribuan produk dan sistem pembayaran kompleks? Keduanya menggunakan balok bangunan yang sama: HTML, CSS, JavaScript, dan fondasi server. Mesinnya sama, hanya arsitekturnya yang berbeda."

**Analogy:** Using the same bricks to build a cozy cabin or a massive shopping mall.
**Real-life Example:** Comparing a simple personal blog to Amazon.com.
**Question to Audience:** "Website seperti apa yang ingin kalian bangun pertama kali?"
**Fun Fact:** E-commerce on WordPress (WooCommerce) powers nearly 30% of all online stores globally.
**Aha Moment:** Realizing that complex apps aren't made of "harder" code, just *more* of the same simple code.

==================================================
### VISUAL EXPERIENCE
==================================================
**Overall Mood:** Bright, showcasing, polished.
**Storytelling Direction:** A museum exhibition or high-end product showcase.
**Hero Placement:** Split Horizontal (Two floating 3D browser windows).
**Visual Focus:** The contrast between the minimalist UI (left) and the complex E-commerce UI (right).
**White Space Strategy:** Wide, gallery-style padding.
**Reading Flow:** Top (Headline) -> Left Browser -> Right Browser.

==================================================
### THREE.JS HERO OBJECT
==================================================
**Current Hero Object:** Two floating 3D planes acting as Browser Windows.
**Previous Transformation:** Crashed through the WordPress core.
**Next Transformation:** The browsers dissolve into glowing paths on the floor.
**Purpose of Transformation:** To ground the abstract concepts into real-world UI examples.
**Material:** 3D Planes using `@react-three/drei` `<Html>` component. One is styled light/minimal (Portfolio), one is dark/complex (E-commerce).
**Lighting:** Soft, gallery-style ambient light.
**Camera:** `PerspectiveCamera` static.
**Animation:** Both browsers float gently on the Y-axis (out of sync).
**Interaction:** Hovering a browser brings it slightly forward on the Z-axis (`z: 1`) and increases the glow/shadow behind it.
**Educational Meaning:** Direct visual proof of versatility.

==================================================
### BACKGROUND
==================================================
**Background Type:** The Void.
**Gradient:** None.
**Glass:** None.
**Particles:** Stopped.
**Fog:** `FogExp2`.
**Lighting:** Gallery spotlighting.
**Depth:** Shallow.
**Motion:** Floating browsers.
**Color Palette:** `#000000` void, contrasting with the bright white and deep blue HTML UIs inside the 3D scene.
**Reason for Color Selection:** Makes the UI mockups pop like artwork in a dark museum.

==================================================
### COMPONENTS
==================================================
**Hero Section:** Top aligned text.
**Cards:** None.
**Glass Panels:** None.
**Browser Mockup:** Yes. Two completely built-out Tailwind UI mockups rendered inside the 3D canvas via `<Html transform>`.
**Infographic:** None.
**Timeline:** None.
**Statistics:** None.
**Quote:** None.
**Comparison:** Yes. A visual comparison between Simple vs Complex architecture.
**Video:** None.
**Photography:** None.
**Illustration:** None.

==================================================
### GSAP
==================================================
**Page Entry:** Text drops in. Browsers fly in from the Z-depth distance.
**Hero Reveal:** `z: -20` to `z: 0` with `power3.out`.
**Typography:** Standard.
**Media:** N/A.
**Camera:** Static.
**Hover:** `z: 1`, `scale: 1.05` on the hovered browser.
**Exit:** The browsers rotate 90 degrees flat on the X-axis and drop to the floor, becoming the starting points for the paths in Chapter 6.
**Transition:** Camera tilts down to view the floor.

==================================================
### AUDIO EXPERIENCE (OPTIONAL)
==================================================
**Ambient Sound:** A serene, wide ambient pad (like a museum).
**Transition Sound:** A soft "whoosh" as the browsers fly in.
**Interaction Sound:** Soft UI "pop" on hover.

==================================================
### IMPLEMENTATION NOTES
==================================================
**Assets Needed:** None. The UIs are built with raw HTML/Tailwind inside the Drei `<Html>` tag.
**Complexity:** High (Building responsive HTML inside a 3D transform).
**Performance Priority:** Ensure the `<Html>` elements don't cause severe layout thrashing. Keep the DOM inside them relatively simple (use colored divs as wireframes instead of heavy images).
**Responsive Notes:** On mobile, stack the two 3D planes vertically instead of horizontally, or reduce their scale significantly.


==================================================
## SCENE 15
==================================================
**Scene Number:** 15
**Chapter:** 6 - The Architect's Path
**Scene Title:** Branching Paths
**Learning Goal:** Show the audience their potential career/learning trajectories.
**Audience Emotion:** Motivation, Direction.
**Expected Audience Reaction:** "Which path do I want to take?"
**Headline:** The Architect's Path
**Supporting Sentence:** Where will you build next?
**Estimated Speaking Time:** 45 seconds

**Presenter Script:**
"Kalian telah melihat fondasinya. Sekarang, ke mana arah jalan kalian? Di dunia ini, ada tiga jalur utama yang bisa kalian tempuh. Pertama, Frontend Architect—berfokus pada visual, animasi, dan antarmuka. Kedua, Backend Engineer—menguasai server, database, dan logika inti. Atau ketiga, Fullstack Developer—master yang mengendalikan seluruh sistem dari ujung ke ujung. Pilihan ada di tangan kalian."

**Analogy:** Choosing a specialization in a video game RPG skill tree.
**Real-life Example:** Choosing to be an Interior Designer vs a Structural Engineer.
**Question to Audience:** "Siapa yang merasa lebih suka mendesain visual? Dan siapa yang lebih suka memecahkan logika data?"
**Fun Fact:** Fullstack developers are among the top 5 most in-demand jobs globally right now.
**Aha Moment:** Seeing that web development is not one giant overwhelming thing, but distinct, choosable paths.

==================================================
### VISUAL EXPERIENCE
==================================================
**Overall Mood:** Forward-looking, inspiring, dynamic.
**Storytelling Direction:** Three glowing paths branching out from a single starting point on the floor.
**Hero Placement:** Isometric Floor view.
**Visual Focus:** The three glowing lines of light (Red, Blue, Yellow) racing along the paths.
**White Space Strategy:** Wide open floor plane.
**Reading Flow:** Top Left (Headline) -> Center Floor (Paths).

==================================================
### THREE.JS HERO OBJECT
==================================================
**Current Hero Object:** Three Glowing Energy Paths (`THREE.Line` or `TubeGeometry`).
**Previous Transformation:** The browsers flattened into the floor.
**Next Transformation:** The camera sweeps up and everything dissolves into a single pixel.
**Purpose of Transformation:** To map out the future.
**Material:** Emissive Basic Material (`#ef4444`, `#3858E9`, `#eab308`).
**Lighting:** The paths illuminate the dark floor.
**Camera:** `PerspectiveCamera` tilted down at a 45-degree angle.
**Animation:** The lines draw themselves from the center origin outward (animating the `dashOffset` or scaling the geometry).
**Interaction:** Hovering a path highlights it (increases emissive bloom) and dims the other two.
**Educational Meaning:** Career trajectories (Frontend, Backend, Fullstack).

==================================================
### BACKGROUND
==================================================
**Background Type:** The Grid returns (very faint).
**Gradient:** None.
**Glass:** None.
**Particles:** None.
**Fog:** Heavy `FogExp2` so the paths disappear into the infinite horizon.
**Lighting:** Emissive paths.
**Depth:** Infinite floor.
**Motion:** Light pulses traveling along the paths.
**Color Palette:** Black Void, Red, Blue, Yellow paths.
**Reason for Color Selection:** Matches the three primary blocks from Chapter 1 (Consistency in metaphor).

==================================================
### COMPONENTS
==================================================
**Hero Section:** Top-left text.
**Cards:** None.
**Glass Panels:** HTML labels floating next to the ends of the paths ("Frontend", "Backend", "Fullstack") via Drei `<Html>`.
**Browser Mockup:** None.
**Infographic:** None.
**Timeline:** None.
**Statistics:** None.
**Quote:** None.
**Comparison:** None.
**Video:** None.
**Photography:** None.
**Illustration:** None.

==================================================
### GSAP
==================================================
**Page Entry:** Text crossfades.
**Hero Reveal:** The lines animate their draw from 0% to 100% using GSAP on a `dashOffset` uniform.
**Typography:** Standard.
**Media:** N/A.
**Camera:** Slowly dollying forward along the paths.
**Hover:** Dimming/Blooming handled by GSAP on the material `emissiveIntensity`.
**Exit:** Camera tilts abruptly up to the black void sky.
**Transition:** Everything fades to black instantly.

==================================================
### AUDIO EXPERIENCE (OPTIONAL)
==================================================
**Ambient Sound:** A rising, inspiring orchestral/synth crescendo.
**Transition Sound:** A rapid energy tracing sound (like a laser).
**Interaction Sound:** None.

==================================================
### IMPLEMENTATION NOTES
==================================================
**Assets Needed:** None.
**Complexity:** Medium (Animating line drawing in WebGL).
**Performance Priority:** Use `Line2` from Drei (fat lines) or simple `TubeGeometry`. Standard `THREE.Line` cannot have thickness on Windows/WebGL.
**Responsive Notes:** Ensure the camera angle captures all three paths on narrow vertical screens.


==================================================
## SCENE 16
==================================================
**Scene Number:** 16
**Chapter:** 6 - The Architect's Path
**Scene Title:** Outro (The Single Pixel)
**Learning Goal:** Provide a poetic, satisfying conclusion that loops back to the very first moment.
**Audience Emotion:** Awe, Completion, Inspiration.
**Expected Audience Reaction:** Applause.
**Headline:** Build The Future
**Supporting Sentence:** Thank you.
**Estimated Speaking Time:** 20 seconds

**Presenter Script:**
"Kita telah melihat bagaimana alam semesta ini dibangun. Dari struktur tulang yang paling dasar, hingga mesin logika, server raksasa, dan etalase digital. Semuanya tampak kompleks dan luar biasa. Namun ingatlah... setiap website di dunia ini, setiap aplikasi bernilai miliaran dolar, pada akhirnya selalu dimulai dari hal yang sama persis... [Pause] Sebuah kanvas kosong, dan satu piksel kode. Terima kasih. Waktunya kalian yang membangun."

**Analogy:** Every skyscraper starts with a single brick.
**Real-life Example:** N/A.
**Question to Audience:** N/A.
**Fun Fact:** N/A.
**Aha Moment:** The entire massive presentation collapses perfectly back into the exact single pixel it started from in Scene 01.

==================================================
### VISUAL EXPERIENCE
==================================================
**Overall Mood:** Final, dramatic, quiet.
**Storytelling Direction:** Maximum negative space. Return to zero.
**Hero Placement:** Dead Center.
**Visual Focus:** A single glowing white pixel.
**White Space Strategy:** 99.9% pure black void.
**Reading Flow:** Center.

==================================================
### THREE.JS HERO OBJECT
==================================================
**Current Hero Object:** A single, tiny 3D sphere (The Pixel).
**Previous Transformation:** Tilted up from the paths.
**Next Transformation:** End of presentation.
**Purpose of Transformation:** To close the narrative loop visually.
**Material:** `MeshBasicMaterial` (Pure white).
**Lighting:** None.
**Camera:** `PerspectiveCamera` static.
**Animation:** The glowing sphere holds for 3 seconds, then suddenly scales to `0` with a sharp `power4.in` pop, plunging the screen into absolute darkness.
**Interaction:** None.
**Educational Meaning:** Everything starts small. You can do this.

==================================================
### BACKGROUND
==================================================
**Background Type:** Pure Void.
**Gradient:** None.
**Glass:** None.
**Particles:** None.
**Fog:** None.
**Lighting:** None.
**Depth:** Flat.
**Motion:** None.
**Color Palette:** `#000000`
**Reason for Color Selection:** Absolute finality.

==================================================
### COMPONENTS
==================================================
**Hero Section:** Center aligned, absolute coordinates.
**Cards:** None.
**Glass Panels:** None.
**Browser Mockup:** None.
**Infographic:** None.
**Timeline:** None.
**Statistics:** None.
**Quote:** None.
**Comparison:** None.
**Video:** None.
**Photography:** None.
**Illustration:** None.

==================================================
### GSAP
==================================================
**Page Entry:** Text fades in extremely slowly.
**Hero Reveal:** The single pixel fades in.
**Typography:** Slow fade.
**Media:** N/A.
**Camera:** Static.
**Hover:** N/A.
**Exit:** The pixel disappears.
**Transition:** The presentation is over.

==================================================
### AUDIO EXPERIENCE (OPTIONAL)
==================================================
**Ambient Sound:** Absolute silence drops exactly as the pixel disappears.
**Transition Sound:** A very soft, high-frequency "ding" / harmonic ping just before it vanishes.
**Interaction Sound:** None.

==================================================
### IMPLEMENTATION NOTES
==================================================
**Assets Needed:** None.
**Complexity:** Very Low.
**Performance Priority:** N/A.
**Responsive Notes:** N/A.
