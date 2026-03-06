import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ArrowRight, CheckCircle2, Award, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-toiture.jpg";

const serviceData: Record<string, {
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  intro: string;
  details: string[];
  benefits: string[];
  cta: string;
}> = {
  charpente: {
    title: "Charpente",
    h1: "Charpente Bois & Métallique dans le Var (83)",
    metaTitle: "Charpente Var (83) | TOITURE PACA - Devis Gratuit",
    metaDescription: "Artisan charpentier à Toulon. Fabrication et rénovation de charpentes bois et métalliques. Devis gratuit, intervention rapide dans le Var.",
    description: "TOITURE PACA réalise vos projets de charpente dans le Var. Charpente bois traditionnelle ou charpente métallique moderne, nous concevons et fabriquons des structures durables et adaptées à votre toiture.",
    intro: "Vous avez un projet de charpente à Toulon ou dans le Var ? Notre équipe d'artisans charpentiers vous accompagne de la conception à la réalisation, avec un savoir-faire reconnu et des matériaux de qualité.",
    details: [
      "Charpente traditionnelle en bois (chêne, sapin, douglas)",
      "Charpente métallique (acier, aluminium pour légèreté)",
      "Rénovation et réparation de charpentes existantes",
      "Isolation thermique par l'extérieur (sous rampant)",
      "Renforcement et consolidation de structure",
      "Fabrication de fermettes et pannes sur mesure"
    ],
    benefits: [
      "Étude personnalisée et devis gratuit",
      "Choix des matériaux durables (bois traité classe 4, acier galvanisé)",
      "Garantie décennale sur tous les travaux",
      "Respect des normes DTU et règles de l'art",
      "Fabrication dans nos ateliers du Var"
    ],
    cta: "Devis Gratuit Charpente"
  },
  couverture: {
    title: "Couverture",
    h1: "Couverture (Neuf & Rénovation) dans le Var (83)",
    metaTitle: "Couverture Var (83) | TOITURE PACA - Devis Gratuit",
    metaDescription: "Artisan couvreur à Toulon. Pose et rénovation complète de toitures : tuiles, ardoises, zinc, étanchéité. Devis gratuit, intervention rapide.",
    description: "TOITURE PACA est spécialisé dans la couverture neuve et la rénovation de toitures dans le Var. Tuiles, ardoises, zinc, étanchéité plate — nous couvrons tous vos besoins de toiture.",
    intro: "Votre toiture est en fin de vie ou vous construisez ? TOITURE PACA intervient pour tous vos projets de couverture dans le Var, de la pose neuve à la rénovation complète.",
    details: [
      "Couverture en tuiles (terre cuite, béton, platine)",
      "Couverture en ardoises (naturelles ou synthétiques)",
      "Zinc et étanchéité pour toitures plates",
      "Rénovation complète de toiture",
      "Isolation toiture par l'extérieur",
      "Ventilation et éclairage zinguerois"
    ],
    benefits: [
      "Tous types de couverture : tuiles, ardoises, zinc, bac acier",
      "Isolation thermique performante (R = 6 minimum)",
      "Respect de l'esthétique locale (styles provençaux, contemporains)",
      "Garantie décennale sur pose et matériaux",
      "Devis gratuit et conseil sur les matériaux adaptés"
    ],
    cta: "Devis Gratuit Couverture"
  },
  inspection: {
    title: "Inspection Toiture",
    h1: "Inspection et Diagnostic Toiture dans le Var (83)",
    metaTitle: "Inspection Toiture Var (83) | TOITURE PACA - Devis Gratuit",
    metaDescription: "Inspection complète de votre toiture dans le Var. Détection des problèmes, état des lieux, recommandations. Devis gratuit.",
    description: "TOITURE PACA réalise des inspections complètes de toiture dans tout le Var. Diagnostic approfondi pour identifier les problèmes avant qu'ils ne s'aggravent.",
    intro: "Votre toiture a besoin d'un check-up ? Nos experts interviennent pour inspecter votre couverture, charpente et zinguerie, et établir un état des lieux précis.",
    details: [
      "Inspection visuelle complète (tuiles, ardoises, zinc)",
      "Vérification de l'étanchéité et des zones à risque",
      "Inspection charpente (bois, moisissures, insectes)",
      "Analyse de la ventilation et de l'isolation",
      "Rapport d'inspection avec photos",
      "Recommandations et priorisation des travaux"
    ],
    benefits: [
      "Diagnostic précis de l'état de votre toiture",
      "Photos détaillées de tous les problèmes",
      "Rapport écrit avec estimation budgétaire",
      "Intervention rapide si urgence constatée",
      "Prise en charge des travaux si nécessaire"
    ],
    cta: "Demander une Inspection"
  },
  diagnostic: {
    title: "Diagnostic Toiture",
    h1: "Diagnostic Fuite Toiture dans le Var (83)",
    metaTitle: "Diagnostic Toiture Var (83) | TOITURE PACA - Devis Gratuit",
    metaDescription: "Diagnostic fuite toiture et infiltration dans le Var. Identification précise des problèmes et solutions adaptées. Devis gratuit.",
    description: "TOITURE PACA réalise des diagnostics de toiture pour identifier les fuites, infiltrations et dégâts des eaux dans le Var. Intervention rapide et solutions durables.",
    intro: "Vous avez repéré une tache d'humidité ou une fuite sur votre toiture ? Notre équipe de diagnostic intervient rapidement pour localiser le problème et vous proposer les solutions adaptées.",
    details: [
      "Recherche de fuite (infiltration, dégât des eaux)",
      "Test d'étanchéité (pluie, fumigène)",
      "Analyse des ponts thermiques et condensation",
      "Examen des raccords zinguerie et pluviale",
      "Diagnostic charpente et structure",
      "Compte-rendu avec photos et recommandations"
    ],
    benefits: [
      "Localisation précise de la source d'infiltration",
      "Test d'étanchéité à l'eau (si nécessaire)",
      "Solutions durables et adaptées au problème",
      "Intervention urgence sous 24h si fuite active",
      "Devis gratuit pour la réparation"
    ],
    cta: "Diagnostic Gratuit"
  },
  reparation: {
    title: "Réparation de Fuites",
    h1: "Réparation Fuite Toiture dans le Var (83)",
    metaTitle: "Réparation Toiture Var (83) | TOITURE PACA - Intervention Urgente",
    metaDescription: "Réparation fuite toiture et infiltration dans le Var. Intervention urgente sous 24h. Devis gratuit, garantie décennale.",
    description: "TOITURE PACA intervient en urgence pour réparer toutes fuites de toiture dans le Var. Infiltrations, dégâts des eaux, tuiles cassées — intervention rapide 24h/24.",
    intro: "Fuite de toiture ? Tache d'humidité ? TOITURE PACA intervient en urgence dans tout le Var pour stopper les dégâts et réparer votre toiture.",
    details: [
      "Réparation urgente de fuites et infiltrations",
      "Remplacement de tuiles cassées ou cassées",
      "Réparation de zinguerie (gouttières, noues, chéneaux)",
      "Rebouchage de fissures et points d'infiltration",
      "Traitement anti-mousse et hydrofuge",
      "Intervention tempête et dégâts des eaux"
    ],
    benefits: [
      "Intervention urgence sous 24h",
      "Réparation durable (pas de pansements)",
      "Garantie décennale sur les réparations",
      "Dépannage tempête possible",
      "Photos avant/après pour l'assurance"
    ],
    cta: "Réparation Urgente"
  },
  remplacement: {
    title: "Remplacement de Tuiles",
    h1: "Remplacement Tuiles Cassées dans le Var (83)",
    metaTitle: "Remplacement Tuiles Var (83) | TOITURE PACA - Devis Gratuit",
    metaDescription: "Remplacement de tuiles cassées ou endommagées dans le Var. Intervention rapide, tuiles de même type. Devis gratuit.",
    description: "TOITURE PACA remplace vos tuiles cassées ou endommagées dans tout le Var. Tuiles de terre cuite, béton, ardoises — retrouvons des matériaux identiques ou adaptés.",
    intro: "Après une tempête ou avec le temps, des tuiles se cassent ? TOITURE PACA intervient pour les remplacer rapidement et sécuriser votre toiture.",
    details: [
      "Remplacement de tuiles cassées ou fendues",
      "Recherche de tuiles identiques (même couleur, même fabricant)",
      "Harmonisation si tuile introuvable (nuances les plus proches)",
      "Vérification de la sous-toiture et charpente",
      "Nettoyage des zones de remplacement",
      "Traitement préventif anti-mousse à proximité"
    ],
    benefits: [
      "Stock de tuiles courantes (canal, romane, plate)",
      "Remplacement en quelques heures",
      "Vérification des structures sous-jacentes",
      "Garantie décennale sur le remplacement",
      "Proposition de remplacement complet si nécessaire"
    ],
    cta: "Remplacement Tuiles"
  },
  entretien: {
    title: "Entretien Toiture",
    h1: "Entretien & Démoussage Toiture dans le Var (83)",
    metaTitle: "Entretien Toiture Var (83) | TOITURE PACA - Devis Gratuit",
    metaDescription: "Entretien toiture et démoussage dans le Var. Nettoyage, traitement anti-mousse, hydrofuge. Prolongez durée de vie de votre toiture.",
    description: "TOITURE PACA assure l'entretien de votre toiture dans tout le Var. Démoussage, nettoyage, traitement anti-mousse et hydrofuge pour prolonger la durée de vie de votre couverture.",
    intro: "L'entretien régulier de votre toiture est essentiel pour éviter les infiltrations et prolonger sa durée de vie. TOITURE PACA propose des formules d'entretien adaptées à votre toiture et votre budget.",
    details: [
      "Démoussage mécanique (brossage doux ou rotatif)",
      "Nettoyage à basse pression (sans abîmer les tuiles)",
      "Traitement anti-mousse (préventif et curatif)",
      "Application d'hydrofuge pour protection",
      "Nettoyage et vérification des gouttières",
      "Vérification des zones sensibles (souches, noues, raccords)"
    ],
    benefits: [
      "Prolonge la durée de vie de votre toiture de 10-15 ans",
      "Évite les infiltrations et problèmes structurels",
      "Améliore l'esthétique de votre toiture",
      "Traitement préventif contre les mousses et lichens",
      "Intervention rapide et devis sur place"
    ],
    cta: "Devis Entretien"
  },
  devis: {
    title: "Devis Gratuit",
    h1: "Devis Gratuit Toiture dans le Var (83)",
    metaTitle: "Devis Gratuit Couverture Var (83) | TOITURE PACA - Sous 24h",
    metaDescription: "Devis gratuit pour tous travaux de toiture dans le Var. Intervention rapide sous 24h. Sans engagement.",
    description: "TOITURE PACA propose des devis gratuits pour tous vos projets de toiture dans le Var. Charpente, couverture, réparation, entretien — demandez votre devis sans engagement.",
    intro: "Vous avez un projet de toiture ? Demandez votre devis gratuit en remplissant le formulaire ou en nous appelant directement. Intervention sous 24h.",
    details: [
      "Devis gratuit sur place (visite et estimation)",
      "Devis envoyé sous 24h après visite",
      "Détail complet des prestations et matériaux",
      "Estimation budgétaire précise",
      "Sans engagement et valide 30 jours",
      "Conseil personnalisé sur les options"
    ],
    benefits: [
      "Devis gratuit et sans engagement",
      "Réponse sous 24h pour organiser la visite",
      "Estimation transparente et détaillée",
      "Conseil d'expert sur les solutions adaptées",
      "Aide au choix des matériaux dans votre budget"
    ],
    cta: "Demander un Devis"
  }
};

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = serviceData[slug || ""];

  if (!service) return <Navigate to="/404" replace />;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `TOITURE PACA - ${service.title}`,
    description: service.metaDescription,
    url: `https://www.ay-toiture.fr/${slug}`,
    telephone: "+33604053510",
    email: "director@ay-toiture.fr",
    priceRange: "€€",
  };

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <link rel="canonical" href={`https://www.ay-toiture.fr/${slug}`} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.ay-toiture.fr/${slug}`} />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center pt-28 pb-16">
          <div className="absolute inset-0">
            <img src={heroImage} alt={`TOITURE PACA - ${service.title}`} className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 hero-gradient" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-2xl">
              <nav className="text-sm text-primary-foreground/60 mb-4">
                <Link to="/" className="hover:text-accent transition-colors">Accueil</Link>
                <span className="mx-2">/</span>
                <Link to="/#services" className="hover:text-accent transition-colors">Services</Link>
                <span className="mx-2">/</span>
                <span className="text-primary-foreground">{service.title}</span>
              </nav>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-primary-foreground leading-[1.1] mb-4">
                {service.h1}
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-6 max-w-xl">{service.description}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="hero" size="lg" asChild>
                  <a href="#devis">
                    {service.cta}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="tel:+33604053510">
                    <Phone className="w-5 h-5" />
                    06 04 05 35 10
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-display font-extrabold text-foreground mb-6">
                Votre expert {service.title.toLowerCase()} à Toulon et dans le Var
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">{service.intro}</p>
            </div>
          </div>
        </section>

        {/* Details */}
        <section className="py-16 lg:py-24 section-alt">
          <div className="container">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl lg:text-3xl font-display font-extrabold text-foreground mb-6 text-center">
                Ce que nous proposons
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {service.details.map((detail, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-foreground">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl lg:text-3xl font-display font-extrabold text-foreground mb-6">
                  Pourquoi choisir TOITURE PACA ?
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Artisan couvreur qualifié à Toulon depuis des années, nous mettons notre savoir-faire et notre expérience au service de votre toiture.
                </p>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary rounded-xl p-8 text-primary-foreground">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-6 h-6 text-accent" />
                  <span className="font-display font-bold text-lg">Qualifications & Garanties</span>
                </div>
                <ul className="space-y-3 text-primary-foreground/80">
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-accent" />
                    <span>Garantie décennale obligatoire</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-accent" />
                    <span>Assurance responsabilité civile</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>Intervention sous 24h en urgence</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default ServicePage;
