import React from "react";
import { motion } from "framer-motion";
const processes = [
  { icon: "📋", label: "Planificación Anual" },
  { icon: "🔍", label: "Relevamiento en Campo" },
  { icon: "⚠️", label: "Clasificación de Hallazgos" },
  { icon: "📝", label: "Redacción de Informes" },
  { icon: "📊", label: "Matrices de Riesgo" },
  { icon: "✅", label: "Acciones Correctivas" },
  { icon: "👷", label: "Orden y Limpieza" },
  { icon: "🏗️", label: "Inspecciones en Obra" },
  { icon: "🔥", label: "Prevención de Incendios" },
  { icon: "🧯", label: "EPP y Protecciones" },
  { icon: "📈", label: "KPIs y Tableros" },
  { icon: "➕", label: "Y mucho más..." },
];

export function ProcessesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f9f8f6] pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px] text-center">
        <span className="inline-flex items-center gap-2 px-6 py-2.5 mb-6 rounded-full bg-[#4a553f] text-white font-bold tracking-[0.1em] uppercase text-xs md:text-sm">
          🎯 Cubre los Procesos Más Importantes
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-semibold text-[#2f3a2c] mb-10 leading-tight max-w-3xl mx-auto">
          Cubre los procesos más importantes de una{" "}
          <span className="italic text-[#8a6a4f]">Inspección HyS</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 max-w-4xl mx-auto mb-8">
          {processes.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
              className="flex items-center gap-2 bg-white border border-[#e6ddc7] rounded-lg px-3 py-2 text-left"
            >
              <span className="text-base flex-shrink-0">{p.icon}</span>
              <span className="font-semibold text-[#2f3a2c] text-[13px] leading-snug">
                {p.label}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="text-[#4b5347] font-medium max-w-2xl mx-auto">
          💡 Cada módulo viene con plantillas, checklists y formatos listos para
          usar de inmediato.
        </p>
      </div>
    </section>
  );
}
