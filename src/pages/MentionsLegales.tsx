import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <>
      <Helmet>
        <title>Mentions Légales | TOITURE PACA</title>
        <meta name="description" content="Mentions légales du site TOITURE PACA. Informations légales, contact et hébergement." />
        <link rel="canonical" href="https://www.ay-toiture.fr/mentions-legales" />
      </Helmet>

      <Header />

      <main className="py-20 lg:py-28">
        <div className="container max-w-3xl">
          <h1 className="text-3xl lg:text-4xl font-display font-extrabold text-foreground mb-8">
            Mentions Légales
          </h1>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-4">Éditeur du site</h2>
              <div className="space-y-2">
                <p><strong>Raison sociale :</strong> Entrepreneur individuel</p>
                <p><strong>Nom du responsable :</strong> ZAOUALI AYMEN</p>
                <p><strong>SIREN :</strong> 994859908</p>
                <p><strong>Adresse :</strong> Rue du Jeu de Paume, 83200 Toulon, France</p>
                <p><strong>Téléphone :</strong> 06 04 05 35 10</p>
                <p><strong>Email :</strong> director@ay-toiture.fr</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-4">Hébergement</h2>
              <div className="space-y-2">
                <p><strong>Prestataire d'hébergement :</strong> Vercel Inc.</p>
                <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
                <p><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">vercel.com</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-4">Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est protégé par le droit d'auteur.
                Toute reproduction, même partielle, est interdite sans autorisation préalable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-4">Protection des données personnelles</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès,
                de rectification et de suppression de vos données personnelles. Pour exercer ces droits,
                contactez-nous à l'adresse : director@ay-toiture.fr
              </p>
              <p className="mt-2">
                Les données collectées via le formulaire de contact sont utilisées exclusivement pour répondre
                à vos demandes de devis et ne sont pas transmises à des tiers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-4">Cookies</h2>
              <p>
                Ce site utilise des cookies de mesure d'audience (Google Analytics) pour améliorer nos services
                et analyser la fréquence d'utilisation du site. Vous pouvez configurer votre navigateur
                pour refuser les cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-4">Assurance et garanties</h2>
              <div className="space-y-2">
                <p><strong>Garantie décennale :</strong> Tous nos travaux de couverture et charpente sont couverts par l'assurance décennale obligatoire.</p>
                <p><strong>Responsabilité civile professionnelle :</strong> Souscrite pour couvrir les dommages liés à notre activité.</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default MentionsLegales;
