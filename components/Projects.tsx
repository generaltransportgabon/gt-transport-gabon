export default function Projects() {
  const projects = [
    {
      title: "Transport de conteneurs",
      description:
        "Acheminement sécurisé de conteneurs entre le Port d'Owendo et les principales villes du Gabon.",
    },
    {
      title: "Convois exceptionnels",
      description:
        "Transport de matériels lourds et hors gabarit avec accompagnement spécialisé.",
    },
    {
      title: "Levage & Manutention",
      description:
        "Mise à disposition de grues et d'équipements pour les opérations de levage.",
    },
    {
      title: "Logistique industrielle",
      description:
        "Solutions logistiques adaptées aux secteurs pétrolier, minier et BTP.",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Titre */}
        <div className="text-center mb-14">

          <span className="uppercase tracking-[0.25em] text-yellow-500 font-bold">
            NOS RÉALISATIONS
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0B2F6B]">
            Nos Réalisations
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            Découvrez quelques-unes de nos interventions en transport,
            manutention, logistique et convois exceptionnels réalisées
            pour des entreprises et des acteurs industriels au Gabon.
          </p>

        </div>

        {/* Cartes */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >

              <h3 className="text-2xl font-bold text-[#0B2F6B] mb-4">
                {project.title}
              </h3>

              <p className="text-gray-600 leading-8">
                {project.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}