import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const gallery = [
  {
    image: "/fleet1.jpg",
    category: "Transport de conteneurs",
  },
  {
    image: "/fleet2.jpg",
    category: "Transport d'engins",
  },
  {
    image: "/fleet3.jpg",
    category: "Manutention",
  },
  {
    image: "/fleet4.jpg",
    category: "Logistique",
  },
  {
    image: "/fleet5.jpg",
    category: "Transport",
  },
  {
    image: "/fleet6.jpg",
    category: "Flotte",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <section className="bg-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Galerie
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Découvrez GT Transport Gabon à travers notre flotte,
            nos équipements et nos différentes opérations.
          </p>

        </div>
      </section>

      <section className="py-20 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {gallery.map((photo, index) => (

              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg"
              >

                <div className="overflow-hidden">

                  <Image
                    src={photo.image}
                    alt={photo.category}
                    width={700}
                    height={500}
                    className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                  />

                </div>

                <div className="p-6">

                  <span className="text-sm uppercase tracking-widest text-blue-700 font-semibold">
                    {photo.category}
                  </span>

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