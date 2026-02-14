import React from 'react'
import { motion } from 'framer-motion'
import { Waves, Thermometer, Clock, MapPin, Target } from 'lucide-react'

const TIMELINE = [
  {
    phase: 'PREPARATION',
    title: 'OPEN WATER TRAINING',
    date: 'NOW — MAY 2026',
    icon: Waves,
    desc: 'Weekly cold water sessions, building endurance and acclimatizing to Channel conditions. Each swimmer must qualify with a 6-hour observed swim.',
  },
  {
    phase: 'ACCLIMATIZATION',
    title: 'COLD WATER ADAPTATION',
    date: 'JAN — JUNE 2026',
    icon: Thermometer,
    desc: 'Progressive exposure to 15–16°C water temperatures without wetsuits. Building tolerance for the Channel crossing conditions.',
  },
  {
    phase: 'FINAL PREP',
    title: 'TEAM REHEARSALS',
    date: 'MAY — JUNE 2026',
    icon: Clock,
    desc: 'Relay changeover practice, boat-to-swimmer coordination, feeding strategy rehearsals, and night swimming sessions.',
  },
  {
    phase: 'TRAVEL',
    title: 'ARRIVE IN DOVER',
    date: 'MID-JUNE 2026',
    icon: MapPin,
    desc: 'Team assembles in Dover, England. Final briefings with the Channel Swimming Association pilot and support crew.',
  },
  {
    phase: 'SWIM WINDOW',
    title: 'THE CROSSING',
    date: 'JUNE 21 — JUNE 30, 2026',
    icon: Target,
    desc: 'Our assigned swim window. The team waits for optimal tide and weather conditions, then swims the English Channel as a relay — approximately 40–70 km depending on currents.',
  },
]

export function VisibilityPlan() {
  return (
    <section className="py-32 bg-white text-black relative clip-diagonal-reverse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-8xl font-headline font-black tracking-tighter">
            TRAINING PLAN
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto font-body">
            From preparation to the swim window: June 21 — June 30, 2026
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {TIMELINE.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ item, index }: { item: any; index: number }) {
  const isEven = index % 2 === 0
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-start md:items-center`}
    >
      <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12 mb-4 md:mb-0">
        <div
          className={`flex flex-col ${isEven ? 'md:items-start' : 'md:items-end'} text-left ${isEven ? 'md:text-left' : 'md:text-right'}`}
        >
          <span className="text-electric font-bold tracking-widest text-sm mb-2">
            {item.phase} // {item.date}
          </span>
          <h3 className="text-3xl md:text-4xl font-headline font-bold mb-4">
            {item.title}
          </h3>
          <p className="text-gray-600 font-body leading-relaxed max-w-md">
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
