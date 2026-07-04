import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export function FinalPricingCTA() {
  return (
    <section className="py-16 md:py-24 bg-[#1a2e5a] text-white text-center relative overflow-hidden pt-[30px] pb-[30px]">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-[#f5c842]/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 max-w-[1100px] relative z-10">
        <p className="text-xl md:text-2xl font-bold text-white mb-4">
          Tu carrera merece funcionar con orden, respaldo y tranquilidad real.
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-[#f9d6e3] mb-12 leading-tight max-w-3xl mx-auto">
          No dejes que la preparación de capacitaciones te siga robando domingos ni que una auditoría te agarre sin los registros completos. Empezá hoy con un sistema que ya funciona.
        </h2>

        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl max-w-xl mx-auto mb-8 border-4 border-[#f5c842]/20">
          <h3 className="font-bold text-[#1a2e5a] mb-4 text-[16px] md:text-[18px]">
            Kit Completo: Sistema Maestro de Capacitaciones HyS + 5 Bonos Gratis
          </h3>
          <div className="text-slate-400 font-medium line-through mb-2 text-lg">
            ARS 75.490
          </div>
          <div className="text-5xl md:text-6xl font-extrabold text-[#f5c842] mb-8">
            ARS 19.990
          </div>

          <motion.a
            href="https://nivel-inicial.impultienda.ar/checkout"
            whileHover={{
              scale: 1.02
            }}
            whileTap={{
              scale: 0.98
            }}
            className="flex items-center justify-center gap-3 w-full bg-[#f5c842] hover:bg-[#e5b832] text-[#1a2e5a] font-extrabold text-lg md:text-xl px-8 py-6 rounded-xl shadow-lg shadow-[#f5c842]/30 transition-colors mb-6">
            
            <span className="text-center">
              🚀 SÍ, QUIERO MI SISTEMA MAESTRO HOY
            </span>
            <ArrowRight className="w-6 h-6 flex-shrink-0" />
          </motion.a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 text-sm md:text-base text-white/80 font-semibold">
          <span>
            <span aria-hidden="true">⭐⭐⭐⭐⭐</span> 4.9/5 — Reseñas verificadas
          </span>
          <span aria-hidden="true" className="hidden sm:inline text-white/30">
            |
          </span>
          <span>
            <span aria-hidden="true">🛡️</span> Garantía de 7 Días — Riesgo Cero
          </span>
        </div>
      </div>
    </section>);

}