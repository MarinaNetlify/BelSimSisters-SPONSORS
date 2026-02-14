import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Briefcase, Trophy, Mic, Users, Heart, Share2, Award, Shirt, Instagram, Tv, DollarSign } from 'lucide-react'
import { useT } from '../i18n/LanguageContext'

export function Partners() {
  const { t, tArray } = useT()

  const AUDIENCE_ITEMS = [
    { icon: Globe, label: t('partners.audience.diaspora') },
    { icon: Briefcase, label: t('partners.audience.it') },
    { icon: Trophy, label: t('partners.audience.sports') },
    { icon: Users, label: t('partners.audience.entrepreneurs') },
    { icon: Mic, label: t('partners.audience.artists') },
    { icon: Heart, label: t('partners.audience.women') },
  ]

  const ENGAGEMENT_ITEMS = [
    { icon: Tv, label: t('partners.engagement.media') },
    { icon: Trophy, label: t('partners.engagement.athletes') },
    { icon: Mic, label: t('partners.engagement.musicians') },
    { icon: Briefcase, label: t('partners.engagement.founders') },
  ]

  return (
    <section className="py-32 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-headline font-black uppercase max-w-4xl">
            {t('partners.title1')} <span className="text-electric">{t('partners.title2')}</span>
          </h2>
        </div>

        <Subsection title={t('partners.audienceTitle')} delay={0}>
          <p className="text-xl text-gray-300 font-body leading-relaxed mb-10">
            {t('partners.audienceDesc')}
          </p>

          <p className="text-lg text-white font-bold font-body mb-6">{t('partners.reach')}</p>
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

          <p className="text-lg text-white font-bold font-body mb-6">{t('partners.engage')}</p>
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

        <Subsection title={t('partners.channelsTitle')} delay={0.1}>
          <p className="text-xl text-gray-300 font-body leading-relaxed mb-12">
            {t('partners.channelsDesc')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ChannelCard
              icon={Instagram}
              title={t('partners.digital')}
              items={tArray('partners.digitalItems')}
              index={0}
            />
            <ChannelCard
              icon={Tv}
              title={t('partners.media')}
              items={tArray('partners.mediaItems')}
              index={1}
            />
            <ChannelCard
              icon={Users}
              title={t('partners.community')}
              items={tArray('partners.communityItems')}
              index={2}
            />
          </div>
        </Subsection>

        <Subsection title={t('partners.receivesTitle')} delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <BenefitBlock
              icon={Shirt}
              title={t('partners.brandVisibility')}
              items={tArray('partners.brandVisibilityItems')}
              footnote={t('partners.brandVisibilityFootnote')}
              index={0}
            />
            <BenefitBlock
              icon={Share2}
              title={t('partners.digitalContent')}
              items={tArray('partners.digitalContentItems')}
              footnote={t('partners.digitalContentFootnote')}
              index={1}
            />
            <BenefitBlock
              icon={Award}
              title={t('partners.reputationalValue')}
              items={tArray('partners.reputationalValueItems')}
              footnote={t('partners.reputationalValueFootnote')}
              index={2}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-electric/10 border-2 border-electric p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <DollarSign className="w-12 h-12 text-electric flex-shrink-0" />
              <div>
                <h4 className="text-2xl md:text-3xl font-headline font-bold text-white">
                  {t('partners.sponsorshipTitle')}
                </h4>
                <p className="text-gray-300 font-body mt-1">{t('partners.sponsorshipDesc')}</p>
              </div>
            </div>
            <div className="text-5xl md:text-6xl font-headline font-black text-electric">
              {t('partners.sponsorshipPrice')}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mt-12"
          >
            <p className="text-2xl md:text-3xl font-headline font-bold text-white leading-tight">
              {t('partners.notCampaign')}<br />
              {t('partners.itIsA')} <span className="text-electric">{t('partners.reputationalAsset')}</span>.
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
