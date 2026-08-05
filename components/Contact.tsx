export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-blue-900 font-semibold uppercase tracking-widest">
            Contact
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Parlons de votre projet
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Une question ? Un besoin en transport, manutention ou logistique ?
            Notre équipe est à votre écoute.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Informations */}
          <div className="bg-white rounded-2xl shadow-lg p-10">

            <h3 className="text-2xl font-bold text-blue-900 mb-8">
              Nos coordonnées
            </h3>

            <div className="space-y-6">

              <div>
                <h4 className="font-bold">📍 Adresse</h4>
                <p className="text-gray-600">
                  Libreville - Gabon
                </p>
              </div>

              <div>
                <h4 className="font-bold">📞 Téléphone</h4>
                <p className="text-gray-600">
                  +241 65 92 13 33
                </p>
              </div>

              <div>
                <h4 className="font-bold">📧 Email</h4>
                <p className="text-gray-600">
                  info@generaltransport-gabon.com
                </p>
              </div>

              <div>
                <h4 className="font-bold">🕒 Horaires</h4>
                <p className="text-gray-600">
                  Lundi - Vendredi : 07h00 - 15h30
                </p>
              </div>

            </div>

          </div>

          {/* Formulaire */}
          <div className="bg-white rounded-2xl shadow-lg p-10">

            <h3 className="text-2xl font-bold text-blue-900 mb-8">
              Demande de contact
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Nom complet"
                className="w-full border rounded-lg p-4"
              />

              <input
                type="email"
                placeholder="Adresse e-mail"
                className="w-full border rounded-lg p-4"
              />

              <input
                type="tel"
                placeholder="Téléphone"
                className="w-full border rounded-lg p-4"
              />

              <textarea
                placeholder="Décrivez votre besoin..."
                rows={5}
                className="w-full border rounded-lg p-4"
              />

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-4 rounded-lg font-bold hover:bg-blue-800 transition"
              >
                Envoyer ma demande
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}