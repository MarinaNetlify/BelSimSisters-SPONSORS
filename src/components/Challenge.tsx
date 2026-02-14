import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useT } from '../i18n/LanguageContext';

export function Challenge() {
  const { t } = useT();
  return (
    <section className="py-32 bg-white text-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-6xl md:text-8xl font-headline font-black tracking-tighter">
            {t('challenge.title')}
            <div className="h-2 w-32 bg-electric mt-4" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatBlock number={0} suffix="" label={t('challenge.distance')} delay={0} displayOverride="40-70KM" />
          <StatBlock number={0} suffix="" label={t('challenge.waterTemp')} delay={0.2} displayOverride="~15-16°C" />
          <StatBlock number={0} suffix="" label={t('challenge.wetsuits')} delay={0.4} />
          <StatBlock number={6} suffix="" label={t('challenge.girls')} delay={0.6} />
        </div>
      </div>
    </section>
  );
}

function StatBlock({
  number,
  suffix,
  label,
  delay,
  displayOverride,
}: {
  number: number;
  suffix: string;
  label: string;
  delay: number;
  displayOverride?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += number / steps;
        if (current >= number) {
          setCount(number);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="border-2 border-black p-8 relative hover:bg-black hover:text-white transition-colors duration-300 group"
    >
      <div className="absolute top-0 right-0 w-8 h-8 bg-electric opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="text-7xl md:text-8xl font-headline font-bold mb-2 group-hover:text-electric transition-colors duration-300">
        {displayOverride || (
          <>
            {count}
            {suffix}
          </>
        )}
      </div>
      <div className="text-sm font-bold tracking-widest border-t-2 border-current pt-4 inline-block">
        {label}
      </div>
    </motion.div>
  );
}
