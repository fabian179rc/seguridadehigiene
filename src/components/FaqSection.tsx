import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
const faqs = [
{
  q: '¿Es físico o digital?',
  a: '100% digital. Acceso inmediato para descargar, editar e imprimir desde cualquier dispositivo.'
},
{
  q: '¿Necesito experiencia previa?',
  a: 'No. El sistema está diseñado para técnicos, licenciados, supervisores y responsables de HyS en cualquier etapa de su carrera. Si sos nuevo, te da la estructura. Si ya tenés experiencia, te ahorra horas.'
},
{
  q: '¿Sirve para cualquier provincia o país?',
  a: 'Sí. El contenido está basado en buenas prácticas internacionales y es aplicable en cualquier organización, región o país de habla hispana.'
},
{
  q: '¿Puedo adaptarlo a distintos clientes o empresas?',
  a: 'Sí. Todas las plantillas, checklists y formatos son 100% editables. Podés personalizarlos con el nombre de la empresa, sector, riesgo específico y cualquier dato que necesites.'
},
{
  q: '¿Cuándo recibo el acceso?',
  a: 'Inmediatamente después de tu compra. Recibís el link de descarga en tu correo electrónico en menos de 5 minutos.'
},
{
  q: '¿Ya tengo algunos modelos propios, me sirve igual?',
  a: 'Sí. El sistema no reemplaza lo que ya usás, lo completa y lo ordena. Vas a encontrar herramientas que te faltan, estructuras que podés mejorar y tiempo que vas a recuperar.'
}];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-16 md:py-24 bg-[#f9f8f6] pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#2f3a2c] leading-tight">
            ❓ Preguntas Frecuentes
          </h2>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm border border-[#e6ddc7]">

                <button
                  className="w-full px-6 md:px-8 py-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}>

                  <span className="font-heading font-bold text-[#2f3a2c] text-lg md:text-xl">
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#4a553f] text-white' : 'bg-[#4a553f]/10 text-[#4a553f]'}`}
                    aria-hidden="true">

                    {isOpen ?
                    <Minus className="w-5 h-5" /> :

                    <Plus className="w-5 h-5" />
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

                      <div className="px-6 md:px-8 pb-8 -mt-2 text-[#4b5347] leading-relaxed text-[16px] md:text-lg">
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
