import React from 'react';
import Header from '../components/Header';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#C4C4C4] font-sans">
      <Header />
      <main className="flex items-center justify-center h-[calc(100vh-100px)] text-[#1F4B43]">
        <h1 className="text-4xl font-bold">Landing Page Content</h1>
      </main>
    </div>
  );
}
