import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Tv, Users, Radio, Eye, Share2, Award, Shirt } from 'lucide-react'

export function Partners() {
  return (
    <section className="py-32 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-headline font-black uppercase max-w-3xl">
            Why Partner <span className="text-electric">With Us</span>
          </h2>
        </div>

        <Subsection number="4" title="OUR AUDIENCE" delay={0}>
          <p className="text-xl md:text-2xl text-gray-300 font-body leading-relaxed mb-6">
            Belswimsisters is not a niche sports project.
          </p>
          <p className="text-xl md:text-2xl text-gray-300 font-body leading-relaxed mb-10">
            It is a cross-border media story with cultural, professional and community reach.
          </p>
          <p className="text-lg text-white font-bold font-body mb-6">
            Our project connects with:
          </p>
          <ul className="space-y-3 text-gray-300 font-body text-lg mb-10">
            <li className="flex items-start gap-3"><span className="text-electric mt-1">&#9679;</span>The international Belarusian diaspora (UK, EU, US)</li>
            <li className="flex items-start gap-3"><span className="text-electric mt-1">&#9679;</span>IT & founders communities</li>
            <li className="flex items-start gap-3"><span className="text-electric mt-1">&#9679;</span>Entrepreneurs and career-driven professionals</li>
            <li className="flex items-start gap-3"><span className="text-electric mt-1">&#9679;</span>The endurance sports audience</li>
            <li className="flex items-start gap-3"><span className="text-electric mt-1">&#9679;</span>Followers of well-known Belarusian artists, athletes and public figures</li>
            <li className="flex items-start gap-3"><span className="text-electric mt-1">&#9679;</span>Women's leadership communities</li>
          </ul>
          <p className="text-gray-300 font-body text-lg leading-relaxed mb-4">
            We are intentionally building bridges between sport, business, culture and identity.
          </p>
          <p className="text-white font-bold font-body text-lg leading-relaxed">
            This is not just about swimming.<br />
            It's about representation, resilience and visibility.
          </p>
        </Subsection>

        <Subsection number="5" title="WHERE & HOW WE SHOW UP" delay={0.1}>
          <p className="text-xl text-gray-300 font-body leading-relaxed mb-12">
            By June 2026, the project will unfold across multiple touchpoints.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-electric/10 border border-electric/30 p-6 md:p-8"
          >
            <p className="text-xl md:text-2xl font-headline font-bold text-electric">
              Climax: <span className="text-white">The June 2026 English Channel crossing — a high-attention international media moment.</span>
            </p>
          </motion.div>
        </Subsection>

        <Subsection number="6" title="WHAT THE COMPANY RECEIVES" delay={0.2}>
          <p className="text-xl text-gray-300 font-body leading-relaxed mb-4">
            Partnering with Belswimsisters is not logo placement.
          </p>
          <p className="text-xl text-gray-300 font-body leading-relaxed mb-12">
            It is strategic integration into a historic international project with strong values and narrative depth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
              title="DIGITAL & CONTENT INTEGRATION"
              items={[
                'Team Instagram and personal athlete accounts',
                'TikTok preparation content',
                'LinkedIn (professional audience)',
                'Telegram',
                'Live broadcast from the escort boat',
                'Photo & video materials',
                'Final documentary-style content after the crossing',
              ]}
              footnote="This creates repeated, story-driven exposure — not one-off impressions."
              index={1}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 border border-white/5 p-8 md:p-10 mb-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <Award className="w-10 h-10 text-electric flex-shrink-0 mt-1" />
              <h4 className="text-2xl font-headline font-bold">REPUTATIONAL VALUE</h4>
            </div>
            <p className="text-gray-300 font-body text-lg mb-6">The partner is associated with:</p>
            <ul className="space-y-3 text-gray-300 font-body text-lg mb-8">
              <li className="flex items-start gap-3"><span className="text-electric mt-1">&#9679;</span>The first Belarusian women's attempt to cross the English Channel</li>
              <li className="flex items-start gap-3"><span className="text-electric mt-1">&#9679;</span>Discipline and long-term preparation</li>
              <li className="flex items-start gap-3"><span className="text-electric mt-1">&#9679;</span>International ambition</li>
              <li className="flex items-start gap-3"><span className="text-electric mt-1">&#9679;</span>Initiative and leadership</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-2xl md:text-3xl font-headline font-bold text-white leading-tight mb-4">
              This is not a campaign.<br />
              It is a <span className="text-electric">reputational asset</span>.
            </p>
            <p className="text-lg text-gray-300 font-body leading-relaxed">
              The project speaks directly to decision-makers, founders, ambitious professionals and globally mobile communities — an audience where resilience, strategy and courage are deeply valued.
            </p>
          </motion.div>
        </Subsection>
      </div>
    </section>
  )
}

function Subsection({
  number,
  title,
  delay,
  children,
}: {
  number: string
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
        <span className="text-electric font-bold tracking-widest text-sm font-body">{number}.</span>
        <h3 className="text-3xl md:text-5xl font-headline font-bold mt-2">{title}</h3>
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
      className="bg-zinc-900/50 border border-white/5 p-8 hover:border-electric/30 transition-all duration-300"
    >
      <div className="mb-6">
        <Icon className="w-10 h-10 text-electric" />
      </div>
      <h4 className="text-xl font-headline font-bold mb-5">{title}</h4>
      <ul className="space-y-3 text-gray-300 font-body text-sm leading-relaxed">
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
      className="bg-zinc-900/50 border border-white/5 p-8"
    >
      <div className="flex items-start gap-4 mb-6">
        <Icon className="w-10 h-10 text-electric flex-shrink-0 mt-1" />
        <h4 className="text-2xl font-headline font-bold">{title}</h4>
      </div>
      <ul className="space-y-3 text-gray-300 font-body text-base mb-6">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-electric mt-0.5 text-xs">&#9679;</span>
            {item}
          </li>
        ))}
      </ul>
      <p className="text-white/70 font-body text-sm italic border-t border-white/10 pt-4">
        {footnote}
      </p>
    </motion.div>
  )
}
