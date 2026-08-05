export default function Stats() {
  const stats = [
    {
      value: "25+",
      label: "Camions & Remorques",
    },
    {
      value: "1000+",
      label: "Conteneurs transportés",
    },
    {
      value: "24/7",
      label: "Disponibilité",
    },
    {
      value: "100%",
      label: "Satisfaction Client",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          {stats.map((stat) => (

            <div
              key={stat.label}
              className="text-center rounded-xl shadow-lg p-8 hover:shadow-2xl transition"
            >
              <h2 className="text-5xl font-bold text-blue-700">
                {stat.value}
              </h2>

              <p className="mt-4 text-gray-600">
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}