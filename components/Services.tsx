import Link from "next/link";
import FadeIn from "./FadeIn";
import {
  Truck,
  Container,
  Ship,
  Tractor,
  PackageOpen,
  Boxes,
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
    icon: Boxes,
    title: "Logistique",
    description:
      "Organisation et optimisation de votre chaîne logistique de bout en bout.",
    link: "/#contact",
  },
  {
    icon: PackageOpen,
    title: "Manutention",
    description:
      "Chargement, déchargement et manipulation d'équipements lourds en toute sécurité.",
    link: "/#projects",
  },
  {
    icon: Tractor,
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

          {/* En-tête */}
          <div className="text-center mb-16">

            <span className="uppercase tracking-[0.25em] text-yellow-500 font-bold">
              NOS SERVICES
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0B2F6B]">
              Des solutions adaptées à vos besoins
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
              GT Transport Gabon met à votre disposition son expertise,
              ses équipements et son personnel qualifié pour assurer le
              transport, la manutention et la logistique de vos projets.
            </p>

          </div>

          {/* Cartes */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {services.map((service, index) => {

              const Icon = service.icon;

              return (

                <div
                  key={index}
                  className="group rounded-3xl bg-white p-8 border border-gray-100 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
                >

                  <div className="w-16 h-16 rounded-2xl bg-[#0B2F6B]/5 border border-[#0B2F6B]/10 flex items-center justify-center mb-6">

                    <Icon
                      size={32}
                      className="text-yellow-400"
                    />

                  </div>

                  <h3 className="text-2xl font-bold text-[#0B2F6B] mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-8">
                    {service.description}
                  </p>

                  <Link
                    href={service.link}
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0B2F6B] hover:text-yellow-500 transition"
                  >
                    En savoir plus

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-2"
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