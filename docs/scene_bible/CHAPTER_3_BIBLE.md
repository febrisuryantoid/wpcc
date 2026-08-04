# WPCC SCENE BIBLE: CHAPTER 3

==================================================
## SCENE 09
==================================================
**Scene Number:** 09
**Chapter:** 3 - The Address and the Land
**Scene Title:** Domain & Hosting Intro
**Learning Goal:** Shift the mental model from "Building the House" to "Placing the House on the Internet."
**Audience Emotion:** Intrigue, Conceptual transition.
**Expected Audience Reaction:** Ready to understand how their local code gets to the world.
**Headline:** The Address & The Land
**Supporting Sentence:** How the world finds your structure.
**Estimated Speaking Time:** 35 seconds

**Presenter Script:**
"Kita sudah berhasil membangun rumah kita secara lokal. Tapi apa gunanya rumah megah jika tidak ada satu pun orang yang tahu jalannya ke sana? Dan apa gunanya rumah jika ia tidak berpijak pada tanah yang nyata? Di sinilah konsep Domain dan Hosting masuk. Mari kita lihat bagaimana dunia luar menemukan karya yang telah kalian buat."

**Analogy:** A house needs a physical plot of land to sit on, and a street address so the postman can find it.
**Real-life Example:** Trying to invite friends to a party without giving them the address.
**Question to Audience:** "Pernah dengar istilah Server atau IP Address tapi masih bingung apa wujud aslinya?"
**Fun Fact:** Every website name is actually just a mask for a string of numbers. Humans are just bad at remembering numbers like `142.250.190.46`.
**Aha Moment:** Realizing Domain and Hosting are two completely different things (Name vs. Space).

==================================================
### VISUAL EXPERIENCE
==================================================
**Overall Mood:** Vast, open, conceptual.
**Storytelling Direction:** Breaking out of the constrained grid of Chapter 2 into a floating, abstract conceptual space.
**Hero Placement:** Center, floating.
**Visual Focus:** A rotating abstract geometric shape representing "Data".
**White Space Strategy:** Massive negative space. 
**Reading Flow:** Center Top -> Center.

==================================================
### THREE.JS HERO OBJECT
==================================================
**Current Hero Object:** A wireframe Octahedron (Abstract Data Core).
**Previous Transformation:** The Chapter 2 house faded out.
**Next Transformation:** The Octahedron flattens and stretches into a browser URL bar.
**Purpose of Transformation:** To reset the visual language before introducing the specific forms of Domain and Hosting.
**Material:** `MeshPhysicalMaterial` (Wireframe, emissive blue).
**Lighting:** Internal emissive glow.
**Camera:** `PerspectiveCamera` at Z: 10.
**Animation:** Floating slowly up and down using `<Float>` and rotating continuously.
**Interaction:** None.
**Educational Meaning:** Represents an un-anchored piece of data waiting for a home.

==================================================
### BACKGROUND
==================================================
**Background Type:** Pure Void.
**Gradient:** None.
**Glass:** None.
**Particles:** Fast moving horizontal streaks (simulating data traveling through fiber optics).
**Fog:** `FogExp2` set to pure black.
**Lighting:** None.
**Depth:** Infinite.
**Motion:** Fast particle streaks.
**Color Palette:** Pure Black `#000000` with Neon Blue `#3858E9` streaks.
**Reason for Color Selection:** Transitioning to an "Information Superhighway" motif.

==================================================
### COMPONENTS
==================================================
**Hero Section:** Center aligned.
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
**Page Entry:** Crossfade from Chapter 2.
**Hero Reveal:** Octahedron scales from 0 to 1 with `power2.out`.
**Typography:** Drops in.
**Media:** N/A.
**Camera:** Pulls back to create space.
**Hover:** N/A.
**Exit:** Octahedron snaps into the shape of a URL bar.
**Transition:** Seamless shape morph.

==================================================
### AUDIO EXPERIENCE (OPTIONAL)
==================================================
**Ambient Sound:** Fast, light electronic sequencing (data flow).
**Transition Sound:** A digital "woosh".
**Interaction Sound:** None.

==================================================
### IMPLEMENTATION NOTES
==================================================
**Assets Needed:** None (`OctahedronGeometry`).
**Complexity:** Low.
**Performance Priority:** Ensure fast particles don't overwhelm mobile.
**Responsive Notes:** Standard scaling.


==================================================
## SCENE 10
==================================================
**Scene Number:** 10
**Chapter:** 3 - The Address and the Land
**Scene Title:** Domain (The Address)
**Learning Goal:** Explain that a Domain is simply a human-readable mask for a numerical IP address.
**Audience Emotion:** Clarity, "Aha!".
**Expected Audience Reaction:** Visually seeing the text decode into numbers.
**Headline:** The Domain
**Supporting Sentence:** A human-readable mask for complex numbers.
**Estimated Speaking Time:** 45 seconds

**Presenter Script:**
"Domain adalah alamat jalan kalian. 'google.com', 'tokopedia.com'. Tapi tahukah kalian bahwa komputer tidak mengerti nama-nama itu? Di internet, rumah kalian sebenarnya beralamat di deretan angka rumit yang disebut IP Address. Domain bertugas sebagai topeng yang ramah manusia. Saat kalian mengetikkan nama, sebuah buku telepon raksasa bernama DNS menerjemahkannya kembali menjadi angka."

**Analogy:** A contact name in your phone vs. the actual 12-digit phone number.
**Real-life Example:** Calling "Mom" instead of dialing 0812-3456-7890.
**Question to Audience:** "Coba bayangkan kalau setiap kali mau buka YouTube, kalian harus mengetik 142.250.190.46?"
**Fun Fact:** The most expensive domain ever sold was Cars.com for $872 million.
**Aha Moment:** Watching the URL text physically scramble and decode into an IP address.

==================================================
### VISUAL EXPERIENCE
==================================================
**Overall Mood:** Functional, modern, digital.
**Storytelling Direction:** A 3D object acting as a 2D UI element (Browser Bar).
**Hero Placement:** Center.
**Visual Focus:** The kinetic text inside the 3D URL bar.
**White Space Strategy:** Balanced.
**Reading Flow:** Top (Headline) -> Center (URL Bar).

==================================================
### THREE.JS HERO OBJECT
==================================================
**Current Hero Object:** A 3D Glass Browser URL Bar.
**Previous Transformation:** Morphed from the abstract octahedron.
**Next Transformation:** The URL bar flies away, revealing the massive server below.
**Purpose of Transformation:** To materialize an abstract concept into a familiar everyday object.
**Material:** `MeshPhysicalMaterial` (Glass panel representing the input field) with an HTML text overlay via `<Html>`.
**Lighting:** Soft ambient + directional light.
**Camera:** `PerspectiveCamera` looking straight on.
**Animation:** The URL bar floats gently. The text inside it uses a scramble/decode animation (`www.yourwebsite.com` -> `[192.168.1.1]`).
**Interaction:** None.
**Educational Meaning:** Direct visualization of DNS resolution.

==================================================
### BACKGROUND
==================================================
**Background Type:** Pure Void.
**Gradient:** None.
**Glass:** The URL Bar base.
**Particles:** Moving horizontally.
**Fog:** `FogExp2`.
**Lighting:** Soft.
**Depth:** Shallow.
**Motion:** Floating.
**Color Palette:** Pure Black `#000000`, Bright White Glass, Neon Blue text.
**Reason for Color Selection:** High contrast legibility for the decoding text.

==================================================
### COMPONENTS
==================================================
**Hero Section:** Top aligned text.
**Cards:** None.
**Glass Panels:** Yes, the 3D object itself acts as a panel.
**Browser Mockup:** A stylized, minimalist 3D URL bar (no browser chrome, just the input field).
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
**Page Entry:** Crossfade text.
**Hero Reveal:** The 3D object stretches horizontally into shape.
**Typography:** GSAP `ScrambleTextPlugin` (or a custom React interval effect) used on the HTML text inside the `<Html>` component. It cycles random characters before locking into the IP address.
**Media:** N/A.
**Camera:** Static.
**Hover:** N/A.
**Exit:** The URL bar shoots off-screen to the right (`x: 20` with `power4.in`).
**Transition:** Camera pans violently downwards to look at the ground.

==================================================
### AUDIO EXPERIENCE (OPTIONAL)
==================================================
**Ambient Sound:** Standard hum.
**Transition Sound:** A rapid digital clicking sound (like a fast geiger counter) during the text scramble, ending with a satisfying "ping" when the IP address locks.
**Interaction Sound:** None.

==================================================
### IMPLEMENTATION NOTES
==================================================
**Assets Needed:** None.
**Complexity:** Medium (Combining 3D glass with 2D HTML text).
**Performance Priority:** Ensure the `<Html>` component from Drei is optimized and doesn't cause layout thrashing during the text scramble.
**Responsive Notes:** Scale the 3D URL bar horizontally so it doesn't overflow mobile screens.


==================================================
## SCENE 11
==================================================
**Scene Number:** 11
**Chapter:** 3 - The Address and the Land
**Scene Title:** Hosting (The Land)
**Learning Goal:** Explain that Hosting is just renting physical space on a powerful computer somewhere else in the world.
**Audience Emotion:** Awe, Understanding scale.
**Expected Audience Reaction:** Feeling small compared to the massive server rack.
**Headline:** The Hosting
**Supporting Sentence:** Renting space on a supercomputer.
**Estimated Speaking Time:** 50 seconds

**Presenter Script:**
"Kalian sudah punya nama jalan, sekarang kalian butuh tanahnya. Hosting bukanlah awan magis di langit. 'The Cloud' hanyalah istilah marketing. Kenyataannya, Hosting adalah menyewa sepetak ruang keras di komputer yang sangat kuat, menyala 24 jam sehari, 7 hari seminggu, di sebuah gedung raksasa di belahan bumi lain. File HTML, CSS, dan JS kalian tinggal di sana."

**Analogy:** Renting a plot of land or an apartment unit for your files to live in.
**Real-life Example:** The physical Google data centers vs "Google Drive".
**Question to Audience:** "Siapa yang mengira 'The Cloud' itu benar-benar ada di udara?"
**Fun Fact:** Data centers use so much electricity that they are often built right next to massive hydroelectric dams or freezing rivers for cooling.
**Aha Moment:** Realizing "The Cloud" is just someone else's computer.

==================================================
### VISUAL EXPERIENCE
==================================================
**Overall Mood:** Imposing, massive, industrial.
**Storytelling Direction:** Camera looks up at a massive, monolithic server tower to emphasize physical scale and hardware.
**Hero Placement:** Center, dominating the screen.
**Visual Focus:** The blinking lights and dark ceramic reflection of the server monolith.
**White Space Strategy:** Very little white space. The monolith takes up the majority of the frame.
**Reading Flow:** Top Left (Headline) -> Center (Monolith).

==================================================
### THREE.JS HERO OBJECT
==================================================
**Current Hero Object:** The Server Monolith (A massive, towering dark rectangular block).
**Previous Transformation:** Panned down from the URL bar.
**Next Transformation:** The monolith shrinks back into the Architect's Core for Chapter 4.
**Purpose of Transformation:** To emphasize physical hardware vs abstract data.
**Material:** Obsidian Ceramic (`MeshPhysicalMaterial`, metalness 0.8, roughness 0.2, clearcoat 1, color `#020617`).
**Lighting:** Very moody. A rim light catches the edge of the monolith. Tiny emissive points on the surface act as server status lights (blinking blue and red).
**Camera:** `PerspectiveCamera` placed very low (Y: -5) looking sharply up at the monolith to force a monumental perspective.
**Animation:** The server lights blink randomly. The monolith rotates extremely slowly (barely perceptible) to show the clearcoat reflections.
**Interaction:** Mouse movement pans the camera slightly, revealing the sheer scale of the object against the background.
**Educational Meaning:** Proves that code ultimately lives on physical hardware.

==================================================
### BACKGROUND
==================================================
**Background Type:** Dark Void.
**Gradient:** None.
**Glass:** None.
**Particles:** Slow, rising "heat" particles (dust moving upwards).
**Fog:** Heavy `FogExp2` so the top of the monolith fades into darkness (enhancing the feeling of infinite height).
**Lighting:** Low key.
**Depth:** Massive vertical depth.
**Motion:** Slow upward particle drift.
**Color Palette:** Charcoal Black `#020617`, Chrome, and Neon Status Lights.
**Reason for Color Selection:** Mimics a hyper-modern, cold server farm.

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
**Page Entry:** Text drops in.
**Hero Reveal:** Monolith rises from below the floor (`y: -20` to `y: 0`) with heavy, slow easing (`power3.out`).
**Typography:** Standard.
**Media:** N/A.
**Camera:** Pans down heavily from Scene 10, resting at a low angle looking up.
**Hover:** Mouse parallax.
**Exit:** The monolith shatters or rapidly shrinks into the spherical core of Chapter 4.
**Transition:** A flash of light as we return to the universal foundation.

==================================================
### AUDIO EXPERIENCE (OPTIONAL)
==================================================
**Ambient Sound:** A heavy, industrial server room drone (fans and hard drives humming).
**Transition Sound:** A heavy, bass-heavy "thud" as the monolith locks into place.
**Interaction Sound:** None.

==================================================
### IMPLEMENTATION NOTES
==================================================
**Assets Needed:** Optional: A custom MatCap texture for the Obsidian reflection if `MeshPhysicalMaterial` is too heavy.
**Complexity:** High (Camera perspective and scale manipulation).
**Performance Priority:** Use instances or a shader for the blinking server lights rather than hundreds of tiny spheres.
**Responsive Notes:** Ensure the camera FOV on mobile is wide enough to capture the imposing width of the server, not just a thin slice of it.

