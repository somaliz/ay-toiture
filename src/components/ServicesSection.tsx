import { Home, Search, ClipboardCheck, Droplet, Hammer, Wrench, FileText } from "lucide-react";
import { services } from "@/data/services";

// Icon mapping from string to actual Lucide icon component
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Search,
  ClipboardCheck,
  Droplet,
  Hammer,
  Wrench,
  FileText,
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-display font-bold text-sm uppercase tracking-widest">
            Nos Services
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-foreground mt-3 mb-4">
            Un service de débarras complet
          </h2>
          <p className="text-muted-foreground text-lg">
            Quel que soit votre besoin, DebarrasPower intervient rapidement dans tout le Var avec professionnalisme et respect.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Home;
            return (
              <article
                key={service.id}
                className="group bg-card rounded-xl p-6 border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
