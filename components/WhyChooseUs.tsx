import {
  ShieldCheck,
  Truck,
  Users,
  BriefcaseBusiness,
} from "lucide-react";

const advantages = [
  {
    title: "Fiabilité",
    description:
      "Nous assurons un transport sécurisé, fiable et le respect des délais pour chacun de vos projets.",
    icon: ShieldCheck,
  },
  {
    title: "Flotte moderne",
    description:
      "Une flotte performante adaptée au transport de conteneurs, d'engins et de matériels industriels.",
    icon: Truck,
  },
  {
    title: "Équipe expérimentée",
    description:
      "Des professionnels qualifiés pour accompagner vos opérations de transport, de manutention et de logistique.",
    icon: Users,
  },
  {
    title: "Solutions sur mesure",
    description:
      "Chaque mission bénéficie d'une étude personnalisée afin de répondre précisément à vos besoins.",
    icon: BriefcaseBusiness,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-[#0B2F6B] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Titre */}
        <div className="text-center mb-16">

          <span className="uppercase tracking-[0.25em] text-yellow-400 font-bold">
            NOS ENGAGEMENTS
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Pourquoi choisir GT Transport Gabon ?
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-blue-100 leading-8">
            GT Transport Gabon met son expertise, sa flotte moderne et son
            savoir-faire au service de vos projets afin de garantir des
            prestations fiables, sécurisées et adaptées à vos exigences.
          </p>

        </div>

        {/* Cartes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {advantages.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-xl hover:bg-white/15 hover:-translate-y-2 transition-all duration-500"
              >

                {/* Icône */}
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">

                  <Icon
                    size={32}
                    className="text-yellow-400"
                  />

                </div>

                {/* Titre */}
                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-blue-100 leading-8">
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