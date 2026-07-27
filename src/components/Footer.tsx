import React from "react";
export function Footer() {
  return (
    <footer className="bg-[#141B24] text-[#9AA7B2] py-14 border-t border-[#2A343E]">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <div className="text-white font-bold text-xl mb-6 flex items-center justify-center gap-2">
          🛡️ MEGA PACK HIGIENE Y SEGURIDAD BLINDADA
        </div>

        <p className="text-xs max-w-2xl mx-auto mb-8 leading-relaxed">
          El Mega Pack es una herramienta digital de organización y
          documentación para profesionales de Higiene y Seguridad, SST y
          Seguridad Ocupacional. Debes adaptarlo a la normativa vigente de tu
          país y actividad. No constituye asesoramiento legal, contable, laboral
          ni técnico obligatorio, ni reemplaza a profesionales habilitados o
          autoridades competentes.
        </p>

        <div className="text-xs text-[#6B7680] font-medium">
          <p>
            © 2026 Mega Pack Higiene y Seguridad Blindada — Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
