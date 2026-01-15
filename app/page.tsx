import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import OurOwnCreation from './components/OurOwnCreation';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#C4C4C4] font-sans">
      <Header />
      <main>
        <Hero />
        <CategorySection />
        <OurOwnCreation />
      </main>
    </div>
  );
}
