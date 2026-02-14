import React, { Children } from 'react';
import { motion } from 'framer-motion';
export function Mission() {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };
  return (
    <section className="relative py-32 bg-zinc-900 clip-diagonal overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-100px'
          }}
          className="max-w-4xl">

          <motion.h2
            variants={itemVariants}
            className="text-electric text-xl font-bold tracking-widest mb-8">

            THE MISSION
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-4xl md:text-6xl font-headline font-bold leading-tight mb-12">

            SIX WOMEN. ONE MISSION.{' '}
            <span className="text-electric">CROSS THE ENGLISH CHANNEL</span> AS
            A RELAY TEAM.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-8 text-xl md:text-2xl text-gray-300 font-light max-w-2xl">

            <p>
              No wetsuits. No shortcuts. Just grit, cold water, and an
              unbreakable bond.
            </p>
            <p>
              We are{' '}
              <span className="text-white font-bold">Belswimsisters</span>. We
              represent Belarus. We represent every woman who was told she
              couldn't.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>);

}