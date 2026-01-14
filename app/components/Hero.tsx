import React from 'react';

export default function Hero() {
  return (
    <section className="bg-[#C4C4C4] w-full min-h-[500px] py-16 px-6 md:px-12 flex flex-col items-center md:items-start justify-center text-center md:text-left">
      <h1 className="text-4xl md:text-6xl font-bold text-[#07484A] mb-4 font-serif">
        Exclusive Deals of <br /> Furniture Collection
      </h1>
      <p className="text-[#07484A] text-lg md:text-xl mb-8 font-sans">
        Explore different categories. Find the best deals.
      </p>
      <button className="bg-[#70908B] text-white px-8 py-3 rounded-md font-bold text-lg hover:opacity-90 transition-opacity uppercase cursor-pointer">
        Shop Now
      </button>
    </section>
  );
}
