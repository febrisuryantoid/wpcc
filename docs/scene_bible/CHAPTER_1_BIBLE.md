# WPCC SCENE BIBLE: CHAPTER 1

==================================================
## SCENE 01
==================================================
**Scene Number:** 01
**Chapter:** 1 - The Invitation
**Scene Title:** Welcome to the Digital Frontier
**Learning Goal:** Establish the mental model that web development is a spatial, architectural space, not a flat 2D document.
**Audience Emotion:** Awe, Curiosity, Suspense.
**Expected Audience Reaction:** Silence, leaning forward, absolute attention.
**Headline:** The Digital Frontier
**Supporting Sentence:** What actually happens when you press Enter?
**Estimated Speaking Time:** 45 seconds

**Presenter Script:**
"Selamat datang. Apa yang kalian lihat di depan ini bukan sekadar presentasi biasa. Ini adalah ruang digital, sebuah kanvas tanpa batas tempat kita akan membangun dunia. Pernahkah kalian berpikir, apa yang sebenarnya terjadi di balik layar saat kalian mengetikkan alamat web dan menekan tombol 'Enter'? Hari ini, kita tidak hanya akan melihat kode, kita akan merasakannya."

**Analogy:** Entering a dark, empty plot of land right before a massive skyscraper is constructed.
**Real-life Example:** Turning on a high-powered flashlight inside a massive, undiscovered cavern.
**Question to Audience:** "Siapa di sini yang merasa kode pemrograman itu seperti bahasa alien yang mustahil dipahami?"
**Fun Fact:** The first ever website created in 1991 is still online today, and it was entirely flat text. We are lightyears away from that now.
**Aha Moment:** The audience realizes the entire presentation is a live, real-time 3D coded environment, not a pre-rendered video.

==================================================
### VISUAL EXPERIENCE
==================================================
**Overall Mood:** Mysterious, premium, highly cinematic.
**Storytelling Direction:** Establishing the "Void". Starting from nothingness (a single pixel) and expanding into a complex system.
**Hero Placement:** Dead Center (Absolute scale).
**Visual Focus:** The breathing luminescent core.
**White Space Strategy:** Massive negative space. 90% of the screen is pure void to emphasize scale.
**Reading Flow:** Center (Core) -> Top Left (Headline) -> Bottom (Supporting Text).

==================================================
### THREE.JS HERO OBJECT
==================================================
**Current Hero Object:** The Architect's Core (A complex, distorted Torus Knot).
**Previous Transformation:** N/A (Starts as a single 1px dot).
**Next Transformation:** Zooms past the camera, engulfing the screen.
**Purpose of Transformation:** To show that digital objects are alive and mathematical.
**Material:** `MeshDistortMaterial` (Luminescent Polymer).
**Lighting:** Internal emissive glow only. No external key lights.
**Camera:** Static `PerspectiveCamera` at Z: 8.
**Animation:** Micro-drifting using `<Float>` and continuous vertex distortion.
**Interaction:** Subtle parallax on mouse move (the core tracks the cursor slightly).
**Educational Meaning:** Represents the raw energy and potential of code before it takes structure.

==================================================
### BACKGROUND
==================================================
**Background Type:** Pure Void.
**Gradient:** None. Pure solid hex.
**Glass:** None.
**Particles:** 80 microscopic, out-of-focus white sparkles moving lazily.
**Fog:** `FogExp2` set to pure black to create infinite depth.
**Lighting:** Zero ambient light.
**Depth:** Infinite.
**Motion:** Slow, drifting dust particles.
**Color Palette:** `#000000` (Absolute Black).
**Reason for Color Selection:** Maximum contrast for the emissive blue core.

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
**Page Entry:** `opacity: 0` to `1` over 2 seconds.
**Hero Reveal:** Core scales from `0.01` to `2.0` with `power3.out`.
**Typography:** `y: 40`, `filter: blur(10px)` to `blur(0px)` staggered by 0.2s.
**Media:** N/A.
**Camera:** Static.
**Hover:** Lerped cursor tracking.
**Exit:** Camera accelerates forward on Z-axis, plunging directly through the Core.
**Transition:** The screen flashes pure white (Aurora Blue tint) as the camera passes through the geometry.

==================================================
### AUDIO EXPERIENCE (OPTIONAL)
==================================================
**Ambient Sound:** Low, cinematic sub-bass hum.
**Transition Sound:** A deep, resonant "whoosh" combined with a digital click.
**Interaction Sound:** None.

==================================================
### IMPLEMENTATION NOTES
==================================================
**Assets Needed:** None (Procedural geometry).
**Complexity:** High (Shader based distortion).
**Performance Priority:** Ensure `MeshDistortMaterial` vertices are kept below 10,000.
**Responsive Notes:** Scale the Core down by 50% on mobile devices to prevent clipping.

==================================================
### QUALITY CHECK
==================================================
**Visual:** Pass. Extreme contrast.
**Education:** Pass. Sets the architectural metaphor.
**Storytelling:** Pass. Hooks the audience immediately.
**Interaction:** Pass. Proves it's a live environment.
**Motion:** Pass. Smooth entry.
**Originality:** Pass. 100% unique starting point.


==================================================
## SCENE 02
==================================================
**Scene Number:** 02
**Chapter:** 1 - The Invitation
**Scene Title:** Meet The Architect
**Learning Goal:** Establish ultimate trust and authority in the presenter's expertise.
**Audience Emotion:** Respect, Trust, Reassurance.
**Expected Audience Reaction:** Reading credentials, acknowledging the presenter's authority.
**Headline:** The Architect
**Supporting Sentence:** I build these structures every single day.
**Estimated Speaking Time:** 60 seconds

**Presenter Script:**
"Halo semuanya, saya [Nama Presenter]. Saya bukan hanya seorang pembicara yang membacakan teori. Saya adalah arsitek digital. Setiap hari, tugas saya adalah merancang, membangun, dan memelihara sistem-sistem kompleks yang mungkin kalian gunakan. Selama lebih dari satu dekade, saya telah merangkai kode menjadi pengalaman yang hidup. Dan hari ini, saya akan membagikan rahasia dapur saya kepada kalian."

**Analogy:** A master builder showing you their blueprints before handing you a hardhat.
**Real-life Example:** The difference between a tour guide and the lead engineer of a bridge.
**Question to Audience:** "Berapa banyak dari kalian yang pernah belajar dari tutorial, tapi masih merasa tidak mengerti gambaran besarnya?"
**Fun Fact:** Over 80% of modern web traffic runs through architecture patterns built by senior engineers over the last 5 years.
**Aha Moment:** Realizing they are learning from a practitioner, not just an academic.

==================================================
### VISUAL EXPERIENCE
==================================================
**Overall Mood:** Professional, authoritative, sleek.
**Storytelling Direction:** Split narrative. Human on one side, technical mastery on the other.
**Hero Placement:** Split Layout (Left: Portrait, Right: Milestone Grid).
**Visual Focus:** The contrast between the grayscale portrait and the glowing UI grid.
**White Space Strategy:** Structured margins. Tight padding inside the grid, loose margins globally.
**Reading Flow:** Left (Headline & Portrait) -> Right (Cascading Milestones).

==================================================
### THREE.JS HERO OBJECT
==================================================
**Current Hero Object:** None (This is a heavily UI-focused scene overlaying the 3D void).
**Previous Transformation:** Passed through the Core geometry.
**Next Transformation:** UI grid bends into 3D space and flies upward.
**Purpose of Transformation:** To seamlessly blend 2D HTML UI into the 3D WebGL world.
**Material:** N/A.
**Lighting:** N/A.
**Camera:** `PerspectiveCamera` continues to drift extremely slowly forward.
**Animation:** The HTML DOM elements handle the complex entry animations.
**Interaction:** Hovering over milestone cards highlights them.
**Educational Meaning:** Proves that HTML/CSS can live perfectly alongside 3D spaces.

==================================================
### BACKGROUND
==================================================
**Background Type:** Deep Void with Vignette.
**Gradient:** Linear gradient masking on the top/bottom of the UI scrolling area.
**Glass:** None in the background.
**Particles:** Reduced to 40 sparkles, moving horizontally now.
**Fog:** `FogExp2` set to Deep Indigo.
**Lighting:** Ambient light set to 0.2.
**Depth:** Medium depth.
**Motion:** Slow horizontal drift.
**Color Palette:** `#0a0f24` (Deep Indigo).
**Reason for Color Selection:** Conveys trust, corporate stability, and engineering precision.

==================================================
### COMPONENTS
==================================================
**Hero Section:** Left-aligned text block.
**Cards:** 5 horizontal milestone cards on the right.
**Glass Panels:** Yes. The milestone cards use `bg-white/5` and `backdrop-blur-md`.
**Browser Mockup:** None.
**Infographic:** None.
**Timeline:** The cascading cards act as an interactive timeline.
**Statistics:** None.
**Quote:** None.
**Comparison:** None.
**Video:** None.
**Photography:** High-contrast, cinematic, grayscale portrait of the speaker (1:1 ratio, rounded corners).
**Illustration:** None.

==================================================
### GSAP
==================================================
**Page Entry:** Fades in from the white flash of Scene 01.
**Hero Reveal:** HTML Overlay orchestrates the entrance.
**Typography:** Drops in from top `y: -20` with standard ease.
**Media:** Portrait image scales up `scale: 0.9` to `1.0` with `ease: "power2.out"`.
**Camera:** Slow, continuous Z-axis creep.
**Hover:** Milestone cards shift `x: 10` and border color changes to Blue on hover. Portrait transitions from grayscale to full color.
**Exit:** The entire HTML layer rotates on X-axis (bend back) and translates Y-axis (flies up out of frame).
**Transition:** Fluid camera pan down into the void to catch the falling blocks.

==================================================
### AUDIO EXPERIENCE (OPTIONAL)
==================================================
**Ambient Sound:** Clean, synthesized atmospheric pad.
**Transition Sound:** A crisp digital sweeping sound.
**Interaction Sound:** Soft glass "tink" when hovering milestone cards.

==================================================
### IMPLEMENTATION NOTES
==================================================
**Assets Needed:** 1x High-Res Portrait Image (WebP).
**Complexity:** Medium (DOM to GSAP orchestration).
**Performance Priority:** Use `will-change: transform` on the scrolling grid to prevent layout thrashing.
**Responsive Notes:** Stacks vertically on mobile (Portrait top, Grid bottom).

==================================================
### QUALITY CHECK
==================================================
**Visual:** Pass. Professional and stark.
**Education:** Pass. Establishes credibility.
**Storytelling:** Pass. Humanizes the abstract world.
**Interaction:** Pass. First introduction of DOM interactivity.
**Motion:** Pass. Cascading staggers feel engineered.
**Originality:** Pass. Different layout and mood than Scene 01.


==================================================
## SCENE 03
==================================================
**Scene Number:** 03
**Chapter:** 1 - The Invitation
**Scene Title:** Building Blocks, Not Magic
**Learning Goal:** Demystify code. Prove that complex applications are just simple modular pieces joined together.
**Audience Emotion:** Relief, Clarity, Empowerment.
**Expected Audience Reaction:** Nodding, tension dropping.
**Headline:** Blocks, Not Magic
**Supporting Sentence:** It is just pieces snapping together.
**Estimated Speaking Time:** 45 seconds

**Presenter Script:**
"Banyak orang mengira coding itu seperti sihir, atau seperti meretas matriks dengan mengetik sangat cepat. Padahal kenyataannya jauh lebih rasional. Coding itu persis seperti bermain balok Lego. Kita memiliki potongan-potongan kecil yang berdiri sendiri. Tugas kita hanyalah menyambungkannya menjadi satu bentuk yang utuh. Tidak ada sihir di sini. Murni logika dan arsitektur."

**Analogy:** Playing with Lego blocks instead of casting magic spells.
**Real-life Example:** Building a custom modular sofa.
**Question to Audience:** "Siapa yang waktu kecil suka bermain Lego?"
**Fun Fact:** The concept of "Object-Oriented Programming" was essentially invented to mimic physical modular hardware blocks.
**Aha Moment:** Seeing code visualized as physical blocks with real weight and gravity, removing the intimidation of text.

==================================================
### VISUAL EXPERIENCE
==================================================
**Overall Mood:** Tactile, grounded, mechanical.
**Storytelling Direction:** Gravity and Physics. The blocks fall from above and snap into place, proving they have mass.
**Hero Placement:** Bottom Center (Resting on an invisible floor).
**Visual Focus:** The precise, mechanical snapping motion of the three blocks.
**White Space Strategy:** Top-heavy white space. The blocks anchor the bottom of the screen.
**Reading Flow:** Top Center (Text) -> Bottom Center (Blocks).

==================================================
### THREE.JS HERO OBJECT
==================================================
**Current Hero Object:** Three Dispersion Glass Cubes (Red, Blue, Yellow).
**Previous Transformation:** Camera tilted down from the UI.
**Next Transformation:** The assembled blocks rotate 90 degrees to form an archway.
**Purpose of Transformation:** To show that components can combine to form infrastructure.
**Material:** `MeshPhysicalMaterial` (High transmission, IOR 1.8, clearcoat, thick glass).
**Lighting:** Strong overhead spot light to cast sharp shadows on the invisible floor.
**Camera:** `PerspectiveCamera` tilted slightly down (`rotation.x: -0.1`).
**Animation:** 
1. Red drops (`y: 5` to `0`).
2. Blue drops (`y: 5` to `0`).
3. Yellow drops (`y: 5` to `0`).
All using `elastic.out(1, 0.5)` for heavy mechanical snapping.
**Interaction:** Hovering any block causes the structure to "explode" slightly (spacing out by 2 units), removing hover snaps them back together.
**Educational Meaning:** Directly visualizes modularity (React components, HTML elements).

==================================================
### BACKGROUND
==================================================
**Background Type:** Pure Void with a highly reflective invisible floor.
**Gradient:** None.
**Glass:** None.
**Particles:** None. (Removed to focus on the heavy geometry).
**Fog:** None.
**Lighting:** High contrast studio lighting (Key + Rim).
**Depth:** Shallow depth of field focusing strictly on the blocks.
**Motion:** Static, except for the interactive explode/snap.
**Color Palette:** `#000000` background with Primary Colored glass.
**Reason for Color Selection:** Primary colors reinforce the "basic building blocks" / Lego analogy perfectly.

==================================================
### COMPONENTS
==================================================
**Hero Section:** Top-aligned centered text.
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
**Page Entry:** Text drops in from top.
**Hero Reveal:** The blocks handle their own GSAP physics drop.
**Typography:** Standard smooth reveal.
**Media:** N/A.
**Camera:** Camera lerps from the high angle of Scene 02 to a low, grounded angle.
**Hover:** GSAP `power2.out` for the blocks separating on hover.
**Exit:** The three blocks fuse mathematically into a single rectangular pillar, which then multiplies to form the gates of Scene 04.
**Transition:** Quick camera orbit around the assembled pillar.

==================================================
### AUDIO EXPERIENCE (OPTIONAL)
==================================================
**Ambient Sound:** Silence. (To emphasize the physical drops).
**Transition Sound:** Three heavy, satisfying "thuds/clicks" synced perfectly with the blocks landing.
**Interaction Sound:** Mechanical sliding sound on hover (explode/collapse).

==================================================
### IMPLEMENTATION NOTES
==================================================
**Assets Needed:** None (BoxGeometry).
**Complexity:** Low geometry, High physics/animation tuning.
**Performance Priority:** `transmissionResolution={512}` on the 3 glass blocks.
**Responsive Notes:** Ensure the camera `fov` is wide enough on mobile so the outer blocks aren't cropped.

==================================================
### QUALITY CHECK
==================================================
**Visual:** Pass. Highly tactile.
**Education:** Pass. The strongest visual metaphor in Chapter 1.
**Storytelling:** Pass. Grounded and reassuring.
**Interaction:** Pass. The explode-on-hover teaches modularity interactively.
**Motion:** Pass. The `elastic.out` curve is the star of this scene.
**Originality:** Pass. Completely different physics and layout from Scene 01/02.


==================================================
## SCENE 04
==================================================
**Scene Number:** 04
**Chapter:** 1 - The Invitation
**Scene Title:** The Master Blueprint
**Learning Goal:** Provide a clear, spatial roadmap for the rest of the presentation to eliminate anxiety.
**Audience Emotion:** Readiness, Focus, Anticipation.
**Expected Audience Reaction:** Taking mental notes of the 5 steps.
**Headline:** The Master Blueprint
**Supporting Sentence:** We know exactly where we are going.
**Estimated Speaking Time:** 50 seconds

**Presenter Script:**
"Untuk menaklukkan dunia baru ini, kita membutuhkan peta. Hari ini, kita akan melewati lima gerbang utama. Kita akan mulai dari kerangka dasar HTML, bergeser ke mesin JavaScript, lalu terbang menuju arsitektur server, dan akhirnya tiba di etalase digital. Jangan takut tersesat. Karena kita sudah memegang cetak birunya. Mari kita melangkah masuk."

**Analogy:** Showing the map of a theme park before going on the rides.
**Real-life Example:** An architect's floor plan before pouring concrete.
**Question to Audience:** "Siap untuk melewati gerbang pertama?"
**Fun Fact:** A roadmap reduces cognitive load by 40%, allowing the brain to focus on learning rather than navigating.
**Aha Moment:** Realizing that the seemingly infinite web is actually just 5 core concepts.

==================================================
### VISUAL EXPERIENCE
==================================================
**Overall Mood:** Epic, expansive, guiding.
**Storytelling Direction:** Deep Z-axis perspective. Looking down a long corridor.
**Hero Placement:** Full Screen Depth.
**Visual Focus:** The vanishing point at the end of the gates.
**White Space Strategy:** Framed space. The gates themselves frame the center of the screen where the text lives.
**Reading Flow:** Center (Dead ahead into the tunnel).

==================================================
### THREE.JS HERO OBJECT
==================================================
**Current Hero Object:** 5 Massive Frosted Glass Gates stretching into the Z-axis.
**Previous Transformation:** The assembled blocks from Scene 03 cloned and rotated.
**Next Transformation:** The camera flies through the first gate, the gate dissolves into a 2D wireframe grid.
**Purpose of Transformation:** To map out the chapters spatially.
**Material:** Frosted Glass (Standard transparent material with emissive blue edges).
**Lighting:** Emissive lighting from the gates themselves.
**Camera:** `PerspectiveCamera` positioned dead center, looking straight down the Z-axis.
**Animation:** The gates fade in sequentially from closest to furthest. A continuous, very slow forward camera drift gives the illusion of walking down the corridor.
**Interaction:** None. This is a cinematic establishing shot.
**Educational Meaning:** Structuring the curriculum into 5 distinct milestones.

==================================================
### BACKGROUND
==================================================
**Background Type:** Atmospheric Z-Depth Void.
**Gradient:** None.
**Glass:** The gates themselves.
**Particles:** Dense sparkles returning to simulate forward velocity (like warp speed dust).
**Fog:** `FogExp2` set to heavy Slate Gray (`#0f172a`) to obscure the furthest gates.
**Lighting:** Pure emissive.
**Depth:** Maximum depth.
**Motion:** Forward velocity.
**Color Palette:** `#0f172a` (Slate Gray) blending into bright blue gate edges.
**Reason for Color Selection:** Gives a sense of infinite, atmospheric distance.

==================================================
### COMPONENTS
==================================================
**Hero Section:** Center-aligned, floating inside the closest gate.
**Cards:** None.
**Glass Panels:** None.
**Browser Mockup:** None.
**Infographic:** None.
**Timeline:** The 5 gates physically represent the timeline in 3D space.
**Statistics:** None.
**Quote:** None.
**Comparison:** None.
**Video:** None.
**Photography:** None.
**Illustration:** None.

==================================================
### GSAP
==================================================
**Page Entry:** Gates fade in staggered: `opacity: 0` to `1` over 0.2s each.
**Hero Reveal:** Text fades up from the bottom center.
**Typography:** Simple alpha fade to not distract from the Z-depth tunnel.
**Media:** N/A.
**Camera:** Continuous `z += 0.05` drift in `useFrame`.
**Hover:** N/A.
**Exit:** Camera accelerates rapidly forward `z += 20` using `power4.in`, crashing through the first gate.
**Transition:** The screen flashes white, then instantly resolves into the isometric grid of Chapter 2.

==================================================
### AUDIO EXPERIENCE (OPTIONAL)
==================================================
**Ambient Sound:** A low, pulsing drone that feels like a massive engine room.
**Transition Sound:** A massive "boom" / cinematic impact as the camera flies through the first gate.
**Interaction Sound:** None.

==================================================
### IMPLEMENTATION NOTES
==================================================
**Assets Needed:** None.
**Complexity:** Medium.
**Performance Priority:** Do NOT use `transmission: 1` on 5 overlapping gates. It will crash the GPU. Use standard `transparent={true} opacity={0.3}` with emissive edges (`MeshPhysicalMaterial` but without expensive refraction).
**Responsive Notes:** Standard scaling. Works perfectly on mobile.

==================================================
### QUALITY CHECK
==================================================
**Visual:** Pass. Highly cinematic and imposing.
**Education:** Pass. Perfectly maps the curriculum.
**Storytelling:** Pass. Gives a physical sense of journey.
**Interaction:** Pass. No interaction needed here, purely atmospheric.
**Motion:** Pass. The continuous forward drift builds massive anticipation.
**Originality:** Pass. Introduces Z-axis depth scaling for the first time.

