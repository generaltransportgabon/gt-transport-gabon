import Link from "next/link";
import FadeIn from "./FadeIn";
import {
  Truck,
  Container,
  Ship,
  Hammer,
  Package,
  Warehouse,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Transport Routier",
    description:
      "Transport de marchandises partout au Gabon avec une flotte moderne et sécurisée.",
    link: "/#fleet",
  },
  {
    icon: Container,
    title: "Transport de Conteneurs",
    description:
      "Transport de conteneurs 20', 40', Open Top, Flat Rack, Reefer et spéciaux.",
    link: "/#contact",
  },
  {
    icon: Ship,
    title: "Transit Portuaire",
    description:
      "Gestion complète des opérations portuaires, douanières et administratives.",
    link: "/#contact",
  },
  {
    icon: Warehouse,
    title: "Logistique",
    description:
      "Organisation et optimisation de votre chaîne logistique de bout en bout.",
    link: "/#contact",
  },
  {
    icon: Package,
    title: "Manutention",
    description:
      "Chargement, déchargement et manipulation d'équipements lourds en toute sécurité.",
    link: "/#projects",
  },
  {
    icon: Hammer,
    title: "Convois Exceptionnels",
    description:
      "Transport spécialisé d'engins de chantier, d'équipements industriels et de charges hors gabarit.",
    link: "/#contact",
  },
];

export default function Services() {
  return (
    <FadeIn>
      <section
        id="services"
        className="py-28 bg-gradient-to-b from-white to-slate-50"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <span className="uppercase tracking-[0.25em] text-yellow-500 font-bold">
              NOS SERVICES
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 mt-5">
              Des solutions adaptées à vos besoins
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-8">
              GT Transport Gabon met à votre disposition son expertise,
              ses équipements et son personnel qualifié pour assurer le
              transport, la manutention et la logistique de vos projets.
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {services.map((service, index) => {

              const Icon = service.icon;

              return (

                <div
                  key={index}
                  className="group rounded-3xl bg-white p-8 shadow-lg border border-gray-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                >

                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-400 text-blue-900 mb-6 group-hover:scale-110 transition">

                    <Icon size={30} />

                  </div>

                  <h3 className="text-2xl font-bold text-blue-950 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-8">
                    {service.description}
                  </p>

                  <Link
                    href={service.link}
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-900 group-hover:text-yellow-500 transition"
                  >
                    En savoir plus

                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-2 transition"
                    />

                  </Link>

                </div>

              );

            })}

          </div>

        </div>
      </section>
    </FadeIn>
  );
}