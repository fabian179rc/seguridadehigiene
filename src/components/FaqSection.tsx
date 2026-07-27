import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
const faqs = [
{
  q: '¿Es un producto físico o digital?',
  a: 'Es un producto 100% digital. Recibirás el acceso al material después de la compra para descargarlo y usarlo desde tu computadora, tablet o teléfono.'
},
{
  q: '¿Sirve para cualquier país de Latinoamérica?',
  a: 'Sí. El contenido está diseñado en términos generales y debe ser adaptado por cada usuario según la normativa vigente de su país, tipo de empresa y actividad.'
},
{
  q: '¿Necesito ser experto o tener documentos propios para usarlo?',
  a: 'No. El sistema está pensado para que puedas empezar a usarlo desde el primer día, tanto si estás comenzando como si ya tienes experiencia y quieres ordenar tu gestión.'
},
{
  q: '¿Cuándo recibo el acceso?',
  a: 'El acceso es inmediato. Tras completar la compra recibirás los datos para acceder al material.'
},
{
  q: '¿El precio es en dólares?',
  a: 'Sí, el precio está en USD. Al momento del pago puedes ver el equivalente en tu moneda local según el método de pago disponible en tu país.'
},
{
  q: '¿Reemplaza la normativa local o incluye asesoría personalizada?',
  a: 'No. El Mega Pack es una herramienta de organización y documentación profesional. No reemplaza la normativa vigente de cada país ni constituye asesoramiento legal, técnico o laboral.'
}];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-14 md:py-20 bg-[#F7F6F1]">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-block px-6 py-2.5 mb-5 rounded-full bg-[#24405E] text-white font-semibold tracking-[0.18em] uppercase text-xs">
            Preguntas Frecuentes
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#1C2733] leading-tight">
            Respondemos a{" "}
            <em className="text-[#D9643A] font-bold italic">
              tus preguntas
            </em>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm shadow-black/5">

                <button
                  className="w-full px-6 md:px-8 py-5 md:py-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}>

                  <span className="font-heading font-bold text-[#1C2733] text-lg md:text-xl">
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full bg-[#24405E] text-white flex items-center justify-center transition-colors"
                    aria-hidden="true">

                    {isOpen ?
                    <Minus className="w-4 h-4" /> :

                    <Plus className="w-4 h-4" />
                    }
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen &&
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1
                    }}
                    exit={{
                      height: 0,
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut'
                    }}
                    className="overflow-hidden">

                      <div className="px-6 md:px-8 pb-6 md:pb-7 -mt-1 text-slate-600 leading-relaxed text-[15px] md:text-base max-w-[58ch]">
                        {faq.a}
                      </div>
                    </motion.div>
                  }
                </AnimatePresence>
              </div>);

          })}
        </div>
      </div>
    </section>);

}
