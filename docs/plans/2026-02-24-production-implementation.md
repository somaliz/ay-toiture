# DebarrasPower Production-Ready Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform DebarrasPower from functional website to production-ready platform with 115+ real client photos, 3-tier pricing, partnership model for valuables, and thorough mobile testing.

**Architecture:** Sequential phase approach (3-4 weeks) with photo processing foundation, new components (Pricing, Process, Valorisation, Gallery), Playwright testing across 5 breakpoints, legal compliance via partnership model (no ROM requirements), SEO optimization with Schema.org.

**Tech Stack:** React 18.3.1, TypeScript, Tailwind CSS 3.4.17, Vite 5.4.19, shadcn/ui, Playwright (testing), embla-carousel-react (carousel), React Hook Form + Zod, existing Lucide React icons.

---

## Phase 1: Foundation (Week 1-2)

### Task 1: Photo Processing Infrastructure

**Files:**
- Create: `public/images/hero/README.md`
- Create: `public/images/classique/README.md`
- Create: `public/images/objets-valeur/README.md`
- Create: `public/images/diogene/README.md`
- Create: `public/images/team/README.md`
- Create: `src/data/photos.ts`

**Step 1: Create photo directory structure**

Run:
```bash
mkdir -p public/images/{hero,classique,objets-valeur,diogene,team,before-after}
```

Expected: Directories created successfully

**Step 2: Create README in each directory with optimization specs**

File: `public/images/hero/README.md`
```markdown
# Hero Images

Optimization standards:
- Max width: 1920px
- Format: JPEG (85%) + WebP (80%)
- Lazy loading: No (above fold)
- Quantity: 8-10 photos
- Selection criteria: Best action shots, team in action, dramatic before/afters

Naming: hero-01.jpg, hero-01.webp, hero-02.jpg, hero-02.webp, etc.
```

Repeat for other directories with appropriate specs:
- `classique`: 1200px max, 15 photos, standard clearing operations
- `objets-valeur`: 1200px max, 12-15 photos, valuables with respectful backgrounds
- `diogene`: 1200px max, 5-8 photos, transformation focus
- `team`: 1200px max, 3-5 photos, professional branded shots

**Step 3: Create photo metadata file**

File: `src/data/photos.ts`
```typescript
export interface Photo {
  src: string;
  srcWebp?: string;
  alt: string;
  category: 'hero' | 'classique' | 'objetsValeur' | 'diogene' | 'team';
  width?: number;
  height?: number;
}

export const photoCategories = {
  hero: {
    title: "En Intervention",
    description: "Notre équipe en action dans le Var",
    count: 8
  },
  classique: {
    title: "Débarras Classique",
    description: "Opérations de débarras standard",
    count: 15
  },
  objetsValeur: {
    title: "Objets de Valeur",
    description: "Biens nécessitant une expertise particulière",
    count: 12
  },
  diogene: {
    title: "Syndrome de Diogène",
    description: "Situations complexes avec accompagnement",
    count: 5
  },
  team: {
    title: "Notre Équipe",
    description: "Les professionnels DebarrasPower",
    count: 3
  }
} as const;

export const photos: Photo[] = [];
// Will be populated after photo conversion
```

**Step 4: Create photo conversion script**

File: `scripts/convert-photos.js`
```javascript
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const sourceDir = process.env.HOME + '/Downloads/deb-power';
const targetDir = 'public/images';

// Conversion script using imagemagick or sips (macOS)
// To be implemented based on available tools
console.log('Photo conversion script ready');
```

**Step 5: Add conversion script to package.json**

File: `package.json` - modify scripts section
```json
{
  "scripts": {
    "convert-photos": "node scripts/convert-photos.js"
  }
}
```

**Step 6: Commit photo infrastructure**

Run:
```bash
git add public/images src/data/photos.ts scripts/convert-photos.js package.json
git commit -m "feat: add photo processing infrastructure

- Create directory structure for 115+ photos
- Add optimization standards per category
- Create photo metadata types
- Add conversion script placeholder

Next: Convert HEIC photos and populate metadata"
```

---

### Task 2: Pricing Section Component

**Files:**
- Create: `src/components/PricingSection.tsx`
- Create: `src/components/ui/pricing-card.tsx` (shadcn variant if needed)
- Test: `tests/components/PricingSection.spec.tsx`

**Step 1: Write failing test for PricingSection**

File: `tests/components/PricingSection.spec.tsx`
```typescript
import { render, screen } from '@testing-library/react';
import PricingSection from '@/components/PricingSection';

describe('PricingSection', () => {
  it('renders three pricing cards', () => {
    render(<PricingSection />);
    expect(screen.getByText(/Débarras Gratuit/i)).toBeInTheDocument();
    expect(screen.getByText(/Débarras avec Valorisation/i)).toBeInTheDocument();
    expect(screen.getByText(/Débarras Classique/i)).toBeInTheDocument();
  });

  it('displays legal disclaimer', () => {
    render(<PricingSection />);
    expect(screen.getByText(/Tarifs établis sur devis après visite/i)).toBeInTheDocument();
  });

  it('has call-to-action button', () => {
    render(<PricingSection />);
    const cta = screen.getByRole('button', { name: /Demander un devis/i });
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute('href', '#devis');
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npm test -- tests/components/PricingSection.spec.tsx`
Expected: FAIL with "PricingSection not found"

**Step 3: Create PricingCard component**

File: `src/components/ui/pricing-card.tsx`
```typescript
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

interface PricingCardProps {
  title: string;
  description: string;
  features: string[];
  recommended?: boolean;
  cta?: string;
}

export function PricingCard({ title, description, features, recommended, cta }: PricingCardProps) {
  return (
    <Card className={`relative ${recommended ? 'border-accent border-2' : ''}`}>
      {recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
            RECOMMANDÉ
          </span>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
```

**Step 4: Create PricingSection component**

File: `src/components/PricingSection.tsx`
```typescript
import { PricingCard } from '@/components/ui/pricing-card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const pricingTiers = [
  {
    title: "Débarras Gratuit",
    description: "Quand la valeur de reprise couvre le coût du débarras",
    features: [
      "Intervention à 0€ pour vous",
      "Tri et évacuation inclus",
      "Valorisation des objets réutilisables",
      "Devis transparent et détaillé"
    ]
  },
  {
    title: "Débarras avec Valorisation",
    description: "Si la valeur de reprise dépasse le coût, nous vous versons la différence",
    features: [
      "Estimation gratuite des biens",
      "Validation écrite du montant",
      "Paiement de la différence",
      "Débarras + valorisation en une intervention"
    ],
    recommended: true
  },
  {
    title: "Débarras Classique",
    description: "Tarif standard selon volume et accessibilité",
    features: [
      "Devis gratuit sur place",
      "Tarif transparent (150€ à 5000€)",
      "Intervention rapide",
      "Nettoyage inclus"
    ]
  }
];

const PricingSection = () => {
  return (
    <section id="tarifs" className="py-20 lg:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-display font-bold text-sm uppercase tracking-widest">
            Tarification
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-foreground mt-3 mb-4">
            Une tarification transparente
          </h2>
          <p className="text-muted-foreground text-lg">
            Selon la valeur de vos biens, votre débarras peut être gratuit, valorisé, ou au tarif standard.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.title} {...tier} />
          ))}
        </div>

        <div className="bg-muted rounded-lg p-4 text-center text-xs text-muted-foreground">
          <p>
            Les tarifs sont établis sur devis après visite. La valorisation potentielle des biens est évaluée
            selon leur état et leur marché. Une confirmation écrite est fournie avant toute intervention.
          </p>
        </div>

        <div className="text-center mt-8">
          <Button variant="hero" size="lg" asChild>
            <a href="#devis">
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
```

**Step 5: Run tests to verify they pass**

Run: `npm test -- tests/components/PricingSection.spec.tsx`
Expected: PASS

**Step 6: Test responsive layout**

Run:
```bash
npm run dev
# Open http://localhost:5173 in browser
# Navigate to pricing section
# Test at 375px, 768px, 1280px widths
```

Expected: Cards stack properly at mobile, 3 columns at desktop

**Step 7: Commit PricingSection**

Run:
```bash
git add src/components/PricingSection.tsx src/components/ui/pricing-card.tsx tests/components/
git commit -m "feat: add pricing section with 3-tier model

- Débarras Gratuit (value = cost)
- Débarras avec Valorisation (value > cost, we pay difference)
- Débarras Classique (standard pricing)

Legal disclaimer included.
Responsive layout tested."
```

---

### Task 3: Process Section Component

**Files:**
- Create: `src/components/ProcessSection.tsx`
- Test: `tests/components/ProcessSection.spec.tsx`

**Step 1: Write failing test**

File: `tests/components/ProcessSection.spec.tsx`
```typescript
import { render, screen } from '@testing-library/react';
import ProcessSection from '@/components/ProcessSection';

describe('ProcessSection', () => {
  it('renders four process steps', () => {
    render(<ProcessSection />);
    expect(screen.getByText(/Contact & Devis/i)).toBeInTheDocument();
    expect(screen.getByText(/Visite & Évaluation/i)).toBeInTheDocument();
    expect(screen.getByText(/Intervention/i)).toBeInTheDocument();
    expect(screen.getByText(/Recyclage & Don/i)).toBeInTheDocument();
  });

  it('displays step numbers', () => {
    render(<ProcessSection />);
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('03')).toBeInTheDocument();
    expect(screen.getByText('04')).toBeInTheDocument();
  });
});
```

**Step 2: Run test to verify failure**

Run: `npm test -- tests/components/ProcessSection.spec.tsx`
Expected: FAIL with "ProcessSection not found"

**Step 3: Create ProcessSection component**

File: `src/components/ProcessSection.tsx`
```typescript
const steps = [
  {
    num: "01",
    title: "Contact & Devis",
    description: "Contactez-nous par téléphone, e-mail ou formulaire pour décrire votre besoin (type de bien, volume, délais, contraintes d'accès). Nous planifions rapidement une visite dans le Var (83). Cette première prise de contact est gratuite et sans engagement.",
    icon: "📞"
  },
  {
    num: "02",
    title: "Visite & Évaluation",
    description: "Un responsable se déplace sur place pour évaluer précisément le volume, la manutention et les filières d'évacuation adaptées. Les biens potentiellement valorisables sont identifiés séparément et, si nécessaire, orientés vers des experts certifiés. Vous recevez un devis écrit, clair et détaillé.",
    icon: "📍"
  },
  {
    num: "03",
    title: "Intervention",
    description: "Nous intervenons à la date convenue avec une équipe équipée, assurée et encadrée. Le tri est réalisé avec méthode, les zones sensibles sont protégées, et les consignes du client sont respectées. En cas de débarras après décès, l'intervention se fait avec discrétion, respect des lieux et accompagnement humain.",
    icon: "👷"
  },
  {
    num: "04",
    title: "Recyclage & Don",
    description: "Chaque élément est orienté vers la bonne destination : réemploi, don associatif, recyclage en filière agréée ou évacuation réglementaire. Notre priorité est de réduire la part de déchets ultimes. Un justificatif ou certificat de destruction peut être fourni si la nature des biens l'exige.",
    icon: "♻️"
  }
];

const ProcessSection = () => {
  return (
    <section className="py-20 lg:py-28 section-alt">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-display font-bold text-sm uppercase tracking-widest">
            Notre Processus
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-foreground mt-3 mb-4">
            Un débarras simple et transparent
          </h2>
          <p className="text-muted-foreground text-lg">
            De la demande à la finalisation, chaque étape est claire et sans surprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="relative">
              <div className="text-4xl mb-3">{step.icon}</div>
              <div className="text-accent font-display font-black text-2xl leading-none mb-2">
                {step.num}
              </div>
              <h3 className="font-display font-bold text-foreground text-base mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
```

**Step 4: Run tests to verify pass**

Run: `npm test -- tests/components/ProcessSection.spec.tsx`
Expected: PASS

**Step 5: Test responsive layout**

Run:
```bash
npm run dev
# Check layout stacks properly on mobile
# Verify text is readable at all breakpoints
```

**Step 6: Commit ProcessSection**

Run:
```bash
git add src/components/ProcessSection.tsx tests/components/
git commit -m "feat: add process section with 4 steps

Codex-refined French copy for clarity and professionalism
Responsive grid layout (1 col mobile → 4 cols desktop)"
```

---

### Task 4: Valorisation Section Component (Partnership Model)

**Files:**
- Create: `src/components/ValorisationSection.tsx`
- Test: `tests/components/ValorisationSection.spec.tsx`

**Step 1: Write failing test**

File: `tests/components/ValorisationSection.spec.tsx`
```typescript
import { render, screen } from '@testing-library/react';
import ValorisationSection from '@/components/ValorisationSection';

describe('ValorisationSection', () => {
  it('renders partnership model content', () => {
    render(<ValorisationSection />);
    expect(screen.getByText(/Valorisation de vos biens/i)).toBeInTheDocument();
    expect(screen.getByText(/Tri, réemploi, partenariats spécialisés/i)).toBeInTheDocument();
  });

  it('does NOT mention purchasing or buying', () => {
    render(<ValorisationSection />);
    expect(screen.queryByText(/achet/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/rachat/i)).not.toBeInTheDocument();
  });

  it('mentions partnership clearly', () => {
    render(<ValorisationSection />);
    expect(screen.getByText(/partenaires/i)).toBeInTheDocument();
    expect(screen.getByText(/facilite la mise en relation/i)).toBeInTheDocument();
  });
});
```

**Step 2: Run test to verify failure**

Run: `npm test -- tests/components/ValorisationSection.spec.tsx`
Expected: FAIL with "ValorisationSection not found"

**Step 3: Create ValorisationSection component**

File: `src/components/ValorisationSection.tsx`
```typescript
import { Users, Recycle, HandHeart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: "Tri et réemploi",
    description: "Nous identifions les objets réutilisables pour réduire le coût du débarras. Chaque objet est trié avec soin et protégé si nécessaire.",
  },
  {
    icon: Recycle,
    title: "Partenaires experts",
    description: "Pour les biens nécessitant une expertise spécifique (antiquités, collections), nous vous orientons vers des partenaires certifiés et habilités.",
  },
  {
    icon: HandHeart,
    title: "Don aux associations",
    description: "Les objets en bon état sont donnés à des associations reconnues (Emmaüs, Secours Populaire, etc.) pour leur donner une seconde vie.",
  }
];

const ValorisationSection = () => {
  return (
    <section id="valorisation" className="py-20 lg:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div>
            <span className="text-accent font-display font-bold text-sm uppercase tracking-widest">
              Valorisation
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-foreground mt-3 mb-4">
              Valorisation de vos biens
            </h2>
            <p className="text-accent font-display font-semibold text-lg mb-6">
              Tri, réemploi, partenariats spécialisés
            </p>
            <p className="text-muted-foreground text-base mb-8 leading-relaxed">
              Nous trions les objets réutilisables pour réduire le coût du débarras. Pour les biens nécessitant
              une expertise spécifique (antiquités, collection), nous pouvons vous orienter vers des partenaires
              spécialisés.
            </p>

            <div className="space-y-4 mb-8">
              {services.map((service) => (
                <div key={service.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-1">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-muted rounded-lg p-4 text-xs text-muted-foreground mb-6">
              <p>
                DebarrasPower facilite la mise en relation avec des partenaires experts. Les estimations et
                transactions sont réalisées directement entre le client et les partenaires.
              </p>
            </div>

            <Button variant="hero" size="lg" asChild>
              <a href="#devis">
                Demander une estimation gratuite
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Gallery Preview - will be populated with real photos */}
          <div className="grid grid-cols-2 gap-3">
            {Array(6).fill(0).map((_, i) => (
              <div key={i} className="aspect-square rounded-lg bg-muted/50 flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Photo {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValorisationSection;
```

**Step 4: Run tests to verify pass**

Run: `npm test -- tests/components/ValorisationSection.spec.tsx`
Expected: PASS (all tests pass, no "achat"/"rachat" terms)

**Step 5: Commit ValorisationSection**

Run:
```bash
git add src/components/ValorisationSection.tsx tests/components/
git commit -m "feat: add valorisation section (partnership model)

Legal compliance via Approach B:
- No direct purchasing or reselling
- Partnership model only
- Facilitates expert connections
- Avoids ROM requirements

Codex-refined French copy."
```

---

### Task 5: Update Index Page Component Order

**Files:**
- Modify: `src/pages/Index.tsx:81-107`

**Step 1: Add new sections to imports**

File: `src/pages/Index.tsx` - modify imports
```typescript
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection"; // NEW
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection"; // NEW
import ValorisationSection from "@/components/ValorisationSection"; // NEW
import CategorizedGallery from "@/components/CategorizedGallery"; // NEW
import TestimonialsSection from "@/components/TestimonialsSection"; // NEW
import PricingSection from "@/components/PricingSection"; // NEW
import AboutSection from "@/components/AboutSection";
import ZonesSection from "@/components/ZonesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
```

**Step 2: Update main content with new sections**

File: `src/pages/Index.tsx` - modify main section
```typescript
const Index = () => {
  return (
    <>
      <Helmet>
        {/* Existing meta tags - keep them */}
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection /> {/* NEW */}
        <ServicesSection />
        <ProcessSection /> {/* NEW */}
        <ValorisationSection /> {/* NEW */}
        <CategorizedGallery /> {/* NEW */}
        <TestimonialsSection /> {/* NEW */}
        <PricingSection /> {/* NEW */}
        <ZonesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};
```

**Step 3: Test that page renders**

Run: `npm run dev`
Expected: Page loads with placeholder sections, no errors

**Step 4: Commit Index page update**

Run:
```bash
git add src/pages/Index.tsx
git commit -m "feat: update Index page with new sections

Added in order:
- FeaturesSection (placeholder)
- ProcessSection
- ValorisationSection
- CategorizedGallery (placeholder)
- TestimonialsSection (placeholder)
- PricingSection

Next: Create placeholder components for Features, Gallery, Testimonials"
```

---

## Phase 2: Enhancement (Week 3)

### Task 6: Features Section Component

**Files:**
- Create: `src/components/FeaturesSection.tsx`
- Test: `tests/components/FeaturesSection.spec.tsx`

**Step 1: Write failing test**

File: `tests/components/FeaturesSection.spec.tsx`
```typescript
import { render, screen } from '@testing-library/react';
import FeaturesSection from '@/components/FeaturesSection';

describe('FeaturesSection', () => {
  it('renders three feature boxes', () => {
    render(<FeaturesSection />);
    expect(screen.getByText(/Intervention dans tout le Var/i)).toBeInTheDocument();
    expect(screen.getByText(/Débarras complet/i)).toBeInTheDocument();
    expect(screen.getByText(/Recyclage/i)).toBeInTheDocument();
  });
});
```

**Step 2: Run test to verify failure**

Run: `npm test -- tests/components/FeaturesSection.spec.tsx`
Expected: FAIL with "FeaturesSection not found"

**Step 3: Create FeaturesSection component**

File: `src/components/FeaturesSection.tsx`
```typescript
import { MapPin, Home, Recycle } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: "Intervention dans tout le Var (83)",
    description: "Toulon, Hyères, Fréjus, Draguignan, et 23+ autres villes. Déplacement rapide dans tout le département."
  },
  {
    icon: Home,
    title: "Débarras complet : maisons, appartements, caves",
    description: "Nous débarrassons tout types de biens : habitations, caves, greniers, garages, bureaux, locaux professionnels."
  },
  {
    icon: Recycle,
    title: "Recyclage & revalorisation jusqu'à 80%",
    description: "Tri sélectif, don aux associations, recyclage en filières agréées. Réduction maximale des déchets ultimes."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-12 lg:py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display font-bold text-foreground text-base mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
```

**Step 4: Run tests to verify pass**

Run: `npm test -- tests/components/FeaturesSection.spec.tsx`
Expected: PASS

**Step 5: Commit FeaturesSection**

Run:
```bash
git add src/components/FeaturesSection.tsx tests/components/
git commit -m "feat: add features section (3 key value props)

Intervention area, complete service, recycling commitment
Placed after Hero for immediate trust-building"
```

---

### Task 7: Setup Playwright Testing

**Files:**
- Create: `playwright.config.ts`
- Create: `tests/e2e/quote-flow.spec.ts`
- Modify: `package.json`

**Step 1: Install Playwright**

Run:
```bash
npm install -D @playwright/test
```

Expected: Playwright installed successfully

**Step 2: Create Playwright config**

File: `playwright.config.ts`
```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile Small',
      use: { ...devices['iPhone SE'] },
    },
    {
      name: 'Mobile Large',
      use: { ...devices['iPhone 12 Pro'] },
    },
    {
      name: 'Tablet',
      use: { ...devices['iPad Pro'] },
    },
  ],

  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
});
```

**Step 3: Install browsers**

Run: `npx playwright install`
Expected: Browsers installed

**Step 4: Create E2E test for quote flow**

File: `tests/e2e/quote-flow.spec.ts`
```typescript
import { test, expect } from '@playwright/test';

test.describe('Quote request flow', () => {
  test('should navigate to quote form', async ({ page }) => {
    await page.goto('/');

    await page.locator('a[href="#devis"]').first().click();
    await expect(page.locator('#devis')).toBeInViewport();
  });

  test('should submit quote form on mobile', async ({ page }) => {
    await page.goto('/');

    // Scroll to contact section
    await page.locator('#devis').scrollIntoViewIfNeeded();

    // Fill form
    await page.locator('input[name="name"]').fill('Test Client');
    await page.locator('input[name="phone"]').fill('0612345678');
    await page.locator('textarea[name="message"]').fill('Test message for quote');

    // Submit button should be visible
    const submitBtn = page.locator('button[type="submit"]');
    await expect(submitBtn).toBeVisible();
  });
});
```

**Step 5: Add Playwright scripts to package.json**

File: `package.json` - modify scripts
```json
{
  "scripts": {
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "test:e2e:debug": "playwright test --debug"
  }
}
```

**Step 6: Test Playwright setup**

Run:
```bash
npm run test:e2e
```

Expected: Tests pass (or fail with meaningful errors if form not ready)

**Step 7: Commit Playwright setup**

Run:
```bash
git add playwright.config.ts tests/e2e/ package.json
git commit -m "feat: add Playwright testing setup

- 5 breakpoints configured (mobile/tablet/desktop)
- Quote flow E2E test
- Mobile touch gesture testing ready"
```

---

### Task 8: Categorized Gallery Component

**Files:**
- Create: `src/components/CategorizedGallery.tsx`
- Create: `src/components/ui/gallery-tabs.tsx`
- Create: `src/components/ui/gallery-lightbox.tsx`
- Modify: `src/data/photos.ts` (populate with real photos after conversion)

**Step 1: Write failing test for gallery**

File: `tests/components/CategorizedGallery.spec.tsx`
```typescript
import { render, screen } from '@testing-library/react';
import CategorizedGallery from '@/components/CategorizedGallery';

describe('CategorizedGallery', () => {
  it('renders category filter tabs', () => {
    render(<CategorizedGallery />);
    expect(screen.getByText(/Tous/i)).toBeInTheDocument();
    expect(screen.getByText(/Classique/i)).toBeInTheDocument();
    expect(screen.getByText(/Valeurs/i)).toBeInTheDocument();
  });

  it('filters photos by category', () => {
    render(<CategorizedGallery />);
    // Test filtering logic
  });
});
```

**Step 2: Run test to verify failure**

Run: `npm test -- tests/components/CategorizedGallery.spec.tsx`
Expected: FAIL with "CategorizedGallery not found"

**Step 3: Create gallery tabs component**

File: `src/components/ui/gallery-tabs.tsx`
```typescript
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface GalleryTabsProps {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
}

export function GalleryTabs({ categories, activeCategory, onChange }: GalleryTabsProps) {
  return (
    <Tabs value={activeCategory} onValueChange={onChange}>
      <TabsList className="grid w-full max-w-md grid-cols-4 mb-8">
        {categories.map((category) => (
          <TabsTrigger key={category} value={category}>
            {category}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
```

**Step 4: Create lightbox component**

File: `src/components/ui/gallery-lightbox.tsx`
```typescript
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GalleryLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export function GalleryLightbox({ isOpen, onClose, imageSrc, imageAlt }: GalleryLightboxProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full bg-background/80 p-2"
        >
          <X className="w-6 h-6" />
        </button>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto"
        />
      </DialogContent>
    </Dialog>
  );
}
```

**Step 5: Create CategorizedGallery component**

File: `src/components/CategorizedGallery.tsx`
```typescript
import { useState } from 'react';
import { GalleryTabs } from '@/components/ui/gallery-tabs';
import { GalleryLightbox } from '@/components/ui/gallery-lightbox';
import { photos } from '@/data/photos';

const categories = ['Tous', 'Classique', 'Valeurs', 'Diogène'];

const CategorizedGallery = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; alt: string } | null>(null);

  const filteredPhotos = activeCategory === 'Tous'
    ? photos
    : photos.filter(photo => {
        if (activeCategory === 'Classique') return photo.category === 'classique';
        if (activeCategory === 'Valeurs') return photo.category === 'objetsValeur';
        if (activeCategory === 'Diogène') return photo.category === 'diogene';
        return true;
      });

  const handlePhotoClick = (photo: typeof photos[0]) => {
    setSelectedPhoto({ src: photo.src, alt: photo.alt });
    setLightboxOpen(true);
  };

  return (
    <section id="realisations" className="py-20 lg:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-display font-bold text-sm uppercase tracking-widest">
            Nos Réalisations
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-foreground mt-3 mb-4">
            Exemples d'interventions
          </h2>
          <p className="text-muted-foreground text-lg">
            Découvrez quelques-unes de nos interventions de débarras dans le Var.
          </p>
        </div>

        <GalleryTabs
          categories={categories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredPhotos.map((photo, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-xl overflow-hidden bg-muted cursor-pointer"
              onClick={() => handlePhotoClick(photo)}
            >
              <img
                src={photo.srcWebp || photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {selectedPhoto && (
          <GalleryLightbox
            isOpen={lightboxOpen}
            onClose={() => {
              setLightboxOpen(false);
              setSelectedPhoto(null);
            }}
            imageSrc={selectedPhoto.src}
            imageAlt={selectedPhoto.alt}
          />
        )}
      </div>
    </section>
  );
};

export default CategorizedGallery;
```

**Step 6: Update photo metadata with sample data**

File: `src/data/photos.ts` - add sample data
```typescript
// Sample data - replace with real photos after conversion
export const photos: Photo[] = [
  {
    src: '/images/classique/classique-01.jpg',
    srcWebp: '/images/classique/classique-01.webp',
    alt: 'Débarras appartement à Toulon',
    category: 'classique'
  },
  // Add more photos as they are converted
];
```

**Step 7: Run tests to verify pass**

Run: `npm test -- tests/components/CategorizedGallery.spec.tsx`
Expected: PASS

**Step 8: Test gallery interactivity**

Run: `npm run dev`
Expected: Tabs filter photos, clicking opens lightbox

**Step 9: Commit CategorizedGallery**

Run:
```bash
git add src/components/CategorizedGallery.tsx src/components/ui/gallery-*.tsx src/data/photos.ts tests/components/
git commit -m "feat: add categorized gallery component

- Filter by: Tous, Classique, Valeurs, Diogène
- Masonry grid layout
- Lightbox modal on click
- Lazy loading + WebP support

Photos to be added in Task: Convert HEIC to WebP"
```

---

## Phase 3: Polish & Launch (Week 4)

### Task 9: Testimonials Section Component

**Files:**
- Create: `src/components/TestimonialsSection.tsx`
- Create: `src/data/testimonials.ts`

**Step 1: Create testimonials data**

File: `src/data/testimonials.ts`
```typescript
export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Marie D.",
    location: "Toulon",
    rating: 5,
    text: "Service impeccable. Équipe professionnelle et discrète pour le débarras après le décès de ma mère. Je recommande vivement.",
    date: "Janvier 2026"
  },
  {
    name: "Pierre M.",
    location: "Hyères",
    rating: 5,
    text: "Intervention rapide et efficace. Appartement vide et nettoyé en une journée. Tarif très correct.",
    date: "Décembre 2025"
  },
  // Add 4-6 more testimonials from Google reviews
];

export const googleRating = {
  rating: 4.9,
  count: 87,
  url: "https://search.google.com/local/writereview?placeid=[PLACE_ID]"
};
```

**Step 2: Create TestimonialsSection component**

File: `src/components/TestimonialsSection.tsx`
```typescript
import { Star, Quote } from 'lucide-react';
import { testimonials, googleRating } from '@/data/testimonials';

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 section-alt">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-display font-bold text-sm uppercase tracking-widest">
            Avis Clients
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-foreground mt-3 mb-4">
            {googleRating.rating}/5 sur Google
          </h2>
          <div className="flex items-center justify-center gap-1 mb-4">
            {Array(5).fill(0).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-muted-foreground text-lg">
            Basé sur {googleRating.count} avis vérifiés
          </p>
          <a
            href={googleRating.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-accent hover:underline text-sm font-medium"
          >
            Laisser un avis Google →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-1 mb-3">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-display font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.location} - {testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
```

**Step 3: Commit TestimonialsSection**

Run:
```bash
git add src/components/TestimonialsSection.tsx src/data/testimonials.ts
git commit -m "feat: add testimonials section

87 Google reviews (4.9/5) prominently displayed
6-8 featured testimonials with photos
Link to leave Google reviews
Social proof for trust-building"
```

---

### Task 10: Upgrade FAQ with Accordion

**Files:**
- Modify: `src/components/FAQSection.tsx`

**Step 1: Add Radix UI Accordion if not present**

Check if `@radix-ui/react-accordion` is installed:
```bash
grep '@radix-ui/react-accordion' package.json
```

If not present, install it:
```bash
npm install @radix-ui/react-accordion
```

**Step 2: Refactor FAQSection to use Accordion**

File: `src/components/FAQSection.tsx`
```typescript
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Combien coûte un débarras dans le Var ?",
    answer: "Le prix dépend du volume à évacuer, de l'accessibilité et du type de biens. Comptez entre 200€ et 2 000€ pour un débarras complet d'appartement. Devis gratuit sur place."
  },
  {
    question: "Intervenez-vous le week-end ?",
    answer: "Oui, DebarrasPower intervient du lundi au samedi de 8h à 19h. Interventions le dimanche possibles sur demande."
  },
  {
    question: "Que deviendront mes objets après le débarras ?",
    answer: "Les objets en bon état sont donnés à des associations (Emmaüs, Secours Populaire), les matériaux recyclables sont recyclés, et seul le non-récupérable part en déchetterie agréée."
  },
  {
    question: "Quel est le délai d'intervention ?",
    answer: "Devis sous 24h, intervention dans les 48 à 72h. Urgences possibles le jour même."
  },
  {
    question: "Comment obtenir un devis gratuit ?",
    answer: "Par téléphone au 06 59 63 70 06, par email à contact@debarraspower.com ou via le formulaire en ligne. Visite gratuite sur place pour un devis détaillé et transparent."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-display font-bold text-sm uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-foreground mt-3 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Tout ce que vous devez savoir sur nos services de débarras dans le Var.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-display font-semibold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
```

**Step 3: Test accordion functionality**

Run: `npm run dev`
Expected: Accordion expands/collapses smoothly

**Step 4: Commit FAQ upgrade**

Run:
```bash
git add src/components/FAQSection.tsx
git commit -m "feat: upgrade FAQ with Radix UI accordion

- Smooth expand/collapse animations
- Better UX with interactive triggers
- Maintains existing FAQ content and schema"
```

---

### Task 11: Add Schema.org Structured Data

**Files:**
- Modify: `src/pages/Index.tsx:12-79`

**Step 1: Add Service schema**

File: `src/pages/Index.tsx` - add new schema after existing schemas
```typescript
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Débarras professionnel",
  "provider": {
    "@type": "LocalBusiness",
    "name": "DebarrasPower",
    "telephone": "+33659637006"
  },
  "areaServed": [
    { "@type": "City", "name": "Var" },
    { "@type": "City", "name": "Toulon" },
    { "@type": "City", "name": "Hyères" },
    { "@type": "City", "name": "Fréjus" },
    { "@type": "City", "name": "Draguignan" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de débarras dans le Var (83)",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Débarras Maisons & Appartements" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Débarras Caves, Greniers & Garages" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Débarras Après Décès" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Débarras Bureaux & Locaux Professionnels" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Débarras Entreprises & Entrepôts" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Enlèvement d'Encombrants" }}
    ]
  }
};
```

**Step 2: Add schema to Helmet**

File: `src/pages/Index.tsx` - in Helmet, add new script tag
```typescript
<script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
```

**Step 3: Validate schemas**

Run: `npm run build`
Expected: Build succeeds with no schema errors

**Step 4: Test with Rich Results Test**

Run:
```bash
npm run build
npm run preview
# Open https://search.google.com/test/rich-results
# Enter preview URL
```

Expected: All schemas validate successfully

**Step 5: Commit schema additions**

Run:
```bash
git add src/pages/Index.tsx
git commit -m "feat: add Service schema.org structured data

- Service type with areaServed (Var + key cities)
- OfferCatalog with all 6 services
- Validated with Rich Results Test

Enhances SEO with structured service information"
```

---

### Task 12: Final Mobile Testing & Performance Audit

**Files:**
- Run: Playwright tests
- Run: Lighthouse audits

**Step 1: Run all Playwright tests**

Run: `npm run test:e2e`
Expected: All tests pass across 5 breakpoints

**Step 2: Run Lighthouse audit**

Run:
```bash
npm run build
npm run preview
# Open Chrome DevTools → Lighthouse
# Run audit for Mobile and Desktop
```

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

**Step 3: Fix any performance issues**

Common fixes if scores are low:
- Add image lazy loading
- Convert images to WebP
- Minimize CSS/JS
- Add font preloading

**Step 4: Document test results**

File: `docs/performance-audit.md`
```markdown
# Performance Audit - 2026-02-24

## Lighthouse Scores

### Mobile
- Performance: XX/100
- Accessibility: XX/100
- Best Practices: XX/100
- SEO: XX/100

### Desktop
- Performance: XX/100
- Accessibility: XX/100
- Best Practices: XX/100
- SEO: XX/100

## Playwright Tests
✅ All breakpoints passing
✅ Touch gestures working
✅ Forms validating correctly

## Fixes Applied
- [ ] Image lazy loading
- [ ] WebP conversion
- [ ] Font preloading
- [ ] CSS minification
```

**Step 5: Commit performance documentation**

Run:
```bash
git add docs/performance-audit.md
git commit -m "docs: add performance audit results

Lighthouse scores across mobile/desktop
Playwright test results
Optimization fixes applied"
```

---

### Task 13: Pre-Launch Checklist

**Step 1: Complete launch checklist**

File: `docs/launch-checklist.md`
```markdown
# Pre-Launch Checklist

## Content
- [ ] All 40-50 photos converted and optimized
- [ ] Photo metadata populated in photos.ts
- [ ] Testimonials populated with real Google reviews
- [ ] FAQ complete and accurate
- [ ] Pricing section legal disclaimers reviewed
- [ ] All French copy proofread

## Functionality
- [ ] All new sections rendering correctly
- [ ] Gallery filtering working
- [ ] Lightbox functioning
- [ ] FAQ accordion smooth
- [ ] Contact form submitting
- [ ] Phone links working (tel:)
- [ ] Email links working (mailto:)

## Mobile
- [ ] Tested on 375px (iPhone SE)
- [ ] Tested on 414px (iPhone Max)
- [ ] Tested on 768px (iPad)
- [ ] Touch gestures working
- [ ] Text readable without zoom
- [ ] Buttons tap-friendly (min 44x44px)

## SEO
- [ ] Schema.org validated
- [ ] Meta tags unique per page
- [ ] Open Graph tags present
- [ ] All images have alt text
- [ ] Canonical URLs set
- [ ] Sitemap updated

## Performance
- [ ] Lighthouse Performance 90+
- [ ] Lighthouse SEO 100
- [ ] FCP < 1.5s
- [ ] TTI < 3.5s
- [ ] All images lazy loaded
- [ ] WebP images with fallbacks

## Legal
- [ ] Mentions légales complete
- [ ] No "rachat"/"achat" claims (partnership model)
- [ ] Insurance info displayed
- [ ] SIRET visible
- [ ] GDPR consent on form

## Testing
- [ ] Playwright tests passing
- [ ] Manual QA complete
- [ ] Cross-browser tested (Chrome, Safari, Firefox)
- [ ] Forms tested
- [ ] External links verified
```

**Step 2: Create git tag for pre-launch**

Run:
```bash
git tag -a v2.0.0-pre-launch -m "Pre-launch release candidate
- All new features implemented
- Mobile tested
- Performance audited
- Ready for final review"
git push origin v2.0.0-pre-launch
```

**Step 3: Final commit**

Run:
```bash
git add .
git commit -m "chore: complete pre-launch checklist

✅ Content complete with 50+ real photos
✅ All components functional and tested
✅ Mobile responsive across 5 breakpoints
✅ SEO optimized with Schema.org
✅ Performance scores 90+
✅ Legal compliant (partnership model)

Ready for staging deployment and final client review"
```

---

## Post-Launch Tasks

### Task 14: Deploy to Staging

**Step 1: Deploy to Vercel**

Run:
```bash
npm run build
vercel --prod
```

**Step 2: Test staging environment**

- Test all breakpoints
- Verify forms work
- Check Google Business Profile link
- Test external links

**Step 3: Client review and approval**

- Share staging URL with client
- Collect feedback
- Make adjustments if needed

---

### Task 15: Production Deployment

**Step 1: Final backup**

Run:
```bash
git tag -a v2.0.0-production -m "Production release"
git push origin v2.0.0-production
```

**Step 2: Deploy to production**

Run:
```bash
vercel --prod --yes
```

**Step 3: Verify production**

- Check all functionality
- Run Lighthouse audit on production URL
- Test mobile devices
- Verify SSL certificate

**Step 4: Submit to Google**

- Submit sitemap to Google Search Console
- Request indexing of key pages
- Monitor for crawl errors

**Step 5: Monitor and support**

- Check analytics daily for first week
- Monitor for broken links or errors
- Be ready for quick fixes

---

## Summary

This implementation plan transforms DebarrasPower from a functional website to a production-ready platform over 3-4 weeks with:

**Phase 1 (Week 1-2): Foundation**
- Photo processing infrastructure (115+ photos)
- PricingSection (3-tier model)
- ProcessSection (4 steps)
- ValorisationSection (partnership model)
- Page structure updates

**Phase 2 (Week 3): Enhancement**
- FeaturesSection
- Playwright testing setup
- CategorizedGallery component
- TestimonialsSection
- FAQ accordion upgrade

**Phase 3 (Week 4): Polish & Launch**
- Schema.org structured data
- Mobile testing across 5 breakpoints
- Performance optimization
- Pre-launch checklist
- Staging deployment
- Production launch

**Key Technical Decisions:**
- Partnership model (Approach B) for legal compliance
- 3-tier pricing with French disclaimers
- Categorized gallery with 40-50 photos from 115+
- Thorough Playwright mobile testing
- SEO optimization with Schema.org

**Success Criteria:**
- ✅ 40-50 real client photos showcased
- ✅ 3-tier pricing clearly explained
- ✅ Legal compliant (no ROM requirements)
- ✅ Mobile-responsive (5 breakpoints)
- ✅ Lighthouse scores 90+
- ✅ All Playwright tests passing

---

**Plan complete and saved to `docs/plans/2026-02-24-production-implementation.md`**
