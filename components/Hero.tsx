import Image from "next/image";
import Link from "next/link";

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

      {/* Dégradé */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/75 to-black/50"></div>

      {/* Contenu */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <div className="max-w-3xl">

          <span className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider">
            🚛 Transport • Manutention • Logistique
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Votre partenaire de confiance au Gabon
          </h1>

          <p className="mt-8 text-xl text-blue-100 leading-9">
            GT Transport Gabon accompagne les entreprises dans leurs projets grâce à une flotte moderne, des équipes qualifiées et un engagement permanent pour la sécurité et le respect des délais.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-5">

            <Link
              href="/contact"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-bold text-center hover:bg-yellow-500 transition-all duration-300 shadow-xl"
            >
              Demander un devis
            </Link>

            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-xl text-center hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Découvrir nos services
            </Link>

          </div>

        </div>

      </div>

      {/* Statistiques flottantes */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="bg-white/95 backdrop-blur rounded-xl p-6 shadow-xl text-center">
            <h3 className="text-4xl font-bold text-blue-900">10+</h3>
            <p className="mt-2 text-gray-600">Années d'expérience</p>
          </div>

          <div className="bg-white/95 backdrop-blur rounded-xl p-6 shadow-xl text-center">
            <h3 className="text-4xl font-bold text-blue-900">500+</h3>
            <p className="mt-2 text-gray-600">Missions réalisées</p>
          </div>

          <div className="bg-white/95 backdrop-blur rounded-xl p-6 shadow-xl text-center">
            <h3 className="text-4xl font-bold text-blue-900">24/7</h3>
            <p className="mt-2 text-gray-600">Disponibilité</p>
          </div>

          <div className="bg-white/95 backdrop-blur rounded-xl p-6 shadow-xl text-center">
            <h3 className="text-4xl font-bold text-blue-900">100%</h3>
            <p className="mt-2 text-gray-600">Engagement qualité</p>
          </div>

        </div>

      </div>

    </section>
  );
}