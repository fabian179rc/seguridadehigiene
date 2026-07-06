import React from "react";
import { motion } from "framer-motion";
export function SolutionSection() {
  return (
    <section className="py-16 md:py-24 bg-[#2f3a2c] pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px] text-center">
        <div className="mb-12">
          <span className="inline-block px-6 py-2.5 mb-6 rounded-full border border-white/20 bg-white/10 text-[#e8c9a3] font-bold tracking-[0.1em] uppercase text-xs md:text-sm">
            LA SOLUCIÓN — UN SISTEMA TODO EN UNO
          </span>
          <h2 className="font-heading md:text-5xl font-semibold text-white mb-6 max-w-4xl mx-auto text-[28px] leading-tight">
            El único sistema que organiza todo el proceso de inspecciones HyS{" "}
            <span className="italic text-[#c8d6bd]">de principio a fin.</span>
          </h2>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-10 max-w-xs mx-auto"
        >
          <img
            src={`${import.meta.env.BASE_URL}mockup.webp`}
            alt="Sistema Maestro de Inspecciones HyS"
            width={600}
            height={600}
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl"
          />
        </motion.div>

        <p className="text-[#c8d6bd] font-medium text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Sin improvisación. Sin hallazgos sin cerrar. Sin empezar desde cero.
        </p>
      </div>
    </section>
  );
}
