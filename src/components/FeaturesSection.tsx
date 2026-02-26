import { FileText, Award, Shield, Clock, CheckCircle } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: 'Devis gratuit',
      description: 'Demandez votre devis gratuit sans engagement sous 24h'
    },
    {
      icon: Award,
      title: 'Artisans qualifiés',
      description: 'Équipe de professionnels expérimentés et qualifiés'
    },
    {
      icon: Shield,
      title: 'Assurance décennale',
      description: 'Tous nos travaux sont couverts par la garantie décennale'
    },
    {
      icon: Clock,
      title: 'Intervention rapide',
      description: 'Réactivité garantie pour urgences et interventions programmées'
    },
    {
      icon: CheckCircle,
      title: 'Garantie travaux',
      description: 'Satisfaction garantie et suivi personnalisé de chaque chantier'
    }
  ];

  return (
    <section id="features" className="py-12 lg:py-16">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-display font-bold text-sm uppercase tracking-widest">
            Nos Atouts
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-foreground mt-3 mb-4">
            Pourquoi choisir TOITURE PACA ?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="feature-card text-center"
              >
                <div className="icon-circle w-16 h-16 rounded-full bg-accent/10 mx-auto mb-4 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
