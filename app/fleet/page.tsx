import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const fleet = [
  {
    title: "Transport de conteneurs",
    image: "/fleet1.jpg",
    description:
      "Des tracteurs routiers équipés pour le transport de conteneurs 20 et 40 pieds sur tout le territoire gabonais.",
  },
  {
    title: "Transport d'engins de chantier",
    image: "/fleet2.jpg",
    description:
      "Des remorques adaptées au transport de pelles, bulldozers, niveleuses et autres engins lourds.",
  },
  {
    title: "Manutention",
    image: "/fleet3.jpg",
    description:
      "Des équipements permettant le chargement et le déchargement de marchandises en toute sécurité.",
  },
  {
    title: "Solutions logistiques",
    image: "/fleet4.jpg",
    description:
      "Une organisation logistique complète pour assurer le suivi de vos opérations.",
  },
];

export default function FleetPage() {
  return (
    <>
      <Navbar />

      <section className="bg-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Notre Flotte
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Une flotte moderne au service du transport de conteneurs,
            d'engins de chantier, de la manutention et de la logistique.
          </p>

        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-10">

            {fleet.map((vehicle) => (
              <div
                key={vehicle.title}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <Image
                  src={vehicle.image}
                  alt={vehicle.title}
                  width={700}
                  height={500}
                  className="w-full h-72 object-cover"
                />

                <div className="p-8">

                  <h2 className="text-2xl font-bold text-blue-900 mb-4">
                    {vehicle.title}
                  </h2>

                  <p className="text-gray-600 leading-7">
                    {vehicle.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}