import {
  Truck,
  Award,
  Clock3,
  MapPinned,
} from "lucide-react";

const stats = [
  {
    icon: Truck,
    value: "25+",
    title: "Véhicules & équipements",
    description:
      "Une flotte adaptée aux besoins de transport et de logistique.",
  },
  {
    icon: Award,
    value: "5+",
    title: "Années d'expérience",
    description:
      "Un savoir-faire développé au service des entreprises.",
  },
  {
    icon: Clock3,
    value: "24/7",
    title: "Disponibilité opérationnelle",
    description:
      "Une équipe mobilisée pour vos projets et opérations.",
  },
  {
    icon: MapPinned,
    value: "Gabon",
    title: "Couverture nationale",
    description:
      "Des interventions sur l'ensemble du territoire gabonais.",
  },
];

export default function Stats() {
  return (
    <section className="relative py-20 bg-blue-950 overflow-hidden">

      {/* Effets lumineux */}
      <div className="absolute inset-0">

        <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl" />

        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />

      </div>


      <div className="relative max-w-7xl mx-auto px-6">


        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-14">

          <span className="text-yellow-400 uppercase tracking-widest font-bold text-sm">
            GT Transport Gabon
          </span>


          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-white">
            Des moyens adaptés à vos projets de transport
          </h2>


          <p className="mt-5 text-blue-200 text-lg leading-8">
            Grâce à nos équipements, notre organisation et notre expérience,
            nous accompagnons les entreprises dans leurs opérations de
            transport, logistique et manutention.
          </p>

        </div>



        {/* Cartes statistiques */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


          {stats.map((stat) => {

            const Icon = stat.icon;


            return (

              <div
                key={stat.title}
                className="
                  group
                  bg-white/10
                  backdrop-blur-lg
                  border
                  border-white/10
                  rounded-2xl
                  p-8
                  text-center
                  hover:bg-white/15
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >


                {/* Icône */}
                <div
                  className="
                    mx-auto
                    w-14
                    h-14
                    rounded-xl
                    bg-yellow-400
                    flex
                    items-center
                    justify-center
                    group-hover:scale-110
                    transition
                    duration-500
                  "
                >

                  <Icon
                    size={28}
                    className="text-blue-950"
                  />

                </div>



                {/* Valeur */}
                <h3
                  className="
                    mt-6
                    text-3xl
                    md:text-4xl
                    font-extrabold
                    text-white
                  "
                >
                  {stat.value}
                </h3>



                {/* Titre */}
                <h4
                  className="
                    mt-3
                    text-lg
                    font-bold
                    text-yellow-400
                  "
                >
                  {stat.title}
                </h4>



                {/* Description */}
                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-blue-200
                  "
                >
                  {stat.description}
                </p>


              </div>

            );

          })}


        </div>


      </div>


    </section>
  );
}