import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getCheckoutUrl } from "../utils/checkoutUrl";
export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-gradient-to-b from-[#2E4A68] via-[#24405E] to-[#152C42] pt-20 pb-0"
    >
      <div className="container mx-auto px-4 max-w-2xl text-center relative z-10">
        <span className="inline-block px-6 py-2.5 mb-6 rounded-full border border-white/30 bg-white/10 text-white/90 font-semibold tracking-[0.18em] uppercase text-xs">
          Oferta Especial — Pack Completo
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight mb-10">
          Accede hoy al{" "}
          <em className="italic font-bold text-[#f0e6d2]">
            Mega Pack completo
          </em>
        </h2>

        <div className="relative inline-block mb-2 w-full max-w-md mx-auto">
          <img
            src={`${import.meta.env.BASE_URL}megapack-mockup-mobile.webp`}
            alt="Mega Pack Higiene y Seguridad Blindada"
            width={672}
            height={672}
            loading="lazy"
            decoding="async"
            className="md:hidden w-full h-auto object-contain drop-shadow-2xl"
          />
          <img
            src={`${import.meta.env.BASE_URL}megapack-mockup.webp`}
            alt="Mega Pack Higiene y Seguridad Blindada"
            width={672}
            height={672}
            loading="lazy"
            decoding="async"
            className="hidden md:block w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      <div
        id="comprar"
        className="container mx-auto px-4 max-w-md relative z-10 pb-16 -mt-4 scroll-mt-6"
      >
        <div className="bg-white rounded-3xl shadow-2xl shadow-black/10 p-7 md:p-8 text-center">
          <p className="text-[#1C2733] text-base md:text-lg mb-4 font-bold">
            Mega Pack Higiene y Seguridad Blindada + 5 bonos incluidos
          </p>

          <span className="inline-flex items-center gap-1.5 bg-[#F1E4C8] border border-[#E0CFA0] text-[#8A6A22] text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3">
            🔥 Precio especial de lanzamiento
          </span>
          <div className="font-heading text-6xl md:text-7xl font-bold text-[#D9643A] leading-none mb-3">
            USD 29
          </div>
          <p className="text-slate-600 text-[13px] mb-6">
            O su equivalente en tu moneda local al momento del pago.{" "}
            <span className="font-bold text-[#1C2733]">
              Pago único. Sin mensualidades.
            </span>
          </p>

          <motion.a
            href={getCheckoutUrl()}
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="flex items-center justify-center gap-1.5 sm:gap-2 w-full bg-[#D9643A] hover:bg-[#C1552E] text-white font-bold text-[13px] sm:text-base md:text-lg px-4 sm:px-6 py-6 rounded-full shadow-lg shadow-[#D9643A]/30 transition-colors mb-6"
          >
            <span className="flex items-center gap-2 text-center whitespace-nowrap">
              🚀 Sí, quiero acceder al Mega Pack ahora
            </span>
            <ArrowRight className="w-5 h-5 flex-shrink-0" />
          </motion.a>

          <div className="flex flex-wrap justify-center gap-2 text-base text-slate-700 font-semibold">
            <span>⚡ Acceso inmediato</span>
            <span className="text-slate-300">|</span>
            <span>💳 Pago único</span>
            <span className="text-slate-300">|</span>
            <span>🛡️ Garantía de 7 días</span>
            <span className="text-slate-300">|</span>
            <span>🔒 Pago seguro</span>
          </div>
        </div>
      </div>
    </section>
  );
}
