# DebarrasPower Production-Ready Design Document

**Date**: 2026-02-24
**Timeline**: 3-4 weeks (Sequential Phases approach)
**Status**: Approved ✅
**Approach**: Sequential Phases with thorough mobile testing

---

## Executive Summary

Design for transforming DebarrasPower from a functional website to a production-ready platform showcasing 115+ real client photos, 3-tier pricing model, and legal compliance for French regulations on secondhand goods.

**Key Decisions:**
- **Photo Strategy**: Convert all 115+ HEIC photos, launch with curated 40-50 best
- **Legal Model**: Partnership approach (Approach B) - no direct purchasing, avoids ROM requirements
- **Pricing**: Transparent 3-tier model (Gratuit/Valorisation/Classique)
- **Testing**: Thorough Playwright testing across 5 breakpoints
- **Copywriting**: Professional French copy refined by Codex with legal compliance

---

## 1. Photo Processing Strategy

### Input
- 115+ HEIC photos from client
- Organized in: Debarras classique, Brocante, Syndrome de diogene
- Root folder: Mixed operations

### Output Structure
```
public/images/
├── hero/              [8-10 photos] - Best action shots
├── classique/         [15 photos] - Standard clearing
├── objets-valeur/     [12-15 photos] - Valuables (renamed from brocante)
├── diogene/          [5-8 photos] - Hoarding situations
├── team/             [3-5 photos] - Team/equipment
└── before-after/     [5-10 pairs if available]
```

### Conversion Pipeline
1. **HEIC → JPEG** (compatibility)
2. **Generate WebP** (performance)
3. **Create thumbnails** (400px for previews)
4. **Optimize**: Max 1920px width, 85% quality JPEG, 80% WebP
5. **Lazy loading**: All images below fold

### Selection Criteria
- **Hero**: Dramatic before/afters, team action, professional equipment
- **Classique**: Clear operation shots, diverse property types
- **Objets de Valeur**: High-quality shots (respectful backgrounds)
- **Diogène**: Respectful, focus on transformation not mess
- **Team**: Professional, branded if available

---

## 2. New Components Architecture

### Components to Create

#### 2.1 PricingSection (HIGH PRIORITY)
```tsx
<PricingSection>
  Three pricing cards:
  1. Débarras Gratuit - "Quand la valeur de reprise couvre le coût"
  2. Débarras avec Valorisation - "Si la valeur dépasse, nous vous versons la différence"
  3. Débarras Classique - "Tarif standard selon volume et accessibilité"

  Legal: "Tarifs établis sur devis après visite. La valorisation potentielle
  des biens est évaluée selon leur état et leur marché."
</PricingSection>
```

#### 2.2 ProcessSection (HIGH PRIORITY)
```tsx
<ProcessSection>
  4 steps with Codex-refined French copy:
  1. Contact & Devis - "Contactez-nous par téléphone, e-mail ou formulaire..."
  2. Visite & Évaluation - "Un responsable se déplace sur place..."
  3. Intervention - "Nous intervenons à la date convenue..."
  4. Recyclage & Don - "Chaque élément est orienté vers la bonne destination..."
</ProcessSection>
```

#### 2.3 ValorisationSection (HIGH PRIORITY - APPROACH B)
```tsx
<ValorisationSection>
  Title: "Valorisation de vos biens"
  Subtitle: "Tri, réemploi, partenariats spécialisés"

  Text: "Nous trions les objets réutilisables pour réduire le coût du débarras.
  Pour les biens nécessitant une expertise spécifique (antiquités, collection),
  nous pouvons vous orienter vers des partenaires spécialisés."

  3 Services:
  1. Tri et réemploi
  2. Partenaires experts
  3. Don aux associations

  Legal: REMOVED (not needed with partnership approach)
</ValorisationSection>
```

#### 2.4 CategorizedGallery (MEDIUM PRIORITY)
```tsx
<CategorizedGallery>
  - Category filters: Tous | Classique | Valeurs | Diogène
  - Masonry grid layout (Pinterest-style)
  - Lightbox modal on click
  - 40-50 curated photos from 115+
  - Lazy loading + WebP
</CategorizedGallery>
```

#### 2.5 TestimonialsSection (MEDIUM PRIORITY)
```tsx
<TestimonialsSection>
  - Google Rating badge: 4.9/5 (87 avis)
  - 6-8 featured testimonials
  - Link to Google Reviews page
  - Before/after + quote pairs
</TestimonialsSection>
```

### Components to Modify

#### HeroSection → Add subtle carousel (5 images)
#### FAQSection → Add Radix UI Accordion
#### AboutSection → Add team photos
#### GallerySection → Replace with CategorizedGallery

### Page Component Order
```tsx
<Index>
  <Header />
  <main>
    <HeroSection />           {/* + carousel */}
    <FeaturesSection />       {/* NEW */}
    <ServicesSection />
    <ProcessSection />        {/* NEW */}
    <ValorisationSection />   {/* NEW */}
    <CategorizedGallery />    {/* NEW */}
    <TestimonialsSection />   {/* NEW */}
    <PricingSection />        {/* NEW */}
    <ZonesSection />
    <FAQSection />            {/* + accordion */}
    <ContactSection />
  </main>
  <Footer />
</Index>
```

---

## 3. Legal Compliance Framework (Approach B)

### Partnership Model - What We DON'T Do
- ❌ No direct purchasing of goods
- ❌ No reselling under DebarrasPower name
- ❌ No "rachat" terminology
- ❌ No appraisal values by DebarrasPower

### What We DO - Compliant Activities
- ✅ Identify potentially valuable items during triage
- ✅ Facilitate introductions to certified experts
- ✅ Partners provide valuations (not DebarrasPower)
- ✅ Redirection to auction houses, donation centers
- ✅ Cost reduction based on item value

### Legal Mentions Required

**ValorisationSection:**
```tsx
<p className="text-xs text-muted-foreground mt-2">
  DebarrasPower facilite la mise en relation avec des partenaires
  experts. Les estimations et transactions sont réalisées
  directement entre le client et les partenaires.
</p>
```

**PricingSection:**
```tsx
<p className="text-xs text-muted-foreground">
  Les tarifs sont établis sur devis après visite. La valorisation
  potentielle des biens est évaluée selon leur état et leur marché.
  Une confirmation écrite est fournie avant toute intervention.
</p>
```

**No Additional Requirements:**
- ❌ No ROM registration needed
- ❌ No police registry
- ❌ No brocante license
- ❌ No transaction documentation by DebarrasPower

---

## 4. Mobile Testing Strategy (Playwright)

### Breakpoint Strategy
```typescript
devices: {
  'Mobile Small': { width: 375, height: 667 },   // iPhone SE
  'Mobile Large': { width: 414, height: 896 },   // iPhone Max
  'Tablet': { width: 768, height: 1024 },        // iPad
  'Desktop': { width: 1280, height: 800 },       // Laptop
  'Wide': { width: 1920, height: 1080 }          // Large desktop
}
```

### Test Categories

#### 1. Component Tests
- Hero carousel: touch swipe, auto-rotate
- Gallery filters: tap targets, lightbox
- Pricing cards: responsive stacking
- FAQ accordion: expansion animation
- Contact form: input validation

#### 2. User Flow Tests
```typescript
test('Request quote flow', async ({ page }) => {
  await page.goto('/')
  await page.locator('#devis').scrollIntoViewIfNeeded()
  await page.locator('input[name="name"]').fill('Test User')
  await page.locator('input[name="phone"]').fill('0612345678')
  await page.locator('textarea[name="message"]').fill('Test message')
  await page.locator('button[type="submit"]').click()
})
```

#### 3. Touch Gestures
```typescript
await page.locator('.hero-carousel').swipe({ dx: -200 })
await page.locator('.gallery-item').tap()
await page.locator('.faq-trigger').tap()
```

#### 4. Visual Regression
```typescript
test('Visual consistency', async ({ page }) => {
  await page.goto('/')
  await page.waitForLoadState('networkidle')
  await expect(page).toHaveScreenshot('home-mobile.png')
})
```

#### 5. Performance Tests
- Lighthouse scores 90+
- FCP < 1.5s
- TTI < 3.5s
- Image lazy loading verification

### Testing Schedule
- **Week 1**: Setup Playwright, baseline tests
- **Week 2**: Component tests for new sections
- **Week 3**: E2E flows, touch gestures
- **Week 4**: Visual regression, performance

---

## 5. SEO & Schema Implementation

### Schema.org Structured Data

#### LocalBusiness (exists, enhance)
```json
{
  "@type": "LocalBusiness",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "87",
    "bestRating": "5"
  }
}
```

#### Service Schema (NEW)
```json
{
  "@type": "Service",
  "serviceType": "Débarras professionnel",
  "areaServed": ["Var", "Toulon", "Hyères", "Fréjus", "Draguignan"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de débarras dans le Var (83)",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Débarras Maisons & Appartements" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Débarras Caves, Greniers & Garages" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Débarras Après Décès" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Débarras Bureaux & Locaux" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Débarras Entreprises" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Enlèvement d'Encombrants" }}
    ]
  }
}
```

#### ImageObject Schema (NEW for gallery)
```json
{
  "@type": "ImageObject",
  "contentUrl": "https://debarraspower.com/images/classique-01.jpg",
  "description": "Débarras en cours dans le Var (83)",
  "author": {
    "@type": "Organization",
    "name": "DebarrasPower"
  }
}
```

### Meta Tags Optimization
```tsx
<title>DebarrasPower | Débarras Var (83) - Devis Gratuit - 4.9/5 Google</title>
<meta name="description"
  content="87 avis vérifiés 4.9/5. Débarras professionnel dans le Var.
  Maisons, appartements, bureaux. Valorisation des biens. Devis gratuit sous 24h."
/>
```

### Google Business Profile Integration
```html
<a href="https://search.google.com/local/writereview?placeid=[PLACE_ID]">
  Laisser un avis Google
</a>

<div class="google-rating">
  ⭐⭐⭐⭐⭐ 4.9/5 (87 avis)
</div>
```

### SEO Testing Checklist
- [ ] Rich Results Test passes
- [ ] Mobile-Friendly Test passes
- [ ] PageSpeed Insights 90+ all metrics
- [ ] SERP preview optimized
- [ ] All images have alt text
- [ ] Meta descriptions unique per page
- [ ] Canonical URLs set
- [ ] Local Business schema validates

---

## 6. French Copywriting Standards (Codex-Refined)

### Tone & Style
- Professional and trustworthy
- Empathetic (especially for after-death services)
- Clear and direct
- Vouvoiement (formal vous)
- 2-3 sentences per point
- Balance empathy, transparency, and legal clarity

### Example Copy Patterns

**Section Introduction:**
```
"Lors de chaque débarras dans le Var (83), nous isolons avec soin les biens
susceptibles d'avoir une valeur marchande. Notre méthode privilégie la
traçabilité, la transparence et votre validation à chaque étape."
```

**Service Points:**
```
1. [Verb] + [Specific Action]
   "Nous réalisons un tri précis sur place pour repérer les objets
   potentiellement valorisables. Les biens concernés sont mis à part,
   protégés et signalés avant toute décision."
```

**Legal Mentions:**
```
"Les valorisations communiquées avant expertise sont indicatives et
non contractuelles. Les estimations engageant une valeur de marché
sont réalisées par des professionnels certifiés."
```

---

## 7. Implementation Phases

### Phase 1: Foundation (Week 1-2)

**Photo Processing:**
- Convert all 115+ HEIC to JPEG/WebP
- Categorize into folders
- Select best 40-50 for launch
- Create photo metadata file

**Core Components:**
- PricingSection with 3-tier model
- ProcessSection with 4 steps
- ValorisationSection (partnership model)
- Update existing components with new copy

**Testing Setup:**
- Install and configure Playwright
- Create baseline tests
- Set up 5 breakpoint devices

### Phase 2: Enhancement (Week 3)

**Gallery & Visuals:**
- CategorizedGallery component
- Hero carousel (5 images)
- Before/after comparisons
- Image lazy loading

**User Experience:**
- TestimonialsSection (87 reviews)
- FAQ accordion upgrade
- Smooth scroll animations
- Mobile touch gestures

**Content:**
- Add Schema.org structured data
- Optimize meta tags
- Google Business Profile integration

### Phase 3: Polish & Launch (Week 4)

**Testing:**
- E2E flow tests
- Visual regression tests
- Performance audits (Lighthouse 90+)
- Cross-browser testing

**SEO:**
- Rich Results validation
- Image alt text audit
- Open Graph tags
- Sitemap updates

**Launch Preparation:**
- Final staging review
- Backup current site
- DNS check
- SSL verification
- Analytics setup

---

## 8. Success Criteria

### Functional Requirements
- ✅ 40-50 real client photos showcased
- ✅ 3-tier pricing model clearly explained
- ✅ Partnership model for valuables (legal compliant)
- ✅ Mobile-responsive across 5 breakpoints
- ✅ All Playwright tests passing

### Performance Requirements
- ✅ Lighthouse Performance: 90+
- ✅ First Contentful Paint: < 1.5s
- ✅ Time to Interactive: < 3.5s
- ✅ All images optimized (WebP + lazy loading)

### SEO Requirements
- ✅ Schema.org validated (LocalBusiness, Service, FAQ, Image)
- ✅ Google rating prominent (4.9/5, 87 reviews)
- ✅ Meta descriptions unique per page
- ✅ Mobile-Friendly Test pass

### Legal Requirements
- ✅ No "rachat" or direct purchasing claims
- ✅ Partnership model clearly explained
- ✅ Disclaimers where needed
- ✅ ROM compliance avoided

---

## 9. Technical Stack

### Existing (Maintain)
- React 18.3.1 + TypeScript
- Tailwind CSS 3.4.17
- Vite 5.4.19
- shadcn/ui components
- React Router DOM 6.30.1

### New/Additions
- Playwright (testing)
- embla-carousel-react (carousel)
- React Hook Form + Zod (forms)
- Lucide React (icons)

---

## 10. File Structure

### New Components
```
src/components/
├── PricingSection.tsx
├── ProcessSection.tsx
├── ValorisationSection.tsx
├── CategorizedGallery.tsx
├── TestimonialsSection.tsx
├── HeroCarousel.tsx
└── FeaturesSection.tsx
```

### New Data Files
```
src/data/
├── photos.ts
├── testimonials.ts
└── pricing.ts
```

### New Tests
```
tests/
├── components/
│   ├── PricingSection.spec.tsx
│   ├── Gallery.spec.tsx
│   └── ContactForm.spec.tsx
├── flows/
│   ├── quote-request.spec.ts
│   └── gallery-view.spec.ts
└── visual/
    └── home-page.spec.ts
```

---

## 11. Risks & Mitigations

### Risk: Photo processing delays
**Mitigation**: Start immediately in Week 1, use batch conversion tools

### Risk: Legal compliance complexity
**Mitigation**: Partnership approach (B) avoids ROM requirements, simplified language

### Risk: Mobile testing reveals major issues
**Mitigation**: Playwright setup Week 1, continuous testing throughout

### Risk: Performance issues with 40-50 photos
**Mitigation**: WebP format, lazy loading, thumbnail previews, CDN

### Risk: Client feedback requires changes
**Mitigation**: Weekly check-ins, staging environment for preview

---

## 12. Next Steps

After this design is approved:

1. **Invoke writing-plans skill** to create detailed implementation plan
2. **Begin photo processing** (immediate - Week 1 priority)
3. **Setup Playwright testing** (Week 1)
4. **Create new components** (Week 1-2)
5. **Mobile testing throughout** (Week 1-4)

---

## Appendix: Key Resources

### Legal References (France)
- Service-Public: Brocanteur/Antiquaire requirements
- Code pénal: Articles 321-1 to 321-8 (ROM)
- DGE FAQ: Vente de biens d'occasion

### Competitors Analyzed
- gillesdebarrasvar.fr
- debarras-eco.fr
- debarrasmaisonpaca.fr

### Documentation
- CLAUDE.md - Project documentation
- AGENTS.md - AI agent guidelines
- PROJECT_REVIEW.md - Detailed analysis

---

**Design Status**: ✅ APPROVED
**Ready for Implementation Planning**: YES
**Estimated Timeline**: 3-4 weeks
**Risk Level**: LOW (Partnership model avoids complex regulations)
