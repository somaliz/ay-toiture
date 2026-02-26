# TOITURE PACA Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the DebarrasPower clearing service website template into a TOITURE PACA roofing service website with updated branding, content, and functionality.

**Architecture:** Copy the existing DebarrasPower codebase and adapt all components, data, and content for a roofing service business. Maintain the same tech stack, design system, and component architecture while replacing business-specific content.

**Tech Stack:** React 18.3.1, TypeScript, Vite 5.4.19, Tailwind CSS 3.4.17, shadcn/ui, React Router DOM 6.30.1, React Helmet Async 2.0.5

---

## Task 1: Update Project Metadata

**Files:**
- Modify: `package.json`

**Step 1: Update package.json metadata**

Replace the name and description fields:

```json
{
  "name": "ay-toiture",
  "description": "Site vitrine pour TOITURE PACA - artisan couvreur dans le Var",
  ...
}
```

**Step 2: Verify changes**

Run: `cat package.json | grep -A2 '"name"'`
Expected: Output shows `"name": "ay-toiture"`

**Step 3: Commit**

```bash
git add package.json
git commit -m "feat: update project metadata to ay-toiture"
```

---

## Task 2: Update HTML Title

**Files:**
- Modify: `index.html`

**Step 1: Update HTML title**

Replace the title in index.html:

```html
<title>Toiture PACA | Charpente & Couverture dans le Var (83)</title>
```

**Step 2: Verify changes**

Run: `cat index.html | grep title`
Expected: Title shows "Toiture PACA | Charpente & Couverture"

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: update HTML title for TOITURE PACA"
```

---

## Task 3: Create Services Data File

**Files:**
- Create: `src/data/services.ts`

**Step 1: Create services data file**

Create `src/data/services.ts` with roofing services:

```typescript
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Charpente",
    description: "Fabrication et réparation de charpentes bois et métalliques pour toutes constructions",
    icon: "Home"
  },
  {
    id: 2,
    title: "Couverture (neuf & rénovation)",
    description: "Pose et rénovation complète de toitures : tuiles, ardoises, zinc, étanchéité",
    icon: "Home"
  },
  {
    id: 3,
    title: "Inspection toiture",
    description: "Vérification complète de l'état de votre toiture et detection des problèmes",
    icon: "Search"
  },
  {
    id: 4,
    title: "Diagnostic toiture",
    description: "Diagnostic approfondi pour identifier infiltrations, dégâts et solutions adaptées",
    icon: "ClipboardCheck"
  },
  {
    id: 5,
    title: "Réparation de fuites",
    description: "Recherche et réparation rapide de toutes fuites et infiltrations",
    icon: "Droplet"
  },
  {
    id: 6,
    title: "Remplacement de tuiles",
    description: "Remplacement de tuiles cassées ou endommagées par la tempête ou le temps",
    icon: "Hammer"
  },
  {
    id: 7,
    title: "Entretien toiture",
    description: "Entretien préventif annuel pour prolonger la durée de vie de votre toiture",
    icon: "Wrench"
  },
  {
    id: 8,
    title: "Devis gratuit",
    description: "Demandez votre devis gratuit et sans engagement sous 24h",
    icon: "FileText"
  }
];
```

**Step 2: Verify file exists**

Run: `ls -la src/data/services.ts`
Expected: File exists

**Step 3: Commit**

```bash
git add src/data/services.ts
git commit -m "feat: add roofing services data"
```

---

## Task 4: Create Photos Data File

**Files:**
- Create: `src/data/photos.ts`

**Step 1: Create photos data file with placeholders**

Create `src/data/photos.ts`:

```typescript
export interface Photo {
  id: number;
  src: string;
  category: string;
  title: string;
  description: string;
}

export const photos: Photo[] = [
  // Charpente category
  {
    id: 1,
    src: "/images/charpente/charpente-1.jpg",
    category: "charpente",
    title: "Charpente bois Toulon",
    description: "Rénovation complète charpente"
  },
  {
    id: 2,
    src: "/images/charpente/charpente-2.jpg",
    category: "charpente",
    title: "Charpente métallique",
    description: "Structure industrielle"
  },
  {
    id: 3,
    src: "/images/charpente/charpente-3.jpg",
    category: "charpente",
    title: "Réparation charpente",
    description: "Renforcement poutres"
  },
  {
    id: 4,
    src: "/images/charpente/charpente-4.jpg",
    category: "charpente",
    title: "Nouvelle charpente",
    description: "Construction neuve"
  },

  // Couverture category
  {
    id: 5,
    src: "/images/couverture/couverture-1.jpg",
    category: "couverture",
    title: "Toiture tuiles Hyères",
    description: "Rénovation toiture"
  },
  {
    id: 6,
    src: "/images/couverture/couverture-2.jpg",
    category: "couverture",
    title: "Toiture ardoises",
    description: "Pose ardoises naturelles"
  },
  {
    id: 7,
    src: "/images/couverture/couverture-3.jpg",
    category: "couverture",
    title: "Toiture zinc",
    description: "Étanchéité zinc"
  },
  {
    id: 8,
    src: "/images/couverture/couverture-4.jpg",
    category: "couverture",
    title: "Rénovation toiture",
    description: "Avant / Après"
  },

  // Réparation category
  {
    id: 9,
    src: "/images/reparation/reparation-1.jpg",
    category: "reparation",
    title: "Réparation fuite",
    description: "Intervention urgence"
  },
  {
    id: 10,
    src: "/images/reparation/reparation-2.jpg",
    category: "reparation",
    title: "Remplacement tuiles",
    description: "Après tempête"
  },
  {
    id: 11,
    src: "/images/reparation/reparation-3.jpg",
    category: "reparation",
    title: "Étanchéité",
    description: "Réseau pluvial"
  },
  {
    id: 12,
    src: "/images/reparation/reparation-4.jpg",
    category: "reparation",
    title: "Entretien toiture",
    description: "Nettoyage et vérification"
  }
];

export const photoCategories = [
  { value: "all", label: "Tous" },
  { value: "charpente", label: "Charpente" },
  { value: "couverture", label: "Couverture" },
  { value: "reparation", label: "Réparations" }
];
```

**Step 2: Verify file exists**

Run: `ls -la src/data/photos.ts`
Expected: File exists

**Step 3: Commit**

```bash
git add src/data/photos.ts
git commit -m "feat: add photos data with placeholder images"
```

---

## Task 5: Create Testimonials Data File

**Files:**
- Create: `src/data/testimonials.ts`

**Step 1: Create testimonials data file**

Create `src/data/testimonials.ts`:

```typescript
export interface Testimonial {
  id: number;
  name: string;
  city: string;
  rating: number;
  text: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marie D.",
    city: "Toulon",
    rating: 5,
    text: "Excellent travail sur ma toiture. Rapide, propre et professionnel. L'équipe a su me conseiller pour le choix des matériaux. Je recommande !",
    date: "Février 2025"
  },
  {
    id: 2,
    name: "Pierre L.",
    city: "La Seyne-sur-Mer",
    rating: 5,
    text: "Intervention rapide suite à une fuite. Le diagnostic était précis et la réparation soignée. Prix raisonnable pour la qualité du travail.",
    date: "Janvier 2025"
  },
  {
    id: 3,
    name: "Sophie M.",
    city: "Hyères",
    rating: 5,
    text: "Rénovation complète de ma toiture effectuée dans les délais. Très bon suivi du chantier et propre après les travaux. Artisans qualifiés.",
    date: "Décembre 2024"
  },
  {
    id: 4,
    name: "Jean-Baptiste R.",
    city: "Saint-Raphaël",
    rating: 5,
    text: "Devis gratuit sous 24h comme promis. Les travaux d'entretien ont été réalisés avec soin. Toiture comme neuve !",
    date: "Novembre 2024"
  }
];
```

**Step 2: Verify file exists**

Run: `ls -la src/data/testimonials.ts`
Expected: File exists

**Step 3: Commit**

```bash
git add src/data/testimonials.ts
git commit -m "feat: add placeholder testimonials data"
```

---

## Task 6: Update Header Component

**Files:**
- Modify: `src/components/Header.tsx`

**Step 1: Update brand name and contact info**

Find and replace in `src/components/Header.tsx`:
- Replace "DebarrasPower" with "TOITURE PACA"
- Replace phone number with "06 04 05 35 10"
- Replace email with "director@ay-toiture.fr"

**Step 2: Verify changes**

Run: `grep -n "TOITURE PACA" src/components/Header.tsx`
Expected: Header shows "TOITURE PACA"

**Step 3: Commit**

```bash
git add src/components/Header.tsx
git commit -m "feat: update header with TOITURE PACA branding"
```

---

## Task 7: Update Footer Component

**Files:**
- Modify: `src/components/Footer.tsx`

**Step 1: Update business information and add legal name**

Update `src/components/Footer.tsx` with:

```typescript
// Replace business info
const businessName = "TOITURE PACA";
const phone = "06 04 05 35 10";
const email = "director@ay-toiture.fr";
const address = "133 Rue du Jeu de Paume, 83200 Toulon";
const legalName = "ZAOUALI AYMEN";
const siren = "994859908";

// In the JSX, ensure legal name ONLY appears in footer legal section
// NOT in the main footer visible area
```

**Step 2: Verify legal name placement**

Run: `grep -n "ZAOUALI AYMEN" src/components/Footer.tsx`
Expected: Legal name appears only in footer legal section

**Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: update footer with TOITURE PACA info and legal name"
```

---

## Task 8: Update Hero Section

**Files:**
- Modify: `src/components/HeroSection.tsx`

**Step 1: Update hero content for roofing**

Replace headline, subheadline, and CTAs in `src/components/HeroSection.tsx`:

```typescript
const headline = "Votre Artisan Couvreur dans le Var & PACA";
const subheadline = "Charpente, couverture, réparation et entretien. Devis gratuit, intervention rapide.";

// CTAs
const primaryCTA = {
  text: "Demander un devis gratuit",
  phone: "06 04 05 35 10"
};
```

**Step 2: Verify changes**

Run: `grep -A2 "headline" src/components/HeroSection.tsx`
Expected: Shows roofing headline

**Step 3: Commit**

```bash
git add src/components/HeroSection.tsx
git commit -m "feat: update hero section for roofing services"
```

---

## Task 9: Update Features Section

**Files:**
- Modify: `src/components/FeaturesSection.tsx`

**Step 1: Replace features with roofing trust signals**

Update features array in `src/components/FeaturesSection.tsx`:

```typescript
const features = [
  {
    icon: "FileText",
    title: "Devis gratuit",
    description: "Demandez votre devis gratuit sans engagement sous 24h"
  },
  {
    icon: "Award",
    title: "Artisans qualifiés",
    description: "Équipe de professionnels expérimentés et qualifiés"
  },
  {
    icon: "Shield",
    title: "Assurance décennale",
    description: "Tous nos travaux sont couverts par la garantie décennale"
  },
  {
    icon: "Clock",
    title: "Intervention rapide",
    description: "Réactivité garantie pour urgences et interventions programmées"
  },
  {
    icon: "CheckCircle",
    title: "Garantie travaux",
    description: "Satisfaction garantie et suivi personnalisé de chaque chantier"
  }
];
```

**Step 2: Verify changes**

Run: `grep "title" src/components/FeaturesSection.tsx | head -5`
Expected: Shows roofing-specific features

**Step 3: Commit**

```bash
git add src/components/FeaturesSection.tsx
git commit -m "feat: update features with roofing trust signals"
```

---

## Task 10: Update Services Section

**Files:**
- Modify: `src/components/ServicesSection.tsx`

**Step 1: Import and use services data**

Update `src/components/ServicesSection.tsx` to use the new services data:

```typescript
import { services } from "@/data/services";

// In the component, map over services instead of hardcoded services
{services.map((service) => (
  <ServiceCard key={service.id} {...service} />
))}
```

**Step 2: Verify import**

Run: `grep "import.*services" src/components/ServicesSection.tsx`
Expected: Import from `@/data/services`

**Step 3: Commit**

```bash
git add src/components/ServicesSection.tsx
git commit -m "feat: update services section with roofing services data"
```

---

## Task 11: Update Process Section

**Files:**
- Modify: `src/components/ProcessSection.tsx`

**Step 1: Adapt process for roofing workflow**

Update process steps in `src/components/ProcessSection.tsx`:

```typescript
const steps = [
  {
    number: "1",
    title: "Contactez-nous",
    description: "Par téléphone au 06 04 05 35 10, email ou formulaire de contact"
  },
  {
    number: "2",
    title: "Diagnostic gratuit",
    description: "Nous intervenons sur place pour évaluer vos besoins en toiture"
  },
  {
    number: "3",
    title: "Devis sous 24h",
    description: "Recevez un devis détaillé et transparent sans engagement"
  },
  {
    number: "4",
    title: "Réalisation travaux",
    description: "Nos artisans qualifiés réalisent les travaux avec soin"
  },
  {
    number: "5",
    title: "Satisfaction garantie",
    description: "Vérification finale et garantie sur tous nos travaux"
  }
];
```

**Step 2: Verify changes**

Run: `grep -A1 "title:" src/components/ProcessSection.tsx | head -10`
Expected: Shows roofing process

**Step 3: Commit**

```bash
git add src/components/ProcessSection.tsx
git commit -m "feat: adapt process section for roofing workflow"
```

---

## Task 12: Update Gallery with New Categories

**Files:**
- Modify: `src/components/CategorizedGallery.tsx`

**Step 1: Update gallery categories and data import**

Update `src/components/CategorizedGallery.tsx`:

```typescript
import { photos, photoCategories } from "@/data/photos";

// The component already uses category tabs, just need to import the new data
// Make sure categories match: "all", "charpente", "couverture", "reparation"
```

**Step 2: Verify import**

Run: `grep "import.*photos" src/components/CategorizedGallery.tsx`
Expected: Import from `@/data/photos`

**Step 3: Commit**

```bash
git add src/components/CategorizedGallery.tsx
git commit -m "feat: update gallery with roofing categories and data"
```

---

## Task 13: Update Testimonials Section

**Files:**
- Modify: `src/components/TestimonialsSection.tsx`

**Step 1: Import testimonials data and add review button**

Update `src/components/TestimonialsSection.tsx`:

```typescript
import { testimonials } from "@/data/testimonials";

// Add Google Review button (placeholder link)
const reviewButton = {
  text: "Laissez un avis sur Google",
  url: "https://search.google.com/local/writereview", // Placeholder - update when GBP is created
  icon: "Star"
};

// In JSX, add button after testimonials:
<Button asChild variant="outline" size="lg">
  <a href={reviewButton.url} target="_blank" rel="noopener noreferrer">
    <Star className="mr-2 h-5 w-5" />
    {reviewButton.text}
  </a>
</Button>
```

**Step 2: Verify import**

Run: `grep "import.*testimonials" src/components/TestimonialsSection.tsx`
Expected: Import from `@/data/testimonials`

**Step 3: Commit**

```bash
git add src/components/TestimonialsSection.tsx
git commit -m "feat: update testimonials with review button placeholder"
```

---

## Task 14: Update Pricing Section

**Files:**
- Modify: `src/components/PricingSection.tsx`

**Step 1: Remove valorisation content, add roofing pricing**

Update `src/components/PricingSection.tsx`:

```typescript
const pricingExamples = [
  {
    title: "Diagnostic toiture",
    price: "Gratuit",
    description: "Visite sur place et devis détaillé sans engagement",
    features: ["État des lieux", "Photos", "Devis sous 24h"]
  },
  {
    title: "Réparation",
    price: "Sur devis",
    description: "Selon l'étendue des travaux et matériaux nécessaires",
    features: ["Main d'œuvre", "Matériaux", "Garantie", "Propreté"]
  },
  {
    title: "Entretien annuel",
    price: "Sur devis",
    description: "Entretien préventif pour prolonger durée de vie",
    features: ["Nettoyage", "Vérification", "Petites réparations", "Rapport"]
  }
];

// Note: Remove any recycling/valorization specific content
```

**Step 2: Verify changes**

Run: `grep -A3 "title:" src/components/PricingSection.tsx | head -12`
Expected: Shows roofing pricing (not recycling)

**Step 3: Commit**

```bash
git add src/components/PricingSection.tsx
git commit -m "feat: adapt pricing section for roofing services"
```

---

## Task 15: Update Zones Section

**Files:**
- Modify: `src/components/ZonesSection.tsx`

**Step 1: Update service area for Var and PACA**

Update `src/components/ZonesSection.tsx`:

```typescript
const baseLocation = "Toulon (83200)";
const coverageArea = "Var (83) et PACA";
const department = "Var";

// Keep the existing cities list or verify it includes all major Var cities
```

**Step 2: Verify changes**

Run: `grep "Toulon\|PACA" src/components/ZonesSection.tsx`
Expected: Shows Var and PACA coverage

**Step 3: Commit**

```bash
git add src/components/ZonesSection.tsx
git commit -m "feat: update zones section for Var and PACA coverage"
```

---

## Task 16: Update FAQ Section

**Files:**
- Modify: `src/components/FAQSection.tsx`

**Step 1: Replace FAQs with roofing questions**

Update FAQ array in `src/components/FAQSection.tsx`:

```typescript
const faqs = [
  {
    question: "Combien coûte une réparation de toiture ?",
    answer: "Le prix dépend de l'étendue des dégâts, des matériaux nécessaires et de l'accessibilité. Demandez un devis gratuit sur place pour une estimation précise adaptée à votre situation."
  },
  {
    question: "Intervenez-vous en urgence pour les fuites ?",
    answer: "Oui, nous intervenons en urgence pour les fuites et dégâts importants. Contactez-nous au 06 04 05 35 10 pour une intervention rapide."
  },
  {
    question: "Quelle garantie pour les travaux de toiture ?",
    answer: "Tous nos travaux sont garantis selon leur nature. Nous disposons de l'assurance décennale obligatoire pour les travaux de couverture et charpente."
  },
  {
    question: "Assurez-vous la garantie décennale ?",
    answer: "Oui, nous sommes assurés avec la garantie décennale obligatoire pour tous les travaux de couverture, charpente et étanchéité. Votre protection est notre priorité."
  },
  {
    question: "Comment obtenir un devis gratuit ?",
    answer: "Par téléphone au 06 04 05 35 10, par email à director@ay-toiture.fr ou via le formulaire de contact. Nous vous envoyons un devis détaillé sous 24h après notre visite."
  },
  {
    question: "Quel est le délai d'intervention ?",
    answer: "Pour les urgences, nous intervenons dans les 24h. Pour les travaux programmés, le délai dépend de la charge mais généralement sous 1-2 semaines."
  }
];
```

**Step 2: Verify changes**

Run: `grep "question:" src/components/FAQSection.tsx | wc -l`
Expected: 6 roofing questions

**Step 3: Commit**

```bash
git add src/components/FAQSection.tsx
git commit -m "feat: replace FAQs with roofing-specific questions"
```

---

## Task 17: Update Contact Section

**Files:**
- Modify: `src/components/ContactSection.tsx`

**Step 1: Update contact information**

Update `src/components/ContactSection.tsx`:

```typescript
const contactInfo = {
  phone: "06 04 05 35 10",
  email: "director@ay-toiture.fr",
  address: "133 Rue du Jeu de Paume, 83200 Toulon",
  hours: "Lundi - Samedi, 8h - 19h"
};
```

**Step 2: Verify changes**

Run: `grep "06 04 05 35 10\|director@ay-toiture.fr" src/components/ContactSection.tsx`
Expected: Shows updated contact info

**Step 3: Commit**

```bash
git add src/components/ContactSection.tsx
git commit -m "feat: update contact section with TOITURE PACA info"
```

---

## Task 18: Remove Valorisation Section

**Files:**
- Delete: `src/components/ValorisationSection.tsx`
- Modify: `src/pages/Index.tsx`

**Step 1: Delete ValorisationSection file**

Run: `rm src/components/ValorisationSection.tsx`

**Step 2: Remove import from Index.tsx**

Edit `src/pages/Index.tsx` to remove the import and usage:

```typescript
// REMOVE this line:
import ValorisationSection from "@/components/ValorisationSection";

// REMOVE from JSX:
<ValorisationSection />
```

**Step 3: Verify removal**

Run: `grep -r "ValorisationSection" src/`
Expected: No results found

**Step 4: Commit**

```bash
git add src/components/ValorisationSection.tsx src/pages/Index.tsx
git commit -m "feat: remove ValorisationSection (not relevant for roofing)"
```

---

## Task 19: Update Index Page Schema.org

**Files:**
- Modify: `src/pages/Index.tsx`

**Step 1: Update LocalBusiness schema for TOITURE PACA**

Replace the `localBusinessSchema` in `src/pages/Index.tsx`:

```typescript
const localBusinessSchema = {
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
  // Note: No aggregateRating - Google Business Profile doesn't exist yet
};
```

**Step 2: Verify schema**

Run: `grep -A5 '"name"' src/pages/Index.tsx | head -10`
Expected: Shows "TOITURE PACA"

**Step 3: Commit**

```bash
git add src/pages/Index.tsx
git commit -m "feat: update LocalBusiness schema for TOITURE PACA"
```

---

## Task 20: Update Index Page FAQ Schema

**Files:**
- Modify: `src/pages/Index.tsx`

**Step 1: Update FAQ schema with roofing questions**

Replace the `faqSchema` in `src/pages/Index.tsx`:

```typescript
const faqSchema = {
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
    },
    {
      "@type": "Question",
      "name": "Quel est le délai d'intervention ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pour les urgences, intervention dans les 24h. Pour les travaux programmés, généralement sous 1-2 semaines selon la charge."
      }
    }
  ]
};
```

**Step 2: Verify FAQ count**

Run: `grep -c '"@type": "Question"' src/pages/Index.tsx`
Expected: 6 questions

**Step 3: Commit**

```bash
git add src/pages/Index.tsx
git commit -m "feat: update FAQ schema with roofing questions"
```

---

## Task 21: Update Index Page Meta Tags

**Files:**
- Modify: `src/pages/Index.tsx`

**Step 1: Update Helmet meta tags**

Update the `<Helmet>` section in `src/pages/Index.tsx`:

```typescript
<Helmet>
  <title>Toiture PACA | Charpente & Couverture dans le Var (83) - Devis Gratuit</title>
  <meta name="description" content="Toiture PACA : artisan couvreur à Toulon. Charpente, couverture, réparation, entretien, diagnostic toiture dans le Var et PACA. Devis gratuit, intervention rapide." />
  <meta name="keywords" content="couverture var, toiture toulon, charpente var, réparation toiture, diagnostic toiture, entretien toiture, couvreur 83, artisan toiture" />
  <link rel="canonical" href="https://www.ay-toiture.fr" />
  <meta property="og:title" content="Toiture PACA | Charpente & Couverture dans le Var (83)" />
  <meta property="og:description" content="Artisan couvreur à Toulon. Charpente, couverture, réparation, entretien. Devis gratuit, intervention rapide." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.ay-toiture.fr" />
  <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
  <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
</Helmet>
```

**Step 2: Verify meta tags**

Run: `grep -A1 "name=\"description\"" src/pages/Index.tsx | head -2`
Expected: Shows TOITURE PACA description

**Step 3: Commit**

```bash
git add src/pages/Index.tsx
git commit -m "feat: update meta tags for TOITURE PACA SEO"
```

---

## Task 22: Update City Page for Roofing

**Files:**
- Modify: `src/pages/CityPage.tsx`

**Step 1: Adapt city page content for roofing**

Update service descriptions in `src/pages/CityPage.tsx`:

```typescript
// Replace any clearing/débarras references with roofing content
// Update hero text, service descriptions

const cityHeroTitle = (cityName: string) => `Votre Artisan Couvreur à ${cityName}`;
const cityHeroDescription = "Charpente, couverture, réparation et entretien. Devis gratuit.";
```

**Step 2: Verify no clearing references**

Run: `grep -i "débarras\|clearing\|recycling" src/pages/CityPage.tsx`
Expected: No results

**Step 3: Commit**

```bash
git add src/pages/CityPage.tsx
git commit -m "feat: adapt city page for roofing services"
```

---

## Task 23: Global Brand Name Replacement

**Files:**
- Multiple files

**Step 1: Global search and replace**

Run global replace to catch any remaining "DebarrasPower" references:

```bash
# Find all remaining references
grep -r "DebarrasPower" src/ --exclude-dir=node_modules

# Replace in all files (if any found)
# Use find and sed or manual replacement
```

**Step 2: Verify no references remain**

Run: `grep -r "DebarrasPower" src/ --exclude-dir=node_modules`
Expected: No results

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: complete global brand name replacement to TOITURE PACA"
```

---

## Task 24: Create Placeholder Image Directories

**Files:**
- Create directories in `public/images/`

**Step 1: Create image directories**

Run:

```bash
mkdir -p public/images/charpente
mkdir -p public/images/couverture
mkdir -p public/images/reparation
```

**Step 2: Add placeholder README**

Create `public/images/README.md`:

```markdown
# Placeholder Images

This directory contains placeholder images for the TOITURE PACA website.

Replace these placeholders with actual project photos organized by category:

- `charpente/` - Roof framing/structure projects
- `couverture/` - Roofing projects
- `reparation/` - Repair and maintenance projects

Image format: JPG or PNG, recommended size 1200x800px.
```

**Step 3: Verify directories**

Run: `ls -la public/images/`
Expected: Shows charpente, couverture, reparation directories

**Step 4: Commit**

```bash
git add public/images/
git commit -m "feat: add placeholder image directories"
```

---

## Task 25: Verify Build Success

**Files:**
- None (verification step)

**Step 1: Install dependencies**

Run: `npm install`

**Step 2: Build project**

Run: `npm run build`

Expected: Build completes successfully with no errors

**Step 3: Check build output**

Run: `ls -la dist/`
Expected: dist directory contains built files

**Step 4: Commit (if build successful)**

```bash
git add -A
git commit -m "chore: verify production build succeeds"
```

---

## Task 26: Final Verification & Documentation

**Files:**
- Create: `README.md`
- Modify: `CLAUDE.md`

**Step 1: Update README.md**

Update `README.md` with TOITURE PACA information:

```markdown
# TOITURE PACA - Site Vitrine

Site vitrine pour TOITURE PACA, artisan couvreur dans le Var (83).

## Business Information

- **Brand:** TOITURE PACA
- **Phone:** 06 04 05 35 10
- **Email:** director@ay-toiture.fr
- **Location:** 133 Rue du Jeu de Paume, 83200 Toulon
- **Service Area:** Var (83) and PACA region

## Services

- Charpente
- Couverture (neuf & rénovation)
- Inspection toiture
- Diagnostic toiture
- Réparation de fuites
- Remplacement de tuiles
- Entretien toiture
- Devis gratuit

## Development

\`\`\`bash
npm install      # Install dependencies
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Production build
npm run preview  # Preview production build
\`\`\`

## Tech Stack

- React 18.3.1 + TypeScript
- Vite 5.4.19
- Tailwind CSS 3.4.17
- shadcn/ui + Radix UI
- React Router DOM 6.30.1
```

**Step 2: Update CLAUDE.md**

Replace DebarrasPower content with TOITURE PACA in `CLAUDE.md`:

- Update business name, contact info, services
- Keep tech stack and architecture the same
- Update project description

**Step 3: Commit**

```bash
git add README.md CLAUDE.md
git commit -m "docs: update project documentation for TOITURE PACA"
```

---

## Task 27: Create Initial Release Commit

**Files:**
- None (git task)

**Step 1: Review all changes**

Run: `git log --oneline`
Expected: Shows all implementation commits

**Step 2: Tag release**

Run:

```bash
git tag -a v1.0.0 -m "Initial release: TOITURE PACA website"
git push origin main --tags
```

**Step 3: Create summary commit message**

```bash
git commit --allow-empty -m "release: v1.0.0 - TOITURE PACA website complete

- Implemented all roofing services
- Updated branding to TOITURE PACA
- Created data files for services, photos, testimonials
- Updated all components for roofing business
- Removed clearing-specific content
- Updated Schema.org and SEO meta tags
- Placeholder images ready for replacement
- Google Business Profile link placeholder ready
"
```

---

## Post-Implementation Checklist

After completing all tasks:

- [ ] All 8 roofing services displayed correctly
- [ ] Contact info is consistent (06 04 05 35 10, director@ay-toiture.fr)
- [ ] Legal name (ZAOUALI AYMEN) only in footer
- [ ] Placeholder gallery has 3 categories working
- [ ] Testimonials section shows 4 testimonials
- [ ] "Laissez un avis" button present (placeholder link)
- [ ] FAQ section has 6 roofing questions
- [ ] Schema.org markup is valid (test with Google Rich Results Test)
- [ ] All pages mobile responsive
- [ ] `npm run build` succeeds
- [ ] No references to "DebarrasPower" remain
- [ ] No clearing/débarras content remains
- [ ] Meta tags updated for TOITURE PACA
- [ ] Canonical URL: https://www.ay-toiture.fr

---

## Future Enhancements (Out of Scope for This Plan)

- Replace placeholder images with real project photos
- Replace placeholder testimonials with real customer reviews
- Create Google Business Profile and update review link
- Add aggregateRating to Schema.org after GBP is live
- Create Mentions Légales page with legal details
- Add before/after gallery feature
- Add project case studies
- Integrate Google Analytics
- Set up Search Console monitoring

---

**End of Implementation Plan**

Total Tasks: 27
Estimated Time: 2-3 hours for experienced developer

**Next Steps After Implementation:**
1. Deploy to Vercel/Netlify
2. Configure custom domain: ay-toiture.fr
3. Test live functionality
4. Replace placeholder content with real materials
5. Create Google Business Profile
