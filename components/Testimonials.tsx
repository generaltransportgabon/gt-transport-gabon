export default function Testimonials() {
  const commitments = [
    {
      icon: "⏱️",
      title: "Respect des délais",
      description:
        "Nous planifions et exécutons chaque mission dans les délais convenus afin de garantir la continuité de vos activités.",
    },
    {
      icon: "🛡️",
      title: "Sécurité",
      description:
        "La sécurité des personnes, des marchandises et des équipements est au cœur de chacune de nos opérations.",
    },
    {
      icon: "🤝",
      title: "Professionnalisme",
      description:
        "Nos équipes mettent leur expérience et leur savoir-faire au service de chaque client avec rigueur et transparence.",
    },
    {
      icon: "📞",
      title: "Disponibilité",
      description:
        "Nous restons à votre écoute pour vous accompagner et répondre rapidement à vos besoins logistiques.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">
            Nos engagements
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Chez GT Transport Gabon, nous nous engageons à offrir des prestations
            fiables, sécurisées et adaptées aux besoins de nos clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {commitments.map((item) => (
            <div
              key={item.title}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="text-5xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}