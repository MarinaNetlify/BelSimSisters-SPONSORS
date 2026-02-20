import React from 'react'
import { motion } from 'framer-motion'
import { Waves, Thermometer, Clock, MapPin, Target } from 'lucide-react'
import { useT } from '../i18n/LanguageContext'

const ICONS = [Waves, Thermometer, Clock, MapPin, Target]

export function VisibilityPlan() {
  const { t } = useT()

  const phases = [
    {
      phase: t('training.phases.0.phase'),
      title: t('training.phases.0.title'),
      date: t('training.phases.0.date'),
      desc: t('training.phases.0.desc'),
    },
    {
      phase: t('training.phases.1.phase'),
      title: t('training.phases.1.title'),
      date: t('training.phases.1.date'),
      desc: t('training.phases.1.desc'),
    },
    {
      phase: t('training.phases.2.phase'),
      title: t('training.phases.2.title'),
      date: t('training.phases.2.date'),
      desc: t('training.phases.2.desc'),
    },
    {
      phase: t('training.phases.3.phase'),
      title: t('training.phases.3.title'),
      date: t('training.phases.3.date'),
      desc: t('training.phases.3.desc'),
    },
    {
      phase: t('training.phases.4.phase'),
      title: t('training.phases.4.title'),
      date: t('training.phases.4.date'),
      desc: t('training.phases.4.desc'),
    },
  ]

  return (
    <section className="pt-48 sm:pt-56 pb-16 sm:pb-24 md:pb-32 bg-white text-black relative clip-diagonal-reverse z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-24">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-headline font-black tracking-tighter text-electric">
            {t('training.title')}
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-xl text-gray-600 max-w-2xl mx-auto font-body">
            {t('training.subtitle')}
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {phases.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} icon={ICONS[index]} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ item, index }: { item: any; index: number; icon?: any }) {
  const isEven = index % 2 === 0
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-start md:items-center`}
    >
      <div className={`w-full md:w-1/2 pl-12 mb-4 md:mb-0 ${isEven ? 'md:pl-28 md:pr-6' : 'md:pl-6 md:pr-28'}`}>
        <div
          className={`flex flex-col ${isEven ? 'md:items-start' : 'md:items-end'} text-left ${isEven ? 'md:text-left' : 'md:text-right'}`}
        >
          <span className="text-electric font-bold tracking-widest text-xs sm:text-sm mb-2">
            {item.phase} // {item.date}
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold mb-4">
            {item.title}
          </h3>
          <p className="text-gray-600 font-body leading-relaxed max-w-md text-sm sm:text-base">
            {item.desc}
          </p>
        </div>
      </div>

      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 bg-electric rounded-full border-4 border-white z-10 shadow-lg">
        <div className="w-2 h-2 bg-white rounded-full" />
      </div>

      <div className="hidden md:block w-1/2" />
    </motion.div>
  )
}
