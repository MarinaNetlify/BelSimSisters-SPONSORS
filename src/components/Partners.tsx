import React from 'react'
import { motion } from 'framer-motion'
import { Users, Award, Building2, Heart, Layers, MapPin, Clock, DollarSign } from 'lucide-react'
import { useT } from '../i18n/LanguageContext'
import { useSponsorOverlay } from './SponsorOverlayContext'

export function Partners() {
  const { t, tArray } = useT()
  const { showOverlay } = useSponsorOverlay()
  const fundraisingGoalTotal = 60000
  const fundraisingRaised = 980
  const fundraisingProgress = Math.min((fundraisingRaised / fundraisingGoalTotal) * 100, 100)
  const formattedRaised = new Intl.NumberFormat(undefined).format(fundraisingRaised)
  const formattedGoal = new Intl.NumberFormat(undefined).format(fundraisingGoalTotal)

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-zinc-950 text-white relative overflow-hidden z-0">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-headline font-black uppercase max-w-4xl">
            {t('partners.title1')} <span className="text-electric">{t('partners.title2')}</span>
          </h2>
        </div>

        {/* Block 1: Community access */}
        <WhyBlock
          number={1}
          icon={Users}
          title={t('partners.block1Title')}
          description={t('partners.block1Desc')}
          delay={0}
        />

        {/* Block 2: Reputational asset */}
        <WhyBlock
          number={2}
          icon={Award}
          title={t('partners.block2Title')}
          description={t('partners.block2Desc')}
          delay={0.05}
        />

        {/* Block 3: Brand enhancement */}
        <WhyBlock
          number={3}
          icon={Building2}
          title={t('partners.block3Title')}
          description={t('partners.block3Desc')}
          delay={0.1}
        />

        {/* Block 4: Value position */}
        <WhyBlock
          number={4}
          icon={Heart}
          title={t('partners.block4Title')}
          description={t('partners.block4Desc')}
          delay={0.15}
        />

        {/* How We Promote Partners */}
        <Subsection title={t('partners.promotionTitle')} delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PromoCard
              icon={Layers}
              title={t('partners.promo1Title')}
              description={t('partners.promo1Desc')}
              items={tArray('partners.promo1Items')}
              index={0}
            />
            <PromoCard
              icon={MapPin}
              title={t('partners.promo2Title')}
              items={tArray('partners.promo2Items')}
              index={1}
            />
            <PromoCard
              icon={Clock}
              title={t('partners.promo3Title')}
              items={tArray('partners.promo3Items')}
              index={2}
            />
          </div>
        </Subsection>

        {/* Sponsorship Tiers */}
        <Subsection title={t('partners.sponsorshipTitle')} delay={0.25}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10"
          >
            <div className="border-l-4 border-electric pl-4 sm:pl-6">
              <p className="text-lg sm:text-xl md:text-2xl font-headline font-bold text-electric">
                {t('hero.fundraisingGoal')}
              </p>
              <p className="text-sm sm:text-base text-gray-300 font-body mt-2 leading-relaxed">
                {t('hero.fundraisingDesc')}
              </p>
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-300 font-body">
                  <span>{t('hero.fundraisingRaisedLabel')}</span>
                  <span className="text-white font-semibold">€{formattedRaised} / €{formattedGoal}</span>
                </div>
                <div
                  className="mt-2 h-2.5 sm:h-3 bg-white/10 rounded-full overflow-hidden"
                  role="progressbar"
                  aria-valuenow={Math.round(fundraisingProgress)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="h-full bg-electric transition-all duration-500"
                    style={{ width: `${fundraisingProgress}%` }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(tArray('partners.tiers') as unknown as { name: string; price: string; tagline: string; covers: string[]; impact: string }[]).map((tier, i) => (
              <TierCard key={i} tier={tier} index={i} />
            ))}
          </div>
          <p className="text-gray-400 font-body text-sm italic mt-6 text-center">
            {t('partners.tiersNote')}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={showOverlay}
              className="inline-block bg-electric text-white px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl md:text-2xl font-headline font-bold tracking-wider hover:bg-white hover:text-black transition-colors duration-300 skew-x-[-10deg] shadow-2xl cursor-pointer"
            >
              <span className="block skew-x-[10deg]">{t('partners.ctaButton')}</span>
            </button>
          </motion.div>
        </Subsection>
      </div>
    </section>
  )
}

function WhyBlock({
  number,
  icon: Icon,
  title,
  description,
  delay,
  children,
}: {
  number: number
  icon: any
  title: string
  description: string
  delay: number
  children?: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      className="mb-12 sm:mb-16"
    >
      <div className="bg-zinc-900/50 border border-white/5 p-6 sm:p-10 hover:border-electric/30 transition-all duration-300">
        <div className="flex items-start gap-4 mb-4">
          <span className="text-electric font-headline font-black text-2xl sm:text-3xl">{number}.</span>
          <div className="flex items-center gap-3">
            <Icon className="w-7 h-7 text-electric flex-shrink-0" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-headline font-bold">{title}</h3>
          </div>
        </div>
        <p className={`text-base sm:text-lg text-gray-300 font-body leading-relaxed ml-0 sm:ml-12 ${children ? 'mb-8' : ''}`}>
          {description}
        </p>
        {children && (
          <div className="ml-0 sm:ml-12">
            {children}
          </div>
        )}
      </div>
    </motion.div>
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

function PromoCard({
  icon: Icon,
  title,
  description,
  items,
  index,
}: {
  icon: any
  title: string
  description?: string
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
      <h4 className="text-xl font-headline font-bold mb-4">{title}</h4>
      {description && (
        <p className="text-sm text-gray-400 font-body leading-relaxed mb-5">{description}</p>
      )}
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

const TIER_COLORS = [
  { border: '#00D1FF', shadow: 'rgba(0, 209, 255, 0.35)', text: '#00D1FF' }, // Nutrition (Water/Energy)
  { border: '#C0C0C0', shadow: 'rgba(192, 192, 192, 0.35)', text: '#C0C0C0' }, // Equipment (Silver)
  { border: '#A855F7', shadow: 'rgba(168, 85, 247, 0.35)', text: '#A855F7' }, // Brand & Media (Creative)
  { border: '#FF4D00', shadow: 'rgba(255, 77, 0, 0.35)', text: '#FF4D00' }, // Safety (Rescue Orange)
  { border: '#10B981', shadow: 'rgba(16, 185, 129, 0.35)', text: '#10B981' }, // Operations (Success Green)
  { border: '#FFD700', shadow: 'rgba(255, 215, 0, 0.35)', text: '#FFD700' }, // Mission (Gold/Crown)
];

function TierCard({ tier, index }: { tier: { name: string; price: string; tagline: string; covers: string[]; impact: string }; index: number }) {
  const { t } = useT();
  const [hovered, setHovered] = React.useState(false);
  const colors = TIER_COLORS[index] || TIER_COLORS[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-zinc-900/50 border p-5 sm:p-8 flex flex-col cursor-pointer h-full"
      style={{
        borderColor: hovered ? colors.border : 'rgba(255,255,255,0.05)',
        boxShadow: hovered ? `0 0 20px ${colors.shadow}, 0 0 40px ${colors.shadow}` : 'none',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col items-center text-center mb-6">
        <DollarSign
          className="w-10 h-10 mb-4 transition-colors duration-300"
          style={{ color: hovered ? colors.text : '#0066FF' }}
        />
        <h5
          className="text-xl sm:text-2xl font-headline font-bold mb-2 transition-colors duration-300"
          style={{ color: hovered ? colors.text : '#FFFFFF' }}
        >
          {tier.name}
        </h5>
        <div
          className="text-3xl sm:text-4xl font-headline font-black transition-colors duration-300 mb-3"
          style={{ color: hovered ? colors.text : '#0066FF' }}
        >
          {tier.price}
        </div>
        <p className="text-sm font-bold text-white font-body leading-relaxed">
          {tier.tagline}
        </p>
      </div>

      <div className="flex-1">
        <div className="mb-6">
          <h6 className="text-xs uppercase tracking-widest text-electric font-headline font-bold mb-3">{t('partners.coversLabel')}</h6>
          <ul className="space-y-2">
            {tier.covers.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-gray-300 font-body leading-relaxed">
                <span className="text-electric mt-1 flex-shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h6 className="text-xs uppercase tracking-widest text-electric font-headline font-bold mb-2">{t('partners.impactLabel')}</h6>
          <p className="text-xs text-gray-400 font-body leading-relaxed italic">
            {tier.impact}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
