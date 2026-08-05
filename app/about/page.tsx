import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-widest text-yellow-400 font-semibold">
            À propos
          </p>

          <h1 className="text-5xl font-bold mt-4">
            GT Transport Gabon
          </h1>

          <p className="text-xl text-blue-100 mt-6 max-w-3xl">
            Votre partenaire de confiance pour le transport de conteneurs,
            d'engins de chantier, la manutention et la logistique au Gabon.
          </p>

        </div>
      </section>

      {/* Histoire */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-blue-900 mb-8">
            Notre Histoire
          </h2>

          <p className="text-gray-700 leading-8">
            GT Transport Gabon accompagne les entreprises et les industriels
            dans leurs besoins en transport et logistique grâce à une flotte
            moderne et des équipes qualifiées.
          </p>

        </div>

      </section>

      {/* Mission */}
      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-blue-900 mb-8">
            Notre Mission
          </h2>

          <p className="text-gray-700 leading-8">
            Fournir des solutions fiables, rapides et sécurisées en matière
            de transport, manutention et logistique partout au Gabon.
          </p>

        </div>

      </section>

      {/* Valeurs */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-blue-900 mb-10">
            Nos Valeurs
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="shadow-lg rounded-xl p-8">
              <h3 className="font-bold text-xl mb-3">
                Sécurité
              </h3>

              <p>
                La sécurité est au cœur de toutes nos opérations.
              </p>

            </div>

            <div className="shadow-lg rounded-xl p-8">
              <h3 className="font-bold text-xl mb-3">
                Fiabilité
              </h3>

              <p>
                Respect des délais et engagement envers nos clients.
              </p>

            </div>

            <div className="shadow-lg rounded-xl p-8">
              <h3 className="font-bold text-xl mb-3">
                Excellence
              </h3>

              <p>
                Une qualité de service conforme aux standards professionnels.
              </p>

            </div>

            <div className="shadow-lg rounded-xl p-8">
              <h3 className="font-bold text-xl mb-3">
                Innovation
              </h3>

              <p>
                Nous investissons dans des solutions modernes pour améliorer nos prestations.
              </p>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}