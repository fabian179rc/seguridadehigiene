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
          <h2 className="font-heading md:text-5xl font-bold text-[#2f3a2c] mb-3 max-w-3xl mx-auto text-[28px] leading-tight">
            <span className="text-[#5C6851] italic">
              Mega Pack Higiene y Seguridad Blindada
            </span>
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Un sistema completo, listo para usar desde el primer día.
          </p>
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
            src={`${import.meta.env.BASE_URL}megapack-mockup-mobile.webp`}
            alt="Mega Pack Higiene y Seguridad Blindada"
            width={672}
            height={672}
            loading="lazy"
            decoding="async"
            className="md:hidden w-full h-auto max-w-2xl mx-auto rounded-2xl shadow-xl border border-slate-100"
          />
          <img
            src={`${import.meta.env.BASE_URL}megapack-mockup.webp`}
            alt="Mega Pack Higiene y Seguridad Blindada"
            width={672}
            height={672}
            loading="lazy"
            decoding="async"
            className="hidden md:block w-full h-auto max-w-2xl mx-auto rounded-2xl shadow-xl border border-slate-100"
          />
        </motion.div>

        <div className="bg-white/60 border border-amber-100 text-[#2f3a2c] rounded-3xl p-8 md:p-10 shadow-sm">
          <p className="md:text-xl font-medium text-slate-700 text-[16px]">
            No es solo una carpeta con archivos. Es una estructura de
            trabajo que cubre cada etapa de tu gestión: desde que llegas a
            un cliente nuevo hasta que cierras el seguimiento de cada
            hallazgo.
          </p>
        </div>
      </div>
    </section>
  );
}
