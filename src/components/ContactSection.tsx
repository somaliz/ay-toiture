import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="devis" data-testid="contact-section" className="py-20 lg:py-28">
      <div className="container">
        <div className="bg-primary rounded-2xl p-8 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-accent font-display font-bold text-sm uppercase tracking-widest">
              Devis Gratuit
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-primary-foreground mt-3 mb-4">
              Besoin d'un débarras ?
              <br />
              Contactez-nous maintenant
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Devis gratuit et sans engagement sous 24h. Intervention rapide dans tout le Var.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="tel:+33604053510">
                  <Phone className="w-5 h-5" />
                  06 04 05 35 10
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="mailto:director@ay-toiture.fr">
                  Envoyer un Email
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
