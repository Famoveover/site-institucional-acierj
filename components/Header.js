 import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "../lib/utils";
import logoImg from "../imagens/acierj.png";

// Links principais (sem Institucional)
const navLinks = [
  { href: "/", label: "Início" },
  { href: "/cuidadores", label: "Cuidadores" },
  { href: "/associados", label: "Associados" },
  { href: "/eventos", label: "Eventos" },
  { href: "/noticias", label: "Notícias" },
  { href: "/contato", label: "Contato" },
];

// Links do dropdown "Institucional"
const institucionalLinks = [
  { href: "/sobre", label: "Sobre" },
  { href: "/areas", label: "Áreas de Atuação" },
  { href: "/projetos", label: "Projetos" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        "bg-white/95 backdrop-blur-md dark:bg-gray-900/95",
        scrolled &&
          "shadow-md bg-white dark:bg-gray-900 dark:shadow-gray-950/40",
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 no-underline"
          onClick={closeMenu}
        >
          <Image
            src={logoImg}
            alt="Logo ACIERJ"
            width={40}
            height={40}
            className="object-contain"
            priority
          />
          <span className="text-xl font-extrabold text-brand-400 tracking-tight">
            ACIERJ
          </span>
        </Link>

        {/* Nav desktop + mobile */}
        <nav
          className={cn(
            // Desktop
            "hidden lg:flex items-center gap-1",
            // Mobile overlay
            menuOpen &&
              "!flex fixed top-16 right-0 w-72 h-[calc(100vh-4rem)] bg-white dark:bg-gray-900 flex-col items-stretch gap-0 py-4 shadow-xl overflow-y-auto transition-transform duration-300 z-50",
          )}
          aria-label="Menu principal"
        >
          {/* Links principais */}
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              className={cn(
                "text-sm font-medium text-gray-700 dark:text-gray-200 no-underline px-3 py-2 rounded-md",
                "hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-400/10 transition-colors",
                // Mobile
                menuOpen &&
                  "text-base py-3.5 px-6 rounded-none border-b border-gray-100 dark:border-gray-700",
              )}
            >
              {label}
            </Link>
          ))}

          {/* Dropdown Institucional */}
          <div
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={cn(
                "text-sm font-medium text-gray-700 dark:text-gray-200 px-3 py-2 rounded-md",
                "hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-400/10 transition-colors",
                "flex items-center gap-1",
                // Mobile
                menuOpen &&
                  "text-base py-3.5 px-6 rounded-none border-b border-gray-100 dark:border-gray-700 w-full justify-between",
              )}
            >
              Institucional
              <svg
                className={cn(
                  "w-4 h-4 transition-transform",
                  (dropdownOpen || !menuOpen) && "rotate-180",
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>

            {/* Dropdown menu */}
            {(dropdownOpen || menuOpen) && (
              <div
                className={cn(
                  "absolute left-0 mt-0 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden",
                  // Desktop: posicionado acima
                  "hidden group-hover:block lg:block",
                  // Mobile: expandido abaixo
                  menuOpen && "!flex flex-col w-full bg-transparent shadow-none border-none rounded-none",
                )}
              >
                {institucionalLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={closeMenu}
                    className={cn(
                      "block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200",
                      "hover:bg-brand-50 dark:hover:bg-brand-400/10 hover:text-brand-400 transition-colors",
                      // Mobile
                      menuOpen &&
                        "py-3.5 px-8 border-b border-gray-100 dark:border-gray-700 rounded-none bg-gray-50 dark:bg-gray-700/30",
                    )}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Botão "Associe-se" - fora do menu */}
        <Link
          href="/cuidadores"
          className={cn(
            "hidden lg:inline-block px-5 py-2.5 text-sm font-bold text-white no-underline",
            "bg-brand-500 hover:bg-brand-600 dark:bg-brand-600 dark:hover:bg-brand-700",
            "rounded-md shadow-md shadow-brand-500/30 hover:shadow-lg hover:shadow-brand-500/40",
            "transition-all duration-200 hover:-translate-y-0.5",
          )}
        >
          Associe-se
        </Link>

        {/* Hamburger */}
        <button
          className="flex lg:hidden flex-col justify-center gap-[5px] w-9 h-9 p-1.5 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={cn(
              "block w-full h-[2.5px] bg-gray-700 dark:bg-gray-200 rounded transition-all origin-center",
              menuOpen && "translate-y-[7.5px] rotate-45",
            )}
          />
          <span
            className={cn(
              "block w-full h-[2.5px] bg-gray-700 dark:bg-gray-200 rounded transition-all",
              menuOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block w-full h-[2.5px] bg-gray-700 dark:bg-gray-200 rounded transition-all origin-center",
              menuOpen && "-translate-y-[7.5px] -rotate-45",
            )}
          />
        </button>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 top-16 bg-black/30 z-40 lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
