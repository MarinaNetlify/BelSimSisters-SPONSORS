import React from 'react'
import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { useLanguage, useT } from '../i18n/LanguageContext'
import { Language } from '../i18n/translations'
import { useSponsorOverlay } from './SponsorOverlayContext'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const { language, setLanguage } = useLanguage()
  const { t } = useT()
  const { showOverlay } = useSponsorOverlay()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  const langButtons: { label: string; value: Language }[] = [
    { label: 'ENG', value: 'en' },
    { label: 'RU', value: 'ru' },
    { label: 'BY', value: 'by' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-3 sm:py-4 transition-colors duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span
            className="font-headline font-bold text-lg sm:text-2xl tracking-tighter text-white cursor-pointer"
            onClick={() => setLanguage('en')}
          >
            BELSWIM<span className="text-electric">SISTERS</span>
          </span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-3">
          {langButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => setLanguage(btn.value)}
              className={`px-2 sm:px-3 py-1 border text-[10px] sm:text-xs font-headline font-bold tracking-wider transition-colors duration-300 rounded ${
                language === btn.value
                  ? 'border-electric text-electric bg-electric/10'
                  : 'border-white/40 text-white hover:bg-white/10'
              }`}
            >
              {btn.label}
            </button>
          ))}

          <a
            href="https://www.instagram.com/belswimsisters/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 text-white hover:text-electric transition-colors duration-300 ml-1"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          <button
            onClick={showOverlay}
            className="px-3 md:px-6 py-1.5 md:py-2 bg-electric text-white font-headline font-bold text-[10px] md:text-sm tracking-wider hover:bg-white hover:text-black transition-colors duration-300 md:skew-x-[-10deg] ml-1 sm:ml-2 cursor-pointer"
          >
            <span className="block md:skew-x-[10deg]">{t('nav.donate')}</span>
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
