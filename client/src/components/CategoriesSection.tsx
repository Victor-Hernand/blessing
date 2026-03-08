/* DESIGN: Industrial Automotriz Premium — Categorías con tarjetas impactantes */
import { motion } from "framer-motion";
import { Cog, CircleDot, ArrowUpDown, Zap, Thermometer, Settings, Filter, Droplets, Wrench, ArrowRight } from "lucide-react";
import { CATEGORIES, IMAGES, COMPANY } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Cog, CircleDot, ArrowUpDown, Zap, Thermometer, Settings, Filter, Droplets, Wrench,
};

const categoryImages: Record<string, string> = {
  Motor: IMAGES.categoryEngine,
  Frenos: IMAGES.categoryBrakes,
  "Suspensión": IMAGES.categorySuspension,
};

export default function CategoriesSection() {
  return (
    <section id="categorias" className="py-20 lg:py-28 bg-white">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-red-700" />
            <span className="section-label">Nuestro catálogo</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-gray-900">
              Categorías de <span className="text-gradient-red">Productos</span>
            </h2>
            <p className="text-gray-500 max-w-md text-base leading-relaxed">
              Amplio inventario organizado en categorías para que encuentres exactamente lo que necesitas.
            </p>
          </div>
        </motion.div>

        {/* Featured categories with images (top 3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {CATEGORIES.slice(0, 3).map((cat, i) => {
            const Icon = iconMap[cat.icon];
            const img = categoryImages[cat.name];
            return (
              <motion.a
                key={cat.name}
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative h-72 overflow-hidden block glow-red"
              >
                {img && (
                  <>
                    <img src={img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/5 group-hover:from-black/90 transition-all duration-500" />
                  </>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-red-700/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                      {Icon && <Icon className="w-5 h-5 text-white" />}
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
                      {cat.name}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">{cat.description}</p>
                  <div className="flex items-center gap-2 text-red-400 text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300" style={{ fontFamily: "var(--font-heading)" }}>
                    <span>Consultar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-red-600 to-red-400 group-hover:w-full transition-all duration-500" />
              </motion.a>
            );
          })}
        </div>

        {/* Remaining categories grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {CATEGORIES.slice(3).map((cat, i) => {
            const Icon = iconMap[cat.icon];
            return (
              <motion.a
                key={cat.name}
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-gray-50 border border-gray-100 p-5 text-center hover:border-red-200 hover:bg-red-50/30 hover:shadow-lg hover:shadow-red-100/20 transition-all duration-300 block hover:-translate-y-1"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-white border border-gray-200 flex items-center justify-center group-hover:bg-red-700 group-hover:border-red-700 transition-all duration-300 shadow-sm">
                  {Icon && <Icon className="w-5 h-5 text-red-700 group-hover:text-white transition-colors duration-300" />}
                </div>
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-1 group-hover:text-red-700 transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                  {cat.name}
                </h3>
                <p className="text-[11px] text-gray-500 leading-tight line-clamp-2">{cat.description}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
