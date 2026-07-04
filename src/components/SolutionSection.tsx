import React from 'react';
import { motion } from 'framer-motion';
export function SolutionSection() {
  return (
    <section className="py-16 md:py-24 bg-[#1a2e5a] pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px] text-center">
        <div className="mb-12">
          <span className="inline-block px-6 py-2.5 mb-6 rounded-full border border-white/20 bg-white/10 text-[#f5c842] font-bold tracking-[0.1em] uppercase text-xs md:text-sm">
            LA SOLUCIÓN DEFINITIVA
          </span>
          <h2 className="font-heading md:text-5xl font-extrabold text-white mb-8 max-w-4xl mx-auto text-[28px] leading-tight">
            LA SOLUCIÓN QUE ESPERABAS — UN SISTEMA TODO EN UNO
          </h2>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="mb-12 bg-white rounded-3xl p-8 md:p-12 shadow-2xl max-w-3xl mx-auto border-4 border-[#f5c842]/20">
          
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#1a2e5a] mb-6">
            Sistema Maestro de Capacitaciones HyS
          </h3>

          <p className="text-slate-700 font-medium text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Un sistema completo de 150 páginas con las 52 semanas del año resueltas, más 5 volúmenes de herramientas operativas listas para usar desde el primer día. Sin software. Sin cursos largos. Sin improvisar.
          </p>
        </motion.div>
      </div>
    </section>);

}