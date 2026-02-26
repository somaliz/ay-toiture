export interface Photo {
  id: number;
  src: string;
  category: string;
  title: string;
  description: string;
}

export const photos: Photo[] = [
  // Charpente category (4 photos)
  { id: 1, src: "/images/charpente/charpente-1.jpg", category: "charpente", title: "Charpente bois Toulon", description: "Rénovation complète charpente" },
  { id: 2, src: "/images/charpente/charpente-2.jpg", category: "charpente", title: "Charpente métallique", description: "Structure industrielle" },
  { id: 3, src: "/images/charpente/charpente-3.jpg", category: "charpente", title: "Réparation charpente", description: "Renforcement poutres" },
  { id: 4, src: "/images/charpente/charpente-4.jpg", category: "charpente", title: "Nouvelle charpente", description: "Construction neuve" },
  // Couverture category (4 photos)
  { id: 5, src: "/images/couverture/couverture-1.jpg", category: "couverture", title: "Toiture tuiles Hyères", description: "Rénovation toiture" },
  { id: 6, src: "/images/couverture/couverture-2.jpg", category: "couverture", title: "Toiture ardoises", description: "Pose ardoises naturelles" },
  { id: 7, src: "/images/couverture/couverture-3.jpg", category: "couverture", title: "Toiture zinc", description: "Étanchéité zinc" },
  { id: 8, src: "/images/couverture/couverture-4.jpg", category: "couverture", title: "Rénovation toiture", description: "Avant / Après" },
  // Réparation category (4 photos)
  { id: 9, src: "/images/reparation/reparation-1.jpg", category: "reparation", title: "Réparation fuite", description: "Intervention urgence" },
  { id: 10, src: "/images/reparation/reparation-2.jpg", category: "reparation", title: "Remplacement tuiles", description: "Après tempête" },
  { id: 11, src: "/images/reparation/reparation-3.jpg", category: "reparation", title: "Étanchéité", description: "Réseau pluvial" },
  { id: 12, src: "/images/reparation/reparation-4.jpg", category: "reparation", title: "Entretien toiture", description: "Nettoyage et vérification" }
];

export const photoCategories = [
  { value: "all", label: "Tous" },
  { value: "charpente", label: "Charpente" },
  { value: "couverture", label: "Couverture" },
  { value: "reparation", label: "Réparations" }
];
