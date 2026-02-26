# TOITURE PACA - Roofing Services Website

> **Project Type**: Small Business Website (Local Service Business in France)
> **Language**: French (Primary), English (Development)
> **Status**: Production-Ready, SEO-Optimized

## Business Overview

**TOITURE PACA** is a professional roofing (couverture) and carpentry (charpente) service based in Toulon, Var department (83), Provence-Alpes-Côte d'Azur, France. The business provides roofing services for residential and commercial properties.

### Key Business Details
- **Phone**: 06 04 05 35 10
- **Email**: director@ay-toiture.fr
- **Location**: 133 Rue du Jeu de Paume, 83200 Toulon, France
- **Service Area**: Var department (83) and PACA region
- **Business Model**: Lead generation through phone/email contact
- **Services**: Roof installation, renovation, repair, and maintenance

### Core Services
1. Charpente (Roof Framing/Carpentry)
2. Couverture (Roofing - new & renovation)
3. Inspection toiture (Roof inspection)
4. Diagnostic toiture (Roof diagnostics)
5. Réparation de fuites (Leak repair)
6. Remplacement de tuiles (Tile replacement)
7. Entretien toiture (Roof maintenance)
8. Devis gratuit (Free quotes)

### Geographic Coverage
Var department (83) and PACA region, including: Toulon, Hyères, Fréjus, Draguignan, Brignoles, Saint-Raphaël, La Seyne-sur-Mer, and surrounding areas.

## Technology Stack

### Frontend Framework
- **React 18.3.1** - Functional components with hooks
- **TypeScript** - Full type safety
- **Vite 5.4.19** - Build tool & dev server
- **React Router DOM 6.30.1** - Client-side routing

### UI & Design System
- **Tailwind CSS 3.4.17** - Utility-first styling
- **shadcn/ui** - Pre-built accessible components (Radix UI primitives)
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Icon system
- **Custom Design Tokens** - CSS variables for theming

### Typography
- **Outfit** - Headings and display text (Google Fonts)
- **Inter** - Body text and UI elements (Google Fonts)

### State Management & Forms
- **TanStack React Query 5.83.0** - Server state management
- **React Hook Form 7.61.1** - Form handling
- **Zod 3.25.76** - Schema validation

### SEO & Meta
- **React Helmet Async 2.0.5** - Dynamic meta tags
- **Schema.org** - Structured data (JSON-LD)
- **Open Graph** tags for social sharing

### Development Tools
- **ESLint** - Code linting
- **Vitest** - Unit testing
- **TypeScript ESLint** - Type checking

## Project Architecture

### File Structure
```
src/
├── components/
│   ├── ui/              # shadcn/ui components (Button, Card, Input, etc.)
│   ├── sections/        # Page sections (Hero, Services, About, etc.)
│   └── layout/          # Header, Footer, Navigation
├── pages/
│   ├── Index.tsx        # Main landing page
│   ├── CityPage.tsx     # Dynamic city-specific pages
│   └── NotFound.tsx     # 404 error page
├── data/
│   └── cities.ts        # City data and geographic info
├── lib/
│   └── utils.ts         # Utility functions (cn helper)
└── main.tsx             # App entry point
```

### Page Architecture

#### Main Landing Page (`Index.tsx`)
- Hero section with CTA
- Services overview
- About/Trust signals
- Gallery showcase (roofing projects)
- Geographic zones covered
- FAQ section (with Schema.org FAQPage)
- Contact form
- Footer with business info

#### City Pages (`CityPage.tsx`)
Dynamic pages for each serviced city with:
- Localized hero content
- City-specific services
- Nearby cities
- Local SEO optimization
- Contact form

#### 404 Page (`NotFound.tsx`)
- Helpful navigation back to home
- Maintains design consistency

### Design System

#### Color Palette
- **Primary**: Dark blue (`--primary`) - Trust, professionalism
- **Accent**: Orange/Red (`--accent`) - Action, attention
- **Neutral**: Warm grays (`--muted`) - Backgrounds, borders
- **Dark mode support** with CSS variables

#### Typography Scale
- Display: Outfit (bold, distinctive)
- Headings: Outfit (semibold, medium)
- Body: Inter (regular, leading-relaxed)
- Small: Inter (regular, text-sm)

#### Spacing & Layout
- Container max-width: `1280px` (xl breakpoint)
- Section padding: `py-16 md:py-24`
- Grid layouts: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Mobile-first responsive design

#### Animation System
- Fade-up animations on scroll
- Stagger delays for cascading reveals
- Hover state transitions
- Smooth page transitions

## Key Features

### SEO Optimizations
1. **Structured Data (JSON-LD)**
   - LocalBusiness schema
   - FAQPage schema
   - Service schema

2. **Meta Tags**
   - French language content
   - Descriptive titles and descriptions
   - Canonical URLs
   - Open Graph tags

3. **Local SEO Strategy**
   - City-specific landing pages
   - Geographic keywords
   - Location-based content

4. **Performance**
   - Lazy-loaded images
   - Code splitting
   - Minimal bundle size

### Accessibility
- Semantic HTML
- ARIA labels (via Radix UI)
- Keyboard navigation
- Color contrast compliance
- Screen reader friendly

### User Experience
- **Phone-first approach** - Prominent CTA buttons
- **Quick contact** - Click-to-call functionality
- **Visual trust signals** - Gallery of completed projects
- **Service showcase** - Examples of roofing work
- **FAQ section** - Common questions answered
- **Mobile optimized** - Responsive hamburger menu

## Development Workflow

### Local Development
```bash
npm install              # Install dependencies
npm run dev             # Start dev server (http://localhost:5173)
npm run build           # Production build
npm run preview         # Preview production build
npm run lint            # Run ESLint
npm run test            # Run Vitest tests
```

### Key Commands
- `npm run dev` - Development with hot reload
- `npm run build` - Optimized production build
- `npm run preview` - Preview production build locally

### Git Workflow
- Main branch: `main`
- Commit format: Conventional Commits preferred
- PR review required for changes

## Content Guidelines

### Language
- **Primary**: French (all user-facing content)
- **Code**: English (variable names, comments)
- **Documentation**: English (CLAUDE.md, README.md)

### Tone & Voice
- Professional and trustworthy
- Service-oriented and helpful
- Clear and direct communication
- Avoid overly promotional language

### Brand Positioning
- Professional roofing service
- Quality craftsmanship
- Reliable and timely service
- Free quotes
- Local expertise in Var and PACA region

## Important Considerations

### Business Logic
- No e-commerce functionality
- Lead generation only (phone/email)
- No user accounts or authentication
- Static content with dynamic routing

### Legal & Compliance
- French business regulations
- GDPR compliance (contact form)
- Professional liability insurance
- Licensed roofing contractor

### Performance Targets
- Lighthouse score: 90+ across all categories
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Mobile optimization priority

## Future Enhancements

### Potential Features
- Online quote request form (advanced)
- Appointment scheduling system
- Project gallery with before/after photos
- Customer testimonials/reviews display
- Live chat integration
- SMS notifications

### SEO Opportunities
- Blog content (roofing tips, maintenance guides)
- Video content (work examples)
- Customer case studies
- Local partnerships/links
- Google Business Profile optimization

## Testing

### Test Strategy
- Component testing with Vitest
- Accessibility testing (axe-core)
- Visual regression testing (optional)
- SEO testing (Lighthouse, Schema validation)

### Key Test Areas
- Navigation and routing
- Form validation
- Responsive layouts
- Schema.org markup
- Meta tags and SEO

## Deployment

### Recommended Platforms
- **Vercel** (recommended for Vite projects)
- **Netlify**
- Any static hosting service

### Deployment Checklist
- [ ] Production build optimized
- [ ] Environment variables configured
- [ ] Meta tags verified
- [ ] Schema.org validated
- [ ] Analytics integrated
- [ ] Domain configured
- [ ] SSL certificate active

## Maintenance

### Regular Tasks
- Update service area as coverage expands
- Refresh gallery images with new projects
- Update FAQ based on customer inquiries
- Monitor SEO performance
- Check for broken links quarterly
- Update dependencies monthly

### Analytics & Monitoring
- Google Analytics 4
- Google Search Console
- Phone call tracking
- Form submission tracking
- User behavior analysis

## Resources

### Documentation
- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
- [shadcn/ui Components](https://ui.shadcn.com)

### Business Resources
- `public/llm.txt` - AI/chatbot reference content
- `README.md` - Project setup instructions
- Google Business Profile
- French business regulations

## Contact & Support

For project-related questions or technical issues:
- Technical support via GitHub issues
- Business inquiries: director@ay-toiture.fr
- Phone: 06 04 05 35 10

---

**Last Updated**: 2026-02-26
**Version**: 1.0.0
**Maintained by**: Development Team
