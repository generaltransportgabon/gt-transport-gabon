export default function Clients() {
  const sectors = [
    {
      icon: "🏗️",
      title: "BTP",
      description:
        "Transport d'engins, de matériaux et accompagnement des chantiers.",
    },
    {
      icon: "🛢️",
      title: "Pétrole & Énergie",
      description:
        "Solutions logistiques adaptées aux besoins du secteur énergétique.",
    },
    {
      icon: "⛏️",
      title: "Mines",
      description:
        "Transport de matériels lourds et soutien aux activités minières.",
    },
    {
      icon: "🚢",
      title: "Transport Maritime",
      description:
        "Gestion des conteneurs et opérations liées aux activités portuaires.",
    },
    {
      icon: "🏭",
      title: "Industrie",
      description:
        "Approvisionnement et transport pour les sites industriels.",
    },
    {
      icon: "🏢",
      title: "Entreprises",
      description:
        "Solutions logistiques sur mesure pour les entreprises privées et publiques.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">
            Les secteurs que nous accompagnons
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            GT Transport Gabon accompagne des entreprises de nombreux secteurs
            grâce à son expertise en transport, manutention et logistique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {sectors.map((sector) => (
            <div
              key={sector.title}
              className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="text-5xl mb-5">
                {sector.icon}
              </div>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                {sector.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {sector.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}