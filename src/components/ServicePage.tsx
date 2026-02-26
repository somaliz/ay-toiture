import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

interface ServicePageProps {
  title: string;
  description: string;
  longDescription: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
}

const ServicePage = ({ title, description, longDescription, icon: Icon, features }: ServicePageProps) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/10 via-background to-accent/5 py-16 lg:py-24">
        <div className="container">
          <PageHeader
            title={title}
            description={description}
            icon={icon}
          />
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="#devis">
                Demander un devis gratuit
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+33659637006">
                <Phone className="w-4 h-4 mr-2" />
                06 59 63 70 06
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-primary mb-6">
              {title} professionnel
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {longDescription}
            </p>
            <p className="text-muted-foreground">
              Notre équipe intervient dans tout le Var (83) pour un {title.toLowerCase()}
              complet, rapide et efficace. Nous nous adaptons à vos besoins et contraintes
              pour garantir votre satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-accent/5">
        <div className="container">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-primary text-center mb-12">
            Notre service de {title}
            </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-primary text-center mb-12">
            Notre processus d'intervention
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { num: "01", title: "Contact", desc: "Appelez-nous ou remplissez le formulaire en ligne" },
              { num: "02", title: "Devis", desc: "Devis gratuit sur place ou à distance selon vos disponibilités" },
              { num: "03", title: "Intervention", desc: "Équipe équipée pour un {title.toLowerCase()} professionnel" },
              { num: "04", title: "Finalisation", desc: "Nettoyage et validation de votre satisfaction" },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">{step.num}</div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-2xl lg:text-3xl font-display font-bold mb-4">
            Besoin d'un {title.toLowerCase()} ?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contactez-nous dès maintenant pour un devis gratuit et sans engagement
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="#devis">
                Demander un devis
              </a>
            </Button>
            <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground" asChild>
              <a href="tel:+33659637006">
                <Phone className="w-4 h-4 mr-2" />
                06 59 63 70 06
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Zone */}
      <section className="py-16">
        <div className="container text-center">
          <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="text-2xl font-display font-bold text-primary mb-4">
            Intervention dans tout le Var (83)
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Toulon, Hyères, La Seyne-sur-Mer, Saint-Mandrier, La Garde, Le Pradet, Sanary-sur-Mer,
            Bandol, Ollioules, Carqueiranne, Le Beausset, Brignoles, Draguignan, Fréjus, Saint-Raphaël,
            et plus de 20 autres villes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
