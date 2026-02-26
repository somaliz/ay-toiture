import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import CategorizedGallery from "@/components/CategorizedGallery";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import ZonesSection from "@/components/ZonesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

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
  // Note: No aggregateRating - Google Business Profile does not exist yet
};

const Index = () => {
  return (
    <>
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
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <ProcessSection />
        <CategorizedGallery />
        <TestimonialsSection />
        <PricingSection />
        <ZonesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
