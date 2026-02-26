import beforeAfterImage from "@/assets/before-after.jpg";
import { CheckCircle2 } from "lucide-react";

const steps = [
  { num: "01", title: "Contact & Devis", desc: "Appelez-nous ou remplissez le formulaire. Devis gratuit sous 24h." },
  { num: "02", title: "Visite & Évaluation", desc: "Nous venons sur place pour estimer le volume et le coût." },
  { num: "03", title: "Intervention", desc: "Notre équipe débarrasse, trie et nettoie dans les délais convenus." },
  { num: "04", title: "Recyclage & Don", desc: "Les objets sont recyclés, donnés ou évacués de manière responsable." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 section-alt">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={beforeAfterImage}
              alt="Artisan couvreur TOITURE PACA dans le Var"
              className="w-full h-auto"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-primary/90 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-accent flex-shrink-0" />
              <div>
                <p className="text-primary-foreground font-display font-bold text-sm">+ de 2 000 interventions</p>
                <p className="text-primary-foreground/70 text-xs">réalisées dans le Var depuis 2015</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-accent font-display font-bold text-sm uppercase tracking-widest">
              Pourquoi nous choisir
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-foreground mt-3 mb-6">
              Le débarras simplifié, du début à la fin
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              DebarrasPower est une entreprise locale du Var spécialisée dans le débarras de tous types de biens. Notre engagement : un travail propre, rapide et au juste prix, avec un recyclage responsable de vos objets.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-3">
                  <span className="text-accent font-display font-black text-2xl leading-none mt-1">{step.num}</span>
                  <div>
                    <h3 className="font-display font-bold text-foreground text-sm">{step.title}</h3>
                    <p className="text-muted-foreground text-xs mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
