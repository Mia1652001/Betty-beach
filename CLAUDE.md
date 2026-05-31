@AGENTS.md

# Betty Beach Website — Permanent Rules

## Brand
- Brand name: Betty Beach
- Primary font: Bodoni Moda (loaded as `--font-heading`)
- Colors:
  - Cream: `#FAF8F4`
  - Near-black: `#1C1C1C`
  - Terracotta: `#C4603A`
  - Teal: `#3D6B60`

## Behavior
- Never change images, fonts, layout, or other components unless specifically asked.
- Only make the exact change requested. Do not refactor, reformat, or improve anything else.
- After every change, automatically run the following without asking:
  1. `git add .`
  2. `git commit -m "<short description>"`
  3. `git push <remote> main`

## Skills

### Shopify Integration
- Know how to connect products to Shopify and add buy buttons.
- Use the Shopify Storefront API or Buy SDK to embed product/cart functionality.

### SEO
- Automatically add meta title, description, and alt tags to every page and image.
- Use Next.js `metadata` exports for page-level SEO.
- Every `<Image>` must have a descriptive `alt` attribute.

### Image Optimization
- Always compress and optimize images before adding them to the website.
- Use Next.js `<Image>` component for automatic optimization where possible.

### Analytics
- Know how to set up Google Analytics to track visitors.
- Use Google Analytics 4 (GA4) via the `gtag.js` script or a Next.js-compatible package.
