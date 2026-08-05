import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const projects = [
  {
    title: "Transport de conteneurs",
    image: "/fleet1.jpg",
    description:
      "Transport sécurisé de conteneurs entre les infrastructures portuaires, les sites industriels et les chantiers au Gabon.",
  },
  {
    title: "Transport d'engins de chantier",
    image: "/fleet2.jpg",
    description:
      "Acheminement d'engins de chantier et d'équipements lourds grâce à des remorques adaptées.",
  },
  {
    title: "Manutention spécialisée",
    image: "/fleet3.jpg",
    description:
      "Chargement, déchargement et manutention de marchandises dans le respect des exigences de sécurité.",
  },
  {
    title: "Solutions logistiques",
    image: "/fleet4.jpg",
    description:
      "Organisation et coordination des opérations de transport pour accompagner les entreprises dans leurs projets.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <section className="bg-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Nos Réalisations
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Découvrez quelques exemples des prestations réalisées par
            GT Transport Gabon dans les domaines du transport,
            de la manutention et de la logistique.
          </p>

        </div>
      </section>

      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-10">

            {projects.map((project) => (

              <div
                key={project.title}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >

                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={500}
                  className="w-full h-72 object-cover"
                />

                <div className="p-8">

                  <h2 className="text-2xl font-bold text-blue-900 mb-4">
                    {project.title}
                  </h2>

                  <p className="text-gray-600 leading-8">
                    {project.description}
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