import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getCheckoutUrl } from "../utils/checkoutUrl";
export function FinalPricingCTA() {
  return (
    <section className="py-14 md:py-20 bg-[#f9f8f6] text-[#2f3a2c] text-center relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-[#d4a017]/10 blur-[100px]" />
      </div>
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <span className="inline-block px-6 py-2.5 mb-5 rounded-full bg-[#4A553F] text-white font-semibold tracking-[0.18em] uppercase text-xs">
          Última Oportunidad
        </span>
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-[#2f3a2c] mb-6 leading-tight">
          Tu carrera merece funcionar con orden, respaldo y tranquilidad
          real.
        </h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          No dejes que el caos documental te siga pesando ni que una
          inspección te agarre desprotegido. Empezá hoy con un sistema que
          ya funciona y que podés implementar en menos de una semana.
        </p>

        <div className="bg-white border border-amber-100 rounded-3xl p-8 shadow-lg shadow-black/5 max-w-xl mx-auto mb-8">
          <h3 className="font-bold text-[#2f3a2c] mb-2 text-[12px]">
            Kit Completo: Mega Pack Higiene y Seguridad Blindada + 5 Bonos
            GRATIS
          </h3>
          <div className="text-slate-400 line-through mb-2">$74.940 ARS</div>
          <div className="text-4xl font-bold text-[#B85C43] mb-6">
            $19.990 ARS
          </div>
          <motion.a
            href={getCheckoutUrl()}
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="flex items-center justify-center gap-2 w-full bg-[#B85C43] hover:bg-[#A34F38] text-white font-bold text-[13px] px-3 py-6 rounded-full shadow-lg shadow-[#B85C43]/30 transition-colors mb-2"
          >
            <span className="text-center whitespace-nowrap">
              🚀 SÍ, QUIERO MI MEGA PACK HOY
            </span>
            <ArrowRight className="w-5 h-5 flex-shrink-0" />
          </motion.a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-sm text-slate-500 font-medium">
          <span>
            <span aria-hidden="true">⭐⭐⭐⭐⭐</span> 4.9/5 — Reseñas
            verificadas
          </span>
          <span aria-hidden="true" className="hidden sm:inline text-slate-300">
            |
          </span>
          <span>
            <span aria-hidden="true">🛡️</span> Garantía de 7 Días — Riesgo Cero
          </span>
        </div>
      </div>
    </section>
  );
}
