export interface Photo {
  id: number;
  src: string;
  category: string;
  title: string;
  description: string;
}

export const photos: Photo[] = [
  // Charpente category (2 photos)
  { id: 1, src: "/images/charpente/IMG_1666.jpg", category: "charpente", title: "Charpente bois Toulon", description: "Rénovation complète charpente" },
  { id: 2, src: "/images/charpente/IMG_1668.jpg", category: "charpente", title: "Charpente traditionnelle", description: "Structure bois apparente" },
  // Couverture category (3 photos)
  { id: 3, src: "/images/couverture/IMG_2951.jpg", category: "couverture", title: "Toiture tuiles romanes", description: "Rénovation toiture tuiles" },
  { id: 4, src: "/images/couverture/IMG_3386.jpg", category: "couverture", title: "Couverture zinc", description: "Étanchéité et zinc" },
  { id: 5, src: "/images/couverture/IMG_3387.jpg", category: "couverture", title: "Toiture rénovée", description: "Travaux de couverture" },
  // Réparation category (2 photos)
  { id: 6, src: "/images/reparation/IMG_3388.jpg", category: "reparation", title: "Réparation toiture", description: "Intervention rapide" },
  { id: 7, src: "/images/reparation/IMG_3389.jpg", category: "reparation", title: "Entretien toiture", description: "Maintenance et vérification" }
];

export const photoCategories = [
  { value: "all", label: "Tous" },
  { value: "charpente", label: "Charpente" },
  { value: "couverture", label: "Couverture" },
  { value: "reparation", label: "Réparations" }
];
