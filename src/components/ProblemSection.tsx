import React from 'react';
import { motion } from 'framer-motion';
const situations = [
{
  emoji: '🗂️',
  title: 'Documentos desordenados',
  desc: 'Formularios y planillas sueltos en distintas carpetas. Cada vez que necesitas uno, pierdes tiempo buscándolo.'
},
{
  emoji: '⏱️',
  title: 'Informes que toman demasiado tiempo',
  desc: 'Cada cliente o visita se convierte en horas de redacción y armado de documentos desde cero.'
},
{
  emoji: '📌',
  title: 'Pendientes que quedan en el aire',
  desc: 'Se detectan hallazgos, pero no siempre queda claro quién debe actuar, para cuándo y con qué evidencia se cierra.'
},
{
  emoji: '🎯',
  title: 'Presentación poco profesional',
  desc: 'Si tus entregables no se ven prolijos, el cliente no percibe todo el valor de tu trabajo.'
}];

export function ProblemSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F7F6F1] pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-[#1C2733] uppercase">
            ¿Tu trabajo técnico se vuelve más pesado por la documentación?
          </h2>
          <p className="text-xl md:text-2xl text-[#1C2733] font-medium leading-snug max-w-2xl mx-auto mb-8">
            Sabes identificar riesgos y redactar observaciones, pero cada
            visita se convierte en buscar formularios y empezar de cero.
          </p>

          <div className="flex items-center gap-4 max-w-xl mx-auto mb-8 bg-[#24405E] rounded-2xl px-6 py-5 shadow-sm text-left">
            <span className="text-3xl flex-shrink-0" aria-hidden="true">
              ⚡
            </span>
            <p className="font-bold text-white leading-snug">
              Ese no es un problema de conocimiento. Es un problema de
              sistema.
            </p>
          </div>

          <p className="text-sm font-semibold tracking-wide uppercase text-[#3B5875]">
            Si eres técnico, licenciado o consultor de HyS, SST o Seguridad
            Ocupacional, probablemente ya viviste esto
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {situations.map((item, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: i * 0.1
            }}
            className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-slate-200">

              <div className="flex flex-row items-center gap-2 md:gap-3 mb-1.5 md:mb-2">
                <div className="text-2xl md:text-3xl">{item.emoji}</div>
                <h3 className="text-base md:text-lg font-bold text-[#1C2733]">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
