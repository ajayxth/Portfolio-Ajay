"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Education", id: "education" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "project" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState("light");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 12);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              first.boundingClientRect.top - second.boundingClientRect.top,
          );
        const currentSection = visibleSections[0];

        if (currentSection) setActiveSection(currentSection.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  const handleSectionClick = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    setTheme(nextTheme);

    try {
      window.localStorage.setItem("portfolio-theme", nextTheme);
    } catch (error) {
      console.error("Unable to save the theme preference.", error);
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      data-motion-reveal=""
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        aria-label="Primary navigation"
        className={`mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between rounded-2xl border px-3 shadow-lg backdrop-blur-xl transition-all duration-300 sm:px-4 ${
          isScrolled
            ? "border-zinc-200/80 bg-white/95 shadow-zinc-900/10"
            : "border-white/80 bg-white/80 shadow-zinc-900/5"
        }`}
      >
        <a
          href="#home"
          onClick={() => handleSectionClick("home")}
          aria-label="Ajay, home"
          className="group flex shrink-0 items-center gap-2.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
        >
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 text-sm font-bold text-white shadow-sm transition-transform duration-200 group-hover:-rotate-3">
            A
            <span
              aria-hidden="true"
              className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-orange-500"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[1.05rem] font-semibold tracking-tight text-zinc-950">
              Ajay<span className="text-orange-500">.</span>
            </span>
            <span className="mt-1.5 text-[0.58rem] font-medium uppercase tracking-[0.18em] text-zinc-400">
              Portfolio
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 rounded-full bg-zinc-100/80 p-1 lg:flex">
          {navLinks.map(({ label, id }) => {
            const isActive = activeSection === id;

            return (
              <li key={id} className="relative">
                {isActive && (
                  <motion.span
                    layoutId="active-navbar-pill"
                    aria-hidden="true"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-zinc-950"
                  />
                )}
                <a
                  href={`#${id}`}
                  onClick={() => handleSectionClick(id)}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative z-10 inline-flex items-center rounded-full px-2.5 py-2 text-xs font-medium transition-colors lg:px-3 lg:text-sm ${
                    isActive
                      ? "text-white"
                      : "text-zinc-600 hover:text-zinc-950"
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#contact"
            onClick={() => handleSectionClick("contact")}
            className="group hidden items-center gap-1.5 rounded-full bg-orange-500 px-3.5 py-2.5 text-xs font-semibold text-white shadow-sm shadow-orange-500/20 transition-all hover:bg-orange-600 hover:shadow-md hover:shadow-orange-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 sm:inline-flex sm:px-4 sm:text-sm"
          >
            Let&apos;s talk
            <ArrowUpRight
              aria-hidden="true"
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <button
            type="button"
            data-theme-toggle
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            onClick={toggleTheme}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 ${
              theme === "dark"
                ? "border-zinc-200 bg-zinc-900 text-orange-300 hover:bg-zinc-800"
                : "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100"
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                aria-hidden="true"
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, rotate: -45, scale: 0.7 }
                }
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={
                  shouldReduceMotion
                    ? undefined
                    : { opacity: 0, rotate: 45, scale: 0.7 }
                }
                transition={{ duration: shouldReduceMotion ? 0 : 0.18 }}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 lg:hidden ${
              isMenuOpen
                ? "bg-zinc-950 text-white"
                : "border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100"
            }`}
          >
            {isMenuOpen ? (
              <X aria-hidden="true" size={19} />
            ) : (
              <Menu aria-hidden="true" size={19} />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.985 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            data-motion-reveal=""
            className="absolute left-4 right-4 top-[calc(100%+0.625rem)] mx-auto max-w-6xl rounded-[1.4rem] border border-zinc-200/80 bg-white/95 p-4 shadow-xl shadow-zinc-900/10 backdrop-blur-xl lg:hidden sm:p-5"
          >
            <div className="mb-4 flex items-center justify-between px-1">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-orange-600">
                  Portfolio menu
                </p>
                <p className="mt-1 text-xs text-zinc-500">Jump to a section</p>
              </div>
              <span className="font-mono text-xs text-zinc-400">01 — 06</span>
            </div>

            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map(({ label, id }, index) => {
                const isActive = activeSection === id;

                return (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.035 }}
                  >
                    <a
                      href={`#${id}`}
                      onClick={() => handleSectionClick(id)}
                      aria-current={isActive ? "location" : undefined}
                      className={`group flex min-h-14 items-center gap-3 rounded-xl border px-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 ${
                        isActive
                          ? "border-zinc-950 bg-zinc-950 text-white"
                          : "border-zinc-100 bg-zinc-50/80 text-zinc-700 hover:border-orange-200 hover:bg-orange-50/70"
                      }`}
                    >
                      <span
                        className={`font-mono text-[0.68rem] ${
                          isActive
                            ? "text-orange-300"
                            : "text-zinc-400 group-hover:text-orange-600"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium">{label}</span>
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="ml-auto h-1.5 w-1.5 rounded-full bg-orange-400"
                        />
                      )}
                    </a>
                  </motion.li>
                );
              })}
            </ul>

            <div className="mt-4 flex items-center justify-between border-t border-zinc-100 px-1 pt-4">
              <span className="text-xs text-zinc-500">Have a project in mind?</span>
              <a
                href="#contact"
                onClick={() => handleSectionClick("contact")}
                className="inline-flex items-center gap-1 text-sm font-semibold text-zinc-900 transition-colors hover:text-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
              >
                Let&apos;s talk
                <ArrowUpRight aria-hidden="true" size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
