import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
export function Hero() {
  const { days, hours, minutes, seconds } = useCountdown('2026-06-01T00:00:00');
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-50" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-electric/5 skew-x-12 transform origin-top-right" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
        <motion.div
          initial={{
            opacity: 0,
            x: -100
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
          className="mb-2">

          <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter text-white mix-blend-difference">
            WE SWIM.
          </h1>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 100
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: 'easeOut'
          }}
          className="relative">

          <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter text-transparent text-stroke hover:text-electric transition-colors duration-500">
            WE MAKE HISTORY.
          </h1>

          {/* Diagonal Slash */}
          <motion.div
            initial={{
              scaleX: 0
            }}
            animate={{
              scaleX: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.6
            }}
            className="relative mt-2 w-full h-2 md:h-4 bg-electric -skew-y-2 origin-left" />

        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.8
          }}
          className="mt-12 md:mt-24 grid grid-cols-4 gap-4 max-w-2xl">

          <CountdownBlock value={days} label="DAYS" />
          <CountdownBlock value={hours} label="HRS" />
          <CountdownBlock value={minutes} label="MINS" />
          <CountdownBlock value={seconds} label="SECS" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1.5,
          duration: 1
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2">

        <motion.div
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 2
          }}>

          <ChevronDown className="w-10 h-10 text-electric" />
        </motion.div>
      </motion.div>
    </section>);

}
function CountdownBlock({ value, label }: {value: number;label: string;}) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold text-white tabular-nums">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-xs md:text-sm font-body tracking-widest text-gray-400 mt-1">
        {label}
      </div>
    </div>);

}