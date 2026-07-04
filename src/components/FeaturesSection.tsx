import React from 'react';
import { motion } from 'framer-motion';
const features = [
{
  icon: '📖',
  title: 'Capacitaciones Profesionales Sin Preparación Extra',
  desc: 'Presentaciones completas, evaluaciones y registros listos para cada tema. Llegás a la empresa y arrancás.'
},
{
  icon: '⚖️',
  title: 'Cumplimiento Legal Real',
  desc: 'Documentación completa y organizada para trabajar con total respaldo ante inspecciones, auditorías y la ART.'
},
{
  icon: '🗓️',
  title: 'Control Total del Año',
  desc: 'Las 52 semanas planificadas, cada capacitación registrada, cada certificado generado. Sin baches ni sorpresas.'
},
{
  icon: '🕊️',
  title: 'Tranquilidad Profesional',
  desc: 'Dejá de crear material desde cero y dedicá ese tiempo a conseguir y atender más clientes.'
}];

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-white pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-[#1a2e5a]">
            ¿QUÉ VAS A LOGRAR CON ESTE SISTEMA?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
            className="flex items-start gap-4 bg-[#f8f8f8] p-8 rounded-2xl border border-slate-100">
            
              <div className="text-4xl flex-shrink-0 mt-1">{feature.icon}</div>
              <div>
                <h3 className="font-bold text-[#1a2e5a] mb-2 text-xl">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}