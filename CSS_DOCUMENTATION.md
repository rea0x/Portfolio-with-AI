<!-- CSS MODULAR ARCHITECTURE GUIDE -->

# 📚 CSS Documentation & Module Guide

## Overview

The portfolio uses a **modular CSS architecture** with 11 specialized CSS files, totaling ~2000+ lines of production-quality CSS.

## Module Breakdown

### 1. **variables.css** (~80 lines)
Primary purpose: CSS custom properties registry and design tokens

**Contains:**
```css
Colors:
- Primary colors (#00ff88, #00cc6d, #33ffaa)
- Secondary colors (#00d4ff, #00a8cc, #33e6ff)
- Accent colors (#ff006e, #cc0058, #ff3385)
- Backgrounds (#0a0e27, #050a1f, #020408)
- Text colors (various opacity levels)

Spacing:
- xs (0.25rem) through 3xl (4rem)

Typography:
- Font sizes: text-xs through text-6xl
- Font weights: light (300) through extrabold (900)

Shadows & Glows:
- 4 shadow levels (sm to xl)
- 6 glow variations (primary, secondary, accent)

UI Tokens:
- Border radius: sm, md, lg, xl, full
- Transitions: fast, base, slow, slowest
- Z-index scale: cursor down to base
- Backdrop filters: blur variants
```

**Usage Example:**
```css
/* Instead of hardcoding values: */
color: var(--primary);
padding: var(--spacing-lg);
box-shadow: var(--glow-primary);
font-size: var(--text-xl);
```

---

### 2. **global.css** (~200 lines)
Primary purpose: Foundation styles and utility classes

**Key Sections:**

#### Reset & Normalization
```css
* { margin: 0; padding: 0; box-sizing: border-box; }
```

#### Body & HTML
```css
html { scroll-behavior: smooth; }
body { 
  background: gradient;
  color: var(--light);
}
```

#### Scrollbar Styling
```css
::-webkit-scrollbar-thumb {
  background: linear-gradient(primary → secondary);
  box-shadow: glow effect;
}
```

#### Utility Classes
- `.hidden` - display: none
- `.invisible` - visibility: hidden
- `.sr-only` - Screen reader only
- `.no-select` - Prevent text selection
- `.grid-cols-{1-4}` - Grid columns
- `.flex` / `.flex-center` / `.flex-between` - Flexbox utilities
- `.gap-{xs-xl}` - Gap utilities
- `.p-{xs-3xl}` / `.m-{xs-3xl}` - Padding/margin utilities

#### Responsive Grid
```css
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

/* Automatically responsive */
@media (max-width: 1024px) {
  .grid-cols-4 { grid-template-columns: repeat(2, 1fr); }
}
```

---

### 3. **cursor.css** (~80 lines)
Primary purpose: Custom cursor system styling and animations

**Structure:**
```css
.cursor
├── Main ring (20px, neon green)
├── Inner pseudo-element ring
└── Animation: cursor-glow (2s pulse)

.cursor-follower
├── Larger ring (40px, cyan)
└── Animation: follower-glow (2s pulse)
```

**Animations:**
```css
@keyframes cursor-glow {
  0%, 100% { glow effect level 1 }
  50% { glow effect level 2 }
}
```

**Touch Device Handling:**
```css
@media (pointer: coarse) {
  .cursor, .cursor-follower { display: none; }
}
```

---

### 4. **navbar.css** (~200 lines)
Primary purpose: Navigation bar and header styling

**Components:**

#### .navbar
- Fixed positioning
- Glassmorphism effect (blur + transparency)
- Scroll state detection
- Border animation

#### .logo
- Gradient text effect
- Animated dot indicator
- Smooth animations

#### .nav-menu
- Flex layout
- Responsive mobile menu
- Smooth transitions

#### .nav-link
```css
├── Default state: light color
├── Hover state: primary color + underline
├── Active state: primary color + animated underline
└── Animation: underline-glow (infinite)
```

#### .social-link
- Icon containers
- Hover scaling
- Glow effects

#### Mobile Menu
- Absolute positioning below header
- Max-height animation for collapse/expand
- Touch-friendly sizing

---

### 5. **buttons.css** (~200 lines)
Primary purpose: Button components and all variants

**Variants:**

#### Primary Button
```css
.btn-primary {
  background: gradient(primary);
  box-shadow: glow-primary;
  hover: scale(1.05) + intense-glow;
}
```

#### Secondary Button
```css
.btn-secondary {
  background: gradient(secondary);
  box-shadow: glow-secondary;
  hover: scale(1.05) + intense-glow;
}
```

#### Outline Button
```css
.btn-outline {
  background: transparent;
  border: 2px primary;
  hover: background + glow;
}
```

#### Ghost Button
```css
.btn-ghost {
  background: transparent;
  border: 1px muted;
  hover: border-primary + glow;
}
```

**Modifiers:**
- `.btn-sm` - Small size
- `.btn-lg` - Large size
- `.btn-block` - Full width
- `.btn-icon` - Icon-only button
- `.btn:disabled` - Disabled state
- `.btn.loading` - Loading state with spinner

**Effects:**
- Shine effect (::before pseudo-element)
- Ripple effect on click (::after pseudo-element)
- Scale transform on hover/active
- Smooth transitions

---

### 6. **animations.css** (~400 lines)
Primary purpose: 20+ CSS keyframe animations

**Entrance Animations:**
```css
@keyframes fadeIn { 0% { opacity: 0 } }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(30px) } }
@keyframes scaleIn { from { opacity: 0; transform: scale(0.95) } }
```

**Movement Animations:**
```css
@keyframes bounce { 0%, 100% { translateY(0) } 50% { translateY(-10px) } }
@keyframes float { Similar to bounce but smoother }
@keyframes wave { Up and down motion }
```

**Attention Animations:**
```css
@keyframes pulse { Opacity fade 0.5 to 1 }
@keyframes heartbeat { Scale 1 → 1.2 → 1 }
@keyframes glow-pulse { Box-shadow intensity change }
```

**Effects Animations:**
```css
@keyframes glitch { Text-shadow color shift }
@keyframes shimmer { Background position slide }
@keyframes neon-flicker { Text-shadow pulse }
```

**Utility Classes:**
```css
.animate-fadeIn { animation: fadeIn 0.6s ease; }
.animate-bounce { animation: bounce 1s ease infinite; }
.animate-glitch { animation: glitch 0.3s infinite; }
```

---

### 7. **components.css** (~300 lines)
Primary purpose: Reusable UI component styles

**Cards:**
```css
.card {
  background: rgba(0, 255, 136, 0.03);
  border: 1px solid var(--border);
  padding: var(--spacing-xl);
  transition: all var(--transition-base);
  
  ::before { shine effect }
}

.card:hover {
  border-color: var(--primary);
  box-shadow: glow + inset;
  transform: translateY(-8px);
}
```

**About Cards:**
```css
.about-card {
  extends .card;
  text-align: center;
  
  .card-icon {
    60x60px icon container
    gradient background
    hover: scale + rotate
  }
}
```

**Project Cards:**
```css
.project-card {
  extends .card;
  flex: column;
  
  h3 { title }
  p { description }
  .project-links { action links }
}
```

**Tech Badges:**
```css
.tech-badge {
  inline-block;
  background: rgba(0, 255, 136, 0.1);
  border: 1px solid var(--border);
  
  ::before { shine animation }
  
  :hover {
    background: rgba(0, 255, 136, 0.2);
    transform: translateY(-4px) scale(1.1);
    box-shadow: glow;
  }
}
```

**Forms:**
```css
input, textarea, select {
  background: rgba(0, 255, 136, 0.02);
  border: 1px solid var(--border);
  
  :focus {
    border-color: var(--primary);
    box-shadow: glow + inset;
    background: rgba(0, 255, 136, 0.08);
  }
}
```

---

### 8. **hero.css** (~150 lines)
Primary purpose: Hero section styling

**Structure:**
```css
.hero {
  min-height: 100vh;
  display: flex;
  position: relative;
  
  .particle-canvas { absolute, full-screen, z-0 }
  .hero-content { relative, z-2 }
}
```

**Title Animation:**
```css
.hero-title {
  .title-word:nth-child(1) { Color: light }
  .title-word:nth-child(2) { Gradient: primary→secondary, glow }
  .title-word:nth-child(3) { Gradient: secondary→accent, glow }
  
  animation-delay: staggered (0s, 0.1s, 0.2s)
}
```

**Stats:**
```css
.hero-stats {
  grid: 3 columns (1 column on mobile)
  
  .stat-value { 2.5rem, gradient text, glow }
  .stat-label { sm text, uppercase, muted }
}
```

**Scroll Indicator:**
```css
.scroll-indicator {
  position: absolute bottom
  animation: bounce 2s infinite
}
```

---

### 9. **sections.css** (~150 lines)
Primary purpose: Main section layouts and footers

**Section Base:**
```css
.section {
  padding: var(--spacing-3xl) var(--spacing-lg);
  border-top: 1px solid var(--border);
  position: relative;
}
```

**Section Header:**
```css
.section-title {
  gradient text (primary→secondary);
  
  ::after {
    underline animation
    gradient background
    glow effect
  }
}
```

**Section Variants:**
```css
.section-about { background: gradient(primary tint) }
.section-projects { background: gradient(secondary tint) }
.section-skills { background: gradient(primary tint) }
.section-contact { background with radial glow }
```

**Skills Grid:**
```css
auto-fit: minmax(250px, 1fr)
responsive on mobile
```

**Footer:**
```css
.footer {
  border-top: section divider
  background: rgba(0, 0, 0, 0.2)
  text-align: center
  
  .heart { animation: heartbeat }
}
```

---

### 10. **responsive.css** (~500 lines)
Primary purpose: Complete responsive design strategy

**Breakpoints:**
```css
Mobile:        max-width: 480px
Small Tablet:  max-width: 768px
Large Tablet:  max-width: 1024px
Desktop:       (default, > 1024px)
Ultra-wide:    min-width: 1440px
```

**Font Scaling:**
```css
Desktop:  Large fonts, full spacing
Tablet:   10-20% reduction
Mobile:   30-40% reduction
```

**Layout Changes:**
```css
Desktop:  Multi-column grids
Tablet:   2-column grids
Mobile:   Single column, full-width
```

**Component Adjustments:**
```css
@media (max-width: 768px) {
  .hero: smaller padding + height
  .hero-title: smaller font
  .hero-stats: single column
  .btn: full-width
  .card: reduced padding
  .nav-menu: absolute overlay
}
```

**Special Cases:**
- Touch device button sizing (min 44-48px)
- Landscape orientation fixes
- High DPI display adjustments
- Print styles (no nav, no animations)
- Reduced motion media queries

---

## CSS Best Practices Used

### 1. CSS Variables
All colors, sizes, and timing values use variables for easy theming.

### 2. BEM-like Naming
Clear, descriptive class names:
```css
.button { .button--primary, .button--lg }
```

### 3. Semantic HTML
Classes describe purpose, not appearance:
```css
.hero-title (not .big-blue-text)
.btn-primary (not .green-button)
```

### 4. Performance
- CSS transforms and opacity for animations
- Hardware acceleration via transform: translate3d
- No expensive properties like box-shadow on animations
- Debounced scroll handlers

### 5. Accessibility
- Sufficient color contrast (AAA standard)
- Focus states on all interactive elements
- Reduced motion support
- Skip links capability

### 6. Organization
Logical file splitting by:
- Component type (buttons, cards)
- Section (hero, navbar)
- Utility (animations, responsive)

---

## Customization Guide

### Changing Theme Colors

Edit `variables.css`:
```css
:root {
    --primary: #YOUR_COLOR;
    --secondary: #YOUR_COLOR;
    --accent: #YOUR_COLOR;
}
```

### Adding New Animation

Add to `animations.css`:
```css
@keyframes myAnimation {
    0% { /* start */ }
    100% { /* end */ }
}

.animate-myAnimation {
    animation: myAnimation 0.6s ease;
}
```

### Creating New Component

1. Add styles to `components.css`
2. Use CSS variables
3. Include hover/focus states
4. Add responsive breakpoints
5. Document the class

---

**CSS Version**: 2.0.0
**Total Lines**: ~2000+
**Optimization**: ✅ Production-ready

