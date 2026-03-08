/* DESIGN: Industrial Automotriz Premium — Header sticky con transiciones */
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Categorías", href: "#categorias" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Marcas", href: "#marcas" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map(l => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
          : "bg-white shadow-sm"
      }`}
    >
      {/* Red accent line */}
      <div className="h-[3px] bg-gradient-to-r from-red-800 via-red-600 to-red-800" />

      <div className="container flex items-center justify-between h-16 lg:h-[72px]">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 shrink-0 group">
          <div
            className="w-10 h-10 lg:w-11 lg:h-11 bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center relative group-hover:from-red-600 group-hover:to-red-800 transition-all duration-300 shadow-md shadow-red-900/20"
            style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[9px] font-medium tracking-[0.25em] text-gray-400 uppercase" style={{ fontFamily: "var(--font-body)" }}>Auto Repuestos</span>
            <span className="text-[22px] lg:text-[26px] font-bold tracking-tight text-gradient-red" style={{ fontFamily: "var(--font-heading)" }}>
              BLESSING
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-[13px] font-medium transition-all duration-200 uppercase tracking-wider ${
                  isActive ? "text-red-700" : "text-gray-600 hover:text-red-700"
                }`}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-1/2 h-[2px] bg-red-700"
                  initial={false}
                  animate={{
                    width: isActive ? "70%" : "0%",
                    x: "-50%",
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ translateX: "-50%" }}
                />
              </a>
            );
          })}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white px-5 py-2.5 text-xs font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-red-700/20 uppercase tracking-wider hover:translate-y-[-1px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <Phone className="w-3.5 h-3.5" />
            Cotizar
            <ChevronRight className="w-3.5 h-3.5 -mr-1" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-red-700 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg"
          >
            <nav className="container py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-red-700 hover:bg-red-50/50 transition-all uppercase tracking-wide border-l-2 border-transparent hover:border-red-700"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-red-700 to-red-800 text-white px-4 py-3 text-sm font-semibold uppercase tracking-wider shadow-md"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <Phone className="w-4 h-4" />
                Cotizar Ahora
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
