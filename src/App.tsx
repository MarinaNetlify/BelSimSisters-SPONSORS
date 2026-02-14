import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { Challenge } from './components/Challenge';
import { Team } from './components/Team';
import { Partners } from './components/Partners';
import { VisibilityPlan } from './components/VisibilityPlan';
import { CallToAction } from './components/CallToAction';
export function App() {
  return <main className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-electric selection:text-white">
      <Navigation />
      <Hero />
      <Mission />
      <Challenge />
      <Team />
      <Partners />
      <VisibilityPlan />
      <CallToAction />

      <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-500 text-sm font-body">
        <p>© 2026 BELSWIMSISTERS. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>;
}