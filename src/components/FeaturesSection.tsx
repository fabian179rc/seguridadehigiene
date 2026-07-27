import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
const features = [
  {
    lead: "Ahorrar tiempo en documentación",
    rest:
      "Deja de empezar cada informe desde cero. Usa modelos y guías listas para adaptar.",
  },
  {
    lead: "Trabajar con más orden",
    rest:
      "Organiza visitas, pendientes, hallazgos y evidencias con una lógica profesional.",
  },
  {
    lead: "Presentarte mejor ante tus clientes",
    rest:
      "Entrega documentos más claros y profesionales, aumentando la percepción de valor de tu servicio.",
  },
  {
    lead: "Dar seguimiento sin improvisar",
    rest:
      "Registra responsables, fechas y prioridades para que cada pendiente tenga control.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f9f8f6]">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#2f3a2c]">
            Con este sistema vas a poder:
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 8,
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
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1 text-[#d4a017]" />
              <p className="text-slate-600 leading-relaxed">
                <span className="font-bold text-[#2f3a2c]">
                  {feature.lead}
                </span>{" "}
                — {feature.rest}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
