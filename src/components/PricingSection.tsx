import React, { useEffect, useState } from "react";
import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getCheckoutUrl } from "../utils/checkoutUrl";
import { getPricingForCountry } from "../utils/pricingByCountry";
export function PricingSection() {
  const [pricing] = useState(() => getPricingForCountry());
  const [timeLeft, setTimeLeft] = useState({
    h: 1,
    m: 30,
    s: 0,
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
      className="relative overflow-hidden bg-gradient-to-b from-[#2E4A68] via-[#24405E] to-[#152C42] pt-20 pb-0"
    >
      <div className="container mx-auto px-4 max-w-2xl text-center relative z-10">
        <span className="inline-block px-6 py-2.5 mb-6 rounded-full border border-white/30 bg-white/10 text-white/90 font-semibold tracking-[0.18em] uppercase text-xs">
          Oferta Especial — Pack Completo
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight mb-10">
          Accede hoy al{" "}
          <em className="italic font-bold text-[#f0e6d2]">
            Mega Pack completo
          </em>
        </h2>

        <div className="relative inline-block mb-2 w-full max-w-md mx-auto">
          <img
            src={`${import.meta.env.BASE_URL}megapack-mockup-mobile.webp`}
            alt="Mega Pack Higiene y Seguridad Blindada"
            width={672}
            height={672}
            loading="lazy"
            decoding="async"
            className="md:hidden w-full h-auto object-contain drop-shadow-2xl"
          />
          <img
            src={`${import.meta.env.BASE_URL}megapack-mockup.webp`}
            alt="Mega Pack Higiene y Seguridad Blindada"
            width={672}
            height={672}
            loading="lazy"
            decoding="async"
            className="hidden md:block w-full h-auto object-contain drop-shadow-2xl"
          />

          <div
            aria-hidden="true"
            className="absolute top-1 right-1 md:top-4 md:-right-2 rotate-[12deg] z-20 flex flex-col items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[#F5DFA0] via-[#D9A94E] to-[#8A6A22] shadow-lg shadow-black/30 border-2 border-[#FCEFC7]"
          >
            <span className="font-heading text-2xl md:text-4xl font-bold leading-none text-[#1C2733]">
              -80%
            </span>
            <span className="text-[7px] md:text-[9px] font-bold uppercase tracking-wider text-[#1C2733] mt-1 text-center leading-tight">
              Descuento
            </span>
          </div>
        </div>
      </div>

      <div
        id="comprar"
        className="container mx-auto px-4 max-w-md relative z-10 pb-16 -mt-4 scroll-mt-6"
      >
        <div className="bg-white rounded-3xl shadow-2xl shadow-black/10 p-7 md:p-8 text-center">
          {/* <p className="text-[#1C2733] text-base md:text-lg mb-4 font-bold">
            Mega Pack Higiene y Seguridad Blindada + 5 bonos incluidos
          </p> */}

          <p className="text-slate-400 text-sm mb-2">
            Precio Normal: <span className="line-through">{pricing.originalPrice}</span>
          </p>

          <span className="inline-flex items-center gap-1.5 bg-[#F1E4C8] border border-[#E0CFA0] text-[#8A6A22] text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3">
            🔥 Precio especial de lanzamiento
          </span>
          <div className="font-heading text-5xl md:text-6xl font-bold text-[#D9643A] leading-none mb-4">
            {pricing.offerPrice}
          </div>
          <p className="text-[#D9643A] font-semibold text-[13px] mb-4">
            🔥 ¡Última oportunidad! El precio sube al finalizar el contador.
          </p>

          <div className="flex justify-center gap-2 mb-6">
            {timeBlocks.map((block) => (
              <div
                key={block.label}
                className="bg-[#1C2733] text-white rounded-xl px-3 py-2 min-w-[54px]"
              >
                <div className="font-heading text-xl md:text-2xl font-bold leading-none">
                  {String(block.value).padStart(2, "0")}
                </div>
                <div className="text-[8px] tracking-[0.1em] uppercase mt-1 text-white/70">
                  {block.label}
                </div>
              </div>
            ))}
          </div>

          <m.a
            href={getCheckoutUrl()}
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="flex items-center justify-center gap-1.5 sm:gap-2 w-full bg-[#D9643A] hover:bg-[#C1552E] text-white font-bold text-[13px] sm:text-base md:text-lg px-4 sm:px-6 py-4 md:py-5 rounded-full shadow-lg shadow-[#D9643A]/30 transition-colors mb-6"
          >
            <span className="flex items-center gap-2 text-center leading-snug">
              🚀 Sí, quiero acceder al Mega Pack ahora
            </span>
            <ArrowRight className="w-5 h-5 flex-shrink-0" />
          </m.a>

          <div className="flex flex-wrap justify-center gap-2 text-base text-slate-700 font-semibold">
            <span>⚡ Acceso inmediato</span>
            <span className="text-slate-300">|</span>
            <span>💳 Pago único</span>
            <span className="text-slate-300">|</span>
            <span>🛡️ Garantía de 7 días</span>
            <span className="text-slate-300">|</span>
            <span>🔒 Pago seguro</span>
          </div>
        </div>
      </div>
    </section>
  );
}
