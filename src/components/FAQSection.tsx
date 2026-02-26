import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Combien coûte une réparation de toiture ?",
    answer: "Le prix dépend de l'étendue des dégâts, des matériaux nécessaires et de l'accessibilité. Demandez un devis gratuit sur place pour une estimation précise adaptée à votre situation."
  },
  {
    question: "Intervenez-vous en urgence pour les fuites ?",
    answer: "Oui, nous intervenons en urgence pour les fuites et dégâts importants. Contactez-nous au 06 04 05 35 10 pour une intervention rapide."
  },
  {
    question: "Quelle garantie pour les travaux de toiture ?",
    answer: "Tous nos travaux sont garantis selon leur nature. Nous disposons de l'assurance décennale obligatoire pour les travaux de couverture et charpente."
  },
  {
    question: "Assurez-vous la garantie décennale ?",
    answer: "Oui, nous sommes assurés avec la garantie décennale obligatoire pour tous les travaux de couverture, charpente et étanchéité. Votre protection est notre priorité."
  },
  {
    question: "Comment obtenir un devis gratuit ?",
    answer: "Par téléphone au 06 04 05 35 10, par email à director@ay-toiture.fr ou via le formulaire de contact. Nous vous envoyons un devis détaillé sous 24h après notre visite."
  },
  {
    question: "Quel est le délai d'intervention ?",
    answer: "Pour les urgences, nous intervenons dans les 24h. Pour les travaux programmés, le délai dépend de la charge mais généralement sous 1-2 semaines."
  }
];

const FAQSection = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <section id="faq" className="py-20 lg:py-28 section-alt">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-accent font-display font-bold text-sm uppercase tracking-widest">
              Questions Fréquentes
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-foreground mt-3 mb-4">
              Vos questions sur nos services de toiture
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-accent/40"
              >
                <AccordionTrigger className="text-left font-display font-bold text-foreground hover:text-accent py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </>
  );
};

export default FAQSection;
