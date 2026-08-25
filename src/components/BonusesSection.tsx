import React from "react";
import { m } from "framer-motion";
import { Gift } from "lucide-react";
const bonuses = [
  {
    num: 1,
    title: "Kit Express de Primera Visita Segura",
    desc: "Llegas al cliente con una estructura clara, sin improvisar y sin depender solo de tu memoria.",
    image: "mp-bono1.webp",
  },
  {
    num: 2,
    title: "Matriz de Documentos Críticos por Tipo de Cliente",
    desc: "Sabes exactamente qué pedir y qué presentar según el rubro. Trabajas con más criterio documental.",
    image: "mp-bono2.webp",
  },
  {
    num: 3,
    title: "Guía Rápida de Observaciones y Desvíos Profesionales",
    desc: "Tus informes se ven más claros, más sólidos y más fáciles de defender ante el cliente.",
    image: "mp-bono3.webp",
  },
  {
    num: 4,
    title: "Checklist de Cierre de Visita y Seguimiento",
    desc: "Cada visita termina con responsable, fecha y acción definida. Sin pendientes en el aire.",
    image: "mp-bono4.webp",
  },
  {
    num: 5,
    title: "Mini Manual de Presentación Profesional del Servicio",
    desc: "Presentas lo que haces con más seguridad y el cliente entiende el valor de tu trabajo.",
    image: "mp-bono5.webp",
  },
];

export function BonusesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F7F6F1]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 mb-5 rounded-full bg-[#24405E] text-white font-semibold tracking-[0.18em] uppercase text-xs">
            <Gift className="w-4 h-4 text-[#C99A3E]" />5 Bonos Incluidos — Sin
            Costo Adicional
          </span>
          {/* <h2 className="font-heading font-bold text-[#1C2733] text-3xl md:text-5xl leading-tight">
            Y además, recibes{" "}
            <span className="italic text-[#3B5875]">5 bonos prácticos</span>
          </h2> */}
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {bonuses.map((b, i) => (
            <m.div
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
              className="bg-white border border-slate-200 rounded-2xl p-3 shadow-sm"
            >
              <div className="relative rounded-xl overflow-hidden mb-3 h-56 bg-[#ECE7DA] flex items-center justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}${b.image}`}
                  alt={`Bono ${b.num}: ${b.title}`}
                  width={400}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
                <span className="absolute top-2.5 left-2.5 bg-rose-500 text-white font-bold text-[11px] tracking-wide uppercase px-2.5 py-1 rounded-md shadow-sm">
                  Bono {b.num}
                </span>
                <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 bg-emerald-600 text-white font-bold text-[11px] tracking-wide uppercase px-2.5 py-1 rounded-md shadow-sm">
                  🎁 Gratis
                </span>
              </div>
              <div className="px-2 pb-2">
                <p className="text-slate-500 text-sm leading-snug">{b.desc}</p>
              </div>
            </m.div>
          ))}
        </div>

        <div className="text-center px-6 py-10 bg-white/60 border border-[#E4DED0] rounded-3xl">
          <Gift className="w-9 h-9 text-[#C99A3E] mx-auto mb-4" />
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#3B5875] mb-2">
            Todo incluido en
          </p>
          <h3 className="font-heading font-bold text-[#1C2733] text-3xl md:text-4xl mb-3">
            el Mega Pack
          </h3>
          <p className="text-slate-600">
            Todos los bonos están incluidos en una sola compra.
          </p>
        </div>
      </div>
    </section>
  );
}
