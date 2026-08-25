import React from 'react';
import { m } from 'framer-motion';
const changes = [
{
  emoji: '🧭',
  title: 'Más claridad en cada visita',
  desc: 'Sabrás qué revisar, qué registrar y cómo cerrar cada recorrido con mayor orden.'
},
{
  emoji: '⏱️',
  title: 'Menos tiempo redactando desde cero',
  desc: 'Modelos y estructuras listas para adaptar, reduciendo horas de trabajo repetitivo.'
},
{
  emoji: '📊',
  title: 'Más control sobre tus clientes',
  desc: 'Sabrás qué tiene cada cliente, qué falta y qué requiere seguimiento.'
},
{
  emoji: '📅',
  title: 'Seguimiento más ordenado',
  desc: 'Cada pendiente queda asociado a una acción, responsable y fecha.'
}];

export function ProcessesSection() {
  return (
    <section className="py-12 md:py-16 bg-[#F7F6F1]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#1C2733] mb-4">
            🔄 Lo que puede cambiar desde la primera semana
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
          {changes.map((c, i) => (
            <m.div
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
              className="bg-white border border-[#E4DED0] p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-sm"
            >
              <div className="flex flex-row items-center gap-2 md:gap-3 mb-1.5 md:mb-3">
                <div className="text-2xl md:text-4xl">{c.emoji}</div>
                <h3 className="text-base md:text-xl font-bold text-[#1C2733]">
                  {c.title}
                </h3>
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                {c.desc}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
