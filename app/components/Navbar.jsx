"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About Me", id: "about" },
  { label: "Education", id: "education" },
  { label: "Skills", id: "skills" },
  { label: "My Projects", id: "project" },
  { label: "Contact Me", id: "contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 12);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-zinc-200/70 bg-white/90 backdrop-blur-xl transition-shadow ${
        isScrolled ? "shadow-sm shadow-zinc-900/5" : ""
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
        <a
          href="#home"
          onClick={closeMenu}
          aria-label="Ajay, home"
          className="text-xl font-semibold tracking-tight text-zinc-900"
        >
          Ajay<span className="text-orange-500">.</span>
        </a>

        <ul className="hidden items-center gap-4 md:flex lg:gap-6">
          {navLinks.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full border border-zinc-300 px-4 py-1.5 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-900 hover:bg-zinc-900 hover:text-white sm:flex"
          >
            Contact
            <ArrowUpRight aria-hidden="true" size={13} />
          </a>
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-full p-2 text-zinc-700 transition hover:bg-zinc-100 md:hidden"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" size={20} />
            ) : (
              <Menu aria-hidden="true" size={20} />
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-zinc-100 bg-white px-5 py-3 shadow-lg shadow-zinc-900/5 md:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col">
            {navLinks.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-950"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
