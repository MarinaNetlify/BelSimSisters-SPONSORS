import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Video, Radio, Tv, Film } from 'lucide-react';
const TIMELINE = [
{
  phase: 'PHASE 1',
  title: 'INSTAGRAM CAMPAIGN',
  date: 'NOW - JUNE 2026',
  icon: Instagram,
  desc: 'Daily training updates, athlete profiles, and behind-the-scenes content build our core audience.'
},
{
  phase: 'PHASE 2',
  title: 'TIKTOK SERIES',
  date: 'JAN 2026',
  icon: Video,
  desc: 'Viral challenges and educational content about cold water swimming to reach Gen Z demographics.'
},
{
  phase: 'PHASE 3',
  title: 'LIVE STREAM EVENT',
  date: 'JUNE 2026',
  icon: Radio,
  desc: 'Real-time broadcasting of the swim attempt with commentary and live tracking.'
},
{
  phase: 'PHASE 4',
  title: 'MEDIA PARTNERSHIPS',
  date: 'ONGOING',
  icon: Tv,
  desc: 'Featured interviews on national TV, sports podcasts, and digital news outlets.'
},
{
  phase: 'PHASE 5',
  title: 'DOCUMENTARY',
  date: 'LATE 2026',
  icon: Film,
  desc: 'Full-length film documenting the journey from training to the English Channel crossing.'
}];

export function VisibilityPlan() {
  return (
    <section className="py-32 bg-white text-black relative clip-diagonal-reverse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-8xl font-headline font-black tracking-tighter">
            VISIBILITY PLAN
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto font-body">
            A strategic roadmap to maximize impact and engagement across all
            channels.
          </p>
        </div>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {TIMELINE.map((item, index) =>
            <TimelineItem key={index} item={item} index={index} />
            )}
          </div>
        </div>
      </div>
    </section>);

}
function TimelineItem({ item, index }: {item: any;index: number;}) {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isEven ? -50 : 50
      }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
      viewport={{
        once: true,
        margin: '-100px'
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1
      }}
      className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-start md:items-center`}>

      {/* Content Side */}
      <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12 mb-4 md:mb-0">
        <div
          className={`flex flex-col ${isEven ? 'md:items-start' : 'md:items-end'} text-left ${isEven ? 'md:text-left' : 'md:text-right'}`}>

          <span className="text-electric font-bold tracking-widest text-sm mb-2">
            {item.phase} // {item.date}
          </span>

          {/* // {item.date}</span> */}
          <h3 className="text-3xl md:text-4xl font-headline font-bold mb-4">
            {item.title}
          </h3>
          <p className="text-gray-600 font-body leading-relaxed max-w-md">
            {item.desc}
          </p>
        </div>
      </div>

      {/* Center Marker */}
      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 bg-electric rounded-full border-4 border-white z-10 shadow-lg">
        <div className="w-2 h-2 bg-white rounded-full" />
      </div>

      {/* Empty Side for Balance */}
      <div className="hidden md:block w-1/2" />
    </motion.div>);

}