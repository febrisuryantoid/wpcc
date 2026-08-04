# 🪐 Design Bible
## "The Cosmic Archive"

## MISSION
This document defines every visual element used throughout the entire application.
Nothing may be designed outside this document. Every visual element belongs to the "Cosmic Archive" Product DNA. No random styles, colors, icons, or animations.

---

## 1. DESIGN SYSTEMS

### 1.1 Typography System
*   **Primary Display (Headings, Heroes, Citations):** `Cinzel Decorative` (or equivalent high-contrast serif). Represents ancient, enduring knowledge.
*   **Primary Body (Paragraphs, Labels, UI):** `Inter` or `Geist`. Represents precision, clarity, and modern digital interfaces.
*   **Monospace (Code, Metrics, Coordinates):** `JetBrains Mono` or `Fira Code`. Represents raw data and instrumentation.
*   **Scale:** Modular scale based on Perfect Fourth (1.333) for headings, ensuring dramatic contrast between massive hero text and legible body copy.
*   **Line Height:** Body text at 1.6, Headings at 1.1 - 1.2.
*   **Tracking:** Display headings tightened (-2%), UI labels tracked out (+5% uppercase), Body text neutral (0%).

### 1.2 Grid System
*   **Desktop:** 12-column fluid grid, 24px gutters, max-width 1440px.
*   **Tablet:** 8-column fluid grid, 16px gutters.
*   **Mobile:** 4-column fluid grid, 16px gutters, 16px margins.
*   **Vertical Rhythm:** Based on an 8px baseline grid.

### 1.3 Spacing System
*   **Base Unit:** 8px.
*   **Scale:** 4, 8, 16, 24, 32, 48, 64, 96, 128, 192, 256.
*   **Application:** Strict adherence. Margins and paddings must always snap to this scale to ensure rhythmic mathematical harmony.

### 1.4 Color System
*   **Theme:** "Deep Space Obsidian". A dark, immersive, high-contrast palette.
*   **Backgrounds:**
    *   `Space Black`: #050507 (Primary Canvas)
    *   `Void Gray`: #0C0D12 (Secondary Canvas, Cards)
    *   `Deep Obsidian`: #15161D (Elevated Surfaces)
*   **Foreground/Text:**
    *   `Starlight White`: #F2F2F4 (Primary Text, H1)
    *   `Lunar Gray`: #A1A3AB (Secondary Text, Body)
    *   `Meteor Ash`: #646774 (Tertiary Text, Disabled)
*   **Accents (Nebula Glow):**
    *   `Quantum Blue`: #3B82F6 (Primary Action, Interactions)
    *   `Aether Violet`: #8B5CF6 (Magic, AI, Transformation)
    *   `Solar Gold`: #F59E0B (Warnings, Rare highlights)
    *   `Neon Cyan`: #06B6D4 (Data visualization, tech elements)
*   **Rules:** Pure #000000 is avoided for #050507 to maintain depth. Pure #FFFFFF is softened to #F2F2F4 to reduce eye strain.

### 1.5 Glass System (Glassmorphism)
*   **Purpose:** To create layered depth without obscuring the background cosmos.
*   **Style:** Minimal refraction. High blur, low opacity.
*   **Values:** `backdrop-filter: blur(24px)`, `background: rgba(12, 13, 18, 0.4)`.
*   **Borders:** 1px solid `rgba(255, 255, 255, 0.05)` (top and left), `rgba(255, 255, 255, 0.02)` (bottom and right) to simulate edge lighting.

### 1.6 Radius System
*   **Base:** Sharp corners (0px) for standard structural elements (creates a brutalist, archival feel).
*   **UI Controls (Buttons, Inputs):** 2px or 4px for slight softening.
*   **Pills/Badges:** Fully rounded (`9999px`).
*   **Cards/Panels:** 0px. The universe is vast and unstructured; our containers are precise cutouts.

### 1.7 Shadow System (Void Shadows)
*   **Concept:** In space, shadows are harsh or non-existent depending on the light source. We use shadows not for elevation, but for ambient occlusion.
*   **Small:** `0 4px 12px rgba(0, 0, 0, 0.5)`
*   **Large:** `0 24px 64px rgba(0, 0, 0, 0.8)`
*   **Glow (Inverse Shadow):** Using accent colors `0 0 32px rgba(59, 130, 246, 0.15)` to simulate emitted light.

### 1.8 Elevation System
*   **Level 0 (Base):** Space Black. Z-index 0.
*   **Level 1 (Cards/Grid):** Void Gray. Z-index 10.
*   **Level 2 (Modals/Overlays):** Glass System. Z-index 50.
*   **Level 3 (Navigation/HUD):** Deep Obsidian + Glass. Z-index 100.

### 1.9 Lighting System
*   **Style:** Cinematic, high-contrast, directional lighting (chiaroscuro).
*   **Implementation:** Radial gradients in backgrounds, subtle inset shadows on cards, and specular highlights on 3D elements.
*   **Key Light:** Imagined as a distant star (top-left).

### 1.10 Reflection System
*   **Style:** Subtle, dark reflections.
*   **Usage:** Only on 3D objects (Three.js) or highly elevated Glass surfaces. Implemented via environment maps (HDRI) or CSS `-webkit-box-reflect` sparingly.

### 1.11 Icon System
*   **Library:** `Lucide React`
*   **Style:** Line-art, 1.5px stroke width. Unfilled.
*   **Size:** 16px (inline), 24px (standard UI), 32px (hero).
*   **Color:** Inherits current text color (Lunar Gray by default, Starlight White on hover).

### 1.12 Illustration System
*   **Style:** Abstract, geometric, particle-based. No traditional vector characters.
*   **Tools:** WebGL/Three.js or CSS radial gradients.
*   **Themes:** Constellations, orbits, gravity wells, data streams.

### 1.13 Photography Style
*   **Style:** Deep space astrophotography, monolithic landscapes, macro textures (obsidian, metallic).
*   **Treatment:** High contrast, desaturated, tinted slightly blue/violet to match the theme. Overlaid with a 10-20% black film or grain to integrate into the UI.

### 1.14 Browser Mockup Style
*   **Style:** "Holo-display". Not a literal macOS/Windows browser.
*   **Chrome:** 1px border, no traffic lights, just a minimal URL bar/title bar at the top, glowing slightly.

### 1.15 Infographic Style
*   **Style:** HUD (Heads Up Display), telemetry data.
*   **Lines:** 1px thin, dashed or dotted.
*   **Colors:** Neon Cyan and Solar Gold against the dark background.

### 1.16 Timeline Style
*   **Style:** A literal vertical or horizontal line representing a timeline, punctuated by glowing nodes.
*   **Nodes:** 8px circles (unfilled), pulsing on active states.
*   **Lines:** 1px `rgba(255,255,255,0.1)`.

### 1.17 Statistics Style
*   **Layout:** Large, high-contrast number (Cinzel Decorative) stacked above a small, tracked-out, all-caps label (Inter).
*   **Example:** "14.2B" (96px) over "YEARS" (12px, 2px letter-spacing).

### 1.18 Quote Style
*   **Style:** Massive hanging quotation mark in the background (10% opacity). Text is italicized Serif (Cinzel).
*   **Attribution:** Monospace, separated by a 1px em-dash.

### 1.19 Comparison Style
*   **Style:** Split-screen or overlapping glass cards.
*   **Divider:** A sharp 1px vertical line with a glowing center point.

### 1.20 Video Style
*   **Container:** 0px radius, 1px border `rgba(255,255,255,0.1)`.
*   **Overlay:** A subtle grain or scanline pattern (CSS overlay) to make it feel like archival footage.
*   **Controls:** Minimal, custom HUD-style controls. No default HTML5 players.

### 1.21 3D Object Style
*   **Aesthetics:** Monolithic, abstract, mysterious. Spheres, obelisks, shattered fragments.
*   **Detail:** Low-poly or perfectly smooth primitives. Not hyper-realistic props.

### 1.22 Three.js Materials
*   **Primary:** `MeshPhysicalMaterial`.
*   **Properties:** High metalness (0.8 - 1.0), low roughness (0.1 - 0.3) for obsidian/glass looks.
*   **Wireframes:** Used for "holographic" or "data-view" objects, glowing via post-processing.

### 1.23 Shader Language
*   **Effects:** Distortion, noise (simplex/perlin), chromatic aberration, film grain.
*   **Usage:** For background nebulae, transition effects, or material surfaces (e.g., a flowing data stream).

### 1.24 Particle Language
*   **Behavior:** Slow, drifting, simulating micro-gravity or dust motes in a beam of light.
*   **Appearance:** Tiny (1-2px), additive blending, soft glowing edges.
*   **Interaction:** Slightly repelled or attracted to the cursor.

### 1.25 Motion Language
*   **Easing:** `CustomEase(0.25, 1, 0.5, 1)` - Decelerating, smooth, "floating" feel. Avoid harsh linear or bouncy springs.
*   **Duration:** UI (200-300ms). Scene transitions (800-1200ms).
*   **Concept:** Mass and inertia. Things in space take time to accelerate and decelerate.

### 1.26 Transition Language
*   **Page/Scene:** Fade to black (Space Black), crossfade, or a slow "warp/stretch" effect using WebGL.
*   **Elements:** Staggered fade-up (`y: 20, opacity: 0` to `y: 0, opacity: 1`).

### 1.27 Camera Language (Three.js)
*   **FOV:** Wide (45-60) for vastness, Narrow (20-30) for monolithic, imposing shots.
*   **Movement:** Slow panning, orbital drift. Parallax on scroll. Avoid erratic, fast camera cuts.

### 1.28 Depth Language
*   **Z-Space:** Extensive use of CSS `translateZ` and Three.js spatial depth. Elements in the background should blur slightly (simulating depth of field) and darken (atmospheric perspective).

### 1.29 Background Language
*   **Composition:** Not a static flat color. Always a complex combination of a dark radial gradient, a very subtle animated noise/grain texture, and potentially drifting WebGL particles.

---

## 2. COMPONENT SPECIFICATIONS

### 2.1 Navigation HUD (Header/Sidebar)
*   **Purpose:** Global orientation and travel between chapters.
*   **Visual Style:** Glass System overlay, absolute positioning.
*   **Spacing:** 24px padding from screen edges.
*   **Hierarchy:** Highest (Z-index 100).
*   **Animation:** Fades in on load. Slides out of view on scroll down, slides in on scroll up.
*   **Interaction:** Hover states on links (glow effect, Starlight White).
*   **Accessibility:** Semantic `<nav>`, `aria-labels`. High contrast text.
*   **Responsive Rules:** Desktop (Horizontal Header), Mobile (Hamburger to full-screen Glass menu).
*   **Usage Rules:** Must be present on all top-level screens.
*   **When it may NOT be used:** Inside immersive cinematic WebGL sequences (must auto-hide).

### 2.2 Archival Card
*   **Purpose:** To contain specific chunks of data, text, or imagery.
*   **Visual Style:** Void Gray background, 0px radius, 1px subtle top/left border.
*   **Spacing:** 24px or 32px internal padding. 24px gap between cards.
*   **Hierarchy:** Mid-level (Z-index 10).
*   **Animation:** Staggered fade-up on scroll entry.
*   **Interaction:** Hover (subtle lift `-translate-y-1`, subtle border glow).
*   **Accessibility:** Focus rings visible on keyboard navigation.
*   **Responsive Rules:** Grid spans adjust (e.g., col-span-12 on mobile, col-span-4 on desktop).
*   **Usage Rules:** Use for standard content blocking.
*   **When it may NOT be used:** For hero text or primary titles which should sit directly on the void.

### 2.3 Action Node (Button)
*   **Purpose:** Primary user interaction trigger.
*   **Visual Style:** Sharp edges (0px radius). Ghost style (1px border, transparent background) or Solid (Quantum Blue).
*   **Spacing:** Padding `px-6 py-3`.
*   **Hierarchy:** Prominent.
*   **Animation:** Hover (background fills via scale-x origin-left, text turns Space Black if filled).
*   **Interaction:** Click ripple (subtle).
*   **Accessibility:** Contrast ratio > 4.5:1. Semantic `<button>`.
*   **Responsive Rules:** Full width on mobile.
*   **Usage Rules:** For primary actions (e.g., "Begin Journey", "Access Archive").
*   **When it may NOT be used:** For inline text links.

### 2.4 Data Readout (Metrics/Stats)
*   **Purpose:** Displaying key numerical data.
*   **Visual Style:** Monospace numbers, glowing Neon Cyan or Starlight White.
*   **Spacing:** Tight internal spacing between number and label.
*   **Hierarchy:** High visual weight due to size, low structural weight.
*   **Animation:** Number counter effect (0 to value) on intersection.
*   **Interaction:** None.
*   **Accessibility:** `aria-live="polite"` if dynamically updating.
*   **Responsive Rules:** Font sizes scale down.
*   **Usage Rules:** Use to punctuate narrative text with hard facts.
*   **When it may NOT be used:** For long-form body text.

### 2.5 The Monolith (Hero Section)
*   **Purpose:** Establish the tone of the chapter/page.
*   **Visual Style:** Full viewport height (`h-screen`). Massive Cinzel Decorative typography. Background is a WebGL scene or high-res astrophotography.
*   **Spacing:** Content centered or bottom-left aligned with massive padding (128px+).
*   **Hierarchy:** The apex of the page.
*   **Animation:** Slow parallax on scroll. Text reveals via slow mask-image wipe.
*   **Interaction:** Scroll down indicator (pulsing arrow or text).
*   **Accessibility:** H1 tag. Ensure background contrast allows text to be read (use CSS text-shadow or a dark gradient behind text).
*   **Responsive Rules:** Typography scales dramatically (e.g., 8rem desktop -> 3rem mobile).
*   **Usage Rules:** Only at the very top of a route/chapter.
*   **When it may NOT be used:** Mid-page.

