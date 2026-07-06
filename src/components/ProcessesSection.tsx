import React from 'react';
import { motion } from 'framer-motion';
const changes = [
{
  emoji: '📖',
  title: 'Legajo Técnico al Día',
  desc: 'Cada empresa tiene su documentación completa, sus registros firmados y sus vencimientos bajo control. Sin riesgo legal ni papeles perdidos.'
},
{
  emoji: '📈',
  title: 'Control Profesional Real',
  desc: 'Sabés exactamente qué tiene cada cliente, qué está pendiente y qué vence el mes que viene. Sin sorpresas de la SRT ni de la ART.'
},
{
  emoji: '🕊️',
  title: 'Tranquilidad Mental',
  desc: 'Se terminó la sensación de que "algo siempre falta". Tu gestión tiene sistema y vos podés enfocarte en lo que realmente importa: atender más empresas y crecer.'
},
{
  emoji: '❤️',
  title: 'Profesionalismo Visible',
  desc: 'Cada visita tiene su acta. Cada entrega de EPP tiene su planilla firmada. Cada desvío tiene su notificación. Así se construye una carrera sólida y sin exposición legal.'
}];

export function ProcessesSection() {
  return (
    <section className="py-12 md:py-16 bg-[#f9f8f6]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#2f3a2c] mb-4">
            Lo que va a cambiar
          </h2>
          <p className="text-lg text-slate-600">
            Lo que va a cambiar en tu gestión profesional desde la primera
            semana
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {changes.map((c, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: i * 0.1,
              }}
              className="bg-white border border-amber-100 p-8 rounded-3xl shadow-sm"
            >
              <div className="text-4xl mb-4">{c.emoji}</div>
              <h3 className="text-xl font-bold text-[#2f3a2c] mb-3">
                {c.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
