import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
const testimonials = [
{
  initial: 'M',
  color: 'bg-[#f9d6e3] text-[#1a2e5a]',
  name: 'M — Martín G.',
  location: 'Técnico en HyS — Buenos Aires',
  text: 'En 20 minutos tenía todo listo para capacitar. Nunca más improvisé.'
},
{
  initial: 'C',
  color: 'bg-[#f5c842]/20 text-[#1a2e5a]',
  name: 'C — Carolina R.',
  location: 'Licenciada en HyS — Córdoba',
  text: 'Material sólido para riesgos críticos. Los registros cumplen todos los requisitos de la ART.'
},
{
  initial: 'D',
  color: 'bg-[#1a2e5a]/10 text-[#1a2e5a]',
  name: 'D — Diego T.',
  location: 'Técnico en HyS — Rosario',
  text: 'Tengo control total del año. Sé qué vence y qué falta cada semana.'
},
{
  initial: 'P',
  color: 'bg-[#f9d6e3] text-[#1a2e5a]',
  name: 'P — Paula B.',
  location: 'Licenciada en HyS — Mendoza',
  text: 'Las dinámicas captan a operarios desganados. Ahora doy charlas con total confianza.'
}];

export function TestimonialsBottom() {
  return (
    <section className="py-16 md:py-24 bg-white pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-[#1a2e5a]">
            Lo que otros profesionales de HyS están diciendo
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
            className="bg-[#f8f8f8] rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 flex flex-col h-full">
            
              <div className="flex text-[#f5c842] mb-6">
                {[...Array(5)].map((_, i) =>
              <Star key={i} className="w-6 h-6 fill-current" />
              )}
              </div>

              <p className="text-slate-700 text-lg leading-relaxed mb-8 italic flex-grow font-medium">
                "{t.text}"
              </p>

              <div className="flex items-center border-t border-slate-200 pt-6 mt-auto">
                <div
                className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl ${t.color} mr-4 flex-shrink-0`}>
                
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-[#1a2e5a] text-lg">
                    {t.name}
                  </div>
                  <div className="text-sm font-medium text-slate-500">
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