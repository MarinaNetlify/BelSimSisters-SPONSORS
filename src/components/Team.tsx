import React from 'react'
import { motion } from 'framer-motion'
import { useT } from '../i18n/LanguageContext'

const TEAM_MEMBERS = [
  { name: 'ULYANA ZARUBINA', role: 'LAGUNA NIGUEL, USA', image: '/images/ulyana.jpg' },
  { name: 'ALENA HRYHORYEVA', role: 'SARASOTA, USA', image: '/images/alena.jpg' },
  { name: 'DARYA SLIZH', role: 'VILNIUS, LITHUANIA', image: '/images/darya.jpg' },
  { name: 'MARYNA SHYNKARENKA', role: 'LONDON, UNITED KINGDOM', image: '/images/marina.jpg' },
  { name: 'MARYIA KOLESAVA-HUDZILINA', role: 'VILNIUS, LITHUANIA', image: '/images/masha.jpg' },
  { name: 'ANASTASIA LITVINENKO', role: 'VILNIUS, LITHUANIA', image: '/images/nastia.jpg' },
]

const SUPPORT = [
  { name: 'YURY YURCHANKA', role: 'WARSAW, POLAND', image: '/images/yura.jpg' },
]

export function Team() {
  const { t } = useT()
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl md:text-8xl font-headline font-black tracking-tighter mb-8 sm:mb-12 text-right"
        >
          {t('team.title')}
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold tracking-tighter mt-8 sm:mt-12 mb-4 sm:mb-6 text-electric"
        >
          {t('team.support')}
        </motion.h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {SUPPORT.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamCard({
  member,
  index,
}: {
  member: { name: string; role: string; image: string }
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-zinc-900 w-full aspect-[3/4] overflow-hidden"
    >
      <img
        src={member.image}
        alt={member.name}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      <div className="absolute inset-0 flex flex-col justify-end p-2 sm:p-4 bg-gradient-to-t from-black via-black/50 to-transparent">
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xs sm:text-base font-headline font-bold text-white mb-1 group-hover:text-electric transition-colors leading-tight">
            {member.name}
          </h3>
          <p className="text-[10px] sm:text-xs font-body tracking-widest text-gray-400 border-l-2 border-electric pl-2">
            {member.role}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 border-2 border-electric opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}
