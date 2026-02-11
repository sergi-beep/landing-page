# Stimuli Digital Landing Page - Development Documentation

## Project Overview
Premium landing page for Stimuli Digital, a fractional CTO service exclusively serving B2B sales and marketing agencies ($5M+ ARR).

**Live URL**: https://stimulidigital.com
**Repository**: https://github.com/Stimuli-Digital/marketing-landing-page

---

## Tech Stack

### Core Technologies
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (optimized for static export)
- **Fonts**: Sloth (custom brand font with weights: Regular 400, SemiBold 600, Bold 700, ExtraBold 800)

### Why These Choices?

#### Next.js 14 (App Router)
- **SEO Excellence**: Server-side rendering, automatic sitemap generation, meta tag optimization
- **Performance**: Automatic image optimization, code splitting, lazy loading
- **Developer Experience**: File-based routing, API routes, TypeScript support
- **Production Ready**: Used by companies like Netflix, Uber, TikTok

#### Tailwind CSS
- **Rapid Development**: Utility-first approach speeds up implementation
- **Consistency**: Design tokens ensure brand consistency
- **Performance**: Purges unused CSS, resulting in minimal bundle size
- **Customization**: Extended with brand colors and custom animations

---

## Project Structure

```
marketing-landing-page/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata & structured data
│   ├── page.tsx            # Main landing page component
│   └── globals.css         # Global styles, font faces, custom utilities
├── public/
│   ├── images/
│   │   ├── logos/
│   │   │   ├── logo-full.png       # Full logo (symbol + text)
│   │   │   ├── logo-symbol.png     # Symbol only
│   │   │   └── clients/            # Client logos for social proof
│   │   ├── team/
│   │   │   ├── sergi.jpeg          # Sergi headshot
│   │   │   └── Rezi.jpeg           # Rezi headshot
│   │   ├── testimonials/
│   │   │   └── thumbnail-[1-5].png # YouTube video thumbnails
│   │   └── graphics/
│   │       └── shape-[1-4].png     # 3D chrome/glass graphics
│   ├── fonts/
│   │   ├── Sloth-Regular.ttf
│   │   ├── Sloth-SemiBold.ttf
│   │   ├── SLOTH BOLD.ttf
│   │   └── Sloth Extrabold.ttf
│   ├── sitemap.xml         # SEO sitemap
│   └── robots.txt          # Search engine crawler instructions
├── tailwind.config.ts      # Tailwind configuration with brand colors
├── CLAUDE.md               # Project instructions for AI assistants
└── DEVELOPMENT.md          # This file
```

---

## Design System

### Brand Colors
```typescript
colors: {
  brand: {
    blue: "#0066FF",    // Primary brand color (energetic blue)
    sky: "#38BDF8",     // Clean sky blue (accents)
    black: "#0F172A",   // Deep black (text, dark sections)
    white: "#FFFFFF",   // Clean white
  }
}
```

### Typography Scale
- **Sloth ExtraBold (800)**: Large headlines (h1)
- **Sloth Bold (700)**: Section headings (h2, h3)
- **Sloth SemiBold (600)**: Subheadings, buttons, emphasis
- **Sloth Regular (400)**: Body text, descriptions

### Spacing System
Follows Tailwind's default 4px base scale:
- Micro: `gap-2` (8px), `gap-3` (12px)
- Small: `gap-4` (16px), `gap-6` (24px)
- Medium: `gap-8` (32px), `gap-12` (48px)
- Large: `gap-16` (64px), `gap-20` (80px)
- XL: `gap-32` (128px) for section spacing

### Component Patterns

#### Buttons
```tsx
// Primary CTA
<Link
  href="https://calendly.com/sergi-feq/30min"
  className="px-8 py-4 bg-brand-blue text-white rounded-xl font-semibold hover:bg-brand-blue/90 transition-all"
>
  Book Discovery Call
</Link>

// Secondary CTA
<button className="px-8 py-4 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all">
  Learn More
</button>
```

#### Cards
```tsx
// Standard card with hover effect
<div className="p-10 rounded-2xl border border-gray-200 hover:border-brand-blue/30 transition-all duration-300 hover:shadow-lg bg-white">
  {/* Content */}
</div>
```

#### Gradients
```tsx
// Subtle background gradient
<div className="bg-gradient-to-b from-brand-blue/[0.02] via-white to-white">

// Glass morphism effect
<div className="glass"> {/* Defined in globals.css */}
```

---

## Page Sections

### 1. Hero Section
**Purpose**: Capture attention, communicate core value proposition, create scarcity
**Key Elements**:
- Scarcity badge: "1 of 6 Spots Available" (pulsing indicator)
- Direct headline addressing pain: "Your systems are breaking. We'll fix them."
- Clear ICP qualifier: "B2B sales & marketing agencies doing $5M+ ARR"
- Dual CTA: Primary (Calendly) + Secondary (scroll to case studies)
- Trust indicators: Week 1 delivery, $12k/mo savings, 7+ month retention
- Client logos with grayscale hover effect

**Design Notes**:
- Animated 3D graphics (subtle, non-distracting)
- Soft gradient background for warmth
- Large typography for impact (72px headlines on desktop)

### 2. Who This Is For Section
**Purpose**: Pre-qualify visitors, filter out poor-fit prospects
**Key Elements**:
- Side-by-side comparison: "Perfect fit if you" vs "Not a fit if you"
- Specific pain points in visitor's language
- Clear exclusions to build exclusivity

### 3. The Problem Section
**Purpose**: Surface latent pain, make visitors feel understood
**Key Elements**:
- Three core problems: Broken workflows, Knowledge in heads, Expensive to scale
- Icon-based cards with hover effects

### 4. The Transformation Section
**Purpose**: Paint the vision, show concrete outcomes
**Key Elements**:
- Before/After comparison cards
- Tangible metrics: $12k/mo saved, 15+ clients per employee, 7+ month retention
- Highlight "process-driven" vs "people-driven"

### 5. How It Works Section
**Purpose**: Remove uncertainty, explain the engagement model
**Key Elements**:
- Dual-stream approach: Immediate wins + Right foundation
- Weekly sprint cadence visualization
- Emphasize "results from week one"

### 6. What We Build Section
**Purpose**: Demonstrate technical capability and domain expertise
**Key Elements**:
- 6 capability cards: Dashboards, Master inbox, Data streaming, CRM integrations, Lead database, Email infrastructure
- Domain-specific language (Smartlead, Instantly, EmailBison)

### 7. Case Studies Section
**Purpose**: Provide social proof, demonstrate results
**Key Elements**:
- 5 real video testimonials with YouTube links
- High-quality thumbnails (1920x1080)
- Key metrics badges: "$7k/mo saved", "50% cost cut", etc.
- Client details: Name, role, company
- 6th card: CTA to YouTube channel

**Video Links**:
1. Taylor Haren (Sales Automation Systems): https://www.youtube.com/watch?v=UxK4lVHdlXs
2. Enzo Carasso (C17 Lab): https://www.youtube.com/watch?v=RFEKjpiPl9Q
3. Vangates GmbH: https://www.youtube.com/watch?v=IJw_o6v4pEc
4. Naeem Alvi-Assinder (Avalanche): https://www.youtube.com/watch?v=WwxT5F_I1Ig
5. Case Study 5: https://www.youtube.com/watch?v=3GSPi5y3Kd4

### 8. Team Section
**Purpose**: Build trust through founder credibility
**Key Elements**:
- Professional headshots with LinkedIn integration
- Hover effect reveals LinkedIn icon
- Detailed bios emphasizing domain expertise
- Rezi: Technical architect background (TBC Bank)
- Sergi: Agency operator background (Revenue Ops Manager → Agency Owner)

### 9. What We're NOT Section
**Purpose**: Differentiate from alternatives, set clear expectations
**Key Elements**:
- Red X icons for visual emphasis
- 4 clear differentiators: Not generic dev shop, not no-code, not project-based, not corporate consultants

### 10. FAQ Section
**Purpose**: Handle objections proactively
**Key Questions**:
- Why not hire a developer?
- What if I'm locked into your custom system?
- How is this different from SaaS tools?
- Geographic availability
- Minimum commitment

### 11. Final CTA Section
**Purpose**: Convert warmed-up visitors
**Key Elements**:
- Dark background (brand-black) for contrast
- Emphasis on "no pressure, just a conversation"
- Single clear CTA to Calendly

### 12. Footer
**Purpose**: Branding, legal, navigation
**Key Elements**:
- Logo
- Copyright
- Tagline reinforcement

---

## SEO Implementation

### Meta Tags (layout.tsx)
- **Title**: "Fractional CTO + Dev Team for B2B Sales & Marketing Agencies"
- **Description**: 160-character pitch with key benefits
- **Keywords**: 10+ relevant terms (fractional CTO, B2B agency development, etc.)
- **Open Graph**: Social media preview optimization
- **Twitter Card**: Large image format

### Structured Data (JSON-LD)
- **@type**: Organization
- **Founders**: Rezi Dzidziguri, Sergi Cheishvili with LinkedIn URLs
- **Service**: Fractional CTO Services with detailed description
- **Contact Point**: Calendly link

### Technical SEO
- **Sitemap**: `/public/sitemap.xml`
- **Robots.txt**: Allows all crawlers, points to sitemap
- **Semantic HTML**: Proper heading hierarchy (h1 → h2 → h3)
- **Alt text**: All images have descriptive alt attributes
- **Mobile-first**: Fully responsive design

---

## Performance Optimizations

### Images
- **Next.js Image component**: Automatic optimization, lazy loading, responsive sizing
- **WebP format**: Modern format with better compression
- **Blur placeholders**: Low-quality image placeholders (LQIP)

### Fonts
- **Font display swap**: Prevents FOIT (Flash of Invisible Text)
- **Subset fonts**: Only load character ranges used
- **Preload critical fonts**: Sloth fonts loaded early

### CSS
- **Tailwind purge**: Removes unused utility classes
- **Critical CSS**: Above-the-fold styles inlined
- **Minification**: Production builds minified

### JavaScript
- **Code splitting**: Per-route bundles
- **Tree shaking**: Removes unused code
- **Lazy loading**: Non-critical components loaded on demand

---

## Content Strategy

### Tone of Voice
- **Confident but not arrogant**: Expertise shows through specificity
- **Direct and clear**: No corporate fluff or buzzwords
- **Technically credible**: Uses domain-specific language naturally
- **Casual but professional**: "Senior technical partner" vibe, not "startup meme page"

### Key Messaging Pillars
1. **Domain Expertise**: "We built agencies. We built these exact systems."
2. **Speed**: "Results from the first sprint, not after months of planning"
3. **Exclusivity**: "Only 6 agencies at a time"
4. **Transformation**: "From people-driven to process-driven"
5. **Trust**: "7+ month average retention"

### Phrases to Use
- "Process-driven, not people-driven"
- "Hire operators, not specialists"
- "Your agency runs like a swiss watch"
- "Results from the first sprint"
- "Skip the theater and just build"

### Phrases to AVOID
- "Full-stack development" (too generic)
- "Digital transformation" (corporate fluff)
- "Cutting-edge technology" (meaningless)
- "End-to-end solutions" (says nothing)

---

## Updating Content

### Slot Availability
**Location**: `app/page.tsx`, Hero section
**Current**: "1 of 6 Spots Available"

To update:
```tsx
<span className="text-[13px] font-bold text-brand-blue tracking-tight">
  X of 6 Spots Available · Boutique CTO Partnership
</span>
```

When full (0 available):
- Change CTA text to "Join the Waitlist"
- Update href from Calendly to waitlist form

### Case Studies
**Location**: `app/page.tsx`, Case Studies section

To add new testimonial:
1. Add video to YouTube channel
2. Export thumbnail (1920x1080) → save to `/public/images/testimonials/`
3. Add new card in `page.tsx`:

```tsx
<a
  href="https://www.youtube.com/watch?v=VIDEO_ID"
  target="_blank"
  rel="noopener noreferrer"
  className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-brand-blue/40 hover:shadow-xl transition-all duration-300"
>
  <div className="relative aspect-video overflow-hidden">
    <Image
      src="/images/testimonials/thumbnail-X.png"
      alt="Client Name - Company Testimonial"
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-500"
    />
    {/* Play button overlay */}
  </div>
  <div className="p-8">
    <div className="inline-block px-2 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full mb-3">
      KEY METRIC
    </div>
    <h3 className="font-bold text-lg mb-3">Headline about result</h3>
    <p className="text-gray-600 text-[15px] mb-5">
      "Client quote from video"
    </p>
    {/* Client info */}
  </div>
</a>
```

### Team Updates
**Location**: `app/page.tsx`, Team section

To add team member:
1. Save headshot (aspect ratio 4:5) → `/public/images/team/`
2. Get LinkedIn URL
3. Add card following existing pattern

---

## Development Workflow

### Local Development
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:3000)
npm run build        # Test production build
npm start            # Run production build locally
```

### Making Changes
1. **Read CLAUDE.md first**: Understand project context and brand guidelines
2. **Test locally**: Always run `npm run dev` and verify changes
3. **Check responsiveness**: Test mobile (375px), tablet (768px), desktop (1440px)
4. **Validate SEO**: Use browser DevTools to check meta tags, structured data
5. **Build before deploy**: Run `npm run build` to catch errors

### Common Tasks

#### Update Brand Colors
**File**: `tailwind.config.ts`
```typescript
colors: {
  brand: {
    blue: "#NEW_HEX",
    // ...
  }
}
```

#### Add New Section
1. Add to `app/page.tsx` after existing sections
2. Follow spacing pattern: `py-32` for vertical padding
3. Use max-width container: `max-w-[1400px] mx-auto`
4. Add id for anchor linking: `<section id="section-name">`

#### Update SEO Metadata
**File**: `app/layout.tsx`
```typescript
export const metadata: Metadata = {
  title: "New Title",
  description: "New description",
  // ...
}
```

---

## Deployment

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Vercel auto-deploys on push to `main` branch
3. Preview deployments for PRs
4. Custom domain: Set up DNS records in domain registrar

### Manual Export (Static)
```bash
npm run build        # Creates optimized production build
```
Output in `/out` directory can be deployed to any static host.

---

## Analytics & Tracking

### Google Analytics (Setup Required)
Add to `app/layout.tsx`:
```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### Recommended Tracking Events
- CTA clicks (Calendly links)
- Video testimonial plays
- Section scroll depth
- Client logo hovers
- Form submissions (if waitlist added)

---

## Troubleshooting

### Build Errors

**Issue**: Font files not loading
**Solution**: Verify font paths in `app/globals.css` match actual files in `/public/fonts/`

**Issue**: Image optimization errors
**Solution**: Ensure all images have correct dimensions and format (PNG, JPEG, WebP)

**Issue**: TypeScript errors
**Solution**: Run `npm run lint` to see detailed errors

### Performance Issues

**Issue**: Slow page load
**Solution**:
- Check image sizes (should be optimized/compressed)
- Verify Next.js Image component is used (not `<img>` tags)
- Run Lighthouse audit in Chrome DevTools

**Issue**: Layout shift (CLS)
**Solution**:
- Add explicit width/height to images
- Reserve space for dynamic content

---

## Future Enhancements

### Planned Features
- [ ] Blog section for content marketing
- [ ] Case study detail pages (individual pages per client)
- [ ] Waitlist form with email capture
- [ ] Live chat integration
- [ ] Interactive ROI calculator
- [ ] Client portal link (if built)

### Technical Debt
- [ ] Add E2E tests (Playwright)
- [ ] Set up Storybook for component documentation
- [ ] Implement incremental static regeneration (ISR)
- [ ] Add internationalization (i18n) for global expansion

---

## Resources

### Brand Assets
- **Figma**: [Design file URL if exists]
- **Style Guide**: `/brand_assets/Stimuli_STYLEGuide.pdf`
- **Logo**: `/public/images/logos/`

### External Links
- **YouTube Channel**: https://www.youtube.com/@Stimuliautomations
- **Calendly**: https://calendly.com/sergi-feq/30min
- **LinkedIn - Sergi**: https://www.linkedin.com/in/sergi-cheishvili-9b3936164/
- **LinkedIn - Rezi**: https://www.linkedin.com/in/revaz-dzidziguri-4a02941b9/

### Documentation
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs

---

## Contact

For technical questions or support:
- **Sergi Cheishvili**: sergi@stimulidigital.com (assumed, verify actual email)
- **Repository Issues**: https://github.com/Stimuli-Digital/marketing-landing-page/issues

---

**Last Updated**: February 11, 2026
**Version**: 1.0.0
**Maintainer**: Stimuli Digital Team
