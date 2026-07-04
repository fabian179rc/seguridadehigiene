import React from 'react';
import { motion } from 'framer-motion';
const benefits = [
{
  emoji: '�',
  title: 'Capacitaciones al Día, Todo el Año',
  desc: 'Cada semana tiene su material completo, su evaluación lista y su registro firmado. Sin preparación de último momento ni papeles perdidos.'
},
{
  emoji: '📈',
  title: 'Control Profesional Real',
  desc: 'Sabés exactamente qué capacitaste en cada empresa, qué está pendiente y qué vence el mes que viene. Sin sorpresas de la SRT ni de la ART.'
},
{
  emoji: '🕊️',
  title: 'Tranquilidad Mental',
  desc: 'Se terminó la sensación de que "algo siempre falta". Tu año de capacitaciones tiene sistema y vos podés enfocarte en lo que realmente importa: atender más empresas y crecer.'
},
{
  emoji: '❤️',
  title: 'Profesionalismo Visible',
  desc: 'Cada capacitación tiene su presentación. Cada asistente tiene su registro firmado. Cada tema tiene su evaluación. Así se construye una carrera sólida y sin exposición legal.'
}];

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#1a2e5a] pt-[60px] pb-[60px]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto">
            LO QUE VA A CAMBIAR
          </h2>
          <p className="text-xl md:text-2xl text-[#f9d6e3] font-medium max-w-2xl mx-auto">
            Lo que va a cambiar en tu gestión profesional desde la primera semana
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((b, i) =>
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
            className="bg-[#243b73] border border-white/10 p-8 md:p-10 rounded-3xl shadow-lg">
            
              <div className="text-5xl mb-6">{b.emoji}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{b.title}</h3>
              <p className="text-[#f9d6e3] leading-relaxed text-lg">{b.desc}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}