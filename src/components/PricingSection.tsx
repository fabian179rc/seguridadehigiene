import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
export function PricingSection() {
  const [timeLeft, setTimeLeft] = useState({
    h: 1,
    m: 32,
    s: 7,
  });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.s > 0)
          return {
            ...prev,
            s: prev.s - 1,
          };
        if (prev.m > 0)
          return {
            ...prev,
            m: prev.m - 1,
            s: 59,
          };
        if (prev.h > 0)
          return {
            ...prev,
            h: prev.h - 1,
            m: 59,
            s: 59,
          };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const timeBlocks = [
    {
      value: timeLeft.h,
      label: "Horas",
    },
    {
      value: timeLeft.m,
      label: "Minutos",
    },
    {
      value: timeLeft.s,
      label: "Segundos",
    },
  ];

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#4a553f] pt-[30px] pb-[30px]"
    >
      <div className="container mx-auto px-4 max-w-2xl text-center relative z-10">
        <span className="inline-block px-6 py-2.5 mb-8 rounded-full border border-white/20 bg-white/10 text-white font-bold tracking-[0.1em] uppercase text-xs">
          🔥 Oferta de Lanzamiento
        </span>

        <div className="relative inline-block mb-8 w-full max-w-[220px] mx-auto">
          <img
            src={`${import.meta.env.BASE_URL}mockup.webp`}
            alt="Sistema Maestro de Inspecciones HyS"
            width={400}
            height={400}
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl"
          />

          <div className="absolute -top-6 -right-6 md:-top-8 md:-right-8 w-24 h-24 md:w-28 md:h-28">
            <div className="absolute inset-0 bg-[#c0392b] rotate-[15deg] rounded-2xl shadow-lg" />
            <div className="absolute inset-0 bg-[#c0392b] rotate-[-15deg] rounded-2xl shadow-lg" />
            <div className="relative w-full h-full flex flex-col items-center justify-center text-white leading-none text-center">
              <div className="text-2xl md:text-3xl font-extrabold">73%</div>
              <div className="text-[8px] md:text-[9px] font-bold tracking-wide mt-1 px-2">
                DE DESCUENTO
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="comprar"
        className="container mx-auto px-4 max-w-md relative z-10 scroll-mt-6 pt-[20px] pb-[40px]"
      >
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 text-center">
          <div className="text-[#8a8f7f] text-lg md:text-xl mb-4 font-medium">
            <span className="line-through">Precio Normal: $74.940 ARS</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#4a553f] text-white font-bold px-6 py-3 rounded-full text-sm mb-6 shadow-md">
            <Flame className="w-5 h-5 text-[#e8c9a3]" /> 73% OFF — OFERTA DE
            LANZAMIENTO
          </div>

          <div className="font-heading text-6xl md:text-7xl font-bold text-[#b85c43] leading-none mb-4">
            $19.990 ARS
          </div>
          <p className="text-[#4b5347] font-medium text-base mb-2">
            Pagás una sola vez. Acceso para siempre.
          </p>
          <p className="text-[#b85c43] font-semibold text-sm mb-8">
            ⏳ El precio sube al terminar el lanzamiento.
          </p>

          <div className="flex justify-center gap-4 mb-8">
            {timeBlocks.map((block) => (
              <div
                key={block.label}
                className="bg-[#2f3a2c] text-white rounded-2xl px-4 py-4 min-w-[90px] shadow-inner"
              >
                <div className="font-heading text-4xl md:text-5xl font-bold leading-none">
                  {String(block.value).padStart(2, "0")}
                </div>
                <div className="text-[11px] font-bold tracking-[0.1em] uppercase mt-2 text-[#e8c9a3]">
                  {block.label}
                </div>
              </div>
            ))}
          </div>

          <motion.a
            href="https://sistema-maestro-de-inspecciones-hys.impultienda.ar/checkout"
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="flex items-center justify-center gap-3 w-full bg-[#b85c43] hover:bg-[#a34f38] text-white font-extrabold text-lg md:text-xl px-8 py-6 rounded-full shadow-lg shadow-[#b85c43]/30 transition-colors mb-6"
          >
            <span className="flex items-center gap-2 text-center">
              🚀 SÍ, QUIERO EL SISTEMA MAESTRO HOY
            </span>
          </motion.a>

          <div className="flex flex-col items-center gap-3 text-sm text-[#4b5347] font-semibold">
            <span>
              <span aria-hidden="true">⭐⭐⭐⭐⭐</span> 4.9/5 — Reseñas
              verificadas
            </span>
            <span>
              <span aria-hidden="true">🛡️</span> Garantía de 7 Días — Riesgo
              Cero
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
