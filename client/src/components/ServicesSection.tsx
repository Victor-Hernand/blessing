/* DESIGN: Industrial Automotriz Premium — Servicios — Tema Claro */
import { motion } from "framer-motion";
import { Truck, ShieldCheck, Users, Clock, Wrench, HeadphonesIcon } from "lucide-react";
import { IMAGES, COMPANY } from "@/lib/constants";

const services = [
  { icon: Truck, title: "Envío a Domicilio", desc: "Entregamos tus repuestos directamente a tu taller o domicilio en Tegucigalpa y alrededores.", accent: true, image: IMAGES.realDeliverySingle },
  { icon: ShieldCheck, title: "Garantía en Productos", desc: "Todos nuestros productos cuentan con garantía de calidad. Trabajamos con marcas reconocidas.", accent: false, image: null },
  { icon: Users, title: "Vendedores Especializados", desc: "Nuestro equipo de 11 vendedores expertos te asesora para encontrar el repuesto exacto.", accent: false, image: null },
  { icon: Clock, title: "Disponibilidad Inmediata", desc: "Amplio inventario en stock para entrega inmediata. Si no lo tenemos, lo conseguimos rápido.", accent: false, image: null },
  { icon: Wrench, title: "Asesoría Técnica", desc: "Te ayudamos a identificar la pieza correcta con asesoría técnica para tu marca y modelo.", accent: true, image: IMAGES.realSellerRadio },
  { icon: HeadphonesIcon, title: "Atención Personalizada", desc: "Brindamos atención directa por WhatsApp, teléfono o en nuestra tienda física.", accent: false, image: null },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 lg:py-28 relative overflow-hidden bg-gray-50">
      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-red-600" />
            <span className="text-red-600 text-xs font-semibold uppercase tracking-[0.25em]" style={{ fontFamily: "var(--font-heading)" }}>
              Lo que ofrecemos
            </span>
            <div className="w-10 h-[2px] bg-red-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 uppercase" style={{ fontFamily: "var(--font-heading)" }}>
            Nuestros <span className="text-red-700">Servicios</span>
          </h2>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden transition-all duration-500 border bg-white shadow-sm hover:shadow-lg ${
                s.accent
                  ? "border-red-200 hover:border-red-400"
                  : "border-gray-200 hover:border-red-300"
              }`}
            >
              {/* Real photo for accent cards */}
              {s.image && (
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />
                </div>
              )}
              
              <div className="p-6 lg:p-7">
                {/* Top line animation */}
                {!s.image && <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-red-600 to-red-400 group-hover:w-full transition-all duration-500" />}

                <div className={`w-12 h-12 flex items-center justify-center mb-5 transition-all duration-300 ${
                  s.accent
                    ? "bg-red-50 border border-red-200 group-hover:bg-red-700 group-hover:border-red-700"
                    : "bg-gray-50 border border-gray-200 group-hover:bg-red-700 group-hover:border-red-700"
                }`}>
                  <s.icon className={`w-5 h-5 transition-colors duration-300 ${
                    s.accent ? "text-red-600 group-hover:text-white" : "text-red-600 group-hover:text-white"
                  }`} />
                </div>
                <h3 className="text-gray-900 font-bold text-base uppercase tracking-wide mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-red-700 hover:bg-red-600 text-white px-10 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-red-700/20 hover:shadow-red-600/30 hover:translate-y-[-2px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <HeadphonesIcon className="w-5 h-5" />
            Solicitar Asesoría
          </a>
        </motion.div>
      </div>
    </section>
  );
}
