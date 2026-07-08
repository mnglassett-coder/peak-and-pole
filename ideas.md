# Peak & Pole Tent Co. — Design Brainstorm

## Three Stylistic Approaches

### 1. Architectural Minimalism
- **Theme Name:** Structural Elegance
- **Very Brief Intro:** Inspired by the geometry of tent structures themselves — clean lines, dramatic angles, and the interplay of tension and space. Feels like a modern architecture firm's portfolio site applied to event rentals.
- **Probability:** 0.06

### 2. Warm Craft Heritage
- **Theme Name:** Canvas & Craft
- **Very Brief Intro:** Leans into the tactile warmth of canvas, rope, and natural materials. Evokes artisan quality and handmade reliability — like a premium outdoor goods brand rather than a rental company.
- **Probability:** 0.04

### 3. Modern Hospitality
- **Theme Name:** The Gathering Co.
- **Very Brief Intro:** Borrows from boutique hotel and modern event venue aesthetics — editorial photography, confident serif typography, generous whitespace. Positions tent rental as a hospitality experience rather than equipment logistics.
- **Probability:** 0.08

---

## ✅ CHOSEN APPROACH: Structural Elegance (Architectural Minimalism)

### Design Movement
Neo-Brutalist Minimalism meets Architectural Photography — the visual language of modern architecture studios (think Tadao Ando's concrete + light philosophy) translated into a warm, approachable local brand. Clean geometric compositions, dramatic use of negative space, and the tent structure itself as a visual motif.

### Core Principles
1. **Structural Honesty** — Let the geometry of tents (peaks, poles, tension lines, fabric planes) drive the visual language. Diagonal cuts, angular section dividers, triangular motifs.
2. **Warm Restraint** — The palette is warm (cream, tan, black) but the layout is disciplined. No clutter, no decoration for decoration's sake.
3. **Confident Scale** — Oversized typography, full-bleed imagery, bold section breaks. The site should feel substantial and trustworthy.
4. **Tactile Materiality** — Subtle texture references to canvas, rope, and natural materials through micro-textures and grain overlays.

### Color Philosophy
Derived from the logo's black/cream/warm tan palette:
- **Primary Black** (#1a1a1a) — Authority, structure, the "pole" in Peak & Pole
- **Warm Cream** (#F5F0E8) — The canvas, warmth, approachability
- **Tan/Sand** (#C4A882) — Accent warmth, rope/natural material reference
- **Deep Charcoal** (#2D2D2D) — Secondary text, depth
- **Soft White** (#FDFBF7) — Background breathing room

### Layout Paradigm
**Asymmetric Grid with Diagonal Tension** — Sections don't sit in neat centered boxes. Content blocks are offset, images bleed to edges, and diagonal clip-paths or angled dividers reference the peak/slope of a tent roof. Mobile collapses gracefully into a single column but maintains the angular energy through rotated accent lines and offset headings.

### Signature Elements
1. **The Peak Line** — A subtle diagonal accent (like the ridgeline of a tent) that appears as section dividers, underlines, and decorative elements throughout the site.
2. **Canvas Texture Overlay** — A very subtle linen/canvas grain texture on cream backgrounds, adding tactile depth without visual noise.
3. **Pole Markers** — Thin vertical accent lines (referencing tent poles) used as list markers, section indicators, and decorative vertical rules.

### Interaction Philosophy
Interactions should feel **precise and mechanical** — like the satisfying click of a tent pole locking into place. No bouncy/playful animations. Instead: crisp reveals, smooth slides, and confident state changes.
- Buttons: firm press feedback (scale 0.97), no rounded pill shapes — use slightly squared corners
- Hover states: subtle lift with shadow deepening
- Page transitions: content slides up with a slight stagger
- Forms: clean focus states with the tan accent color

### Animation
- **Entry animations:** Elements slide up 20px with opacity fade, 300ms with cubic-bezier(0.23, 1, 0.32, 1)
- **Stagger:** 60ms between grouped items
- **Scroll reveals:** Triggered once, no repeat. Subtle — 15px translate max.
- **Hover:** 180ms transitions, transform + shadow only
- **No parallax, no floating elements, no particle effects** — keep it grounded and architectural

### Typography System
- **Headlines:** A bold serif — Playfair Display or similar high-contrast serif at large sizes. Used for page titles, section headers, hero text.
- **Body/UI:** A clean geometric sans-serif — DM Sans or similar. Readable, modern, slightly warm character.
- **Accent/Labels:** Small-caps tracked-out treatment (referencing the logo's subtext style) for labels, categories, and navigation items.
- **Scale:** Dramatic size contrast between headlines and body (3:1 minimum ratio on desktop).

### Brand Essence
**One-line positioning:** Peak & Pole is the Louisiana Northshore's premium tent rental company for people who want their outdoor event to look intentional, not improvised.
**Personality adjectives:** Confident, Warm, Architectural

### Brand Voice
Headlines and CTAs sound direct and slightly knowing — like a trusted contractor who's done this a hundred times.
- Example headline: "Your backyard. Our structure. Their jaws on the floor."
- Example CTA: "Lock in your date"
- Ban: "Welcome to our website", "Get started today", "Your one-stop shop", "We're passionate about..."

### Wordmark & Logo
The owner is providing the actual logo — a serif wordmark with shading/dimension. We'll use it as-is for the primary mark and generate a simplified flat version (no shading, single-color) for favicon and small-size use.

### Signature Brand Color
**Warm Tan/Sand (#C4A882)** — This golden-tan is the ownable accent. It appears in hover states, active indicators, accent lines, and CTAs against the black/cream foundation. It references natural canvas and rope — the materials of the craft.

---

## Style Decisions

- Every major page section must include at least one visible structural device — a diagonal peak line, angled divider, offset block, or thin pole marker — so the architectural tent geometry remains present beyond the homepage hero.
- Product and gallery imagery must avoid repeated generic tent shots; each tent type needs a distinct crop or photo emphasizing peak, pole, canopy plane, tension line, or under-canopy atmosphere.
- Copy voice bans generic utility headings like "Contact Us," "Get in Touch," and "Send a Message"; use direct Northshore contractor language instead.
