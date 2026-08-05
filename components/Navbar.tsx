"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Notre Flotte", href: "/#fleet" },
  { name: "Réalisations", href: "/#projects" },
  { name: "Galerie", href: "/#gallery" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/logo/logo.png"
            alt="GT Transport Gabon"
            width={55}
            height={55}
            priority
          />

          <div className="leading-tight">
            <h1 className="text-xl font-extrabold text-blue-900">
              GT TRANSPORT
            </h1>
            <p className="text-xs tracking-widest text-yellow-500 font-semibold">
              GABON
            </p>
          </div>

        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex items-center gap-8 font-medium">

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-yellow-500 transition duration-300"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/#quote"
            className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition duration-300"
          >
            Demander un devis
          </Link>

        </nav>

        {/* Bouton Mobile */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Ouvrir le menu"
        >
          {open ? (
            <X size={32} className="text-blue-900" />
          ) : (
            <Menu size={32} className="text-blue-900" />
          )}
        </button>

      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="lg:hidden bg-white shadow-xl border-t">

          <nav className="flex flex-col gap-5 p-6">

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg hover:text-yellow-500 transition"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/#quote"
              onClick={() => setOpen(false)}
              className="bg-yellow-400 text-blue-900 py-3 rounded-lg text-center font-bold hover:bg-yellow-500 transition duration-300"
            >
              Demander un devis
            </Link>

          </nav>

        </div>
      )}
    </header>
  );
}