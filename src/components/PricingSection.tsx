import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flame } from 'lucide-react';
export function PricingSection() {
  const [timeLeft, setTimeLeft] = useState({
    h: 1,
    m: 32,
    s: 7
  });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.s > 0)
        return {
          ...prev,
          s: prev.s - 1
        };
        if (prev.m > 0)
        return {
          ...prev,
          m: prev.m - 1,
          s: 59
        };
        if (prev.h > 0)
        return {
          ...prev,
          h: prev.h - 1,
          m: 59,
          s: 59
        };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const timeBlocks = [
  {
    value: timeLeft.h,
    label: 'Horas'
  },
  {
    value: timeLeft.m,
    label: 'Minutos'
  },
  {
    value: timeLeft.s,
    label: 'Segundos'
  }];

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-white pt-[30px] pb-[30px]">
      
      <div className="container mx-auto px-4 max-w-2xl text-center relative z-10">
        <span className="inline-block px-6 py-2.5 mb-6 rounded-full border border-[#1a2e5a]/10 bg-[#f8f8f8] text-[#1a2e5a] font-bold tracking-[0.1em] uppercase text-xs">
          OFERTA ESPECIAL — SISTEMA COMPLETO
        </span>

        <h2 className="font-heading text-2xl md:text-3xl font-medium text-slate-600 leading-tight mb-8">
          Accedé al sistema ahora y empezá el cambio hoy mismo
        </h2>

        <h3 className="text-3xl md:text-5xl font-extrabold text-[#1a2e5a] mb-12">
          Sistema Maestro de Capacitaciones HyS
        </h3>

        <div className="relative inline-block mb-8 w-full max-w-md mx-auto">
          <div className="bg-[#1a2e5a] rounded-3xl p-10 shadow-2xl border-4 border-[#f5c842]/30">
            <h4 className="text-3xl font-extrabold text-white mb-2">
              Sistema Maestro de
            </h4>
            <h4 className="text-4xl font-extrabold text-[#f5c842]">
              Capacitaciones HyS
            </h4>
          </div>
          <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-28 h-28 md:w-32 md:h-32 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#e11d48] rotate-12 rounded-full shadow-lg" />
            <div className="relative text-center text-white leading-none rotate-12">
              <div className="text-3xl md:text-4xl font-extrabold">73%</div>
              <div className="text-[10px] md:text-[11px] font-bold tracking-wide mt-1">
                OFF
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="comprar"
        className="container mx-auto px-4 max-w-md relative z-10 scroll-mt-6 pt-[20px] pb-[40px]">
        
        <div className="bg-[#f8f8f8] rounded-3xl shadow-xl border border-slate-200 p-8 md:p-10 text-center">
          <div className="text-slate-500 text-lg md:text-xl mb-4 font-medium">
            <span className="line-through">Precio Normal: ARS 75.490</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#1a2e5a] text-[#f5c842] font-bold px-6 py-3 rounded-full text-sm mb-6 shadow-md">
            <Flame className="w-5 h-5" /> 73% OFF — OFERTA DE LANZAMIENTO
          </div>

          <div className="font-heading text-6xl md:text-7xl font-extrabold text-[#1a2e5a] leading-none mb-4">
            ARS 19.990
          </div>
          <p className="text-slate-600 font-medium text-base mb-8">
            Pagás una sola vez. Acceso para siempre.
          </p>

          <div className="flex justify-center gap-4 mb-8">
            {timeBlocks.map((block) =>
            <div
              key={block.label}
              className="bg-[#1a2e5a] text-white rounded-2xl px-4 py-4 min-w-[90px] shadow-inner">
              
                <div className="font-heading text-4xl md:text-5xl font-bold leading-none">
                  {String(block.value).padStart(2, '0')}
                </div>
                <div className="text-[11px] font-bold tracking-[0.1em] uppercase mt-2 text-[#f5c842]">
                  {block.label}
                </div>
              </div>
            )}
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
            
            <span className="flex items-center gap-2 text-center">
              🚀 SÍ, QUIERO EL SISTEMA MAESTRO HOY
            </span>
          </motion.a>

          <div className="flex flex-col items-center gap-3 text-sm text-slate-600 font-semibold">
            <span>
              <span aria-hidden="true">⭐⭐⭐⭐⭐</span> 4.9/5 — Reseñas verificadas
            </span>
            <span>
              <span aria-hidden="true">🛡️</span> Garantía de 7 Días — Riesgo Cero
            </span>
          </div>
        </div>
      </div>
    </section>);

}