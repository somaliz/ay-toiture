# DebarrasPower - Site Officiel

Site web professionnel pour DebarrasPower, service de débarras dans le Var (83).

## 🏢 À Propos

DebarrasPower est un service professionnel de débarras et enlèvement d'encombrants intervenant dans tout le département du Var (83).

- **Zone d'intervention** : Toulon, Hyères, Fréjus, Draguignan, et 23+ autres villes
- **Services** : Débarras de maisons, appartements, caves, bureaux, locaux professionnels
- **Valorisation** : Tri, réemploi, recyclage jusqu'à 80% des objets
- **Rating** : 4.9/5 sur Google (87 avis vérifiés)

## 🚀 Technologies

- **Framework** : React 18.3.1 + TypeScript
- **Build Tool** : Vite 5.4.19
- **Styling** : Tailwind CSS 3.4.17
- **Components** : shadcn/ui (Radix UI primitives)
- **Routing** : React Router DOM 6.30.1
- **Testing** :
  - Vitest pour les tests unitaires
  - Playwright pour les tests E2E
  - Testing Library pour React

## 📦 Installation

```bash
# Cloner le repository
git clone <repository-url>
cd debarras-power-pro

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

Le site sera disponible sur http://localhost:8080

## 🧪 Tests

```bash
# Tests unitaires
npm test

# Tests E2E avec Playwright
npm run test:e2e

# Playwright UI mode
npm run test:e2e:ui

# Installer les browsers Playwright
npm run test:e2e:install
```

## 🏗️ Build

```bash
# Build de production
npm run build

# Preview du build de production
npm run preview
```

## 📁 Structure du Projet

```
debarras-power-pro/
├── public/              # Assets statiques
│   └── images/         # Photos organisées par catégorie
├── src/
│   ├── components/     # Composants React
│   ├── data/          # Données (photos, témoignages, etc.)
│   ├── lib/           # Utilitaires
│   └── pages/         # Pages de l'application
├── docs/              # Documentation et plans
├── playwright.config.ts
├── vite.config.ts
└── package.json
```

## 🎨 Sections du Site

- **Hero** : Présentation principale avec appel à l'action
- **Features** : Points forts (zone d'intervention, services, recyclage)
- **Services** : Détail des services de débarras
- **Process** : Processus en 4 étapes
- **Valorisation** : Tri, réemploi, partenaires experts
- **Gallery** : Photos de réalisations (classique, valeurs, Diogène)
- **Testimonials** : Avis clients Google (4.9/5)
- **Pricing** : 3 formules (Gratuit, Payé, Classique)
- **Zones** : Villes desservies dans le Var
- **FAQ** : Questions fréquentes
- **Contact** : Formulaire de contact

## 📄 Documentation

- `CLAUDE.md` - Documentation complète du projet
- `AGENTS.md` - Guidelines pour les agents AI
- `PROJECT_REVIEW.md` - Analyse comparative et améliorations
- `docs/plans/` - Plans de design et implémentation

## 🎯 Performance & SEO

- Schema.org structured data (LocalBusiness, Service, FAQ, ImageObject)
- Optimisation des images (WebP + lazy loading)
- Tests E2E sur 5 breakpoints (mobile à desktop)
- Lighthouse Performance target: 90+

## 📞 Contact

- **Téléphone** : +33 6 59 63 70 06
- **Email** : contact@debarraspower.com
- **Google Reviews** : 4.9/5 (87 avis)

## 📝 Licence

Propriété de DebarrasPower © 2026
