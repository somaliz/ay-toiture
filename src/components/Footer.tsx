import { Phone, Mail, MapPin } from "lucide-react";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display font-extrabold text-lg tracking-tight">
                TOITURE <span className="text-accent">PACA</span>
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Entreprise de couverture et zinguerie professionnelle dans le Var (83). Intervention rapide, devis gratuit, qualité garantie.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-accent">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#services" className="hover:text-accent transition-colors">Couverture</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Zinguerie</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Rénovation de toiture</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Entretien & réparation</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Étanchéité</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-accent">Zones</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Toulon & agglomération</li>
              <li>Hyères & presqu'île</li>
              <li>Fréjus & Saint-Raphaël</li>
              <li>Draguignan & centre Var</li>
              <li>Saint-Tropez & golfe</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-accent">Contact</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+33604053510" className="hover:text-accent transition-colors">06 04 05 35 10</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:director@ay-toiture.fr" className="hover:text-accent transition-colors">director@ay-toiture.fr</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span>133 Rue du Jeu de Paume, 83200 Toulon</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/40">
          © {currentYear} TOITURE PACA. Tous droits réservés. | SIREN 994859908 | ZAOUALI AYMEN |
          <a href="/mentions-legales" className="hover:text-accent transition-colors ml-1">Mentions légales</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
