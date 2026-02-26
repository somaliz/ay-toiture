import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import gallery6 from "@/assets/gallery-6.jpeg";
import { Camera } from "lucide-react";

const photos = [
  { src: gallery1, alt: "Débarras complet d'une pièce encombrée dans le Var" },
  { src: gallery2, alt: "Évacuation de meubles anciens lors d'un débarras" },
  { src: gallery3, alt: "Débarras salle à manger avant intervention" },
  { src: gallery4, alt: "Débarras appartement avec vue mer dans le Var" },
  { src: gallery5, alt: "Mobilier ancien à débarrasser" },
  { src: gallery6, alt: "Fauteuils à évacuer lors d'un vide-maison" },
];

const GallerySection = () => {
  return (
    <section id="realisations" className="py-20 lg:py-28 section-alt">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-display font-bold text-sm uppercase tracking-widest">
            Nos Réalisations
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-foreground mt-3 mb-4">
            Exemples d'interventions
          </h2>
          <p className="text-muted-foreground text-lg">
            Découvrez quelques-unes de nos interventions de débarras dans le Var. Chaque projet est unique, nous nous adaptons à vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="group relative aspect-square rounded-xl overflow-hidden bg-muted"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                <Camera className="w-8 h-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
