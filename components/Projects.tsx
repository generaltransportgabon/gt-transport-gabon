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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Nos Réalisations
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Des solutions logistiques fiables au service des entreprises et des
          grands projets au Gabon.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border rounded-xl p-8 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                {project.title}
              </h3>

              <p className="text-gray-600">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}