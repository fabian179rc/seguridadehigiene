import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getCheckoutUrl } from "../utils/checkoutUrl";
export function FinalPricingCTA() {
  return (
    <section className="py-14 md:py-20 bg-[#F7F6F1] text-[#1C2733] text-center relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-[#C99A3E]/10 blur-[100px]" />
      </div>
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <span className="inline-block px-6 py-2.5 mb-5 rounded-full bg-[#24405E] text-white font-semibold tracking-[0.18em] uppercase text-xs">
          Última Oportunidad
        </span>
        <h2 className="text-2xl md:text-5xl font-bold font-heading text-[#1C2733] mb-4 md:mb-6 leading-snug md:leading-tight max-w-md md:max-w-2xl mx-auto">
          Más orden, más claridad y mejor presentación
        </h2>
        <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-10 max-w-sm md:max-w-2xl mx-auto">
          Deja de armar cada informe desde cero: el Mega Pack te da el sistema
          para lograrlo.
        </p>

        <div className="bg-white border border-[#E4DED0] rounded-3xl p-8 shadow-lg shadow-black/5 max-w-xl mx-auto mb-8">
          <span className="inline-block bg-[#24405E] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            🎁 Kit Completo
          </span>
          <h3 className="font-bold text-[#1C2733] mb-4 text-lg md:text-xl">
            Mega Pack Higiene y Seguridad Blindada + 5 Bonos Incluidos
          </h3>
          <p className="text-slate-700 font-semibold text-base mb-1">
            Hoy puedes acceder al sistema completo por solo:
          </p>
          <div className="text-5xl md:text-6xl font-bold text-[#D9643A] mb-3">
            USD 19
          </div>
          <p className="text-slate-600 text-base mb-6">
            O su equivalente en tu moneda local. Incluye el producto principal
            más los 5 bonos.
          </p>
          <motion.a
            href={getCheckoutUrl()}
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="flex items-center justify-center gap-1.5 sm:gap-2 w-full bg-[#D9643A] hover:bg-[#C1552E] text-white font-bold text-[13px] sm:text-base md:text-lg px-4 sm:px-6 py-6 rounded-full shadow-lg shadow-[#D9643A]/30 transition-colors mb-2"
          >
            <span className="text-center whitespace-nowrap">
              🚀 Sí, quiero mi Mega Pack ahora
            </span>
            <ArrowRight className="w-5 h-5 flex-shrink-0" />
          </motion.a>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 text-base text-slate-700 font-semibold">
          <span>⚡ Acceso inmediato</span>
          <span aria-hidden="true" className="hidden sm:inline text-slate-300">
            |
          </span>
          <span>💳 Pago único</span>
          <span aria-hidden="true" className="hidden sm:inline text-slate-300">
            |
          </span>
          <span>🛡️ Garantía de 7 días</span>
          <span aria-hidden="true" className="hidden sm:inline text-slate-300">
            |
          </span>
          <span>Producto digital para profesionales de LATAM</span>
        </div>
      </div>
    </section>
  );
}
