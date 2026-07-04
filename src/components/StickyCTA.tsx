import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToOffer } from '../utils/scrollToOffer';
export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    let ticking = false;
    const evaluate = () => {
      ticking = false;
      const scrollY = window.scrollY;
      const pricingSection = document.getElementById('pricing');
      let hideAtBottom = false;
      if (pricingSection) {
        const rect = pricingSection.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          hideAtBottom = true;
        }
      }
      setIsVisible(scrollY > 600 && !hideAtBottom);
    };
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(evaluate);
      }
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <AnimatePresence>
      {isVisible &&
      <motion.div
        initial={{
          y: 100,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        exit={{
          y: 100,
          opacity: 0
        }}
        className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        
          <div className="pointer-events-auto">
            <motion.a
            href="#comprar"
            onClick={scrollToOffer}
            whileHover={{
              scale: 1.02
            }}
            whileTap={{
              scale: 0.98
            }}
            className="inline-flex items-center justify-center gap-2 bg-[#f5c842] hover:bg-[#e5b832] text-[#1a2e5a] font-extrabold text-base px-8 py-4 rounded-full shadow-2xl shadow-[#1a2e5a]/20 border-2 border-white/50 transition-colors">
            
              🚀 QUIERO EL SISTEMA MAESTRO
            </motion.a>
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}