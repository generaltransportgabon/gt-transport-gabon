import {
  Clock3,
  ShieldCheck,
  Handshake,
  Headset,
} from "lucide-react";

const commitments = [
  {
    icon: Clock3,
    title: "Respect des délais",
    description:
      "Nous planifions et exécutons chaque mission dans les délais convenus afin de garantir la continuité de vos activités.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité",
    description:
      "La sécurité des personnes, des marchandises et des équipements est au cœur de chacune de nos opérations.",
  },
  {
    icon: Handshake,
    title: "Professionnalisme",
    description:
      "Nos équipes mettent leur expérience et leur savoir-faire au service de chaque client avec rigueur et transparence.",
  },
  {
    icon: Headset,
    title: "Disponibilité",
    description:
      "Nous restons à votre écoute pour vous accompagner et répondre rapidement à vos besoins logistiques.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* En-tête */}
        <div className="text-center mb-16">

          <span className="uppercase tracking-[0.25em] text-yellow-500 font-bold">
            NOS ENGAGEMENTS
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0B2F6B]">
            Nos engagements
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
            Chez GT Transport Gabon, nous nous engageons à offrir des
            prestations fiables, sécurisées et adaptées aux besoins de nos
            clients.
          </p>

        </div>

        {/* Cartes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {commitments.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
              >

                <div className="w-16 h-16 rounded-2xl bg-[#0B2F6B]/5 border border-[#0B2F6B]/10 flex items-center justify-center mb-6">

                  <Icon
                    size={32}
                    className="text-yellow-400"
                  />

                </div>

                <h3 className="text-2xl font-bold text-[#0B2F6B] mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-8">
                  {item.description}
                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}