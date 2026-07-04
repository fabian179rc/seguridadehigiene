import React from 'react';
import { motion } from 'framer-motion';
const modules = [
{
  num: '01',
  emoji: '�',
  title: 'Antes de Arrancar: Cómo Usar el Sistema Sin Improvisar',
  desc: 'La metodología completa para adaptar el sistema a cualquier empresa. El mapa de implementación anual.'
},
{
  num: '02',
  emoji: '🗓️',
  title: 'Diagnóstico, Inducción y Cultura Preventiva',
  desc: 'Semanas 1-4. El primer mes define si los trabajadores se toman en serio la seguridad. Material completo para arrancar con autoridad.'
},
{
  num: '03',
  emoji: '⚡',
  title: 'Riesgos Críticos que No Admiten Improvisación',
  desc: 'Semanas 5-10. Trabajo en altura, riesgo eléctrico, espacios confinados. Los temas donde la ART mira más de cerca.'
},
{
  num: '04',
  emoji: '🔧',
  title: 'Operación Segura de Equipos, Vehículos y Energía',
  desc: 'Semanas 11-16. Máquinas, autoelevadores, bloqueo y etiquetado. Material listo para exponer cada uno.'
},
{
  num: '05',
  emoji: '🚨',
  title: 'Emergencias, Primeros Auxilios y Respuesta',
  desc: 'Semanas 17-22. Los primeros minutos definen el resultado. Capacitaciones que preparan para actuar, no paralizarse.'
},
{
  num: '06',
  emoji: '🏃',
  title: 'Ergonomía, Salud Ocupacional y Bienestar',
  desc: 'Semanas 23-28. Las lesiones músculo-esqueléticas son prevenibles. Capacitaciones correctas hacen la diferencia.'
},
{
  num: '07',
  emoji: '⚗️',
  title: 'Sustancias Químicas, Ambiente y Exposición',
  desc: 'Semanas 29-34. Desde lectura de hojas de seguridad hasta manejo correcto de productos peligrosos.'
},
{
  num: '08',
  emoji: '🏭',
  title: 'Capacitación Adaptable por Rubro y Tarea',
  desc: 'Semanas 35-40. Material adaptado para construcción, logística, industria alimentaria, oficinas, salud.'
},
{
  num: '09',
  emoji: '⚖️',
  title: 'Cumplimiento Legal, Documentación y Auditorías',
  desc: 'Semanas 41-46. La diferencia entre trabajar tranquilo y transpirar frío en una inspección.'
},
{
  num: '10',
  emoji: '📊',
  title: 'Cierre Anual, Medición de Eficacia y Mejora',
  desc: 'Semanas 47-52. El año no termina con la última capacitación. Termina cuando demostrás que funcionó.'
},
{
  num: '11',
  emoji: '📈',
  title: 'Después de Semana 52: Sostener y Escalar',
  desc: 'Completar el año es un logro. Sostenerlo es un negocio. Acá aprendés cómo escalar tu cartera de clientes.'
}];

export function ModulesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f8f8f8] pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="text-center mb-12">
          <h2 className="font-heading font-extrabold text-[#1a2e5a] text-4xl md:text-5xl leading-tight mb-4">
            11 CAPÍTULOS INCLUIDOS
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 font-bold">
            Todo el sistema en 11 capítulos listos para implementar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m, i) =>
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
            className="flex flex-col bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#1a2e5a]/5 border border-[#1a2e5a]/10 flex items-center justify-center text-3xl">
                  {m.emoji}
                </div>
                <span className="text-sm font-bold tracking-[0.15em] uppercase text-[#f5c842] bg-[#1a2e5a] px-3 py-1.5 rounded-lg">
                  Cap {m.num}
                </span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-[#1a2e5a] text-xl mb-3 leading-snug">
                  {m.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-[15px]">
                  {m.desc}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}