import React from 'react';
import { motion } from 'framer-motion';
const situations = [
{
  emoji: '😰',
  title: 'Empezás cada inspección desde cero',
  desc: 'Checklists, planillas e informes que hay que preparar de nuevo cada vez.'
},
{
  emoji: '😩',
  title: 'Hallazgos que quedan abiertos',
  desc: 'Lo que no registraste hoy y no tiene seguimiento puede ser un accidente mañana.'
},
{
  emoji: '⏱️',
  title: 'Horas perdidas en informes',
  desc: 'La recorrida dura 1 hora. El informe te lleva toda la tarde.'
},
{
  emoji: '📂',
  title: 'Documentación desordenada',
  desc: 'Cuando llega una auditoría externa, los papeles están dispersos y nada tiene trazabilidad.'
},
{
  emoji: '📉',
  title: 'Sin indicadores que demuestren tu gestión',
  desc: 'Hacés trabajo real pero no podés mostrarlo con datos ni dashboards.'
}];

export function ProblemSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f9f8f6] pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-semibold mb-4 text-[#2f3a2c] uppercase">
            ¿Te reconocés en esto?
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
            className="bg-white p-8 rounded-2xl shadow-sm border border-[#e6ddc7]">

              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="text-xl font-bold text-[#2f3a2c] mb-3">
                {item.title}
              </h3>
              <p className="text-[#4b5347] leading-relaxed text-[16px]">
                {item.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
