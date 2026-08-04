# WPCC SCENE BIBLE: CHAPTER 4

==================================================
## SCENE 12
==================================================
**Scene Number:** 12
**Chapter:** 4 - The Universal Foundation
**Scene Title:** WordPress Intro
**Learning Goal:** Introduce WordPress not as a simple blog tool, but as the universal operating system of the web.
**Audience Emotion:** Re-orientation, Scale realization.
**Expected Audience Reaction:** "Wow, it's that big?"
**Headline:** The Universal Foundation
**Supporting Sentence:** Powering 43% of the entire internet.
**Estimated Speaking Time:** 45 seconds

**Presenter Script:**
"Sekarang kalian mengerti bagaimana rumah dibangun dan di mana ia diletakkan. Tapi membangun setiap rumah dari nol itu lambat dan mahal. Bagaimana jika ada fondasi universal yang bisa digunakan oleh siapa saja? Selamat datang di WordPress. Ini bukan sekadar alat pembuat blog. Ini adalah sistem operasi dari internet. Saat ini, 43% dari seluruh website di dunia ini—jutaan bisnis dan media—berdiri di atas fondasi ini."

**Analogy:** WordPress is the Android OS of the web. You can put it on any hardware and customize it infinitely.
**Real-life Example:** The White House, Sony Music, and TechCrunch all run on WordPress.
**Question to Audience:** "Ada yang tahu berapa persen internet yang menggunakan WordPress? Coba tebak."
**Fun Fact:** WordPress is open-source. Thousands of developers volunteer their time to build the core foundation for free.
**Aha Moment:** Realizing WordPress is a massive enterprise ecosystem, not just for hobbyists.

==================================================
### VISUAL EXPERIENCE
==================================================
**Overall Mood:** Grand, unifying, foundational.
**Storytelling Direction:** Returning to the "Architect's Core" from Chapter 1, but now it is fully solid, stable, and massive.
**Hero Placement:** Center, massive scale.
**Visual Focus:** The solid, perfect geometry of the unified core.
**White Space Strategy:** Symmetrical, monumental.
**Reading Flow:** Center Top -> Center.

==================================================
### THREE.JS HERO OBJECT
==================================================
**Current Hero Object:** The Unified Core (A massive, solid Icosahedron).
**Previous Transformation:** The server monolith from Scene 11 collapsed into this sphere.
**Next Transformation:** Four modules (Themes/Plugins) snap onto the sides of the core.
**Purpose of Transformation:** To show WordPress as a stable, central nucleus.
**Material:** Solid Luminescent Polymer (Emissive blue, no distortion).
**Lighting:** Emissive core, wrapped in soft ambient light.
**Camera:** `PerspectiveCamera` at Z: 12 (Pulled back to show scale).
**Animation:** Slow, majestic rotation (`rotation.y += 0.002`).
**Interaction:** None.
**Educational Meaning:** Represents the "WordPress Core" files—the untouchable foundation.

==================================================
### BACKGROUND
==================================================
**Background Type:** Pure Void.
**Gradient:** None.
**Glass:** None.
**Particles:** Slow moving, orbit-like particles circling the core.
**Fog:** `FogExp2` set to Black.
**Lighting:** Ambient.
**Depth:** Deep.
**Motion:** Slow orbital drift.
**Color Palette:** `#000000` with Bright `#3858E9` Core.
**Reason for Color Selection:** WordPress blue brand color alignment, while maintaining our premium cinematic dark mode.

==================================================
### COMPONENTS
==================================================
**Hero Section:** Center aligned, absolute coordinates.
**Cards:** None.
**Glass Panels:** None.
**Browser Mockup:** None.
**Infographic:** Huge typography for the "43%" statistic integrated directly into the HTML overlay.
**Timeline:** None.
**Statistics:** Yes. "43%" is the visual anchor of the text.
**Quote:** None.
**Comparison:** None.
**Video:** None.
**Photography:** None.
**Illustration:** None.

==================================================
### GSAP
==================================================
**Page Entry:** Text crossfades. Statistic "43%" scales up with `back.out(1.5)`.
**Hero Reveal:** Monolith collapses into the Core.
**Typography:** Emphasized statistic animation.
**Media:** N/A.
**Camera:** Pulls back smoothly to reveal the massive scale.
**Hover:** N/A.
**Exit:** Camera holds steady.
**Transition:** Seamless crossfade to Scene 13 (Themes & Plugins).

==================================================
### AUDIO EXPERIENCE (OPTIONAL)
==================================================
**Ambient Sound:** A warm, resonant, major-key synth chord. (Positive, foundational).
**Transition Sound:** A deep "whoosh" pulling back.
**Interaction Sound:** None.

==================================================
### IMPLEMENTATION NOTES
==================================================
**Assets Needed:** None (`IcosahedronGeometry`).
**Complexity:** Low.
**Performance Priority:** Ensure the 43% typography is rendering crisp on mobile.
**Responsive Notes:** Scale the core down on mobile so it doesn't overlap the huge typography.


==================================================
## SCENE 13
==================================================
**Scene Number:** 13
**Chapter:** 4 - The Universal Foundation
**Scene Title:** Themes & Plugins
**Learning Goal:** Explain how WordPress is customized without touching the core files (Modularity).
**Audience Emotion:** Clarity, "Aha!".
**Expected Audience Reaction:** Understanding the difference between Core, Themes, and Plugins.
**Headline:** Infinite Customization
**Supporting Sentence:** Themes for design. Plugins for power.
**Estimated Speaking Time:** 50 seconds

**Presenter Script:**
"Fondasi WordPress itu solid, tapi bagaimana kita membuatnya unik? Jawabannya ada pada modularitas. Kita tidak menghancurkan fondasinya. Kita memasang dua hal: Tema dan Plugin. Tema adalah pakaiannya—mengatur desain dan estetika. Plugin adalah perlengkapannya—menambahkan fitur seperti toko online atau keamanan. Keduanya menempel pada inti sistem tanpa merusaknya."

**Analogy:** A smartphone (Core) + A phone case (Theme) + Apps you download (Plugins).
**Real-life Example:** Adding WooCommerce (a plugin) to instantly turn a blog into an Amazon competitor.
**Question to Audience:** "Pernahkah kalian mengunduh aplikasi di HP kalian? Itu persis cara kerja Plugin di WordPress."
**Fun Fact:** There are over 50,000 free plugins in the official WordPress repository.
**Aha Moment:** Seeing the physical glass blocks "snap" onto the Core, representing safe, non-destructive customization.

==================================================
### VISUAL EXPERIENCE
==================================================
**Overall Mood:** Mechanical, modular, satisfying.
**Storytelling Direction:** The central core is suddenly equipped with armor/modules.
**Hero Placement:** Center.
**Visual Focus:** The mechanical snapping action of the 4 glass modules attaching to the Core.
**White Space Strategy:** Balanced.
**Reading Flow:** Top Left (Headline) -> Center (Core + Modules).

==================================================
### THREE.JS HERO OBJECT
==================================================
**Current Hero Object:** The Unified Core + 4 Glass Modules (Rectangles snapping to Top, Bottom, Left, Right).
**Previous Transformation:** The standalone core.
**Next Transformation:** The assembled object zooms past the camera into Chapter 5.
**Purpose of Transformation:** To visually prove the concept of modular architecture.
**Material:** The Core remains Luminescent Polymer. The Modules are Dispersion Glass (`MeshPhysicalMaterial`).
**Lighting:** Core provides emissive light. A spotlight from above highlights the glass modules.
**Camera:** `PerspectiveCamera` static.
**Animation:** The 4 glass modules fly in from off-screen (Top, Bottom, Left, Right) and snap onto the surface of the Core with a heavy `elastic.out(1, 0.5)` bounce.
**Interaction:** Hovering the Core causes the 4 modules to detach slightly (explode view) and hover a few inches away. Moving the mouse off snaps them back violently.
**Educational Meaning:** Visualizes how Themes and Plugins interface with WP Core via hooks without altering the core codebase.

==================================================
### BACKGROUND
==================================================
**Background Type:** Pure Void.
**Gradient:** None.
**Glass:** The Modules.
**Particles:** Static.
**Fog:** `FogExp2`.
**Lighting:** Directional spotlight activates to catch the glass edges.
**Depth:** Medium.
**Motion:** Static (post-snap).
**Color Palette:** Black void, Blue Core, and Frosted Glass.
**Reason for Color Selection:** Contrast between the glowing core engine and the sleek, protective glass shells (plugins).

==================================================
### COMPONENTS
==================================================
**Hero Section:** Top-left aligned text.
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
**Hero Reveal:** The 4 modules fly in.
1. Top module drops (`y: 10` to `y: 1.5`).
2. Bottom module rises (`y: -10` to `y: -1.5`).
3. Left/Right modules snap in.
**Typography:** Standard.
**Media:** N/A.
**Camera:** Static.
**Hover:** The "explode view" uses a quick `power2.out` translation on the 4 modules.
**Exit:** The entire assembled structure zooms incredibly fast directly into the camera lens (`z += 20`).
**Transition:** Screen flashes white, moving into the digital showroom.

==================================================
### AUDIO EXPERIENCE (OPTIONAL)
==================================================
**Ambient Sound:** Continued from Scene 12.
**Transition Sound:** 4 highly satisfying, mechanical "clack" sounds as the modules snap in.
**Interaction Sound:** Mechanical sliding sound on hover (explode view).

==================================================
### IMPLEMENTATION NOTES
==================================================
**Assets Needed:** None (Box geometry for modules).
**Complexity:** Medium (GSAP timing and hover logic).
**Performance Priority:** Limit transmission on the 4 glass blocks. Use a standard transparent material if FPS drops.
**Responsive Notes:** Ensure the explode view doesn't push the modules out of the screen bounds on mobile. Scale the entire group down by 30% if needed.

