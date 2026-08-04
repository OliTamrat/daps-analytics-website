---
name: DAPS Cinematic
colors:
  surface: '#0e141b'
  surface-dim: '#0e141b'
  surface-bright: '#343942'
  surface-container-lowest: '#090e16'
  surface-container-low: '#171c24'
  surface-container: '#1b2028'
  surface-container-high: '#252a32'
  surface-container-highest: '#30353d'
  on-surface: '#dee2ed'
  on-surface-variant: '#bacac5'
  inverse-surface: '#dee2ed'
  inverse-on-surface: '#2b3139'
  outline: '#849490'
  outline-variant: '#3b4a46'
  surface-tint: '#00dfc6'
  primary: '#49fde3'
  on-primary: '#003730'
  primary-container: '#00e0c7'
  on-primary-container: '#005e53'
  inverse-primary: '#006b5e'
  secondary: '#efbf71'
  on-secondary: '#432c00'
  secondary-container: '#694700'
  on-secondary-container: '#e7b76a'
  tertiary: '#e3e4e6'
  on-tertiary: '#2e3132'
  tertiary-container: '#c6c8ca'
  on-tertiary-container: '#515455'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#47fce2'
  primary-fixed-dim: '#00dfc6'
  on-primary-fixed: '#00201b'
  on-primary-fixed-variant: '#005046'
  secondary-fixed: '#ffdead'
  secondary-fixed-dim: '#efbf71'
  on-secondary-fixed: '#281900'
  on-secondary-fixed-variant: '#604100'
  tertiary-fixed: '#e1e2e4'
  tertiary-fixed-dim: '#c5c6c8'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#0e141b'
  on-background: '#dee2ed'
  surface-variant: '#30353d'
typography:
  display-2xl:
    fontFamily: Inter
    fontSize: 128px
    fontWeight: '300'
    lineHeight: 110%
    letterSpacing: -0.04em
  display-xl:
    fontFamily: Inter
    fontSize: 96px
    fontWeight: '300'
    lineHeight: 110%
    letterSpacing: -0.03em
  display-lg:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 115%
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 130%
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 160%
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 160%
    letterSpacing: 0em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 100%
    letterSpacing: 0.1em
spacing:
  unit: 4px
  xs: 0.5rem
  sm: 1rem
  md: 2rem
  lg: 4rem
  xl: 8rem
  2xl: 12rem
  gutter: 24px
  margin: 64px
---

## Brand & Style

The design system for DAPS Analytics is defined by an atmosphere of "quiet luxury." It targets high-level decision-makers and analysts who require clarity amidst complexity. The emotional response is one of calm authority, precision, and forward-looking innovation.

The aesthetic blends **Ultra-Minimalism** with **Cinematic High-Contrast**. It relies on expansive whitespace (negative space) and a reductionist approach where every element serves a distinct purpose. By stripping away decorative clutter, the system emphasizes high-fidelity product renders and sophisticated data visualizations, creating a premium experience reminiscent of luxury automotive interfaces.

## Colors

The palette is anchored in deep, near-black tones to establish a cinematic "infinite" depth. 

- **Primary Background (#0A0B0D):** A rich, obsidian base that allows visual content to glow.
- **Secondary Surface (#111418):** Used for subtle layering, cards, and section differentiation.
- **Electric Teal (#00E0C7):** The "signature" color, used sparingly for critical actions and data highlights.
- **Warm Amber (#E8B86B):** A secondary accent used for specific product categories or premium status indicators.
- **Ink White (#F4F5F7):** A high-contrast neutral for primary text to ensure absolute legibility.
- **Muted Gray (#8A8F99):** Used for secondary information and structural borders to maintain low visual noise.

## Typography

This design system utilizes a high-performance geometric sans-serif to mirror the precision of the data it represents. 

Headlines are characterized by massive scale and tight letter-spacing, creating a rhythmic, editorial feel. Display sizes (56px-128px) should be used with significant vertical padding. Body text is optimized for readability with generous line heights (160%) to prevent fatigue. Use the **Label-Caps** style for metadata, category tags, and overlines to add a layer of technical sophistication.

## Layout & Spacing

The layout follows a **12-column fixed grid** with a maximum content width of 1440px, though background sections and hero imagery must bleed edge-to-edge. 

- **Asymmetry:** Distribute content unevenly across the grid (e.g., a 4-column text block offset against an 8-column image) to create a dynamic, high-end editorial feel.
- **Whitespace:** Use "XL" and "2XL" spacing units between major sections to allow the brand to breathe. 
- **Cinematic Pacing:** Every page should feel like a sequence of scenes. Avoid dense clusters of information; instead, favor sequential storytelling with slow-reveal transitions.

## Elevation & Depth

Depth is conveyed through **Tonal Layering** and **Subtle Glassmorphism** rather than traditional drop shadows.

1.  **Surfaces:** Elements sitting above the base layer use the `Secondary Surface` color (#111418) with a 1px solid border in a slightly lighter gray (10% opacity) to define edges.
2.  **Backdrop Blurs:** Navigation bars and modal overlays utilize a heavy (20px-40px) backdrop blur with 80% opacity to maintain context while focusing the user.
3.  **Atmospheric Glow:** Interactive elements may emit a very faint, diffused outer glow using the `Electric Teal` color, simulating a light source in a dark environment.

## Shapes

The design system adopts a **Sharp (0px)** philosophy for its primary architecture. 

Square corners reinforce the technical, analytical nature of the product and echo luxury engineering. Circular shapes are reserved exclusively for:
- Data visualization nodes (scatter plots, map points).
- Product render silhouettes.
- Small status indicators or avatars.

All containers, buttons, and input fields should maintain 90-degree angles to preserve the ultra-minimalist aesthetic.

## Components

### Buttons
Primary buttons are ghost-style with a thin 1px `Electric Teal` border or solid `Electric Teal` for maximum priority. Use `Label-Caps` typography for button labels. Hover states should involve a slow fill transition.

### Data Visualizations
Charts should be "dark-mode native." Use thin strokes (1px) for axes and grids in 10% opacity gray. The primary data series uses `Electric Teal`, while secondary comparisons use `Warm Amber`.

### Cards & Containers
Containers are borderless or use the low-contrast 1px border mentioned in the Elevation section. Padding within cards should be generous (min 40px) to prevent data from appearing cramped.

### Input Fields
Inputs are minimal underlines or subtle boxes with no fill. Focus states are indicated by the underline transitioning to `Electric Teal`.

### Motion & Interaction
- **Scroll Fades:** Content should fade and slide up 20px as it enters the viewport.
- **Slow Translations:** Hero images should have a very slow (30s+ loop) zoom or pan effect to feel "alive."
- **Hover Transitions:** All interactive states must use a 400ms cubic-bezier (0.4, 0, 0.2, 1) transition for a smooth, high-end feel.