import React from 'react'
import { motion } from 'framer-motion'

export function Mission() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }
  return (
    <section className="relative py-32 bg-zinc-900 clip-diagonal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-4xl"
        >
          <motion.h2
            variants={itemVariants}
            className="text-electric text-xl font-bold tracking-widest mb-8"
          >
            THE MISSION
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-4xl md:text-6xl font-headline font-bold leading-tight mb-12"
          >
            SIX WOMEN. ONE MISSION. ONE TEAM.{' '}
            <span className="text-electric">CROSS THE ENGLISH CHANNEL</span> AS
            THE FIRST BELARUSIANS.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-8 text-xl md:text-2xl text-gray-300 font-light max-w-2xl"
          >
            <p>
              We are{' '}
              <span className="text-white font-bold">BELSWIMSISTERS</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
