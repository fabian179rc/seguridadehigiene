import React from 'react';
import { motion } from 'framer-motion';
const bonuses = [
{
  num: 1,
  title: 'Guía de Dinámicas y Actividades para Capacitaciones de Alto Impacto',
  desc: 'Rompehielos HyS, simulaciones, análisis de incidentes y cierres con compromisos medibles. Convertí tus capacitaciones en acciones reales de tu equipo.',
  image: "b1.webp"

},
{
  num: 2,
  title: 'Biblioteca Visual HyS Lista para Imprimir',
  desc: 'Infografías de riesgos, carteles de advertencia, fichas visuales para charlas cortas y tarjetas de puesto. Imprimí, adaptá y usá sin diseñar nada desde cero.',
  image: "b2.webp"

},
{
  num: 3,
  title: 'Sistema Anual de Planificación y Control de Capacitaciones',
  desc: 'Cronograma editable, matrices tema-riesgo-puesto, control de asistencia, vencimientos, alertas e indicadores para demostrar cumplimiento real.',
  image: "b3.webp"

},
{
  num: 4,
  title: 'Banco Profesional de Evaluaciones y Seguimiento',
  desc: 'Preguntas listas por tema, puesto y riesgo. Criterios de corrección, seguimiento de desempeño e informes listos para auditorías.',
  image: "b4.webp"

},
{
  num: 5,
  title: 'Kit Profesional de Documentación HyS',
  desc: 'Registros de asistencia, actas, constancias, certificados, autorizaciones, entrega de material y listas de control documental. Todo organizado para sobrevivir cualquier auditoría.',
  image: "b5.webp"

}];

export function BonusesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f9f8f6] pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#4a553f] text-white font-bold tracking-[0.1em] uppercase text-xs md:text-sm">
            🎁 5 Bonos Gratis Incluidos
          </span>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
            className="bg-white border border-[#e6ddc7] rounded-2xl overflow-hidden shadow-sm">

              <div className="relative">
                <img
                  src={`${import.meta.env.BASE_URL}${b.image}`}
                  alt={`Bono ${b.num}: ${b.title}`}
                  width={400}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-56 object-cover object-top" />
                <span className="absolute top-3 left-3 bg-[#b85c43] text-white font-bold text-xs uppercase tracking-wide px-3 py-1.5 rounded-full shadow-sm">
                  Bono {b.num}
                </span>
                <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-[#4a7a4a] text-white font-bold text-xs uppercase tracking-wide px-3 py-1.5 rounded-full shadow-sm">
                  🎁 Gratis
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#2f3a2c] text-lg mb-2">
                  {b.title}
                </h3>
                <p className="text-[#4b5347] text-[15px] leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
