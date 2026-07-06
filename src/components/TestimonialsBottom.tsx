import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle } from 'lucide-react';
const testimonials = [
{
  initial: 'M',
  color: 'bg-pink-100 text-pink-700',
  name: 'Martín G.',
  location: 'Técnico en HyS — Buenos Aires',
  text: 'Tenía los formularios de EPP de algunos clientes firmados y de otros no. Con el pack los imprimí todos, los llevé en mi próxima visita y por primera vez siento que tengo el legajo realmente completo. Una tranquilidad enorme.'
},
{
  initial: 'C',
  color: 'bg-blue-100 text-blue-700',
  name: 'Carolina R.',
  location: 'Licenciada en HyS — Córdoba',
  text: 'El modelo de Programa de Seguridad me cambió la vida. Antes me llevaba medio día armar uno desde cero. Ahora lo tengo listo en una hora y con todo lo que la ART necesita ver.'
},
{
  initial: 'D',
  color: 'bg-emerald-100 text-emerald-700',
  name: 'Diego T.',
  location: 'Técnico en HyS — Rosario',
  text: 'El Bloque de Blindaje Legal solo ya valió todo. Por fin entendí qué firmar, qué no firmar nunca y cómo protegerme cuando el empleador no quiere corregir los desvíos.'
},
{
  initial: 'P',
  color: 'bg-amber-100 text-amber-700',
  name: 'Paula B.',
  location: 'Licenciada en HyS — Mendoza',
  text: 'Los checklists de auditoría me salvaron en una inspección sorpresa. Tenía todo documentado y ordenado. El inspector se fue sin ninguna observación grave. Nunca me había sentido tan seguro.'
}];

export function TestimonialsBottom() {
  return (
    <section className="py-12 md:py-16 bg-[#f9f8f6]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <MessageCircle className="w-10 h-10 text-[#d4a017] mx-auto mb-4" />
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#2f3a2c]">
            Lo que otros profesionales de HyS están diciendo
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) =>
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
            className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 flex flex-col h-full">

              <div className="flex text-[#d4a017] mb-4">
                {[...Array(5)].map((_, i) =>
              <Star key={i} className="w-4 h-4 fill-current" />
              )}
              </div>

              <p className="text-slate-700 text-lg leading-relaxed mb-6 italic flex-grow">
                "{t.text}"
              </p>

              <div className="flex items-center border-t border-slate-100 pt-4 mt-auto">
                <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${t.color} mr-3 flex-shrink-0`}>

                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-[#2f3a2c] text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
