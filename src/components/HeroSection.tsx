import React from "react";
import { motion } from "framer-motion";
import { scrollToOffer } from "../utils/scrollToOffer";
export function HeroSection() {
  return (
    <section className="relative md:pt-0 md:pb-24 overflow-hidden bg-[#f9f8f6] pt-0 pb-[30px]">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none"
      >
        <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] rounded-full bg-[#d4a017]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-[1100px] text-center pt-0">
        <motion.h1
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="font-heading md:text-5xl mb-[35px] md:mb-6 max-w-3xl mx-auto text-[26px] font-extrabold leading-[1.2] md:leading-tight text-[#2f3a2c]"
        >
          ¿Cuántas{" "}
          <span className="text-[#B85C43]">horas perdiste esta semana</span>{" "}
          armando documentos que ya deberían estar listos?
        </motion.h1>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mb-[18px] md:mb-10 max-w-[400px] md:max-w-2xl mx-auto"
        >
          <img
            src={`${import.meta.env.BASE_URL}megapack-mockup-mobile.webp`}
            alt="Mega Pack Higiene y Seguridad Blindada"
            width={800}
            height={800}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl md:hidden"
          />
          <img
            src={`${import.meta.env.BASE_URL}megapack-mockup.webp`}
            alt="Mega Pack Higiene y Seguridad Blindada"
            width={800}
            height={800}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="hidden md:block w-full h-auto object-contain drop-shadow-2xl rounded-2xl"
          />
        </motion.div>

        <motion.p
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="md:text-xl text-slate-600 my-[40px] md:my-10 max-w-2xl mx-auto text-[13.75px] leading-snug md:leading-normal font-medium"
        >
          El sistema digital que los profesionales de Higiene y Seguridad
          usan para organizar su gestión, entregar con profesionalismo y
          dejar de empezar desde cero — desde el primer día.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="flex flex-col items-center"
        >
          {/* <p className="text-slate-700 font-semibold mb-4 text-[15px] md:text-lg">
            Acceso inmediato por solo{" "}
            <span className="font-extrabold text-[#B85C43]">USD 29</span> —
            pago único, sin mensualidades.
          </p> */}

          <motion.a
            href="#comprar"
            onClick={scrollToOffer}
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="flex items-center justify-center gap-2 md:gap-3 w-full sm:w-auto bg-[#B85C43] hover:bg-[#A34F38] text-white font-extrabold px-6 py-[14px] md:px-10 md:py-5 rounded-full shadow-lg shadow-[#B85C43]/30 transition-colors mb-[28px] md:mb-6 text-[15px] md:text-[20px] whitespace-nowrap"
          >
            🚀 Sí, quiero el Mega Pack ahora
          </motion.a>

          <div className="flex flex-wrap justify-center gap-1.5 md:gap-4 text-[13.25px] md:text-sm font-semibold text-slate-600">
            <span>
              <span aria-hidden="true">⭐⭐⭐⭐⭐</span> 4.9/5 — Valoración de
              usuarios
            </span>
            <span
              aria-hidden="true"
              className="hidden sm:inline text-slate-300"
            >
              |
            </span>
            <span>
              <span aria-hidden="true">🛡️</span> Garantía de 7 Días — Riesgo
              Cero
            </span>
            <span
              aria-hidden="true"
              className="hidden sm:inline text-slate-300"
            >
              |
            </span>
            <span>
              <span aria-hidden="true">💻</span> Producto 100% Digital — Acceso
              Inmediato
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
