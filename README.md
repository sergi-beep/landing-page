# Stimuli Digital Landing Page

Premium marketing landing page built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ⚡ Next.js 14 App Router with SSG for optimal SEO
- 🎨 Premium design inspired by Attio and Linear
- 📱 Fully responsive and mobile-first
- 🚀 Optimized performance and Core Web Vitals
- 📊 Video testimonials showcase (14 case studies)
- 🎯 Integrated Calendly booking system
- 🔍 SEO optimized with metadata and sitemap

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Static Export (Vercel, Netlify, GitHub Pages)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main landing page
│   ├── globals.css      # Global styles
│   └── sitemap.ts       # SEO sitemap
├── public/
│   ├── images/          # Logo and brand assets
│   └── robots.txt       # SEO robots file
├── CLAUDE.md            # AI assistant project guidelines
└── tailwind.config.ts   # Tailwind configuration
```

## Deployment

The site is configured for static export. Deploy to any static hosting:

### Vercel (Recommended)
```bash
vercel --prod
```

### Netlify
```bash
netlify deploy --prod --dir=out
```

### GitHub Pages
```bash
npm run build
# Deploy the 'out' folder
```

## Brand Assets

- Logo files located in `/public/images/`
- Brand colors defined in `tailwind.config.ts`
- Full style guide in `/brand_assets/`

## Contact

For inquiries, visit [https://calendly.com/sergi-feq/30min](https://calendly.com/sergi-feq/30min)

---

Built with ❤️ for Stimuli Digital
