<!-- VISUAL STRUCTURE & DESIGN SYSTEM -->

# 🎨 DESIGN SYSTEM & VISUAL GUIDE

## Color System

### Primary Palette
```
Primary (Neon Green)
├── #00ff88    - Main brand color
├── #00cc6d    - Dark variant
└── #33ffaa    - Light variant

Secondary (Cyan)
├── #00d4ff    - Secondary brand
├── #00a8cc    - Dark variant
└── #33e6ff    - Light variant

Accent (Magenta)
├── #ff006e    - Accent highlight
├── #cc0058    - Dark variant
└── #ff3385    - Light variant
```

### Background Palette
```
Dark (#0a0e27)
├── Main background
├── Used for: Page background, cards
└── Opacity: Varies 0.3 - 0.9

Darker (#050a1f)
├── Gradient secondary
├── Used for: Gradient overlays
└── Opacity: Full

Darkest (#020408)
├── Ultra dark overlay
├── Used for: Maximum contrast areas
└── Opacity: Varies
```

### Text Palette
```
Light (#e0e0e0)     - Primary text (90% opacity)
Lighter (#ffffff)   - Bright text/highlights
Muted (#a0a0a0)     - Secondary text
Muted Dark (#707070)- Disabled text
```

## Typography Scale

### Sizes
```
Text-xs   0.75rem   (12px)  - Small labels, badges
Text-sm   0.875rem  (14px)  - Captions, hints
Text-base 1rem      (16px)  - Body text, default
Text-lg   1.125rem  (18px)  - Larger body
Text-xl   1.25rem   (20px)  - Small headings
Text-2xl  1.5rem    (24px)  - Section subheadings
Text-3xl  1.875rem  (30px)  - Large section titles
Text-4xl  2.25rem   (36px)  - Page sections
Text-5xl  3rem      (48px)  - Hero title
Text-6xl  3.75rem   (60px)  - Main hero
```

### Font Families
```
Primary: 'Inter'
├── Weights: 100, 300, 400, 500, 600, 700, 800, 900
├── Usage: All text, headings, body
└── Fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI'

Mono: 'Space Mono'
├── Weights: 400, 700
├── Usage: Code, tech badges (if used)
└── Fallback: Monospace
```

### Font Weights
```
Light:     300
Normal:    400 (body text)
Medium:    500 (UI elements)
Semibold:  600 (headings)
Bold:      700 (strong emphasis)
Extrabold: 900 (hero titles)
```

## Spacing System

### Scale
```
xs   0.25rem (4px)    - Tight spacing
sm   0.5rem  (8px)    - Small gaps
md   1rem    (16px)   - Default
lg   1.5rem  (24px)   - Comfortable
xl   2rem    (32px)   - Spacious
2xl  3rem    (48px)   - Very spacious
3xl  4rem    (64px)   - Section spacing
```

### Usage
```
Padding:      xs - 3xl
Margins:      xs - 3xl
Gaps (flex):  xs - xl
Gaps (grid):  md - 3xl
```

## Component Library

### Buttons

#### Primary Button
```
Background:  Gradient (primary → primary-dark)
Text Color:  Dark background
Border:      Transparent
Shadow:      Glow primary
Hover:       Scale 1.05 + intense glow
Size:        44px min height
```

#### Secondary Button
```
Background:  Gradient (secondary → secondary-dark)
Text Color:  Dark background
Border:      Transparent
Shadow:      Glow secondary
Hover:       Scale 1.05 + intense glow
```

#### Outline Button
```
Background:  Transparent
Border:      2px primary
Text Color:  Primary
Shadow:      Inset glow on hover
Hover:       Background + glow
```

### Cards

#### Base Card
```
Background:  rgba(0, 255, 136, 0.03)
Border:      1px solid border color
Padding:     var(--spacing-xl)
Border Radius: var(--radius-lg)
Transition:  All 300ms ease
Hover:       Border + glow + translateY(-8px)
```

#### Variant: About Card
```
├── Icon container (60x60px)
├── Title
└── Description text
```

#### Variant: Project Card
```
├── Title
├── Description
└── Action links
```

#### Variant: Contact Card
```
├── Category title
└── Information/link
```

### Tech Badges

```
Background:  rgba(0, 255, 136, 0.1)
Border:      1px solid border color
Color:       Primary
Padding:     md, lg (horizontal)
Border Radius: radius-full
Hover:       
├── Background: rgba(0, 255, 136, 0.2)
├── Border: Primary
├── Glow: Primary shadow
└── Transform: Scale 1.1 + translateY(-4px)
```

### Forms

```
Input/Textarea/Select:
├── Background: rgba(0, 255, 136, 0.02)
├── Border: 1px border color
├── Padding: md
├── Border Radius: radius-md
├── Focus: Primary border + intense glow
└── Placeholder: Muted dark color
```

## Shadow System

### Sizes
```
Shadow-sm:  0 2px 8px rgba(0, 0, 0, 0.3)
Shadow-md:  0 8px 24px rgba(0, 0, 0, 0.4)
Shadow-lg:  0 16px 48px rgba(0, 0, 0, 0.5)
Shadow-xl:  0 24px 64px rgba(0, 0, 0, 0.6)
```

### Glow Effects
```
Glow-primary:        0 0 25px rgba(0, 255, 136, 0.5)
Glow-primary-intense: 0 0 40px rgba(0, 255, 136, 0.8)
Glow-secondary:       0 0 25px rgba(0, 212, 255, 0.5)
Glow-secondary-intense: 0 0 40px rgba(0, 212, 255, 0.8)
Glow-accent:          0 0 25px rgba(255, 0, 110, 0.5)
Glow-accent-intense:  0 0 40px rgba(255, 0, 110, 0.8)
```

## Animation Library

### 20+ Animations

#### Entrance (Fade & Slide)
```
fadeIn:      0.6s ease
fadeInUp:    0.8s ease (default)
fadeInDown:  0.8s ease
fadeInLeft:  0.8s ease
fadeInRight: 0.8s ease
slideInUp:   0.8s ease
```

#### Attention (Pulse & Bounce)
```
pulse:       2s ease-in-out infinite
bounce:      1s ease infinite
float:       3s ease-in-out infinite
glow-pulse:  Variable timing
```

#### Transformation
```
rotate:      1s linear infinite
scale:       0.6s ease
wobble:      1s ease
swing:       Variable timing
flip:        3s ease
```

#### Text Effects
```
glitch:      0.3s infinite
shimmer:     1s ease infinite
neon-flicker: Variable timing
typist:      Keyboard effect
```

## Layout Grid

### Desktop (> 1024px)
```
About:       3 columns
Projects:    Auto-fill (min 300px)
Skills:      4 columns
Contact:     3 columns
```

### Tablet (768px - 1024px)
```
About:       2 columns
Projects:    2 columns
Skills:      2 columns
Contact:     2 columns
```

### Mobile (< 768px)
```
About:       1 column
Projects:    1 column
Skills:      1 column
Contact:     1 column
```

## Z-Index Scale

```
--z-cursor:          99999 (Topmost)
--z-cursor-follower: 99998
--z-modal:           10000 (For modals)
--z-dropdown:        1000  (Nav, menus)
--z-sticky:          100   (Sticky elements)
--z-base:            1     (Normal elements)
```

## Transitions

```
Fast:     150ms ease      (Quick hover response)
Base:     300ms ease      (Default animations)
Slow:     500ms ease      (Deliberate transitions)
Slowest:  800ms ease      (Page transitions)
```

## Breakpoints

```
Mobile:        < 480px
Tablet:        480px - 1024px
Desktop:       > 1024px
Ultra-wide:    > 1440px
```

## Component States

### Buttons
```
Normal:   Gradient + base glow
Hover:    Scale 1.05 + intense glow
Active:   Scale 1.02 + inset shadow
Disabled: Opacity 0.5 + no interaction
Loading:  Spinner animation
```

### Cards
```
Normal:   Transparent border
Hover:    Primary border + glow + lift
Active:   Highlighted state
Focus:    Ring outline
```

### Forms
```
Normal:   Border color
Hover:    Border color + subtle bg
Focus:    Primary border + intense glow
Disabled: Muted colors
Invalid:  Accent color (red)
```

## Accessibility Colors

```
Text on Primary:     Dark (#0a0e27) - AAA compliant
Text on Secondary:   Dark (#0a0e27) - AAA compliant
Text on Dark:        Light (#e0e0e0) - AAA compliant
Muted Text:          #a0a0a0 - AA compliant
Focus Ring:          Primary - 2px minimum
```

## Motion Preferences

### Reduced Motion
```
All animations:        0.01ms (disabled)
Transitions:           0.01ms (disabled)
Scroll behavior:       Auto (not smooth)
Applied via:           @media (prefers-reduced-motion: reduce)
```

---

**Design System Version**: 2.0.0
**Last Updated**: 2026-01-12
