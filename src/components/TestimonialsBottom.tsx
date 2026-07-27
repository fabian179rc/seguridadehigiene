import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle } from 'lucide-react';
const testimonials = [
{
  initial: 'C',
  color: 'bg-pink-100 text-pink-700',
  name: 'Carlos M.',
  location: 'Profesional de Higiene y Seguridad',
  text: 'Antes tenía documentos sueltos para cada cliente. Con el sistema pude ordenar mis visitas, preparar mejor los informes y dejar pendientes mucho más claros.'
},
{
  initial: 'L',
  color: 'bg-blue-100 text-blue-700',
  name: 'Laura P.',
  location: 'Consultora SST',
  text: 'Lo que más me sirvió fue la estructura para cerrar visitas. Ahora cada hallazgo queda con responsable, fecha y evidencia requerida.'
},
{
  initial: 'A',
  color: 'bg-emerald-100 text-emerald-700',
  name: 'Andrés R.',
  location: 'Técnico en Seguridad Ocupacional',
  text: 'Me ayudó a mejorar la forma en que presento mi servicio. El cliente entiende mejor lo que hago y percibe más valor en cada entrega.'
}];

export function TestimonialsBottom() {
  return (
    <section className="py-12 md:py-16 bg-[#f9f8f6]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <MessageCircle className="w-10 h-10 text-[#d4a017] mx-auto mb-4" />
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#2f3a2c]">
            Lo que dicen otros profesionales de HyS
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
