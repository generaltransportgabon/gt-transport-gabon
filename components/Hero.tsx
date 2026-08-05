import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* Image de fond */}
      <Image
        src="/hero/hero-truck.jpg"
        alt="GT Transport Gabon"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-black/50" />

      {/* Contenu */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <div className="max-w-2xl">

          <span className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider">
            Transport • Logistique • Manutention
          </span>

          <h1 className="mt-8 text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Votre partenaire de confiance au Gabon
          </h1>

          <p className="mt-6 text-lg md:text-xl text-blue-100 leading-8">
            GT Transport Gabon accompagne les entreprises avec des solutions
            fiables de transport routier, de manutention, de logistique et de
            convois exceptionnels sur l'ensemble du territoire gabonais.
          </p>

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

        </div>

      </div>

    </section>
  );
}