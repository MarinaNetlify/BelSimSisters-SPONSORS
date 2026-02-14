import React from 'react'
import { motion } from 'framer-motion'
import { useT } from '../i18n/LanguageContext'

export function CallToAction() {
  const { t } = useT()
  return (
    <section
      id="cta"
      className="py-32 bg-electric text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-9xl font-headline font-black tracking-tighter mb-8"
        >
          {t('cta.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl font-body mb-12 max-w-3xl mx-auto"
        >
          {t('cta.desc')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="https://www.instagram.com/belswimsisters/"
            target="_blank"
            rel="noopener noreferrer"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-block bg-black text-white px-12 py-6 text-2xl font-headline font-bold tracking-wider hover:bg-white hover:text-black transition-colors duration-300 skew-x-[-10deg] shadow-2xl"
          >
            <span className="block skew-x-[10deg]">{t('cta.button')}</span>
          </motion.a>
        </motion.div>

        <div className="mt-12 text-white/80 font-body tracking-widest">
          {t('cta.contact')} romanovich.m.a@gmail.com
        </div>
      </div>
    </section>
  )
}
