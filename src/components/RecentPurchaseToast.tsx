import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const PRODUCT_NAME = "Mega Pack Higiene y Seguridad Blindada";

const PURCHASES = [
  { name: "Martín G.", city: "Buenos Aires" },
  { name: "Valentina R.", city: "Ciudad de México" },
  { name: "Carlos M.", city: "Bogotá" },
  { name: "Camila S.", city: "Lima" },
  { name: "Diego F.", city: "Santiago" },
  { name: "Fernanda A.", city: "Quito" },
  { name: "Andrés P.", city: "Montevideo" },
  { name: "Lucía T.", city: "Guadalajara" },
  { name: "Javier N.", city: "Medellín" },
  { name: "Paola V.", city: "San José" },
  { name: "Ricardo D.", city: "Guayaquil" },
  { name: "Sofía H.", city: "Córdoba" },
  { name: "Miguel O.", city: "Monterrey" },
  { name: "Daniela C.", city: "Panamá" },
];

const INITIAL_DELAY_MS = 5000;
const VISIBLE_DURATION_MS = 6000;
const MIN_GAP_MS = 10000;
const MAX_GAP_MS = 18000;

function randomMinutesAgo() {
  return Math.floor(Math.random() * 28) + 2;
}

function pickNextIndex(prevIndex: number, length: number) {
  if (length <= 1) return 0;
  let next = Math.floor(Math.random() * length);
  while (next === prevIndex) {
    next = Math.floor(Math.random() * length);
  }
  return next;
}

export function RecentPurchaseToast() {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [minutesAgo, setMinutesAgo] = useState(randomMinutesAgo());
  const indexRef = useRef(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    function showNext() {
      const nextIndex = pickNextIndex(indexRef.current, PURCHASES.length);
      indexRef.current = nextIndex;
      setIndex(nextIndex);
      setMinutesAgo(randomMinutesAgo());
      setVisible(true);
      timer = setTimeout(hide, VISIBLE_DURATION_MS);
    }

    function hide() {
      setVisible(false);
      const gap = MIN_GAP_MS + Math.random() * (MAX_GAP_MS - MIN_GAP_MS);
      timer = setTimeout(showNext, gap);
    }

    timer = setTimeout(showNext, INITIAL_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const purchase = PURCHASES[index];

  return (
    <div
      aria-hidden="true"
      className="fixed bottom-4 left-4 z-50 pointer-events-none"
    >
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, x: -24, y: 12 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -24, y: 12 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="pointer-events-auto w-[85vw] max-w-[260px] sm:max-w-[300px] bg-white border border-black/[0.06] border-l-4 border-l-green-500 rounded-2xl shadow-[0_12px_32px_rgba(28,39,51,0.22)] p-3 sm:p-4"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wide text-green-700">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Compra verificada
              </span>
              <button
                type="button"
                aria-label="Cerrar"
                onClick={() => setVisible(false)}
                className="text-slate-400 hover:text-slate-600 leading-none text-sm -mt-0.5"
              >
                ✕
              </button>
            </div>
            <p className="text-[#1C2733] font-bold text-xs sm:text-sm leading-snug">
              {purchase.name} de {purchase.city}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-snug">
              compró{" "}
              <span className="text-[#8A6A22] font-semibold">
                {PRODUCT_NAME}
              </span>
            </p>
            <p className="text-[10px] sm:text-xs text-slate-400 mt-1.5">
              hace {minutesAgo} minutos
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
