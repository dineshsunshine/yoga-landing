import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Institute } from './components/Institute';
import { Agenda } from './components/Agenda';
import { Bonuses } from './components/Bonuses';
import { Coach } from './components/Coach';
import { Footer } from './components/Footer';
import { StickyEnrollButton } from './components/StickyEnrollButton';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Hero />
      <Institute />
      <Features />
      <Agenda />
      <Bonuses />
      <Coach />
      <Footer />
      <StickyEnrollButton />
    </div>
  );
}

export default App;