import React, { lazy } from 'react';
import { motion } from 'framer-motion';
const bonuses = [
{
  num: 1,
  title: 'Registro Maestro de Evidencia Legal',
  desc: 'Formularios de asistencia con validez legal, certificados, actas de entrega. El blindaje administrativo completo.',
  image: "/b1.webp"

},
{
  num: 2,
  title: 'Banco de Evaluación y Control de Aprendizaje',
  desc: 'Cuestionarios para los 52 temas, grilla de respuestas, planillas de seguimiento. Demostrá el impacto real.',
  image: "/b2.webp"

},
{
  num: 3,
  title: 'Guía de Dinámicas y Talleres In-Situ',
  desc: '25 dinámicas grupales y ejercicios prácticos. Rompehielos técnicos, actividades de percepción de riesgos.',
  image: "/b3.webp"

},
{
  num: 4,
  title: 'Cronogramas de Gestión y Tableros de Control',
  desc: 'Plantillas mes a mes, matrices de seguimiento, tableros de KPIs. El cerebro organizacional de tu consultoría.',
  image: "/b4.webp"

},
{
  num: 5,
  title: 'Kit de Material Didáctico Visual y Señalética',
  desc: 'Infografías técnicas, folletos de bolsillo, carteles, ayuda-memorias. El toque profesional desde el día 1.',
  image: "/b5.webp"

}];

export function BonusesSection() {
  return (
    <section className="py-16 md:py-24 bg-white pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="text-center mb-12">
          <h2 className="font-heading font-extrabold text-[#1a2e5a] text-3xl md:text-5xl leading-tight mb-4">
            5 BONOS INCLUIDOS
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 font-bold">
            Y además, recibís 5 bonos de lujo
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {bonuses.map((b, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 16
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
            className="bg-[#f8f8f8] border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-center">
            
              <div className="flex-shrink-0 w-full md:w-44">
                <img
                src={b.image}
                alt={`Bono ${b.num}: ${b.title}`}
                width={400}
                height={400}
                loading="lazy"
                decoding="async"
                className="w-full h-48 md:h-44 object-cover rounded-2xl shadow-md" />
              
              </div>
              <div className="flex-grow text-center md:text-left">
                <span className="inline-flex items-center gap-1.5 bg-[#f9d6e3] text-[#1a2e5a] font-bold text-sm tracking-wide uppercase px-4 py-2 rounded-xl shadow-sm mb-3">
                  Bono {b.num} · Gratis
                </span>
                <h3 className="font-heading font-bold text-[#1a2e5a] text-xl md:text-2xl mb-2 flex items-center gap-2 justify-center md:justify-start">
                  <span className="text-2xl">🎁</span> {b.title}
                </h3>
                <p className="text-slate-600 text-[16px] leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}