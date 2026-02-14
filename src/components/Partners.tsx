import React from 'react';
import { motion } from 'framer-motion';
import { Globe, TrendingUp, Heart, Megaphone, Users, Award } from 'lucide-react';
const BENEFITS = [
{
  icon: Globe,
  title: 'GLOBAL REACH',
  desc: 'Connect with audiences across Europe and beyond through our international campaign.'
},
{
  icon: TrendingUp,
  title: 'BRAND ALIGNMENT',
  desc: 'Associate your brand with resilience, female empowerment, and elite performance.'
},
{
  icon: Heart,
  title: 'EMOTIONAL IMPACT',
  desc: 'Be part of a story that inspires millions to overcome their own challenges.'
},
{
  icon: Megaphone,
  title: 'MEDIA COVERAGE',
  desc: 'Guaranteed exposure through our network of media partners and press releases.'
},
{
  icon: Users,
  title: 'COMMUNITY',
  desc: 'Direct engagement with a passionate community of sports and lifestyle enthusiasts.'
},
{
  icon: Award,
  title: 'LEGACY',
  desc: 'Put your name on a historic achievement that will be remembered for decades.'
}];

export function Partners() {
  return (
    <section className="py-32 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-headline font-black uppercase max-w-3xl">
            Why Partner <span className="text-electric">With Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((benefit, index) =>
          <BenefitCard key={index} benefit={benefit} index={index} />
          )}
        </div>
      </div>
    </section>);

}
function BenefitCard({ benefit, index }: {benefit: any;index: number;}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1
      }}
      className="group bg-zinc-900/50 border border-white/5 p-8 hover:bg-electric hover:border-electric transition-all duration-300">

      <div className="mb-6">
        <benefit.icon className="w-12 h-12 text-electric group-hover:text-white transition-colors duration-300" />
      </div>

      <h3 className="text-2xl font-headline font-bold mb-4 group-hover:text-black transition-colors duration-300">
        {benefit.title}
      </h3>

      <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500 ease-in-out">
        <p className="text-gray-300 group-hover:text-black/80 font-body leading-relaxed pt-2 pb-4">
          {benefit.desc}
        </p>
      </div>

      <div className="w-8 h-1 bg-electric group-hover:bg-black transition-colors duration-300" />
    </motion.div>);

}