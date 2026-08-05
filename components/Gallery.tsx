import Image from "next/image";
import FadeIn from "./FadeIn";

const images = [
  "/gallery/gallery1.jpg",
  "/gallery/gallery2.jpg",
  "/gallery/gallery3.jpg",
  "/gallery/gallery4.jpg",
];

export default function Gallery() {
  return (
    <FadeIn>
      <section
        id="gallery"
        className="py-28 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[0.25em] text-yellow-500 font-bold">
              Galerie
            </span>

            <h2 className="text-5xl font-extrabold text-blue-950 mt-5">
              Nos réalisations en images
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600">
              Découvrez quelques interventions de GT Transport Gabon :
              transport de conteneurs, manutention, convois exceptionnels
              et opérations logistiques.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {images.map((image, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl shadow-lg"
              >
                <Image
                  src={image}
                  alt={`GT Transport Gabon ${index + 1}`}
                  width={600}
                  height={450}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
            ))}

          </div>

        </div>
      </section>
    </FadeIn>
  );
}