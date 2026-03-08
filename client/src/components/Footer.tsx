/* DESIGN: Industrial Automotriz Premium — Footer — Tema Claro */
import { Phone, Mail, MapPin, ChevronRight, MessageCircle, ArrowUp } from "lucide-react";
import { COMPANY, CATEGORIES } from "@/lib/constants";

const quickLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Categorías", href: "#categorias" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Marcas", href: "#marcas" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-red-900 text-red-100/80 relative overflow-hidden">
      {/* Top gradient line */}
      <div className="h-1 bg-gradient-to-r from-amber-500 via-red-500 to-amber-500" />

      <div className="container py-14 lg:py-18">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-900/30"
                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-red-900" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <div>
                <div className="text-[9px] text-red-300/60 uppercase tracking-[0.25em]">Auto Repuestos</div>
                <div className="text-xl font-bold text-white uppercase tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>Blessing</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4 text-red-200/60">
              Más de 10 años brindando autopartes de calidad a precios justos en Honduras.
            </p>
            <p className="text-amber-400/80 italic text-sm" style={{ fontFamily: "var(--font-accent)" }}>
              "{COMPANY.slogan}"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="flex items-center gap-2 text-sm text-red-200/70 hover:text-amber-300 transition-colors group">
                    <ChevronRight className="w-3 h-3 text-amber-500 group-hover:translate-x-0.5 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Categorías
            </h4>
            <ul className="space-y-2.5">
              {CATEGORIES.slice(0, 6).map(cat => (
                <li key={cat.name}>
                  <a href="#categorias" className="flex items-center gap-2 text-sm text-red-200/70 hover:text-amber-300 transition-colors group">
                    <ChevronRight className="w-3 h-3 text-amber-500 group-hover:translate-x-0.5 transition-transform" />
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Contacto
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY.phone}`} className="text-sm text-red-200/70 hover:text-amber-300 transition-colors">{COMPANY.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY.email}`} className="text-sm text-red-200/70 hover:text-amber-300 transition-colors break-all">{COMPANY.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed text-red-200/70">{COMPANY.address}</span>
              </li>
            </ul>
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md shadow-green-900/20"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-red-800/50">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-red-300/50">
            &copy; {new Date().getFullYear()} Auto Repuestos Blessing. Todos los derechos reservados. RTN: {COMPANY.rtn}
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-red-300/50 hover:text-amber-300 transition-colors group"
          >
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            Volver arriba
          </button>
        </div>
      </div>
    </footer>
  );
}
