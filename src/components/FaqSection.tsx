import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
const faqs = [
{
  q: '¿Es en papel o digital?',
  a: 'Es un producto 100% digital. Recibís todos los bloques de forma inmediata en tu correo electrónico, con formularios y guías listos para usar e imprimir en casa o en cualquier centro de copiado las veces que necesites.'
},
{
  q: '¿Necesito ser experto en administración para usarlo?',
  a: 'No. Todo el sistema está diseñado para usarse directamente, sin conocimientos previos de gestión administrativa. Si sabés imprimir y completar un formulario, podés usar este sistema desde el primer día.'
},
{
  q: '¿Sirve para profesionales de cualquier provincia de Argentina?',
  a: 'Sí. Todo el sistema está basado en la normativa nacional vigente: Ley 19.587, Decreto 351/79 y resoluciones de la SRT aplicables en todo el territorio argentino.'
},
{
  q: '¿Qué pasa si ya tengo algunos documentos armados?',
  a: 'Perfecto. El sistema complementa lo que ya tenés. Vas a poder identificar qué falta, reemplazar los modelos incompletos y ordenar todo bajo un mismo sistema coherente y profesional.'
},
{
  q: '¿Cuándo recibo el material?',
  a: 'Inmediatamente después de tu compra. Recibís un correo con el acceso a todos los archivos para descargar en el momento.'
},
{
  q: '¿Sirve si recién me recibí o si tengo pocos clientes?',
  a: 'Sí, y es el mejor momento para empezar. Arrancar con el sistema correcto desde el principio te ahorra años de correcciones y te protege desde el primer cliente.'
}];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-14 md:py-20 bg-[#f9f8f6]">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-block px-6 py-2.5 mb-5 rounded-full bg-[#566049] text-white font-semibold tracking-[0.18em] uppercase text-xs">
            Preguntas Frecuentes
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#2f3a2c] leading-tight">
            Respondemos a{" "}
            <em className="text-[#c06a52] font-bold italic">
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

                  <span className="font-heading font-bold text-[#2f3a2c] text-lg md:text-xl">
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full bg-[#566049] text-white flex items-center justify-center transition-colors"
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
