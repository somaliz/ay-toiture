export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Charpente",
    description: "Fabrication et réparation de charpentes bois et métalliques pour toutes constructions",
    icon: "Home"
  },
  {
    id: 2,
    title: "Couverture (neuf & rénovation)",
    description: "Pose et rénovation complète de toitures : tuiles, ardoises, zinc, étanchéité",
    icon: "Home"
  },
  {
    id: 3,
    title: "Inspection toiture",
    description: "Vérification complète de l'état de votre toiture et detection des problèmes",
    icon: "Search"
  },
  {
    id: 4,
    title: "Diagnostic toiture",
    description: "Diagnostic approfondi pour identifier infiltrations, dégâts et solutions adaptées",
    icon: "ClipboardCheck"
  },
  {
    id: 5,
    title: "Réparation de fuites",
    description: "Recherche et réparation rapide de toutes fuites et infiltrations",
    icon: "Droplet"
  },
  {
    id: 6,
    title: "Remplacement de tuiles",
    description: "Remplacement de tuiles cassées ou endommagées par la tempête ou le temps",
    icon: "Hammer"
  },
  {
    id: 7,
    title: "Entretien toiture",
    description: "Entretien préventif annuel pour prolonger la durée de vie de votre toiture",
    icon: "Wrench"
  },
  {
    id: 8,
    title: "Devis gratuit",
    description: "Demandez votre devis gratuit et sans engagement sous 24h",
    icon: "FileText"
  }
];
