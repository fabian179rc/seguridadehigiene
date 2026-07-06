import React from "react";
import { motion } from "framer-motion";
export function SolutionSection() {
  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="mb-10">
          <span className="inline-block px-6 py-2.5 mb-5 rounded-full border border-white/40 bg-[#4A553F] text-white font-semibold tracking-[0.18em] uppercase text-xs">
            LA SOLUCIÓN QUE ESPERABAS — UN SISTEMA TODO EN UNO
          </span>
          <h2 className="font-heading md:text-5xl font-bold text-[#2f3a2c] mb-6 max-w-3xl mx-auto text-[28px] leading-tight">
            El único sistema que tu gestión de HyS necesita para funcionar
            con{" "}
            <span className="text-[#5C6851] italic">
              orden, respaldo y control real
            </span>
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
          className="mb-10"
        >
          <img
            src={`${import.meta.env.BASE_URL}megapack-mockup.webp`}
            alt="Mega Pack Higiene y Seguridad Blindada"
            width={672}
            height={672}
            loading="lazy"
            decoding="async"
            className="w-full h-auto max-w-2xl mx-auto rounded-2xl shadow-xl border border-slate-100"
          />
        </motion.div>

        <div className="bg-white/60 border border-amber-100 text-[#2f3a2c] rounded-3xl p-8 md:p-10 shadow-sm">
          <p className="md:text-xl font-medium text-slate-700 text-[16px]">
            <span className="text-[#5C6851] font-bold italic">
              MEGA PACK HIGIENE Y SEGURIDAD
            </span>{" "}
            No es un simple pack de documentos. Es un sistema completo para
            organizar tu trabajo con herramientas listas para usar desde el
            primer día. Sin software. Sin cursos largos. Sin complicaciones.
          </p>
        </div>
      </div>
    </section>
  );
}
