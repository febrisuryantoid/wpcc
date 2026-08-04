# WPCC SCENE BIBLE: CHAPTER 2

==================================================
## SCENE 05
==================================================
**Scene Number:** 05
**Chapter:** 2 - The Anatomy of a Digital World
**Scene Title:** Anatomy Intro
**Learning Goal:** Introduce the concept of layered architecture (Separation of Concerns).
**Audience Emotion:** Intrigue, Analytical focus.
**Expected Audience Reaction:** Processing the shift from abstract journey to technical reality.
**Headline:** Anatomy of a World
**Supporting Sentence:** Websites are built in distinct layers.
**Estimated Speaking Time:** 40 seconds

**Presenter Script:**
"Selamat datang di tahap pertama. Sekarang, mari kita bedah anatomi dari dunia digital ini. Sebuah website bukanlah satu gambar datar yang digambar di atas kanvas. Ia adalah sebuah sistem mesin yang berlapis-lapis, di mana setiap lapisan memiliki tugas yang sangat spesifik dan terisolasi."

**Analogy:** Looking at an MRI or X-Ray of the human body, seeing the bones, muscles, and skin separately.
**Real-life Example:** The layers of a house: The concrete foundation, the interior paint, and the electrical wiring.
**Question to Audience:** "Pernahkah kalian melihat sebuah website tanpa gaya sama sekali? Hanya teks hitam putih yang berantakan?"
**Fun Fact:** In the early 90s, websites had no layers. HTML handled structure, design, and everything in one chaotic file.
**Aha Moment:** Realizing that breaking code into layers makes it dramatically easier to build and fix.

==================================================
### VISUAL EXPERIENCE
==================================================
**Overall Mood:** Analytical, precise, mathematical.
**Storytelling Direction:** Establishing the "Grid". We are moving from deep space into an engineering drafting table.
**Hero Placement:** Top-down Isometric layout.
**Visual Focus:** The infinite glowing floor grid.
**White Space Strategy:** Symmetrical and balanced.
**Reading Flow:** Center Top.

==================================================
### THREE.JS HERO OBJECT
==================================================
**Current Hero Object:** The Blueprint Grid (Infinite Grid).
**Previous Transformation:** Crashed through the gate from Scene 04.
**Next Transformation:** The grid lines extrude upwards to form the wireframe house.
**Purpose of Transformation:** To establish a foundational plane before building structure.
**Material:** `<Grid>` helper from `@react-three/drei`.
**Lighting:** Ambient light only to ensure the grid colors pop.
**Camera:** `PerspectiveCamera` positioned high up, looking down at a 45-degree angle (Isometric view).
**Animation:** The grid fades in smoothly.
**Interaction:** Parallax panning over the grid.
**Educational Meaning:** Represents the blank canvas of a new `.html` file.

==================================================
### BACKGROUND
==================================================
**Background Type:** Pure Void with strong fog.
**Gradient:** None.
**Glass:** None.
**Particles:** None.
**Fog:** `FogExp2` set to match the background color (`#0a0f24`), very dense so the grid fades out smoothly at the edges.
**Lighting:** Flat.
**Depth:** Floor plane depth.
**Motion:** Static.
**Color Palette:** `#0a0f24` (Deep Indigo) with `#3858E9` (Neon Blue) grid lines.
**Reason for Color Selection:** Indigo and Blue mimic classic architectural cyanotype blueprints.

==================================================
### COMPONENTS
==================================================
**Hero Section:** Center Top aligned text.
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
**Page Entry:** Fade from white flash. Grid opacity 0 to 1.
**Hero Reveal:** Text slides down from top.
**Typography:** Sharp, crisp entrance. No blur.
**Media:** N/A.
**Camera:** Camera smoothly arcs from the Z-axis tunnel view (Scene 04) up to the high isometric angle.
**Hover:** N/A.
**Exit:** Camera lowers slightly as the house begins to extrude.
**Transition:** Seamless crossfade into Scene 06 as geometry draws itself.

==================================================
### AUDIO EXPERIENCE (OPTIONAL)
==================================================
**Ambient Sound:** Minimalist ambient electronic hum.
**Transition Sound:** A digital "grid activating" sound (like a sci-fi radar sweep).
**Interaction Sound:** None.

==================================================
### IMPLEMENTATION NOTES
==================================================
**Assets Needed:** None (Drei `<Grid>`).
**Complexity:** Low.
**Performance Priority:** Ensure `fadeDistance` on the `<Grid>` is optimized so it doesn't render infinite lines.
**Responsive Notes:** Standard scaling.


==================================================
## SCENE 06
==================================================
**Scene Number:** 06
**Chapter:** 2 - The Anatomy of a Digital World
**Scene Title:** HTML is The Skeleton
**Learning Goal:** Teach that HTML is purely semantic structure with zero visual design.
**Audience Emotion:** Understanding, grounding.
**Expected Audience Reaction:** Recognizing the shape but noticing it looks unfinished.
**Headline:** HTML is The Skeleton
**Supporting Sentence:** Structure without any visual design.
**Estimated Speaking Time:** 45 seconds

**Presenter Script:**
"Lapisan pertama adalah HTML. Bayangkan ini sebagai kerangka tulang atau tiang pancang sebuah rumah. HTML sama sekali tidak peduli dengan warna, gaya, atau keindahan. Tugas utamanya hanyalah satu: memberikan struktur agar bangunan ini tidak runtuh. Ia mendefinisikan mana yang atap, mana yang pintu, dan mana yang lantai. Tanpa HTML, tidak ada fondasi."

**Analogy:** The steel I-beams of a skyscraper before the glass is installed.
**Real-life Example:** A Microsoft Word document with only H1, H2, and paragraph tags.
**Question to Audience:** "Pernah melihat rumah yang baru setengah jadi? Terlihat kuat, tapi belum bisa dihuni, kan?"
**Fun Fact:** HTML stands for HyperText Markup Language. It's a markup language, not a programming language. It can't do math.
**Aha Moment:** Understanding why developers don't use HTML to make things pretty.

==================================================
### VISUAL EXPERIENCE
==================================================
**Overall Mood:** Stark, geometric, unfinished.
**Storytelling Direction:** Wireframe geometry drawing itself on the grid.
**Hero Placement:** Offset Right (Text on left, House on right).
**Visual Focus:** The glowing white wireframe lines of the house geometry.
**White Space Strategy:** Left-aligned text creates massive negative space around the house model on the right.
**Reading Flow:** Left (Text) -> Right (Wireframe House).

==================================================
### THREE.JS HERO OBJECT
==================================================
**Current Hero Object:** A Wireframe House (Box + Cone).
**Previous Transformation:** Extruded up from the flat grid floor.
**Next Transformation:** The empty wireframe fills with frosted glass (CSS).
**Purpose of Transformation:** To isolate the concept of "structure only".
**Material:** `<Edges>` geometry with a pure white basic material. No faces, only lines.
**Lighting:** Ambient only. Wireframes don't catch directional light.
**Camera:** `PerspectiveCamera` at eye level, slightly offset to the left.
**Animation:** The house slowly rotates on its Y-axis (`rotation.y += 0.005`).
**Interaction:** Dragging the mouse rotates the house manually.
**Educational Meaning:** A literal representation of a "skeleton".

==================================================
### BACKGROUND
==================================================
**Background Type:** The same Blueprint Grid from Scene 05.
**Gradient:** None.
**Glass:** None.
**Particles:** None.
**Fog:** `FogExp2`.
**Lighting:** Flat.
**Depth:** Floor plane depth.
**Motion:** Slow continuous rotation of the house.
**Color Palette:** `#0a0f24` (Deep Indigo) with pure `#ffffff` wireframes.
**Reason for Color Selection:** High contrast makes the fine wireframe lines highly visible.

==================================================
### COMPONENTS
==================================================
**Hero Section:** Left-aligned text.
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
**Page Entry:** Text shifts left, House extrudes up from the grid (`scaleY: 0` to `1`).
**Hero Reveal:** Synchronized with extrusion.
**Typography:** Standard fade in.
**Media:** N/A.
**Camera:** Dollies down from isometric to eye-level.
**Hover:** Interactive orbit controls enabled.
**Exit:** Camera locks back to center.
**Transition:** Seamless.

==================================================
### AUDIO EXPERIENCE (OPTIONAL)
==================================================
**Ambient Sound:** Consistent with Scene 05.
**Transition Sound:** A digital "drawing/sketching" sound as the lines extrude.
**Interaction Sound:** None.

==================================================
### IMPLEMENTATION NOTES
==================================================
**Assets Needed:** None (Box + Cone geometry).
**Complexity:** Medium (Combining geometry for wireframes).
**Performance Priority:** Use Drei's `<Edges>` component rather than mapping hundreds of `Line` objects to keep draw calls at 1.
**Responsive Notes:** On mobile, move the House to Center-Bottom and Text to Center-Top.


==================================================
## SCENE 07
==================================================
**Scene Number:** 07
**Chapter:** 2 - The Anatomy of a Digital World
**Scene Title:** CSS is The Paint
**Learning Goal:** Teach that CSS handles 100% of the visual styling and aesthetic presentation.
**Audience Emotion:** Delight, Aesthetic appreciation.
**Expected Audience Reaction:** "Ooh", as the stark wireframe turns beautiful.
**Headline:** CSS is The Paint
**Supporting Sentence:** Bringing aesthetics to the raw structure.
**Estimated Speaking Time:** 45 seconds

**Presenter Script:**
"Tapi rumah dengan tiang pancang saja tidak menarik, bukan? Di sinilah CSS masuk. CSS adalah cat, kaca, lampu, dan desain interiornya. Lapisan inilah yang bertanggung jawab atas setiap piksel visual yang kalian lihat. Warna, bayangan, tata letak, animasi. CSS mengubah kerangka kaku tadi menjadi sebuah karya seni yang memanjakan mata."

**Analogy:** The drywall, paint, and windows added to the steel frame.
**Real-life Example:** Putting a custom skin on a character in a video game. The hitbox (HTML) stays the same, but it looks totally different.
**Question to Audience:** "Pernahkah kalian melihat website yang loading-nya lambat, lalu tiba-tiba dari berantakan menjadi rapi? Itu adalah momen saat CSS berhasil dimuat."
**Fun Fact:** CSS stands for Cascading Style Sheets. "Cascading" means rules can override other rules like a waterfall.
**Aha Moment:** Realizing that design and structure are completely decoupled.

==================================================
### VISUAL EXPERIENCE
==================================================
**Overall Mood:** Beautiful, cinematic, polished.
**Storytelling Direction:** A wave of color washes over the wireframe, filling it with solid, beautiful material.
**Hero Placement:** Offset Right (Same as Scene 06).
**Visual Focus:** The incredible refraction and gloss of the glass material.
**White Space Strategy:** Maintained from Scene 06.
**Reading Flow:** Left (Text) -> Right (Glass House).

==================================================
### THREE.JS HERO OBJECT
==================================================
**Current Hero Object:** The Glass House (Solid geometry now visible over the wireframe).
**Previous Transformation:** Was an empty wireframe.
**Next Transformation:** Pushes in closer to reveal the red JS engine sphere inside.
**Purpose of Transformation:** To show "styling" being applied in real-time.
**Material:** Dispersion Glass (`MeshPhysicalMaterial`, transmission 0.9, roughness 0.1, ior 1.5, clearcoat 1, color `#3858E9`).
**Lighting:** Studio lighting activates. Strong key light from top right, rim light from back left.
**Camera:** `PerspectiveCamera` offset left, slowly pushing in very slightly (`z` decreases by 1).
**Animation:** The `opacity` and `transmission` of the glass material animate from 0 to 1 over 2 seconds. The continuous Y-axis rotation continues.
**Interaction:** Orbit controls remain active.
**Educational Meaning:** A literal representation of "adding style".

==================================================
### BACKGROUND
==================================================
**Background Type:** The Blueprint Grid (now slightly darkened).
**Gradient:** None.
**Glass:** The Hero Object itself is glass.
**Particles:** None.
**Fog:** `FogExp2`.
**Lighting:** Studio lights turn on, casting realistic shadows onto the grid floor.
**Depth:** Floor plane depth.
**Motion:** Slow continuous rotation.
**Color Palette:** Deep Indigo, Neon Blue, and now crisp reflections.
**Reason for Color Selection:** Maintains the brand identity while showcasing material rendering capabilities.

==================================================
### COMPONENTS
==================================================
**Hero Section:** Left-aligned text. (Content swaps from Scene 06).
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
**Page Entry:** Text crossfades.
**Hero Reveal:** GSAP animates the material properties of the house (`opacity`, `transmission`).
**Typography:** Standard smooth reveal.
**Media:** N/A.
**Camera:** Slow push-in `z` lerp.
**Hover:** Interactive orbit controls.
**Exit:** Camera pushes in hard, breaking the boundaries of the house to look inside.
**Transition:** Seamless.

==================================================
### AUDIO EXPERIENCE (OPTIONAL)
==================================================
**Ambient Sound:** The ambient hum gains a warmer, musical chord.
**Transition Sound:** A soft, liquid "swoosh" as the glass material fills in.
**Interaction Sound:** None.

==================================================
### IMPLEMENTATION NOTES
==================================================
**Assets Needed:** HDRI Environment map (Studio) to provide realistic reflections for the glass.
**Complexity:** Medium-High (Requires precise material tuning).
**Performance Priority:** Ensure the glass material uses `transmissionResolution={512}` and not full screen resolution.
**Responsive Notes:** Maintained from Scene 06.


==================================================
## SCENE 08
==================================================
**Scene Number:** 08
**Chapter:** 2 - The Anatomy of a Digital World
**Scene Title:** JS is The Engine
**Learning Goal:** Teach that JavaScript is the programming language that powers logic, interaction, and movement.
**Audience Emotion:** Excitement, Energy, Realization.
**Expected Audience Reaction:** "Ah, that's what makes things happen."
**Headline:** JS is The Engine
**Supporting Sentence:** Adding logic, movement, and interaction.
**Estimated Speaking Time:** 50 seconds

**Presenter Script:**
"Rumah sudah berdiri tegak dan terlihat sangat indah. Tapi sayangnya, pintunya tidak bisa dibuka, dan lampunya tidak bisa dinyalakan. Rumah ini mati. Kita butuh listrik, kita butuh mesin. Itulah fungsi JavaScript. JavaScript adalah otot dan otak yang memberikan logika, interaksi, dan kehidupan ke dalam struktur yang diam ini. Berkat JS, sistem ini tiba-tiba menjadi hidup dan mampu merespons kalian."

**Analogy:** The engine, battery, and steering wheel of a beautifully painted car.
**Real-life Example:** Clicking a "Like" button and watching the heart turn red and the counter go up without reloading the page.
**Question to Audience:** "Apa jadinya aplikasi seperti Instagram atau Gojek tanpa JavaScript? Itu hanya akan menjadi poster digital yang tidak bisa diklik."
**Fun Fact:** JavaScript was famously written in just 10 days in 1995. Today, it runs basically everything on the internet.
**Aha Moment:** Understanding that HTML/CSS is static, while JS is dynamic.

==================================================
### VISUAL EXPERIENCE
==================================================
**Overall Mood:** Energetic, kinetic, alive.
**Storytelling Direction:** A sudden burst of kinetic energy inside the previously calm glass house.
**Hero Placement:** Center Close-Up (Camera is pushed right up to the house).
**Visual Focus:** The bright red, violently bouncing sphere trapped inside the glass house.
**White Space Strategy:** Tight crop. Less white space, more focus on the internal action.
**Reading Flow:** Left (Text) -> Center Right (Bouncing Sphere).

==================================================
### THREE.JS HERO OBJECT
==================================================
**Current Hero Object:** A Red Emissive Sphere (The JS Engine) inside the Glass House.
**Previous Transformation:** The house was empty and calm.
**Next Transformation:** The house shatters/dissolves as we move to Chapter 3.
**Purpose of Transformation:** To visually represent "logic and movement" turning on.
**Material:** Luminescent Polymer (`MeshBasicMaterial` with color `#ef4444` red).
**Lighting:** The red sphere casts a red point light that illuminates the inside of the frosted glass house.
**Camera:** `PerspectiveCamera` pushed in tight.
**Animation:** The Red Sphere rapidly scales from `0` to `1` with a `back.out(1.7)` pop. It then begins a rapid, continuous bouncing animation on the Y-axis inside the house, hitting the floor and ceiling.
**Interaction:** Clicking the screen makes the sphere bounce wildly against the walls (random X/Y/Z vectors) for 2 seconds before returning to a steady Y-axis bounce.
**Educational Meaning:** Visualizes "action" and "computation" occurring inside the structure.

==================================================
### BACKGROUND
==================================================
**Background Type:** The Blueprint Grid.
**Gradient:** None.
**Glass:** The House.
**Particles:** None.
**Fog:** `FogExp2`.
**Lighting:** The internal red point light dominates the scene now.
**Depth:** Floor plane depth, but tight crop.
**Motion:** Highly kinetic sphere.
**Color Palette:** Indigo, Blue, and now a high-contrast Neon Red (`#ef4444`).
**Reason for Color Selection:** Red indicates power, engines, and action (distinct from the calm blue structure).

==================================================
### COMPONENTS
==================================================
**Hero Section:** Left-aligned text. (Content swaps).
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
**Page Entry:** Text crossfades.
**Hero Reveal:** Sphere scales up `0` to `1`.
**Typography:** Standard smooth reveal.
**Media:** N/A.
**Camera:** Pushes in tight on the Z-axis.
**Hover:** N/A (Interaction is click-based).
**Exit:** Camera pulls out rapidly, the house geometry fades, and we transition to the abstract domain space.
**Transition:** A quick rotational swipe to Chapter 3.

==================================================
### AUDIO EXPERIENCE (OPTIONAL)
==================================================
**Ambient Sound:** A low, rhythmic mechanical heartbeat or engine thrum is introduced.
**Transition Sound:** A sharp "power up" electrical sound when the red sphere appears.
**Interaction Sound:** Bouncing/ricochet sound effects on click.

==================================================
### IMPLEMENTATION NOTES
==================================================
**Assets Needed:** None (Sphere geometry).
**Complexity:** Medium (GSAP bouncing logic).
**Performance Priority:** Do NOT use a real physics engine like Cannon.js for one bouncing ball. Use a hardcoded GSAP `yoyo` timeline with `ease: "bounce.out"` or `ease: "power2.in"` to simulate gravity perfectly with zero overhead.
**Responsive Notes:** Ensure the camera push-in isn't too aggressive on mobile, otherwise the house will clip through the camera near plane.

==================================================
### QUALITY CHECK
==================================================
**Visual:** Pass. The red glow inside the blue glass is stunning.
**Education:** Pass. Clearly separates logic (JS) from aesthetics (CSS) and structure (HTML).
**Storytelling:** Pass. The progression from wireframe -> glass -> engine is a perfect narrative arc.
**Interaction:** Pass. The click-to-scramble action perfectly proves what JS does (handles events).
**Motion:** Pass. Contrasts the slow rotations of prior scenes with violent, fast kinetic motion.
**Originality:** Pass. Completes the architectural metaphor brilliantly.
