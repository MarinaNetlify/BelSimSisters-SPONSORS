import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Tv, Users, Radio } from 'lucide-react'

const TIMELINE = [
  {
    phase: 'DIGITAL',
    title: 'SOCIAL MEDIA & LIVE',
    date: 'NOW — JUNE 2026',
    icon: Instagram,
    desc: 'Personal Instagram accounts, team Instagram, Telegram, LinkedIn, TikTok — plus a live broadcast from the boat during the crossing.',
  },
  {
    phase: 'MEDIA',
    title: 'PRESS & PUBLICATIONS',
    date: 'ONGOING',
    icon: Tv,
    desc: 'Independent Belarusian media, international publications, sports media & blogs, reposts by well-known Belarusian public figures.',
  },
  {
    phase: 'COMMUNITY',
    title: 'EVENTS & MEETUPS',
    date: 'ONGOING',
    icon: Users,
    desc: 'Offline diaspora meetups, founder community talks, swim & sport events across Europe.',
  },
  {
    phase: 'LIVE',
    title: 'LIVE STREAM EVENT',
    date: 'JUNE 2026',
    icon: Radio,
    desc: 'Real-time broadcasting of the swim attempt with commentary and live tracking.',
  },
  {
    phase: 'CLIMAX',
    title: 'THE CHANNEL CROSSING',
    date: 'JUNE 2026',
    icon: Radio,
    desc: 'The June 2026 Channel crossing and the final media peak.',
  },
]

export function VisibilityPlan() {
  return (
    <section className="py-32 bg-white text-black relative clip-diagonal-reverse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-8xl font-headline font-black tracking-tighter">
            VISIBILITY PLAN
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto font-body">
            Where and how we'll show up (by June 2026)
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
