import {
  Building2,
  Fuel,
  Pickaxe,
  Ship,
  Factory,
  BriefcaseBusiness,
} from "lucide-react";

const sectors = [
  {
    icon: Building2,
    title: "BTP",
    description:
      "Transport d'engins, de matériaux et accompagnement des chantiers.",
  },
  {
    icon: Fuel,
    title: "Pétrole & Énergie",
    description:
      "Solutions logistiques adaptées aux besoins du secteur énergétique.",
  },
  {
    icon: Pickaxe,
    title: "Mines",
    description:
      "Transport de matériels lourds et soutien aux activités minières.",
  },
  {
    icon: Ship,
    title: "Transport Maritime",
    description:
      "Gestion des conteneurs et opérations liées aux activités portuaires.",
  },
  {
    icon: Factory,
    title: "Industrie",
    description:
      "Approvisionnement et transport pour les sites industriels.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Entreprises",
    description:
      "Solutions logistiques sur mesure pour les entreprises privées et publiques.",
  },
];

export default function Clients() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Titre */}
        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-[#0B2F6B]">
            Les secteurs que nous accompagnons
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg leading-8">
            GT Transport Gabon accompagne des entreprises de nombreux secteurs
            grâce à son expertise en transport, manutention et logistique.
          </p>

        </div>

        {/* Cartes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {sectors.map((sector) => {

            const Icon = sector.icon;

            return (

              <div
                key={sector.title}
                className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >

                <div className="w-16 h-16 rounded-2xl bg-[#0B2F6B]/5 border border-[#0B2F6B]/10 flex items-center justify-center mb-6">

                  <Icon
                    size={32}
                    className="text-yellow-400"
                  />

                </div>

                <h3 className="text-2xl font-bold text-[#0B2F6B] mb-4">
                  {sector.title}
                </h3>

                <p className="text-gray-600 leading-8">
                  {sector.description}
                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}