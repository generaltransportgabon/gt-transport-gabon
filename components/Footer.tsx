import Image from "next/image";
import Link from "next/link";

import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B2F6B] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Logo */}
          <div>

            <Image
              src="/logo/logo-gt-blanc.png"
              alt="GT Transport Gabon"
              width={220}
              height={220}
              priority
              className="mb-6 h-20 w-auto object-contain"
            />

            <p className="text-blue-100 leading-8">
              Transport routier, logistique, manutention et solutions industrielles au Gabon
              
            </p>

          </div>

          {/* Navigation */}
          <div>

            <h3 className="text-xl font-bold mb-6 text-yellow-400">
              Navigation
            </h3>

            <ul className="space-y-3">

              <li>
                <Link href="/" className="hover:text-yellow-400 transition">
                  Accueil
                </Link>
              </li>

              <li>
                <Link href="/#services" className="hover:text-yellow-400 transition">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/#fleet" className="hover:text-yellow-400 transition">
                  Notre flotte
                </Link>
              </li>

              <li>
                <Link href="/#projects" className="hover:text-yellow-400 transition">
                  Réalisations
                </Link>
              </li>

              <li>
                <Link href="/#gallery" className="hover:text-yellow-400 transition">
                  Galerie
                </Link>
              </li>

              <li>
                <Link href="/#contact" className="hover:text-yellow-400 transition">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-bold mb-6 text-yellow-400">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-3">
                <Phone className="text-yellow-400 mt-1" size={20} />

                <a
                  href="tel:+24165921333"
                  className="hover:text-yellow-400 transition"
                >
                  +241 65 92 13 33
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="text-yellow-400 mt-1" size={20} />

                <a
                  href="mailto:info@generaltransport-gabon.com"
                  className="hover:text-yellow-400 transition"
                >
                  info@generaltransport-gabon.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-yellow-400 mt-1" size={20} />

                <span>
                  Libreville
                  <br />
                  Gabon
                </span>

              </div>

            </div>

          </div>

          {/* Réseaux */}
          <div>

            <h3 className="text-xl font-bold mb-6 text-yellow-400">
              Suivez-nous
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="bg-white/10 p-4 rounded-xl hover:bg-yellow-400 hover:text-[#0B2F6B] transition"
              >
                <FaFacebookF size={22} />
              </a>

              <a
                href="#"
                className="bg-white/10 p-4 rounded-xl hover:bg-yellow-400 hover:text-[#0B2F6B] transition"
              >
                <FaLinkedinIn size={22} />
              </a>

              <a
                href="https://wa.me/24165921333?text=Bonjour%20GT%20Transport%20Gabon,%20je%20souhaite%20obtenir%20un%20devis."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-4 rounded-xl hover:bg-green-500 transition"
              >
                <MessageCircle size={22} />
              </a>

            </div>

            <div className="mt-8">

              <Link
                href="/#contact"
                className="inline-block bg-yellow-400 text-[#0B2F6B] px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-all duration-300"
              >
                Demander un devis
              </Link>

            </div>

          </div>

        </div>

      </div>

      {/* Bas du footer */}
      <div className="border-t border-blue-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} GT Transport Gabon. Tous droits réservés.
          </p>

          <p className="text-blue-300 text-sm">
            Conçu avec ❤️ pour GT Transport Gabon
          </p>

        </div>

      </div>

    </footer>
  );
}