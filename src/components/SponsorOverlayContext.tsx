import React, { createContext, useContext, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play, Instagram } from 'lucide-react'
import { useT } from '../i18n/LanguageContext'

interface SponsorOverlayContextType {
  showOverlay: () => void
}

const SponsorOverlayContext = createContext<SponsorOverlayContextType>({
  showOverlay: () => {},
})

export function useSponsorOverlay() {
  return useContext(SponsorOverlayContext)
}

export function SponsorOverlayProvider({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false)

  return (
    <SponsorOverlayContext.Provider value={{ showOverlay: () => setVisible(true) }}>
      {children}
      <SponsorOverlay visible={visible} onClose={() => setVisible(false)} />
    </SponsorOverlayContext.Provider>
  )
}

function SponsorOverlay({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const { t } = useT()

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={onClose}
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
              onClick={onClose}
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
  )
}
