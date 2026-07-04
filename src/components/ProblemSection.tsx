import React from 'react';
import { motion } from 'framer-motion';
const situations = [
{
  emoji: '�',
  title: 'El Domingo a la Noche que No Para',
  desc: 'Mañana tenés capacitación y todavía no terminaste las diapositivas. Otra vez buscando plantillas en Google a las 11 de la noche.'
},
{
  emoji: '😩',
  title: 'El Miedo a que te Agarren sin Material',
  desc: 'Sabés que algunas capacitaciones no están bien documentadas y que si llega una auditoría, los registros no van a alcanzar.'
},
{
  emoji: '⚖️',
  title: 'La Responsabilidad Legal que Pesa',
  desc: 'No siempre tenés claro qué documentos respaldan cada capacitación y cuáles pueden dejarte expuesto ante la ART o el Ministerio.'
},
{
  emoji: '⏱️',
  title: 'El Tiempo que se va en Preparar desde Cero',
  desc: 'Cada nuevo cliente, cada nueva industria, cada nuevo tema significa volver a crear presentaciones, evaluaciones y registros desde cero.'
}];

export function ProblemSection() {
  return (
    <section className="py-16 md:py-24 bg-white pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4 text-[#1a2e5a]">
            ¿TE RECONOCÉS EN ESTO?
          </h2>
          <p className="text-xl md:text-2xl font-bold text-[#1a2e5a]/80 mb-6">
            ¿Preparar capacitaciones te quita más tiempo del que debería?
          </p>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Si sos Técnico o Licenciado en Higiene y Seguridad, probablemente vivís alguna de estas situaciones.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
            className="bg-[#f8f8f8] p-8 rounded-2xl shadow-sm border border-slate-100">
            
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="text-xl font-bold text-[#1a2e5a] mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-[16px]">
                {item.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}