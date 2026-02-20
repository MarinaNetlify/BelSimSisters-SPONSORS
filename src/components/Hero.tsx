import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import { useT } from '../i18n/LanguageContext';

export function Hero() {
  const { days, hours, minutes, seconds } = useCountdown('2026-06-21T00:00:00');
  const { t } = useT();

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-50" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-electric/5 skew-x-12 transform origin-top-right" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-2"
        >
          <h1 className="text-[10vw] sm:text-[12vw] leading-[0.8] font-black tracking-tighter text-white mix-blend-difference">
            {t('hero.line1')}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative"
        >
          <h1 className="text-[10vw] sm:text-[12vw] leading-[0.8] font-black tracking-tighter text-transparent text-stroke hover:text-electric transition-colors duration-500">
            {t('hero.line2')}
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative mt-2 w-full h-2 md:h-4 bg-electric -skew-y-2 origin-left"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 sm:mt-12 md:mt-24 grid grid-cols-4 gap-2 sm:gap-4 max-w-2xl"
        >
          <CountdownBlock value={days} label={t('hero.days')} />
          <CountdownBlock value={hours} label={t('hero.hrs')} />
          <CountdownBlock value={minutes} label={t('hero.mins')} />
          <CountdownBlock value={seconds} label={t('hero.secs')} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-10 h-10 text-electric" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function CountdownBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold text-white tabular-nums">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-xs md:text-sm font-body tracking-widest text-gray-400 mt-1">
        {label}
      </div>
    </div>
  );
}
