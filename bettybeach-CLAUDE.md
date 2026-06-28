# CLAUDE.md — Betty Beach

This file tells Claude Code how this project works. Read it at the start of every session.

## Project Overview

Betty Beach is a swimwear/bikini brand website. Built with Next.js, TypeScript, and Tailwind CSS. Live at bettybeachstudios.com — auto-deploys to Vercel on every GitHub push.

## My Setup

- **GitHub:** Mia1652001/Betty-beach — push with plain `git push` (auth already configured)  
- **Vercel project:** bettybeachstudios  
- **Live domain:** bettybeachstudios.com  
- **Local folder:** \~/my-website  
- I type commands — do not give me paste-heavy commands, they glitch in Claude Code  
- Always specify: Mac Terminal vs Claude Code vs chat

## Commands

### Mac Terminal

cd \~/my-website          \# go to this project

git add .

git commit \-m "message"

git push                 \# deploys automatically to Vercel

### Claude Code (run inside \~/my-website)

npm run dev              \# start dev server at localhost:3000

npm run build            \# check for build errors before pushing

npm run lint             \# check for code errors

npm install \<package\>    \# add a new package

---

## Brand Identity

### The Brand in One Sentence

Betty Beach is a sun-drenched, feminine swimwear brand for confident women who dress for themselves.

### Color Palette

| Name | Hex | Use For |
| :---- | :---- | :---- |
| Cream | `#FAF7F2` | Page backgrounds, light sections |
| Near-black | `#1C1C1A` | Body text, dark elements, navbar |
| Terracotta | `#C4603A` | Warm accents, CTAs, highlights |
| Teal | `#4A8C8C` | Cool accents, hover states, tags |

**Rules:**

- Cream is the default background — never use pure white  
- Near-black is the default text — never use pure black  
- Terracotta and teal are accents only — don't overuse them  
- Never use colors outside this palette without asking

### Tailwind Custom Colors

Add these to `tailwind.config.ts` if not already there:

colors: {

  cream: '\#FAF7F2',

  nearblack: '\#1C1C1A',

  terracotta: '\#C4603A',

  teal: '\#4A8C8C',

}

### Typography

- **Headings:** Bodoni Moda (loaded via Google Fonts in layout.tsx)  
- **Body:** Inter or clean sans-serif  
- **Heading style:** sentence case or lowercase — never ALL CAPS  
- **Never** use bold sans-serif for headings

### Brand Voice

- Warm, confident, effortless  
- Speaks to women who love the beach and dressing well  
- Not salesy — more like a friend with great taste  
- Sun-soaked and relaxed, never corporate

### Design Style

- Mobile-first always  
- Generous whitespace — don't crowd elements  
- Photography-forward — images large and editorial  
- Rounded corners: `rounded-2xl` on cards and buttons  
- Soft, warm, airy — avoid harsh shadows or heavy borders

---

## Project Structure

/app

  /components       ← reusable UI components (Navbar, Footer, ProductCard, etc.)

  /lib              ← helper functions and mock product data

  /shop             ← product listing page

  /product/\[id\]     ← individual product page

  /cart             ← cart page

  layout.tsx        ← root layout (Navbar and Footer go here)

  page.tsx          ← homepage

/public             ← images, fonts, brand assets

CLAUDE.md           ← this file

## Shop & Products

- Products are swimwear / bikinis  
- Categories: Bikini Tops, Bikini Bottoms, One Pieces, Cover Ups  
- Mock product shape:

{

  id: '1',

  name: 'Product Name',

  price: 89.00,

  images: \['/images/product-1-front.jpg', '/images/product-1-back.jpg'\],

  description: 'Short editorial description.',

  category: 'bikini-tops' | 'bikini-bottoms' | 'one-pieces' | 'cover-ups',

  sizes: \['XS', 'S', 'M', 'L', 'XL'\],

  colors: \['Black', 'White', 'Terracotta'\],

  inStock: true,

}

## Code Conventions

- **Language:** TypeScript  
- **Components:** functional, named exports only  
- **Styling:** Tailwind classes only — no inline styles, no .css files  
- **`'use client'`** at top of any file using hooks or event handlers  
- **Comments:** short comment above every function explaining what it does  
- Always handle **loading** and **error** states

## Important — Do Not Touch

- The existing auto-push and Vercel deploy-hook setup  
- Do not overwrite or break the existing deploy configuration

## Progress Tracker

### Done

- [x] Next.js project created  
- [x] Tailwind configured  
- [x] Site mostly built and styled  
- [x] Live at bettybeachstudios.com  
- [x] Auto-push and deploy hook set up

### In Progress

- [ ] Improve existing pages  
- [ ] Set up shop / product listing page  
- [ ] Set up individual product pages  
- [ ] Set up cart

### Known Issues

*Add bugs or things to fix here*

### Next Steps

*Add upcoming tasks here*  
