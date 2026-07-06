import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
const features = [
  {
    lead: "Respaldo Legal Real",
    rest:
      "Documentación completa y organizada para trabajar con mayor seguridad ante inspecciones y auditorías.",
  },
  {
    lead: "Control Total de cada Cliente",
    rest:
      "Toda la información de cada empresa en un solo lugar, siempre actualizada y fácil de encontrar.",
  },
  {
    lead: "Tranquilidad Profesional",
    rest:
      "Dejá de crear documentos desde cero y dedicá ese tiempo a conseguir y atender más clientes.",
  },
  {
    lead: "Orden Sostenible",
    rest:
      "Un sistema simple para mantener toda tu gestión organizada durante todo el año.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f9f8f6]">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#2f3a2c]">
            ¿Qué vas a lograr con este sistema?
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
