import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
const TEAM_MEMBERS = [
{
  name: 'ALINA K.',
  role: 'LEAD SWIMMER'
},
{
  name: 'MARYIA S.',
  role: 'NAVIGATOR'
},
{
  name: 'DARYA V.',
  role: 'PACE SETTER'
},
{
  name: 'KATSIARYNA L.',
  role: 'ENDURANCE'
},
{
  name: 'VOLHA M.',
  role: 'SPRINT SPECIALIST'
},
{
  name: 'NATALLIA R.',
  role: 'TEAM CAPTAIN'
}];

export function Team() {
  return (
    <section className="py-32 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{
            opacity: 0,
            x: -50
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          viewport={{
            once: true
          }}
          className="text-6xl md:text-8xl font-headline font-black tracking-tighter mb-20 text-right">

          THE TEAM
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, index) =>
          <TeamCard key={index} member={member} index={index} />
          )}
        </div>
      </div>
    </section>);

}
function TeamCard({
  member,
  index






}: {member: {name: string;role: string;};index: number;}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9
      }}
      whileInView={{
        opacity: 1,
        scale: 1
      }}
      viewport={{
        once: true
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1
      }}
      className="group relative bg-zinc-900 aspect-[3/4] overflow-hidden">

      {/* Silhouette Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center bg-zinc-800 group-hover:bg-zinc-800/50 transition-colors duration-500">
        <User className="w-48 h-48 text-zinc-700 group-hover:text-electric/50 transition-colors duration-500" />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/50 to-transparent">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-3xl font-headline font-bold text-white mb-2 group-hover:text-electric transition-colors">
            {member.name}
          </h3>
          <p className="text-sm font-body tracking-widest text-gray-400 border-l-2 border-electric pl-3">
            {member.role}
          </p>
        </div>
      </div>

      {/* Hover Border */}
      <div className="absolute inset-0 border-2 border-electric opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>);

}