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
  name: "DebarrasPower",
  description: "Service professionnel de débarras dans le Var (83). Maisons, appartements, caves, greniers, bureaux. Devis gratuit, intervention rapide, recyclage responsable.",
  url: "https://debarraspower.com",
  telephone: "+33659637006",
  email: "contact@debarraspower.com",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Var (83), Provence-Alpes-Côte d'Azur, France",
  },
  priceRange: "€€",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "19:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "87",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de débarras",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Débarras Maisons & Appartements" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Débarras Caves, Greniers & Garages" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Débarras Après Décès" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Débarras Bureaux & Locaux Professionnels" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Enlèvement d'Encombrants" } },
    ],
  },
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>DebarrasPower | Débarras Professionnel dans le Var (83) - Devis Gratuit</title>
        <meta name="description" content="DebarrasPower : entreprise de débarras dans le Var (83). Maisons, appartements, caves, greniers, bureaux. Devis gratuit sous 24h. Intervention rapide à Toulon, Hyères, Fréjus et tout le Var." />
        <meta name="keywords" content="débarras var, débarras toulon, débarras hyères, débarras fréjus, vide maison var, débarras 83, entreprise débarras var, débarras après décès var" />
        <link rel="canonical" href="https://debarraspower.com" />
        <meta property="og:title" content="DebarrasPower | Débarras Professionnel dans le Var (83)" />
        <meta property="og:description" content="Service de débarras professionnel dans tout le Var. Devis gratuit sous 24h. Recyclage responsable." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://debarraspower.com" />
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
