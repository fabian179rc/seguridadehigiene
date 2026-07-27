import React from 'react';
import { motion } from 'framer-motion';
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
    <section className="py-12 md:py-16 bg-[#f9f8f6]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#2f3a2c] mb-4">
            🔄 Lo que puede cambiar desde la primera semana
          </h2>
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
