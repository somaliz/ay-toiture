import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PricingCard } from "@/components/ui/pricing-card";

const PricingSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary mb-4 lg:mb-6">
            Une tarification transparente
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            Des tarifs adaptés à vos besoins pour tous vos projets de toiture dans les Alpes-Maritimes.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* Diagnostic */}
          <PricingCard
            title="Diagnostic toiture"
            price="Gratuit"
            description="Visite sur place et devis détaillé sans engagement"
            features={[
              "État des lieux",
              "Photos",
              "Devis sous 24h"
            ]}
          />

          {/* Réparation */}
          <PricingCard
            title="Réparation"
            price="Sur devis"
            description="Selon l'étendue des travaux et matériaux nécessaires"
            features={[
              "Main d'œuvre",
              "Matériaux",
              "Garantie",
              "Propreté"
            ]}
            recommended={true}
          />

          {/* Entretien */}
          <PricingCard
            title="Entretien annuel"
            price="Sur devis"
            description="Entretien préventif pour prolonger durée de vie"
            features={[
              "Nettoyage",
              "Vérification",
              "Petites réparations",
              "Rapport"
            ]}
          />
        </div>

        {/* CTA and Disclaimer */}
        <div className="text-center space-y-8">
          <Button variant="hero" size="lg" asChild className="shadow-lg">
            <a href="#devis">
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>

          <p className="text-xs lg:text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Les tarifs sont établis sur devis après diagnostic gratuit sur place. Chaque projet est unique et nous
            proposons des solutions adaptées à votre budget et à vos besoins. Tous nos travaux sont garantis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
