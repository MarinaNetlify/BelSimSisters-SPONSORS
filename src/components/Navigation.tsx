import React from 'react'
import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useLanguage, useT } from '../i18n/LanguageContext'
import { Language } from '../i18n/translations'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const { language, setLanguage } = useLanguage()
  const { t } = useT()

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
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-colors duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span
            className="font-headline font-bold text-2xl tracking-tighter text-white cursor-pointer"
            onClick={() => setLanguage('en')}
          >
            BELSWIM<span className="text-electric">SISTERS</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          {langButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => setLanguage(btn.value)}
              className={`px-3 py-1 border text-xs font-headline font-bold tracking-wider transition-colors duration-300 rounded ${
                language === btn.value
                  ? 'border-electric text-electric bg-electric/10'
                  : 'border-white/40 text-white hover:bg-white/10'
              }`}
            >
              {btn.label}
            </button>
          ))}

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-6 py-2 bg-electric text-white font-headline font-bold tracking-wider hover:bg-white hover:text-black transition-colors duration-300 skew-x-[-10deg] ml-2"
          >
            <span className="block skew-x-[10deg]">{t('nav.donate')}</span>
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
