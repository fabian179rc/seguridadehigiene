import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
const features = [
{
  title: 'Inspecciones planificadas, ordenadas y repetibles'
},
{
  title: 'Checklists profesionales por sector listos para usar'
},
{
  title: 'Informes técnicos con respaldo y evidencia'
},
{
  title: 'Acciones correctivas asignadas, seguidas y cerradas'
},
{
  title: 'Indicadores y dashboards para demostrar tu gestión'
},
{
  title: 'Documentación completa y defendible ante cualquier auditoría'
}];

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f9f8f6] pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#4a553f] text-white font-bold tracking-[0.1em] uppercase text-xs md:text-sm">
            ✅ Lo que vas a lograr
          </span>
        </div>

        <div className="flex flex-col gap-5 max-w-xl mx-auto">
          {features.map((feature, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 8
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: i * 0.08
            }}
            className="flex items-center gap-4">

              <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-[#b85c43]" />
              <h3 className="font-bold text-[#2f3a2c] text-lg md:text-xl">
                {feature.title}
              </h3>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
