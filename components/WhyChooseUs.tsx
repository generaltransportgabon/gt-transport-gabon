const advantages = [
  {
    title: "Fiabilité",
    description:
      "Nous assurons un transport sécurisé et respectons les délais convenus.",
    icon: "🛡️",
  },
  {
    title: "Flotte moderne",
    description:
      "Des véhicules adaptés au transport de conteneurs et d'engins de chantier.",
    icon: "🚛",
  },
  {
    title: "Équipe expérimentée",
    description:
      "Des professionnels qualifiés pour gérer vos opérations logistiques.",
    icon: "👷",
  },
  {
    title: "Solutions sur mesure",
    description:
      "Chaque projet est étudié pour répondre précisément à vos besoins.",
    icon: "📦",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Pourquoi choisir GT Transport Gabon ?
          </h2>

          <p className="mt-4 text-blue-100 max-w-3xl mx-auto">
            Une entreprise engagée à fournir des solutions de transport,
            de manutention et de logistique fiables partout au Gabon.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/20 transition"
            >
              <div className="text-5xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-blue-100 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}