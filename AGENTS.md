# AGENTS.md - AI Agent Guidelines for DebarrasPower

> This file defines how different AI agents and assistants should interact with the DebarrasPower codebase, ensuring consistency and proper context awareness.

## Agent Roles & Responsibilities

### 1. Frontend Development Agent

**Primary Responsibilities:**
- Build and maintain React components
- Implement UI features using Tailwind CSS and shadcn/ui
- Ensure responsive design across all breakpoints
- Maintain design system consistency

**Technical Context:**
- Uses React 18.3.1 with TypeScript
- Component library: shadcn/ui (Radix UI primitives)
- Styling: Tailwind CSS with custom design tokens
- Icons: Lucide React
- State: React hooks + React Query for server state

**Design Principles:**
- Follow existing design system (Outfit + Inter fonts)
- Use CSS variables for colors and spacing
- Maintain dark mode support
- Implement smooth animations with stagger delays
- Mobile-first responsive approach

**Key Guidelines:**
- Never use Inter for headings (use Outfit instead)
- Avoid generic AI aesthetics (purple gradients, Inter-only designs)
- Use distinctive, characterful design choices
- Implement fade-up animations for new sections
- Test all components on mobile, tablet, and desktop

**Example Component Pattern:**
```tsx
import { cn } from "@/lib/utils"

export function MyComponent({ className, ...props }) {
  return (
    <section className={cn(
      "py-16 md:py-24",
      "fade-up", // Custom animation class
      className
    )}>
      {/* Content */}
    </section>
  )
}
```

---

### 2. SEO & Content Agent

**Primary Responsibilities:**
- Optimize pages for local SEO (Var department, France)
- Maintain Schema.org structured data
- Write French content for pages and sections
- Update meta tags and descriptions
- Create city-specific landing pages

**SEO Strategy:**
- Target geographic keywords (city + service)
- Local business schema for each location
- FAQPage schema for FAQ sections
- French language content only
- Canonical URLs for all pages

**Key Keywords to Target:**
- débarras var, débarras toulon, débarras hyères
- vide maison var, débarras 83
- débarras après décès var
- enlèvement encombrants var
- entreprise débarras var

**Content Guidelines:**
- All user-facing text in French
- Professional, trustworthy tone
- Focus on service benefits (fast, insured, eco-friendly)
- Include trust signals (ratings, insurance)
- Clear call-to-actions (phone, email)

**Schema Requirements:**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "DebarrasPower",
  "telephone": "+33 6 59 63 70 06",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Var",
    "addressCountry": "FR"
  }
}
```

---

### 3. Testing & Quality Agent

**Primary Responsibilities:**
- Write unit tests with Vitest
- Test accessibility (keyboard nav, screen readers)
- Validate SEO meta tags and schema
- Check responsive layouts
- Run Lighthouse audits

**Testing Priorities:**
1. Component rendering and interactions
2. Form validation and submission
3. Navigation and routing
4. Schema.org markup validation
5. Responsive behavior (mobile, tablet, desktop)

**Lighthouse Targets:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

**Accessibility Checklist:**
- [ ] Semantic HTML elements
- [ ] ARIA labels on interactive elements
- [ ] Keyboard navigation works
- [ ] Color contrast ratios meet WCAG AA
- [ ] Screen reader announces content correctly
- [ ] Focus indicators visible

---

### 4. Content & Localization Agent

**Primary Responsibilities:**
- Translate/Write content in French
- Adapt tone for French market
- Ensure cultural appropriateness
- Maintain consistent brand voice
- Update city-specific information

**Language Guidelines:**
- **User-facing content**: French only
- **Code comments**: English preferred
- **Documentation**: English
- **Variable names**: English (technical terms)

**Tone & Voice:**
- Professional and service-oriented
- Direct and clear (avoid excessive marketing fluff)
- Trustworthy and reliable
- Local expertise emphasis

**Common French Phrases:**
- "Devis gratuit" (Free quote)
- "Intervention rapide" (Fast response)
- "Assurance incluse" (Insurance included)
- "Recyclage responsable" (Responsible recycling)
- "Zone d'intervention" (Service area)

**City Names:**
Use proper French spellings with accents:
- Toulon, Hyères, Fréjus, Draguignan
- La Seyne-sur-Mer, Saint-Raphaël
- Six-Fours-les-Plages, Sanary-sur-Mer
- Sainte-Maxime, Saint-Tropez

---

### 5. Documentation Agent

**Primary Responsibilities:**
- Keep CLAUDE.md updated with project changes
- Document new components and features
- Maintain README.md with setup instructions
- Update llm.txt for AI reference
- Create inline code comments where needed

**Documentation Standards:**
- CLAUDE.md: High-level project overview
- README.md: Quick start and setup
- Component docs: JSDoc comments
- Code comments: Only for complex logic

**When to Update Docs:**
- Adding new pages or major features
- Changing the tech stack
- Updating business information
- Adding new services or cities
- Modifying design system

---

### 6. Design & UX Agent

**Primary Responsibilities:**
- Maintain design system consistency
- Create visually striking, memorable interfaces
- Implement animations and micro-interactions
- Ensure accessible color contrasts
- Design new sections and components

**Design System Constraints:**
- **Primary Font**: Outfit (headings, display)
- **Body Font**: Inter (body text, UI)
- **Primary Color**: Dark blue (trust, professionalism)
- **Accent Color**: Orange/Red (action, attention)
- **No generic aesthetics**: Avoid Inter-only, purple gradients

**Animation Guidelines:**
- Use CSS-only animations when possible
- Implement stagger delays for cascading reveals
- Prioritize page load animations
- Add hover states for interactive elements
- Smooth transitions (300-500ms)

**Layout Principles:**
- Asymmetry and overlap for visual interest
- Diagonal flow when appropriate
- Generous negative space
- Grid-breaking elements
- Mobile-first responsive design

**Anti-Patterns to Avoid:**
- Generic Inter font for everything
- Purple gradients on white backgrounds
- Predictable grid layouts
- Cookie-cutter component patterns
- Overused Space Grotesk typography

---

### 7. Performance Agent

**Primary Responsibilities:**
- Monitor bundle size
- Optimize images (lazy loading, compression)
- Implement code splitting
- Reduce Time to Interactive
- Maintain fast page loads

**Performance Targets:**
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Bundle size: < 200KB gzipped

**Optimization Strategies:**
- Lazy load images below the fold
- Code split by route
- Tree shake unused dependencies
- Minimize CSS with PurgeCSS
- Use modern image formats (WebP)

---

## Agent Coordination

### Workflow for New Features

1. **Design Agent** creates visual mockups
2. **Frontend Agent** implements component
3. **Content Agent** provides French text
4. **SEO Agent** optimizes meta tags and schema
5. **Testing Agent** validates and tests
6. **Documentation Agent** updates docs

### Handoff Protocols

**Design → Development:**
- Provide design specs (colors, spacing, typography)
- Include animation details (timing, easing)
- Specify responsive breakpoints

**Development → Testing:**
- Describe component functionality
- List user interactions to test
- Identify accessibility requirements

**Content → Development:**
- Provide French text for all user-facing elements
- Specify tone and context
- Note any cultural considerations

### Communication Between Agents

- Always check CLAUDE.md before starting work
- Review existing components before creating new ones
- Test changes across all breakpoints
- Validate SEO markup before deployment
- Update documentation after major changes

---

## Common Agent Tasks

### Adding a New City Page

1. **SEO Agent**: Research city keywords and competition
2. **Content Agent**: Write city-specific French content
3. **Frontend Agent**: Create CityPage instance with localized data
4. **Design Agent**: Ensure visual consistency
5. **Testing Agent**: Validate responsive layout and SEO

### Adding a New Service

1. **Content Agent**: Write service description in French
2. **Design Agent**: Create service card/icon
3. **Frontend Agent**: Add to Services section
4. **SEO Agent**: Update meta tags and FAQ
5. **Documentation Agent**: Update CLAUDE.md

### Fixing a Bug

1. **Testing Agent**: Identify root cause and scope
2. **Frontend Agent**: Implement fix
3. **Testing Agent**: Verify fix and test regressions
4. **Documentation Agent**: Document edge case if needed

---

## Agent Boundaries

### What Agents SHOULD Do:
- Follow existing patterns and conventions
- Test changes thoroughly
- Write clear commit messages
- Update relevant documentation
- Ask questions before making breaking changes

### What Agents SHOULD NOT Do:
- Change the tech stack without discussion
- Remove SEO optimizations
- Break existing functionality
- Use generic AI aesthetics
- Mix languages inappropriately (French/English)
- Skip testing on mobile devices
- Deploy without validation

---

## Quick Reference for All Agents

### Tech Stack
- React 18.3.1 + TypeScript
- Vite 5.4.19
- Tailwind CSS 3.4.17
- shadcn/ui components
- React Router DOM 6.30.1

### Design Tokens
```css
--primary: dark blue
--accent: orange/red
--font-heading: Outfit
--font-body: Inter
```

### Key Files
- `CLAUDE.md` - Project documentation
- `public/llm.txt` - Business info for AI
- `src/pages/Index.tsx` - Main landing page
- `src/pages/CityPage.tsx` - City pages
- `src/data/cities.ts` - City data

### Business Contact
- Phone: +33 6 59 63 70 06
- Email: contact@debarraspower.com
- Area: Var department (83), France

---

## Emergency Procedures

### If Something Breaks:
1. Stop and assess impact
2. Check git log for recent changes
3. Revert if necessary
4. Test thoroughly before reapplying
5. Document the issue

### If SEO Issues Arise:
1. Validate Schema.org markup
2. Check meta tags and descriptions
3. Verify canonical URLs
4. Test with Google Rich Results Test
5. Update documentation

### If Performance Drops:
1. Run Lighthouse audit
2. Check bundle size
3. Validate image optimization
4. Review code splitting
5. Test on mobile networks

---

**Last Updated**: 2026-02-24
**Version**: 1.0.0
**Maintained by**: Development Team
