import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const services = [
  {
    title: "Transport de conteneurs",
    image: "/fleet1.jpg",
    description:
      "Nous assurons le transport sécurisé de conteneurs entre les ports, les zones industrielles et les chantiers à travers le Gabon.",
  },
  {
    title: "Transport d'engins de chantier",
    image: "/fleet2.jpg",
    description:
      "Acheminement d'engins de chantier et d'équipements lourds avec des moyens adaptés.",
  },
  {
    title: "Manutention",
    image: "/fleet3.jpg",
    description:
      "Chargement, déchargement et manipulation de marchandises dans le respect des normes de sécurité.",
  },
  {
    title: "Logistique",
    image: "/fleet4.jpg",
    description:
      "Organisation et coordination des opérations de transport pour optimiser vos flux.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <section className="bg-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">
            Nos Services
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Des solutions professionnelles de transport et de logistique
            adaptées aux besoins des entreprises au Gabon.
          </p>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.title}
          className={`py-24 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

            <Image
              src={service.image}
              alt={service.title}
              width={700}
              height={500}
              className="rounded-2xl shadow-xl object-cover"
            />

            <div>

              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                {service.title}
              </h2>

              <p className="text-gray-700 leading-8 mb-8">
                {service.description}
              </p>

              <button className="bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition">
                Demander un devis
              </button>

            </div>

          </div>
        </section>
      ))}

      <Footer />
    </>
  );
}