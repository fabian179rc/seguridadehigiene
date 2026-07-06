import React from 'react';
export function Footer() {
  return (
    <footer className="bg-[#232b21] text-[#a7b09c] py-14 border-t border-[#3a4434]">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <div className="text-white font-bold text-xl mb-6 flex items-center justify-center gap-2">
          🛡️ MEGA PACK HIGIENE Y SEGURIDAD BLINDADA
        </div>

        <p className="text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
          Este producto es una herramienta de organización y documentación
          para profesionales de Higiene y Seguridad independientes. No
          constituye asesoramiento legal, contable ni impositivo, ni
          reemplaza la consulta con un profesional matriculado en cada
          materia.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm mb-8 font-medium">
          <a href="#" className="hover:text-white transition-colors">
            Términos y Condiciones
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Política de Privacidad
          </a>
          <a
            href="mailto:soporte@mega-pack-hys.com"
            className="hover:text-white transition-colors"
          >
            Contacto
          </a>
        </div>

        <div className="text-xs text-[#6f7a64] font-medium">
          <p>
            © 2026 Mega Pack Higiene y Seguridad Blindada — Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>);

}
