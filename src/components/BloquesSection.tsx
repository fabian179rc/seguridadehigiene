import React from 'react';
import { m } from 'framer-motion';
const modulos = [
{
  emoji: '🔍',
  modulo: 'Diagnóstico y relevamiento',
  resuelve: 'Llegas a la primera visita con estructura, sin improvisar'
},
{
  emoji: '⚠️',
  modulo: 'Identificación de peligros y riesgos',
  resuelve: 'Matrices listas para adaptar a cualquier tipo de cliente'
},
{
  emoji: '📋',
  modulo: 'Procedimientos y programas preventivos',
  resuelve: 'No escribes desde cero — adaptas en minutos'
},
{
  emoji: '🔎',
  modulo: 'Inspecciones y auditorías internas',
  resuelve: 'Checklists listos para salir a campo hoy'
},
{
  emoji: '🚨',
  modulo: 'Incidentes, emergencias y trabajos de riesgo',
  resuelve: 'Protocolos y formularios claros, completos y editables'
},
{
  emoji: '📊',
  modulo: 'Entrega profesional al cliente',
  resuelve: 'Documentos que generan confianza y percepción de valor'
}];

export function BloquesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F7F6F1]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 mb-5 rounded-full bg-[#24405E] text-white font-semibold tracking-[0.18em] uppercase text-xs">
            📦 Qué incluye el Mega Pack
          </span>
          <h2 className="font-heading font-bold text-[#1C2733] text-3xl md:text-5xl leading-tight">
            Todo el sistema en{" "}
            <span className="italic text-[#3B5875]">un solo producto</span>
          </h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm mb-6">
          <div className="hidden sm:grid grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] bg-[#24405E] text-white text-xs font-bold uppercase tracking-wider">
            <div className="px-6 py-3">Módulo</div>
            <div className="px-6 py-3">Lo que resuelve</div>
          </div>
          {modulos.map((mod, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`grid sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] gap-1 sm:gap-0 px-6 py-4 ${i % 2 === 1 ? "bg-[#F7F6F1]" : "bg-white"} ${i !== 0 ? "border-t border-slate-100" : ""}`}
            >
              <div className="font-bold text-[#1C2733] flex items-center gap-2">
                <span aria-hidden="true">{mod.emoji}</span> {mod.modulo}
              </div>
              <div className="text-slate-600 leading-snug">{mod.resuelve}</div>
            </m.div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm max-w-2xl mx-auto">
          Ideal para profesionales independientes, técnicos, licenciados y
          consultores de HyS que atienden pymes, comercios, industrias u
          obras.
        </p>
      </div>
    </section>
  );
}
