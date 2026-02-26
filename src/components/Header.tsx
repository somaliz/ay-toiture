import { Phone, Mail, MapPin, Clock } from "lucide-react";


const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary/20">
      {/* Top bar */}
      <div className="bg-accent py-1.5">
        <div className="container flex items-center justify-between text-accent-foreground text-sm font-medium">
          <div className="flex items-center gap-4">
            <a href="tel:+33604053510" className="flex items-center gap-1.5 hover:underline">
              <Phone className="w-3.5 h-3.5" />
              <span>06 04 05 35 10</span>
            </a>
            <a href="mailto:director@ay-toiture.fr" className="hidden sm:flex items-center gap-1.5 hover:underline">
              <Mail className="w-3.5 h-3.5" />
              <span>director@ay-toiture.fr</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Lun-Sam 8h-19h</span>
            <span className="sm:hidden">8h-19h</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between py-2">
        <a href="/" className="flex items-center gap-1 font-display font-extrabold text-xl tracking-tighter">
          <span className="text-primary-foreground">TOITURE</span>
          <span className="text-accent">PACA</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {[
            { label: "Services", href: "#services" },
            { label: "Réalisations", href: "#realisations" },
            { label: "Zones", href: "#zones" },
            { label: "FAQ", href: "#faq" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-primary-foreground/80 hover:text-accent font-medium text-sm transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#devis"
            className="bg-accent text-accent-foreground px-5 py-2.5 rounded-lg font-display font-bold text-sm hover:bg-accent-hover transition-colors"
          >
            Devis Gratuit
          </a>
        </nav>

        {/* Mobile CTA */}
        <a
          href="tel:+33604053510"
          className="md:hidden bg-accent text-accent-foreground px-4 py-2 rounded-lg font-display font-bold text-sm flex items-center gap-2"
        >
          <Phone className="w-4 h-4" />
          Appeler
        </a>
      </div>
    </header>
  );
};

export default Header;
