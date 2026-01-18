import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import SpecialPackages from './components/SpecialPackages';
import StudioDesign from './components/StudioDesign';
import PopularProducts from './components/PopularProducts';
import Newsletter from './components/Newsletter';
import Testimonials from './components/Testimonials';
import Benefits from './components/Benefits';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#C4C4C4] font-sans">
      <Header />
      <main>
        <Hero />
        <CategorySection />
        <PopularProducts />
        <SpecialPackages />
        <StudioDesign />
        <Benefits />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
