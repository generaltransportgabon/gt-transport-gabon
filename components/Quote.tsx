export default function Quote() {
  return (
    <section className="py-24 bg-blue-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <span className="uppercase tracking-widest text-yellow-400 font-semibold">
          Demande de devis
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Vous avez un projet de transport ou de logistique ?
        </h2>

        <p className="mt-6 text-lg text-blue-100 leading-8 max-w-3xl mx-auto">
          Notre équipe est à votre disposition pour étudier votre besoin
          et vous proposer une solution adaptée, rapide et compétitive.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition">
            Demander un devis
          </button>

          <button className="border border-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition">
            Nous contacter
          </button>

        </div>

      </div>
    </section>
  );
}