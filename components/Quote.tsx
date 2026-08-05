import Link from "next/link";

export default function Quote() {
  return (
    <section
      id="quote"
      className="py-24 bg-[#0B2F6B] text-white"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        <span className="uppercase tracking-[0.25em] text-yellow-400 font-bold">
          DEMANDE DE DEVIS
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold">
          Vous avez un projet de transport ou de logistique ?
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-blue-100">
          Notre équipe est à votre disposition pour étudier votre besoin
          et vous proposer une solution fiable, rapide et adaptée à vos
          exigences partout au Gabon.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

          <Link
            href="#contact"
            className="bg-yellow-400 text-[#0B2F6B] px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-yellow-300 transition-all duration-300"
          >
            Demander un devis
          </Link>

          <Link
            href="#contact"
            className="border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#0B2F6B] transition-all duration-300"
          >
            Nous contacter
          </Link>

        </div>

      </div>
    </section>
  );
}