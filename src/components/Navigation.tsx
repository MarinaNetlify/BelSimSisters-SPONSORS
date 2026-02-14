import React, { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });
  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-colors duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.5
      }}>

      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="font-headline font-bold text-2xl tracking-tighter text-white">
            BELSWIM<span className="text-electric">SISTERS</span>
          </span>
        </div>

        <button
          className="hidden md:block px-6 py-2 bg-electric text-white font-headline font-bold tracking-wider hover:bg-white hover:text-black transition-colors duration-300 skew-x-[-10deg]"
          onClick={() =>
          document.getElementById('cta')?.scrollIntoView({
            behavior: 'smooth'
          })
          }>

          <span className="block skew-x-[10deg]">JOIN THE MISSION</span>
        </button>
      </div>
    </motion.nav>);

}