import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ArrowRight, MapPin, Star, Shield, Home, Wrench, Droplets, Hammer, Sun, Wind, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { getCityBySlug, cities as allCities } from "@/data/cities";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-toiture.jpg";

const services = [
  { icon: Home, title: "Couverture & Charpente", description: "Installation, réparation et remplacement de toiture pour tous types de maisons." },
  { icon: Wrench, title: "Réparation de Fuites", description: "Diagnostic et réparation rapide des infiltrations et dégâts des eaux." },
  { icon: Hammer, title: "Rénovation Complète", description: "Restauration de toitures anciennes avec matériaux adaptés à votre région." },
  { icon: Sun, title: "Toiture Terrasse", description: "Étanchéité, isolation et protection pour toitures plates et terrasses." },
  { icon: Wind, title: "Zinguerie & Gouttières", description: "Installation et rénovation de gouttières, chéneaux et éléments de zinc." },
  { icon: Droplets, title: "Entretien & Démoussage", description: "Nettoyage, traitement et protection pour prolonger la durée de vie de votre toiture." },
];

const advantages = [
  "Devis gratuit et sans engagement sous 24h",
  "Intervention rapide sous 48 à 72h",
  "Tri, recyclage et don aux associations",
  "Nettoyage complet après intervention",
  "Équipe professionnelle et assurée",
  "Prix transparent, pas de mauvaise surprise",
];

const CityPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const city = getCityBySlug(slug || "");

  if (!city) return <Navigate to="/404" replace />;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `DebarrasPower - Débarras ${city.name}`,
    description: city.metaDescription,
    url: `https://debarraspower.com/${city.slug}`,
    telephone: "+33659637006",
    email: "contact@debarraspower.com",
    areaServed: { "@type": "City", name: city.name, postalCode: city.postalCode },
    priceRange: "€€",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "87" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://debarraspower.com" },
      { "@type": "ListItem", position: 2, name: `Débarras ${city.name}`, item: `https://debarraspower.com/${city.slug}` },
    ],
  };

  const nearbyCities = allCities.filter((c) => city.nearbyAreas.includes(c.name));

  return (
    <>
      <Helmet>
        <title>{city.metaTitle}</title>
        <meta name="description" content={city.metaDescription} />
        <link rel="canonical" href={`https://debarraspower.com/${city.slug}`} />
        <meta property="og:title" content={city.metaTitle} />
        <meta property="og:description" content={city.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://debarraspower.com/${city.slug}`} />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center pt-28 pb-16">
          <div className="absolute inset-0">
            <img src={heroImage} alt={`Débarras professionnel à ${city.name}`} className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 hero-gradient" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-2xl">
              <nav className="text-sm text-primary-foreground/60 mb-4">
                <Link to="/" className="hover:text-accent transition-colors">Accueil</Link>
                <span className="mx-2">/</span>
                <span className="text-primary-foreground">Débarras {city.name}</span>
              </nav>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-primary-foreground leading-[1.1] mb-4">
                {city.h1}
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-6 max-w-xl">{city.description}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="hero" size="lg" asChild>
                  <a href="#devis">Devis Gratuit à {city.name}<ArrowRight className="w-5 h-5" /></a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="tel:+33659637006"><Phone className="w-5 h-5" />06 59 63 70 06</a>
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
                Votre entreprise de débarras à {city.name}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">{city.intro}</p>
              <p className="text-muted-foreground leading-relaxed">{city.localInfo}</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 lg:py-24 section-alt">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-accent font-display font-bold text-sm uppercase tracking-widest">Nos Services</span>
              <h2 className="text-2xl lg:text-3xl font-display font-extrabold text-foreground mt-3 mb-4">
                Services de débarras à {city.name}
              </h2>
              <p className="text-muted-foreground">Tous nos services de débarras disponibles à {city.name} ({city.postalCode}) et ses alentours.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s) => (
                <article key={s.title} className="group bg-card rounded-xl p-6 border border-border hover:border-accent/40 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                    <s.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-1">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-accent font-display font-bold text-sm uppercase tracking-widest">Pourquoi Nous</span>
                <h2 className="text-2xl lg:text-3xl font-display font-extrabold text-foreground mt-3 mb-6">
                  Pourquoi choisir DebarrasPower à {city.name} ?
                </h2>
                <ul className="space-y-3">
                  {advantages.map((a) => (
                    <li key={a} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-foreground">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary rounded-xl p-8 text-primary-foreground">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-accent" />
                  <span className="font-display font-bold text-lg">4.9/5 sur Google</span>
                </div>
                <p className="text-primary-foreground/80 mb-6">Plus de 87 avis clients vérifiés. Nos clients à {city.name} et dans le Var nous recommandent pour notre sérieux, notre rapidité et notre transparence.</p>
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-accent" />
                  <span className="text-sm">Entreprise assurée</span>
                </div>
                <div className="flex items-center gap-2">
                  <Recycle className="w-4 h-4 text-accent" />
                  <span className="text-sm">Recyclage responsable — jusqu'à 80% des objets valorisés</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby cities */}
        {nearbyCities.length > 0 && (
          <section className="py-16 lg:py-24 section-alt">
            <div className="container">
              <h2 className="text-2xl lg:text-3xl font-display font-extrabold text-foreground mb-6 text-center">
                Débarras près de {city.name}
              </h2>
              <p className="text-muted-foreground text-center mb-8 max-w-xl mx-auto">
                Nous intervenons également dans les communes voisines de {city.name}.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {nearbyCities.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/${c.slug}`}
                    className="inline-flex items-center gap-1.5 bg-card border border-border rounded-full px-4 py-2 text-sm text-foreground hover:border-accent/50 hover:bg-accent/5 transition-colors"
                  >
                    <MapPin className="w-3 h-3 text-accent" />
                    Débarras {c.name}
                  </Link>
                ))}
                {city.nearbyAreas
                  .filter((name) => !allCities.find((c) => c.name === name))
                  .map((name) => (
                    <span key={name} className="inline-flex items-center gap-1.5 bg-card border border-border rounded-full px-4 py-2 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3 text-accent" />
                      {name}
                    </span>
                  ))}
              </div>
            </div>
          </section>
        )}

        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default CityPage;
