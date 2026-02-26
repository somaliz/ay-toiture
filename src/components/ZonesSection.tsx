import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { cities as cityData } from "@/data/cities";

const allCityNames = [
  "Toulon", "Hyères", "Fréjus", "Draguignan", "Brignoles", "Saint-Raphaël",
  "La Seyne-sur-Mer", "Six-Fours-les-Plages", "Sanary-sur-Mer", "Bandol",
  "Ollioules", "Le Pradet", "Carqueiranne", "La Valette-du-Var",
  "La Garde", "Le Luc", "Solliès-Pont", "Solliès-Toucas",
  "Cuers", "Pierrefeu-du-Var", "Collobrières", "Bormes-les-Mimosas",
  "Le Lavandou", "Cogolin", "Grimaud", "Sainte-Maxime", "Saint-Tropez",
  "Roquebrune-sur-Argens", "Les Arcs", "Lorgues", "Vidauban",
  "Le Muy", "Puget-sur-Argens", "Trans-en-Provence", "Flayosc",
];

const ZonesSection = () => {
  return (
    <section id="zones" className="py-20 lg:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-display font-bold text-sm uppercase tracking-widest">
            Zone d'Intervention
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-foreground mt-3 mb-4">
            Intervention dans le Var (83) et PACA
          </h2>
          <p className="text-muted-foreground text-lg">
            Basés à Toulon (83200), nous intervenons dans tout le département du Var et la région PACA. De Toulon à Fréjus, de Saint-Tropez à Brignoles — notre équipe se déplace rapidement sur toute la côte et l'arrière-pays varois.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {allCityNames.map((name) => {
            const cityPage = cityData.find((c) => c.name === name);
            if (cityPage) {
              return (
                <Link
                  key={name}
                  to={`/${cityPage.slug}`}
                  className="inline-flex items-center gap-1.5 bg-card border border-border rounded-full px-4 py-2 text-sm text-foreground hover:border-accent/50 hover:bg-accent/5 transition-colors"
                >
                  <MapPin className="w-3 h-3 text-accent" />
                  {name}
                </Link>
              );
            }
            return (
              <span
                key={name}
                className="inline-flex items-center gap-1.5 bg-card border border-border rounded-full px-4 py-2 text-sm text-foreground hover:border-accent/50 hover:bg-accent/5 transition-colors"
              >
                <MapPin className="w-3 h-3 text-accent" />
                {name}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ZonesSection;
