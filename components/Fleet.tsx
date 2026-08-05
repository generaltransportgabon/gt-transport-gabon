import Image from "next/image";

const trucks = [
  "/fleet/fleet1.jpg",
  "/fleet/fleet2.jpg",
  "/fleet/fleet3.jpg",
  "/fleet/fleet4.jpg",
  "/fleet/fleet5.jpg",
  "/fleet/fleet6.jpg",
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Notre Flotte
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Des véhicules modernes pour assurer le transport de vos marchandises
          partout au Gabon.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {trucks.map((truck) => (
            <div
              key={truck}
              className="overflow-hidden rounded-xl shadow-lg bg-white"
            >
              <Image
                src={truck}
                alt="Camion GT Transport"
                width={600}
                height={400}
                className="w-full h-64 object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}