import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle } from 'lucide-react';
const testimonials = [
{
  initial: 'L',
  color: 'bg-[#f6d9c4] text-[#2f3a2c]',
  name: 'Lucas M.',
  location: 'Técnico en HyS · Buenos Aires',
  text: 'Antes armaba el programa de inspecciones en hojas sueltas. Ahora tengo el año planificado, con matrices, cronogramas y seguimiento. No puedo creer que antes funcionaba sin esto.'
},
{
  initial: 'S',
  color: 'bg-[#cdd9c2] text-[#2f3a2c]',
  name: 'Sofía R.',
  location: 'Licenciada en HyS · Córdoba',
  text: 'Los checklists por sector solos ya justificaron toda la compra. Entro a cualquier empresa y ya sé exactamente qué recorrer y qué registrar.'
},
{
  initial: 'F',
  color: 'bg-[#e6ddc7] text-[#2f3a2c]',
  name: 'Federico T.',
  location: 'Técnico en HyS · Rosario',
  text: 'Antes el informe me llevaba horas y quedaba irregular. Ahora sigo la estructura del sistema y el informe sale en 30 minutos con evidencia y acciones incluidas.'
},
{
  initial: 'V',
  color: 'bg-[#f6d9c4] text-[#2f3a2c]',
  name: 'Valeria B.',
  location: 'Responsable HyS · Mendoza',
  text: 'Cuando vino la auditoría externa, tenía todo: cronograma, registros, acciones correctivas cerradas, indicadores. Nunca había estado tan preparado.'
}];

export function TestimonialsBottom() {
  return (
    <section className="py-16 md:py-24 bg-[#f9f8f6] pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="text-center mb-16">
          <MessageCircle className="w-10 h-10 text-[#d4a017] mx-auto mb-4" />
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-[#2f3a2c]">
            Lo que dicen otros profesionales de HyS
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
            className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-[#e6ddc7] flex flex-col h-full">

              <div className="flex text-[#d4a017] mb-6">
                {[...Array(5)].map((_, i) =>
              <Star key={i} className="w-6 h-6 fill-current" />
              )}
              </div>

              <p className="text-[#2f3a2c] text-lg leading-relaxed mb-8 italic flex-grow font-medium">
                "{t.text}"
              </p>

              <div className="flex items-center border-t border-[#e6ddc7] pt-6 mt-auto">
                <div
                className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl ${t.color} mr-4 flex-shrink-0`}>

                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-[#2f3a2c] text-lg">
                    {t.name}
                  </div>
                  <div className="text-sm font-medium text-[#8a8f7f]">
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
