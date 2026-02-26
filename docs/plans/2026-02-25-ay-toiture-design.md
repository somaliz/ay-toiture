# TOITURE PACA - Website Design Document

**Date:** 2026-02-25
**Project:** Ay Toiture (Roofing Service Website)
**Status:** Design Approved - Ready for Implementation

---

## Project Overview

### Business Information
- **Brand Name:** TOITURE PACA
- **Legal Name:** ZAOUALI AYMEN (footer & legal page only - NOT public)
- **Domain:** https://www.ay-toiture.fr
- **Location:** 133 Rue du Jeu de Paume, 83200 Toulon, France
- **SIREN:** 994859908
- **Legal Structure:** Entrepreneur individuel

### Contact Information
- **Phone:** 06 04 05 35 10
- **Email:** director@ay-toiture.fr
- **Hours:** Monday-Saturday, 8am-7pm

### Service Area
- **Primary:** Var department (83)
- **Extended:** PACA region (Provence-Alpes-Côte d'Azur)
- **Coverage:** All Var cities

### Core Services
1. Charpente (roof framing)
2. Couverture (neuf & rénovation) - roofing new & renovation
3. Inspection toiture - roof inspection
4. **Diagnostic toiture** - roof diagnostic
5. Réparation de fuites - leak repair
6. Remplacement de tuiles - tile replacement
7. Entretien toiture - roof maintenance
8. Devis gratuit - free quotes

---

## Technology Stack

### Framework & Tools
- **React 18.3.1** - Functional components with hooks
- **TypeScript** - Full type safety
- **Vite 5.4.19** - Build tool & dev server
- **React Router DOM 6.30.1** - Client-side routing

### UI & Design
- **Tailwind CSS 3.4.17** - Utility-first styling
- **shadcn/ui** - Pre-built accessible components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon system
- **Custom Design Tokens** - CSS variables for theming

### Typography
- **Outfit** - Headings and display text (Google Fonts)
- **Inter** - Body text and UI elements (Google Fonts)

### SEO & Meta
- **React Helmet Async 2.0.5** - Dynamic meta tags
- **Schema.org** - Structured data (JSON-LD)
- **Open Graph** tags for social sharing

---

## Design System

### Color Palette
- **Primary:** Dark Blue (`--primary`) - Trust, professionalism, roofing expertise
- **Accent:** Orange/Red (`--accent`) - Call-to-action, urgency (leaks, repairs)
- **Neutral:** Warm Grays (`--muted`) - Backgrounds, borders
- **Dark Mode:** Full CSS variable support

### Typography Scale
- **Display:** Outfit (bold, distinctive)
- **Headings:** Outfit (semibold, medium)
- **Body:** Inter (regular, leading-relaxed)
- **Small:** Inter (regular, text-sm)

### Spacing & Layout
- Container max-width: `1280px` (xl breakpoint)
- Section padding: `py-16 md:py-24`
- Grid layouts: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Mobile-first responsive design

### Animation System
- Fade-up animations on scroll
- Stagger delays for cascading reveals
- Hover state transitions
- Smooth page transitions

---

## Page Structure

### Main Landing Page (`Index.tsx`)

#### Section 1: Hero Section
- **Headline:** Professional roofing services in Var & PACA
- **Subheadline:** Charpente, couverture, réparation, entretien
- **CTAs:**
  - Primary: "Demander un devis gratuit" (phone)
  - Secondary: Contact form
- **Background:** Placeholder roofing project image

#### Section 2: Features Section (Trust Signals)
- ✅ Devis gratuit
- ✅ Artisans qualifiés
- ✅ Assurance décennale
- ✅ Intervention rapide
- ✅ Garantie travaux

#### Section 3: Services Section
List of 8 core services with icons and descriptions:
1. Charpente
2. Couverture (neuf & rénovation)
3. Inspection toiture
4. Diagnostic toiture
5. Réparation de fuites
6. Remplacement de tuiles
7. Entretien toiture
8. Devis gratuit

#### Section 4: Process Section
1. Contactez-nous (tél/email/form)
2. Diagnostic gratuit sur place
3. Devis détaillé sous 24h
4. Réalisation des travaux
5. Satisfaction garantie

#### Section 5: Gallery Section (Categorized)
- **Tabs:** "Tous" | "Charpente" | "Couverture" | "Réparations"
- **Placeholder images** (12-15 photos total, 3-4 per category)
- Lightbox for full-screen viewing

#### Section 6: Testimonials Section
- 3-4 placeholder testimonials
- **CTA Button:** "Laissez un avis sur Google" (placeholder link for future GBP)

#### Section 7: Pricing Section
- Diagnostic: Gratuit
- Réparation: À partir de X€
- Entretien annuel: À partir de Y€
- **Note:** "Prix selon surface et complexité - Devis gratuit"

#### Section 8: Zones Section
- **Base Location:** Toulon (83200)
- **Coverage:** All Var (83) cities
- **Extended:** PACA region
- **City List:** Toulon, La Seyne-sur-Mer, Hyères, Saint-Raphaël, Fréjus, Draguignan, Brignoles, etc.

#### Section 9: FAQ Section
5-6 roofing-specific questions:
- Combien coûte une réparation de toiture ?
- Intervenez-vous en urgence ?
- Quelle garantie pour les travaux ?
- Assurez-vous le décennale ?
- Comment obtenir un devis ?
- (Optional) Quel est le délai d'intervention ?

#### Section 10: Contact Section
- **Phone:** 06 04 05 35 10
- **Email:** director@ay-toiture.fr
- **Address:** 133 Rue du Jeu de Paume, 83200 Toulon
- **Contact form** (name, email, phone, message)
- **Map placeholder**

### City Pages (`CityPage.tsx`)
- Dynamic pages for each Var city
- Localized content: "Couverture à [City]"
- Same structure as landing page but city-specific
- Nearby cities links
- Local SEO optimization

### 404 Page (`NotFound.tsx`)
- Keep existing structure
- Helpful navigation back to home

---

## Technical Architecture

### Components to Adapt

**Layout Components:**
- `Header.tsx` - Update brand name, navigation, contact info
- `Footer.tsx` - Update business info, add legal name (ZAOUALI AYMEN)

**Section Components:**
- `HeroSection.tsx` - Replace headline, CTAs
- `FeaturesSection.tsx` - Replace features with roofing trust signals
- `ServicesSection.tsx` - Replace with 8 roofing services
- `ProcessSection.tsx` - Adapt process (contact → diagnostic → quote → work)
- `CategorizedGallery.tsx` - Keep structure, update categories
- `TestimonialsSection.tsx` - Add "Laissez un avis" button
- `PricingSection.tsx` - Adapt pricing examples
- `ZonesSection.tsx` - Update to Var + PACA
- `FAQSection.tsx` - Replace with roofing FAQs
- `ContactSection.tsx` - Update contact info

**DELETE:**
- `ValorisationSection.tsx` (recycling content - not relevant)

**UI Components:**
- Keep ALL `src/components/ui/*` unchanged

### Data Files (NEW)

**Create `src/data/services.ts`:**
```typescript
export const services = [
  {
    title: "Charpente",
    description: "Fabrication et réparation de charpentes bois et métalliques",
    icon: "Home"
  },
  {
    title: "Couverture (neuf & rénovation)",
    description: "Pose et rénovation de toitures tuiles, ardoises, zinc",
    icon: "Home"
  },
  {
    title: "Inspection toiture",
    description: "Vérification complète de l'état de votre toiture",
    icon: "Search"
  },
  {
    title: "Diagnostic toiture",
    description: "Diagnostic approfondi pour identifier les problèmes",
    icon: "ClipboardCheck"
  },
  {
    title: "Réparation de fuites",
    description: "Recherche et réparation de fuites et infiltrations",
    icon: "Droplet"
  },
  {
    title: "Remplacement de tuiles",
    description: "Remplacement de tuiles cassées ou endommagées",
    icon: "Hammer"
  },
  {
    title: "Entretien toiture",
    description: "Entretien préventif pour prolonger la durée de vie",
    icon: "Wrench"
  },
  {
    title: "Devis gratuit",
    description: "Demandez votre devis gratuit sans engagement",
    icon: "FileText"
  }
];
```

**Create `src/data/photos.ts`:**
```typescript
export const photos = [
  // Charpente category (3-4 placeholder images)
  {
    id: 1,
    src: "/images/charpente/charpente-1.jpg",
    category: "charpente",
    title: "Charpente bois Toulon",
    description: "Rénovation charpente"
  },
  // ... more photos

  // Couverture category (3-4 placeholder images)
  // ... photos

  // Réparation category (3-4 placeholder images)
  // ... photos
];
```

**Create `src/data/testimonials.ts`:**
```typescript
export const testimonials = [
  {
    id: 1,
    name: "Marie D.",
    city: "Toulon",
    rating: 5,
    text: "Excellent travail sur ma toiture. Rapide et propre.",
    date: "Février 2025"
  },
  // ... 3-4 total testimonials
];
```

**Adapt `src/data/cities.ts`:**
- Copy from DebarrasPower
- Verify all Var cities are included
- Ensure 20-30 cities for SEO

---

## SEO Strategy

### Target Keywords
- **Primary:** couverture var, toiture toulon, charpente var, réparation toiture
- **Secondary:** diagnostic toiture, entretien toiture, couverture 83, artisan couvreur
- **Local:** [city] + toiture (e.g., "toiture hyères", "couverture fréjus")

### Meta Tags (Index.tsx)
```html
<title>Toiture PACA | Charpente & Couverture dans le Var (83) - Devis Gratuit</title>
<meta name="description" content="Toiture PACA : artisan couvreur à Toulon. Charpente, couverture, réparation, entretien, diagnostic toiture dans le Var et PACA. Devis gratuit, intervention rapide." />
<meta name="keywords" content="couverture var, toiture toulon, charpente var, réparation toiture, diagnostic toiture, entretien toiture, couvreur 83, artisan toiture" />
<link rel="canonical" href="https://www.ay-toiture.fr" />
```

### Schema.org Structured Data

#### 1. LocalBusiness Schema
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "TOITURE PACA",
  "description": "Artisan couvreur à Toulon. Charpente, couverture, réparation, entretien et diagnostic toiture dans le Var et PACA.",
  "url": "https://www.ay-toiture.fr",
  "telephone": "+33604053510",
  "email": "director@ay-toiture.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "133 Rue du Jeu de Paume",
    "addressLocality": "Toulon",
    "postalCode": "83200",
    "addressCountry": "FR"
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Var (83), PACA, France"
  },
  "priceRange": "€€",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "08:00",
    "closes": "19:00"
  }
}
```

**Note:** No `aggregateRating` initially (Google Business Profile doesn't exist yet)

#### 2. FAQPage Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Combien coûte une réparation de toiture ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le prix dépend de l'étendue des dégâts et des matériaux nécessaires. Demandez un devis gratuit sur place pour une estimation précise."
      }
    },
    {
      "@type": "Question",
      "name": "Intervenez-vous en urgence ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, nous intervenons en urgence pour les fuites et dégâts importants. Contactez-nous au 06 04 05 35 10."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle garantie pour les travaux ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tous nos travaux sont garantis. Nous disposons de l'assurance décennale pour votre protection."
      }
    },
    {
      "@type": "Question",
      "name": "Assurez-vous le décennale ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, nous sommes assurés avec la garantie décennale obligatoire pour tous travaux de couverture et charpente."
      }
    },
    {
      "@type": "Question",
      "name": "Comment obtenir un devis ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Par téléphone au 06 04 05 35 10, par email à director@ay-toiture.fr ou via le formulaire de contact. Devis gratuit sous 24h."
      }
    }
  ]
}
```

### Local SEO Strategy
- City-specific landing pages: `/toulon`, `/hyeres`, `/frejus`, etc.
- Each with localized Schema.org and content
- Geographic keywords in headings and descriptions

---

## Implementation Phases

### Phase 1: Project Setup ✅
- [x] Create new directory `../ay-toiture`
- [x] Copy all files from `debarras-power-pro`
- [x] Initialize new git repository
- [ ] Update `package.json`:
  - name: "ay-toiture"
  - description: "Site vitrine pour TOITURE PACA - artisan couvreur dans le Var"
- [ ] Run `npm install` to set up new node_modules

### Phase 2: Branding & Design Updates
- [ ] Update `package.json` project metadata
- [ ] Update `index.html` title
- [ ] Replace brand name: "DebarrasPower" → "TOITURE PACA" (global search)
- [ ] Update contact info everywhere:
  - Phone: 06 04 05 35 10
  - Email: director@ay-toiture.fr
  - Address: 133 Rue du Jeu de Paume, 83200 Toulon
- [ ] Update Footer with legal name (ZAOUALI AYMEN) + SIREN
- [ ] Update logo/brand text in Header

### Phase 3: Content Adaptation

#### Hero Section
- [ ] Update headline: "Votre Artisan Couvreur dans le Var & PACA"
- [ ] Update subheadline: "Charpente, couverture, réparation, entretien"
- [ ] Update CTAs: "Demander un devis gratuit"
- [ ] Add placeholder hero image

#### Features Section
- [ ] Update with roofing trust signals:
  - Devis gratuit
  - Artisans qualifiés
  - Assurance décennale
  - Intervention rapide
  - Garantie travaux

#### Services Section
- [ ] Create `src/data/services.ts` with 8 roofing services
- [ ] Update ServicesSection to use roofing data
- [ ] Update service cards with correct icons

#### Process Section
- [ ] Adapt process for roofing:
  1. Contactez-nous
  2. Diagnostic gratuit
  3. Devis sous 24h
  4. Réalisation travaux
  5. Satisfaction garantie

#### Gallery Section
- [ ] Create `src/data/photos.ts` with placeholder images
- [ ] Update gallery categories: "Tous" | "Charpente" | "Couverture" | "Réparations"
- [ ] Add 12-15 placeholder photos (3-4 per category)
- [ ] Test lightbox functionality

#### Testimonials Section
- [ ] Create `src/data/testimonials.ts` with 3-4 placeholder testimonials
- [ ] Add "Laissez un avis sur Google" button (placeholder link)

#### Pricing Section
- [ ] Remove valorisation/recycling content
- [ ] Add roofing pricing examples:
  - Diagnostic: Gratuit
  - Réparation: À partir de...
  - Entretien: À partir de...
- [ ] Add note: "Prix selon surface et complexité"

#### Zones Section
- [ ] Update base location: Toulon (83200)
- [ ] Update coverage: Var + PACA
- [ ] Verify cities list includes all Var cities

#### FAQ Section
- [ ] Replace with 5-6 roofing FAQs
- [ ] Update FAQ Schema in Index.tsx

#### Contact Section
- [ ] Update phone: 06 04 05 35 10
- [ ] Update email: director@ay-toiture.fr
- [ ] Update address: 133 Rue du Jeu de Paume, 83200 Toulon

### Phase 4: Schema.org & SEO
- [ ] Update LocalBusiness schema for TOITURE PACA
- [ ] Remove aggregateRating (no GBP yet)
- [ ] Update FAQ schema with roofing questions
- [ ] Update meta tags on Index.tsx
- [ ] Update Open Graph tags
- [ ] Verify canonical URL: https://www.ay-toiture.fr

### Phase 5: City Pages
- [ ] Update CityPage.tsx content for roofing services
- [ ] Verify city routing works
- [ ] Test a few city pages (toulon, hyeres, frejus)

### Phase 6: Cleanup & Testing
- [ ] Delete `ValorisationSection.tsx`
- [ ] Remove ValorisationSection import from Index.tsx
- [ ] Test all pages and links
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Validate Schema.org markup (Google Rich Results Test)
- [ ] Check all meta tags
- [ ] Run `npm run build` - verify production build works
- [ ] Run `npm run preview` - test production build locally

### Phase 7: Git & Documentation
- [ ] Create initial commit: "feat: initial TOITURE PACA website from template"
- [ ] Create README.md with project info
- [ ] Add this design document to git
- [ ] Push to remote repository (if needed)

### Phase 8: Deployment (Future)
- [ ] Deploy to Vercel/Netlify
- [ ] Set up custom domain: ay-toiture.fr
- [ ] Test live site functionality
- [ ] Set up Google Search Console
- [ ] Create Google Business Profile (when ready)
- [ ] Update review link in testimonials section

---

## File Changes Summary

### Files to DELETE
- `src/components/ValorisationSection.tsx`

### Files to CREATE
- `src/data/services.ts` - Roofing services data
- `src/data/photos.ts` - Gallery photos with categories
- `src/data/testimonials.ts` - Customer testimonials
- `docs/plans/2026-02-25-ay-toiture-design.md` - This document

### Files to MODIFY (Major)
- `package.json` - Update project name, description
- `index.html` - Update title
- `src/App.tsx` - Review, may not need changes
- `src/pages/Index.tsx` - Update meta tags, Schema.org, remove ValorisationSection
- `src/pages/CityPage.tsx` - Adapt content for roofing
- `src/components/Header.tsx` - Update brand name, contact info
- `src/components/Footer.tsx` - Update business info, add legal name
- `src/components/HeroSection.tsx` - Update headline, CTAs
- `src/components/FeaturesSection.tsx` - Update trust signals
- `src/components/ServicesSection.tsx` - Use roofing services data
- `src/components/ProcessSection.tsx` - Adapt process
- `src/components/TestimonialsSection.tsx` - Add review button
- `src/components/PricingSection.tsx` - Adapt pricing
- `src/components/ZonesSection.tsx` - Update service area
- `src/components/FAQSection.tsx` - Roofing FAQs
- `src/components/ContactSection.tsx` - Update contact info

### Files to KEEP UNCHANGED
- All `src/components/ui/*` - shadcn/ui components
- `src/lib/utils.ts` - Utility functions
- `tailwind.config.ts` - Design system
- `vite.config.ts` - Build configuration
- `tsconfig*.json` - TypeScript configuration

---

## Success Criteria

### Must Have
- [x] Design approved by stakeholder
- [ ] All 8 roofing services displayed
- [ ] Contact info correct and consistent
- [ ] Legal name only in footer (not on homepage)
- [ ] Placeholder gallery with 3 categories
- [ ] Placeholder testimonials + review button
- [ ] Schema.org markup valid
- [ ] Mobile responsive
- [ ] Production build succeeds

### Should Have
- [ ] City pages work dynamically
- [ ] FAQ section has 5-6 questions
- [ ] Pricing section adapted for roofing
- [ ] All links work
- [ ] SEO meta tags complete

### Could Have (Future)
- [ ] Real project photos (replace placeholders)
- [ ] Real customer testimonials
- [ ] Google Business Profile integration
- [ ] Before/after gallery
- [ ] Project case studies

---

## Notes & Considerations

### Branding
- **CRITICAL:** Do NOT display "ZAOUALI AYMEN" on homepage or main sections
- Legal name ONLY appears in:
  - Footer legal section
  - Mentions Légales page (if created)
- Public brand is ALWAYS "TOITURE PACA"

### Google Business Profile
- GBP doesn't exist yet
- Add placeholder link for "Laissez un avis" button
- Update link when GBP is created
- Consider adding aggregateRating to Schema.org after GBP is live

### Images
- All gallery images are placeholders for now
- Use descriptive filenames: `charpente-1.jpg`, `couverture-1.jpg`, `reparation-1.jpg`
- Organize in folders: `public/images/charpente/`, `public/images/couverture/`, `public/images/reparation/`
- Replace with real project photos as they become available

### Content Localization
- All user-facing content in French
- Code and documentation in English
- City pages dynamically generate French content

### Performance Targets
- Lighthouse score: 90+ across all categories
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Mobile optimization priority

---

## Next Steps

1. ✅ Design approved
2. ✅ New project created (`../ay-toiture`)
3. ✅ Design document written
4. ⏭️ **Invoke `writing-plans` skill** to create detailed implementation plan
5. Execute implementation plan
6. Deploy to production
7. Set up Google Business Profile (future)

---

**Document Status:** ✅ Complete - Ready for Implementation Planning

**Last Updated:** 2026-02-25
**Maintained By:** Development Team
