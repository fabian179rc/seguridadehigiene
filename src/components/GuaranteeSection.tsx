import React from 'react';
import { ShieldCheck } from 'lucide-react';
export function GuaranteeSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f8f8f8] pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <div className="mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-[#1a2e5a] flex items-center justify-center gap-4 mb-4">
            Garantía Total de 7 Días
          </h2>
          <p className="text-2xl font-bold text-[#1a2e5a]/80">
            Te entregamos exactamente lo que prometemos
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-10 md:p-12 shadow-sm">
          <p className="text-slate-600 leading-relaxed text-lg mb-8">
            Tenés 7 días completos para revisar todo el material y comprobar que es justo lo que te prometimos: un sistema completo con las 52 semanas del año resueltas, listo para implementar desde el primer día. Si lo que recibís no se corresponde con lo que prometemos, te devolvemos el 100% de tu dinero, sin vueltas y sin formularios complicados. Así de simple: cumplimos o te lo reintegramos.
          </p>
          <div className="inline-flex bg-[#10b981]/10 px-6 py-3 rounded-full border border-[#10b981]/20 text-[#10b981] font-bold text-lg shadow-sm">
            Riesgo Cero Garantizado
          </div>
        </div>
      </div>
    </section>);

}