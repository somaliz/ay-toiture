const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Contactez-nous",
      description: "Par téléphone au 06 04 05 35 10, email ou formulaire de contact"
    },
    {
      number: "2",
      title: "Diagnostic gratuit",
      description: "Nous intervenons sur place pour évaluer vos besoins en toiture"
    },
    {
      number: "3",
      title: "Devis sous 24h",
      description: "Recevez un devis détaillé et transparent sans engagement"
    },
    {
      number: "4",
      title: "Réalisation travaux",
      description: "Nos artisans qualifiés réalisent les travaux avec soin"
    },
    {
      number: "5",
      title: "Satisfaction garantie",
      description: "Vérification finale et garantie sur tous nos travaux"
    }
  ];

  return (
    <section className="section-alt py-20 lg:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-display font-bold text-sm uppercase tracking-widest">
            Notre Process
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-foreground mt-3 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-muted-foreground text-lg">
            5 étapes simples pour vos travaux de toiture en toute sérénité
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-card rounded-xl p-6 border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300"
            >
              {/* Number Badge */}
              <div className="text-5xl lg:text-6xl font-display font-black text-accent/20 absolute top-4 right-4 leading-none">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg text-foreground mb-2 pr-12">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
