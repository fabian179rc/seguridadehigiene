import React from 'react';
import { motion } from 'framer-motion';
import { scrollToOffer } from '../utils/scrollToOffer';
export function HeroSection() {
  return (
    <section className="relative md:pt-0 md:pb-24 overflow-hidden bg-white pt-0 pb-[30px]">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        
        <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] rounded-full bg-[#f5c842]/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-[1100px] text-center pt-0">
        <motion.div
          initial={{
            opacity: 0,
            y: 12
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5
          }}
          className="inline-flex items-center gap-2 px-6 py-2.5 mb-8 rounded-full border border-[#1a2e5a]/10 bg-[#f8f8f8] text-[#1a2e5a] font-bold tracking-[0.1em] uppercase text-[10px] md:text-[12px] mt-0">
          
          ✨ SISTEMA COMPLETO PARA PROFESIONALES DE HIGIENE Y SEGURIDAD
        </motion.div>

        <motion.h2
          initial={{
            opacity: 0,
            y: 16
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6,
            delay: 0.1
          }}
          className="font-heading md:text-5xl mb-6 max-w-3xl mx-auto text-[30px] font-extrabold leading-tight text-[#1a2e5a]">
          
          52 semanas de capacitaciones{' '}
          <span className="inline-block px-3 py-0.5 rounded-lg -rotate-1 text-[#FF6B35] bg-[#00000]">
            listas para implementar.
          </span>
        </motion.h2>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.6,
            delay: 0.2
          }}
          className="mb-10 max-w-3xl mx-auto">
          
          <img
            src="/mockup.webp"
            alt="La Agenda del Nivel Inicial"
            width={800}
            height={800}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-auto object-contain drop-shadow-2xl" />
          
        </motion.div>

        <motion.p
          initial={{
            opacity: 0,
            y: 16
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6,
            delay: 0.3
          }}
          className="md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto text-[16px] font-medium">
          
          Presentaciones, evaluaciones, registros, certificados y cronogramas listos para usar desde el primer día. Sin preparar desde cero. Sin improvisar.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 16
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6,
            delay: 0.4
          }}
          className="flex flex-col items-center">
          
          <motion.a
            href="#comprar"
            onClick={scrollToOffer}
            whileHover={{
              scale: 1.02
            }}
            whileTap={{
              scale: 0.98
            }}
            className="flex items-center justify-center gap-3 w-full sm:w-auto bg-[#f5c842] hover:bg-[#e5b832] text-[#1a2e5a] font-extrabold px-10 py-5 rounded-xl shadow-lg shadow-[#f5c842]/30 transition-colors mb-6 text-[18px] md:text-[20px]">
            
            🚀 ¡QUIERO MI MEGAPACK!
          </motion.a>

          <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-slate-600">
            <span>
              <span aria-hidden="true">⭐⭐⭐⭐⭐</span> 4.9/5 — Avalado por
              docentes de toda Argentina
            </span>
            <span
              aria-hidden="true"
              className="hidden sm:inline text-slate-300">
              
              |
            </span>
            <span>
              <span aria-hidden="true">🛡️</span> Acceso Inmediato y Garantía de
              7 Días
            </span>
          </div>
        </motion.div>
      </div>
    </section>);

}