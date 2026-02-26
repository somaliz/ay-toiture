import { Phone, ArrowRight, Star, Shield, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-toiture.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Artisan couvreur AY Toiture en intervention dans le Var et PACA"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-4 py-1.5 mb-6 animate-fade-up">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-accent-foreground text-sm font-medium">
              Artisan Couvreur Qualifié
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-primary-foreground leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Votre Artisan Couvreur
            <br />
            <span className="text-accent">dans le Var & PACA</span>
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Charpente, couverture, réparation et entretien. Devis gratuit, intervention rapide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" asChild>
              <a href="#devis">
                Demander un devis gratuit
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

          <div className="flex flex-wrap gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { icon: Star, text: "4.5/5 sur Google" },
              { icon: Recycle, text: "Recyclage responsable" },
              { icon: Shield, text: "Assurance incluse" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-primary-foreground/70">
                <item.icon className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
