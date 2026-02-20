import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Briefcase, Trophy, Mic, Users, Heart, Share2, Award, Shirt, Instagram, Tv, DollarSign, X, Play } from 'lucide-react'
import { useT } from '../i18n/LanguageContext'

export function Partners() {
  const { t, tArray } = useT()
  const [showOverlay, setShowOverlay] = useState(false)

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
    <section className="py-16 sm:py-24 md:py-32 bg-zinc-950 text-white relative overflow-hidden z-0">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-headline font-black uppercase max-w-4xl">
            {t('partners.title1')} <span className="text-electric">{t('partners.title2')}</span>
          </h2>
        </div>

        <Subsection title={t('partners.audienceTitle')} delay={0}>
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
          <p className="text-base sm:text-xl text-gray-300 font-body leading-relaxed mb-8 sm:mb-12">
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
            className="mb-8"
          >
            <h4 className="text-xl sm:text-2xl md:text-3xl font-headline font-bold text-white mb-6">
              {t('partners.sponsorshipTitle')}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(tArray('partners.tiers') as unknown as { name: string; price: string }[]).map((tier, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-zinc-900/50 border border-white/5 hover:border-electric/30 transition-all duration-300 p-5 sm:p-8 flex flex-col items-center text-center"
                >
                  <DollarSign className="w-10 h-10 text-electric mb-4" />
                  <h5 className="text-xl font-headline font-bold text-white mb-3">{tier.name}</h5>
                  <div className="text-4xl font-headline font-black text-electric">{tier.price}</div>
                </motion.div>
              ))}
            </div>
            <p className="text-gray-400 font-body text-sm italic mt-6 text-center">
              {t('partners.tiersNote')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mt-12"
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-headline font-bold text-white leading-tight">
              {t('partners.notCampaign')}<br />
              {t('partners.itIsA')} <span className="text-electric">{t('partners.reputationalAsset')}</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={() => setShowOverlay(true)}
              className="inline-block bg-electric text-white px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl md:text-2xl font-headline font-bold tracking-wider hover:bg-white hover:text-black transition-colors duration-300 skew-x-[-10deg] shadow-2xl cursor-pointer"
            >
              <span className="block skew-x-[10deg]">{t('partners.ctaButton')}</span>
            </button>
          </motion.div>
        </Subsection>
      </div>

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setShowOverlay(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-electric/30 rounded-lg shadow-2xl shadow-electric/10 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-electric/10 via-transparent to-transparent pointer-events-none" />

              <button
                onClick={() => setShowOverlay(false)}
                className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative p-6 sm:p-10 flex flex-col items-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', damping: 15 }}
                  className="w-20 h-20 rounded-full bg-electric/20 border-2 border-electric flex items-center justify-center mb-8"
                >
                  <Play className="w-8 h-8 text-electric ml-1" />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl md:text-2xl font-headline font-bold text-white leading-relaxed mb-6"
                >
                  {t('partners.overlayMessage')}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <a
                    href="https://www.instagram.com/belswimsisters/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-electric text-white px-8 py-3 font-headline font-bold tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </a>
                  <a
                    href="mailto:romanovich.m.a@gmail.com"
                    className="inline-flex items-center gap-2 border border-electric text-electric px-8 py-3 font-headline font-bold tracking-wider hover:bg-electric hover:text-white transition-colors duration-300"
                  >
                    {t('partners.emailButton')}
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
      className="mb-16 sm:mb-20 md:mb-24 last:mb-0"
    >
      <div className="mb-8">
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-headline font-bold">{title}</h3>
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
      className="bg-zinc-900/50 border border-white/5 p-5 sm:p-8 hover:border-electric/30 transition-all duration-300 flex flex-col"
    >
      <div className="mb-4 sm:mb-6">
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
      className="bg-zinc-900/50 border border-white/5 p-5 sm:p-8 flex flex-col"
    >
      <div className="flex items-start gap-4 mb-6">
        <Icon className="w-10 h-10 text-electric flex-shrink-0 mt-1" />
        <h4 className="text-xl font-headline font-bold">{title}</h4>
      </div>
      <ul className="space-y-3 text-gray-300 font-body text-sm leading-relaxed mb-6 flex-1">
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
