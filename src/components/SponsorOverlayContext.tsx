import React, { createContext, useContext, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, Copy, Check } from 'lucide-react'

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

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
      const el = document.createElement('textarea')
      el.value = text
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="ml-2 p-1 rounded hover:bg-white/10 transition-colors"
      title="Copy to clipboard"
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-400" />
      ) : (
        <Copy className="w-4 h-4 text-gray-400 hover:text-white" />
      )}
    </button>
  )
}

function SponsorOverlay({ visible, onClose }: { visible: boolean; onClose: () => void }) {
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
            className="relative w-full max-w-md bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-electric/30 rounded-2xl shadow-2xl shadow-electric/10 overflow-hidden"
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
                className="w-16 h-16 rounded-full bg-electric/20 border-2 border-electric flex items-center justify-center mb-6"
              >
                <Heart className="w-7 h-7 text-electric" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-3xl font-headline font-bold text-white leading-relaxed mb-2"
              >
                Support BelSwimSisters 💙
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full mt-6 space-y-4"
              >
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-left">
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">IBAN</p>
                      <div className="flex items-center justify-between">
                        <p className="text-white font-mono text-sm sm:text-base font-semibold tracking-wide">LT45 3500 0100 1885 1755</p>
                        <CopyButton text="LT453500010018851755" />
                      </div>
                    </div>
                    <div className="border-t border-white/10 pt-3">
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Name</p>
                      <div className="flex items-center justify-between">
                        <p className="text-white font-semibold">VšĮ BelSwimSisters</p>
                        <CopyButton text="VšĮ BelSwimSisters" />
                      </div>
                    </div>
                    <div className="border-t border-white/10 pt-3">
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Reference</p>
                      <div className="flex items-center justify-between">
                        <p className="text-white font-semibold">Support</p>
                        <CopyButton text="Support" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-5 text-sm text-gray-400"
              >
                Thank you for your support! Every contribution counts.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
