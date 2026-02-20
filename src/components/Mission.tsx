import React from 'react'
import { motion } from 'framer-motion'
import { useT } from '../i18n/LanguageContext'

export function Mission() {
  const { t } = useT()
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-zinc-900 clip-diagonal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-4xl"
        >
          <motion.h2
            variants={itemVariants}
            className="text-electric text-xl font-bold tracking-widest mb-8"
          >
            {t('mission.label')}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-2xl sm:text-4xl md:text-6xl font-headline font-bold leading-tight"
          >
            {t('mission.text1')}{' '}
            <span className="text-electric">{t('mission.text2')}</span>{' '}
            <span className="underline decoration-electric decoration-4 underline-offset-8">{t('mission.text3underline')}</span>{' '}
            {t('mission.text3rest')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
