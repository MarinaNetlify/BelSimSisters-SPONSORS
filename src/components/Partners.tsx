import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Briefcase, Trophy, Mic, Users, Heart, Share2, Award, Shirt, Instagram, Tv } from 'lucide-react'

const AUDIENCE_ITEMS = [
  { icon: Globe, label: 'Belarusian diaspora (UK, EU, US)' },
  { icon: Briefcase, label: 'IT & founders community' },
  { icon: Trophy, label: 'Endurance sports audience' },
  { icon: Users, label: 'Entrepreneurs & career professionals' },
  { icon: Mic, label: 'Belarusian artists, athletes & bloggers' },
  { icon: Heart, label: "Women's leadership communities" },
]

const ENGAGEMENT_ITEMS = [
  { icon: Tv, label: 'Independent & international media' },
  { icon: Trophy, label: 'Famous Belarusian athletes' },
  { icon: Mic, label: 'Musicians & public figures' },
  { icon: Briefcase, label: 'Founders communities' },
]

export function Partners() {
  return (
    <section className="py-32 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-headline font-black uppercase max-w-4xl">
            Why Become <span className="text-electric">Our Partner</span>
          </h2>
        </div>

        <Subsection title="OUR AUDIENCE" delay={0}>
          <p className="text-xl text-gray-300 font-body leading-relaxed mb-10">
            We work with more than just a sports audience.
          </p>

          <p className="text-lg text-white font-bold font-body mb-6">Our project will reach:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {AUDIENCE_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex flex-col items-center text-center p-4 bg-zinc-900/50 border border-white/5 hover:border-electric/30 transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-electric mb-3" />
                <span className="text-sm text-gray-300 font-body leading-snug">{item.label}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-lg text-white font-bold font-body mb-6">We plan to engage:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {ENGAGEMENT_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex flex-col items-center text-center p-4 bg-zinc-900/50 border border-white/5 hover:border-electric/30 transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-electric mb-3" />
                <span className="text-sm text-gray-300 font-body leading-snug">{item.label}</span>
              </motion.div>
            ))}
          </div>

        </Subsection>

        <Subsection title="WHERE & HOW WE SHOW UP" delay={0.1}>
          <p className="text-xl text-gray-300 font-body leading-relaxed mb-12">
            By June 2026, the project will unfold across multiple touchpoints.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ChannelCard
              icon={Instagram}
              title="DIGITAL"
              items={[
                'Personal Instagram accounts of each team member',
                'Official team Instagram',
                'Telegram, LinkedIn, TikTok',
                'Live broadcast from the escort boat during the Channel crossing',
              ]}
              index={0}
            />
            <ChannelCard
              icon={Tv}
              title="MEDIA"
              items={[
                'Independent Belarusian media outlets',
                'International publications',
                'Sports media and endurance blogs',
                'Amplification by well-known Belarusian public figures',
              ]}
              index={1}
            />
            <ChannelCard
              icon={Users}
              title="COMMUNITY"
              items={[
                'Offline diaspora meetups',
                'Talks in founders and tech communities',
                'Swim & endurance sport events',
              ]}
              index={2}
            />
          </div>
        </Subsection>

        <Subsection title="WHAT THE PARTNER RECEIVES" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <BenefitBlock
              icon={Shirt}
              title="BRAND VISIBILITY"
              items={[
                'Swim caps during the Channel crossing',
                'Swimsuits',
                'Dryrobes and team merchandise',
                'Training apparel',
                'Towels and official materials',
              ]}
              footnote="The brand becomes part of the project's visual identity throughout preparation and during the crossing itself."
              index={0}
            />
            <BenefitBlock
              icon={Share2}
              title="DIGITAL & CONTENT"
              items={[
                'Team Instagram and personal athlete accounts',
                'TikTok preparation content',
                'LinkedIn (professional audience)',
                'Telegram',
                'Live broadcast from the escort boat',
                'Photo & video materials',
                'Documentary-style content after the crossing',
              ]}
              footnote="Repeated, story-driven exposure — not one-off impressions."
              index={1}
            />
            <BenefitBlock
              icon={Award}
              title="REPUTATIONAL VALUE"
              items={[
                "The first Belarusian women's Channel crossing attempt",
                'Discipline and long-term preparation',
                'International ambition',
                'Initiative and leadership',
              ]}
              footnote="The partner is associated with a historic achievement and strong values."
              index={2}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-2xl md:text-3xl font-headline font-bold text-white leading-tight">
              This is not a campaign.<br />
              It is a <span className="text-electric">reputational asset</span>.
            </p>
          </motion.div>
        </Subsection>
      </div>
    </section>
  )
}

function Subsection({
  title,
  delay,
  children,
}: {
  title: string
  delay: number
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      className="mb-24 last:mb-0"
    >
      <div className="mb-8">
        <h3 className="text-3xl md:text-5xl font-headline font-bold">{title}</h3>
        <div className="w-16 h-1 bg-electric mt-4" />
      </div>
      {children}
    </motion.div>
  )
}

function ChannelCard({
  icon: Icon,
  title,
  items,
  index,
}: {
  icon: any
  title: string
  items: string[]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-zinc-900/50 border border-white/5 p-8 hover:border-electric/30 transition-all duration-300 flex flex-col"
    >
      <div className="mb-6">
        <Icon className="w-10 h-10 text-electric" />
      </div>
      <h4 className="text-xl font-headline font-bold mb-5">{title}</h4>
      <ul className="space-y-3 text-gray-300 font-body text-sm leading-relaxed flex-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-electric mt-0.5 text-xs">&#9679;</span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

function BenefitBlock({
  icon: Icon,
  title,
  items,
  footnote,
  index,
}: {
  icon: any
  title: string
  items: string[]
  footnote: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-zinc-900/50 border border-white/5 p-8 flex flex-col"
    >
      <div className="flex items-start gap-4 mb-6">
        <Icon className="w-10 h-10 text-electric flex-shrink-0 mt-1" />
        <h4 className="text-2xl font-headline font-bold">{title}</h4>
      </div>
      <ul className="space-y-3 text-gray-300 font-body text-base mb-6 flex-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-electric mt-0.5 text-xs">&#9679;</span>
            {item}
          </li>
        ))}
      </ul>
      <p className="text-white/70 font-body text-sm italic border-t border-white/10 pt-4 mt-auto">
        {footnote}
      </p>
    </motion.div>
  )
}
