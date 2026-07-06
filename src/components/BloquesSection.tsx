import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ClipboardList, Search, PenLine, Scale } from 'lucide-react';
const bloques = [
{
  num: 'Bloque 1',
  icon: BookOpen,
  emoji: '📘',
  title: 'Manual Maestro de Gestión Administrativa HyS',
  desc: 'La guía principal para organizar tu gestión profesional, con documentación, protocolos y un plan de implementación en 7 días.'
},
{
  num: 'Bloque 2',
  icon: ClipboardList,
  emoji: '📋',
  title: 'Pack Completo de Formularios de Campo',
  desc: 'Formularios profesionales para registrar visitas, capacitaciones, entregas de EPP e investigaciones. Listos para usar.'
},
{
  num: 'Bloque 3',
  icon: Search,
  emoji: '🔍',
  title: 'Módulo de Auditoría Rápida en Sitio',
  desc: 'Checklists listos para inspecciones, relevamientos y auditorías, sin olvidarte de ningún detalle.'
},
{
  num: 'Bloque 4',
  icon: PenLine,
  emoji: '✍️',
  title: 'Modelos de Redacción Técnica',
  desc: 'Documentos técnicos pre-redactados para completar y utilizar en minutos, sin empezar desde cero.'
},
{
  num: 'Bloque 5',
  icon: Scale,
  emoji: '⚖️',
  title: 'Blindaje Legal del Profesional HyS',
  desc: 'La guía práctica para trabajar con respaldo legal, evitar errores y proteger tu responsabilidad profesional.'
}];

export function BloquesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f9f8f6]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 mb-5 rounded-full bg-[#4A553F] text-white font-semibold tracking-[0.18em] uppercase text-xs">
            📦 5 Bloques Incluidos
          </span>
          <h2 className="font-heading font-bold text-[#2f3a2c] text-3xl md:text-5xl leading-tight">
            Todo el sistema en{" "}
            <span className="italic text-[#5C6851]">
              5 bloques listos para usar
            </span>
          </h2>
        </div>

        <div className="space-y-5">
          {bloques.map((b, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: i * 0.08,
              }}
              className="flex items-start gap-5 bg-white border border-slate-200 rounded-2xl p-6 md:p-7 shadow-sm"
            >
              <div className="flex-shrink-0 flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-2xl bg-[#f4efe2] border border-amber-100 flex items-center justify-center">
                  <b.icon className="w-7 h-7 text-[#5C6851]" />
                </div>
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#5C6851]">
                  {b.num}
                </span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-[#2f3a2c] text-xl md:text-2xl mb-2">
                  <span aria-hidden="true" className="mr-1">
                    {b.emoji}
                  </span>
                  {b.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-[15px] md:text-base">
                  {b.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
