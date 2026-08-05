import Image from "next/image";
import Link from "next/link";
import { Truck, PackageCheck, MapPinned } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">

      {/* Image de fond */}
      <Image
        src="/hero/hero-truck.jpg"
        alt="GT Transport Gabon"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/75 to-black/50" />

      {/* Contenu */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <div className="max-w-3xl">

          <span className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider">
            🚛 Transport • Manutention • Logistique
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Votre partenaire de confiance pour le transport et la logistique au Gabon
          </h1>

          <p className="mt-8 text-xl text-blue-100 leading-9">
            GT Transport Gabon accompagne les entreprises avec des solutions
            fiables de transport routier, de manutention et de logistique,
            partout sur le territoire gabonais.
          </p>

          {/* Boutons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5">

            <Link
              href="/#quote"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-bold text-center hover:bg-yellow-500 transition-all duration-300 shadow-xl"
            >
              Demander un devis
            </Link>

            <Link
              href="/#services"
              className="border-2 border-white text-white px-8 py-4 rounded-xl text-center hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Découvrir nos services
            </Link>

          </div>

          {/* Arguments de confiance */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6">

            <div className="flex items-center gap-3 text-white">
              <Truck className="text-yellow-400" size={28} />
              <span className="font-medium">
                Transport routier
              </span>
            </div>

            <div className="flex items-center gap-3 text-white">
              <PackageCheck className="text-yellow-400" size={28} />
              <span className="font-medium">
                Manutention & Logistique
              </span>
            </div>

            <div className="flex items-center gap-3 text-white">
              <MapPinned className="text-yellow-400" size={28} />
              <span className="font-medium">
                Intervention sur tout le Gabon
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}