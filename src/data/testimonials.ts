export interface Testimonial {
  id: number;
  name: string;
  city: string;
  rating: number;
  text: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marie D.",
    city: "Toulon",
    rating: 5,
    text: "Excellent travail sur ma toiture. Rapide, propre et professionnel. L'équipe a su me conseiller pour le choix des matériaux. Je recommande !",
    date: "Février 2025"
  },
  {
    id: 2,
    name: "Pierre L.",
    city: "La Seyne-sur-Mer",
    rating: 5,
    text: "Intervention rapide suite à une fuite. Le diagnostic était précis et la réparation soignée. Prix raisonnable pour la qualité du travail.",
    date: "Janvier 2025"
  },
  {
    id: 3,
    name: "Sophie M.",
    city: "Hyères",
    rating: 5,
    text: "Rénovation complète de ma toiture effectuée dans les délais. Très bon suivi du chantier et propre après les travaux. Artisans qualifiés.",
    date: "Décembre 2024"
  },
  {
    id: 4,
    name: "Jean-Baptiste R.",
    city: "Saint-Raphaël",
    rating: 5,
    text: "Devis gratuit sous 24h comme promis. Les travaux d'entretien ont été réalisés avec soin. Toiture comme neuve !",
    date: "Novembre 2024"
  }
];
