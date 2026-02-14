import React from 'react'
import { motion } from 'framer-motion'
import { useT } from '../i18n/LanguageContext'

const TEAM_MEMBERS = [
  { name: 'MARYNA SHYNKARENKA', role: 'LONDON, UNITED KINGDOM', image: '/images/marina.jpg' },
  { name: 'ULYANA ZARUBINA', role: 'LAGUNA NIGUEL, USA', image: '/images/ulyana.jpg' },
  { name: 'ALENA HRYHORYEVA', role: 'SARASOTA, USA', image: '/images/alena.jpg' },
  { name: 'DARYA SLIZH', role: 'VILNIUS, LITHUANIA', image: '/images/darya.jpg' },
  { name: 'ANASTASIA LITVINENKO', role: 'VILNIUS, LITHUANIA', image: '/images/nastia.jpg' },
  { name: 'MARYIA KOLESAVA-HUDZILINA', role: 'VILNIUS, LITHUANIA', image: '/images/masha.jpg' },
]

const SUPPORT = [
  { name: 'YURY YURCHANKA', role: 'WARSAW, POLAND', image: '/images/yura.jpg' },
]

export function Team() {
  const { t } = useT()
  return (
    <section className="py-24 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-headline font-black tracking-tighter mb-12 text-right"
        >
          {t('team.title')}
        </motion.h2>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-headline font-bold tracking-tighter mt-12 mb-6 text-electric"
        >
          {t('team.support')}
        </motion.h3>

        <div className="flex gap-4">
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
      className="group relative bg-zinc-900 w-52 min-w-[13rem] aspect-[3/4] overflow-hidden snap-start flex-shrink-0"
    >
      <img
        src={member.image}
        alt={member.name}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-black/50 to-transparent">
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-base font-headline font-bold text-white mb-1 group-hover:text-electric transition-colors leading-tight">
            {member.name}
          </h3>
          <p className="text-xs font-body tracking-widest text-gray-400 border-l-2 border-electric pl-2">
            {member.role}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 border-2 border-electric opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}
