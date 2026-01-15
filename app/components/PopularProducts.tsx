'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ShoppingBag, Armchair, Lamp, Sofa, ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  { id: 1, name: 'Velvet Sofa', description: 'Cozy 3-seater', price: '$1200', icon: Sofa },
  { id: 2, name: 'Modern Lamp', description: 'Minimalist desk light', price: '$150', icon: Lamp },
  { id: 3, name: 'Armchair', description: 'Light single chair', price: '$145', icon: Armchair },
  { id: 4, name: 'Coffee Table', description: 'Oak wood finish', price: '$300', icon: ShoppingBag },
  { id: 5, name: 'Velvet Sofa', description: 'Cozy 3-seater', price: '$1200', icon: Sofa },
  { id: 6, name: 'Modern Lamp', description: 'Minimalist desk light', price: '$150', icon: Lamp },
  { id: 7, name: 'Armchair', description: 'Light single chair', price: '$145', icon: Armchair },
  { id: 8, name: 'Coffee Table', description: 'Oak wood finish', price: '$300', icon: ShoppingBag },
];

export default function PopularProducts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth / 2; // Scroll half a screen width
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      // Wait a tick to ensure layout is ready
      const timeoutId = setTimeout(() => handleScroll(), 0);
      return () => {
        container.removeEventListener('scroll', handleScroll);
        clearTimeout(timeoutId);
      };
    }
  }, []);

  return (
    <section className="hidden lg:block relative w-full overflow-hidden bg-white">
      {/* Background Image Placeholder */}
      <div
        className="absolute top-1/2 -translate-y-1/2 left-[-463px] w-[926px] h-[1098px] bg-[#E0EFF6] opacity-50 flex items-center justify-center pointer-events-none"
        style={{ borderRadius: '0 50% 50% 0' }}
      >
        <span className="text-[#07484A] text-2xl font-bold ml-[200px]">Background Image</span>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-[150px] py-20 relative z-10">
        <h2 className="text-[#07484A] font-serif text-[64px] font-normal mb-16 tracking-wide text-center">Popular Products</h2>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={`${product.id}-${index}`}
                className="flex-shrink-0 w-[calc(25%-24px)] min-w-[300px] snap-start group bg-[#CAF3E5] rounded-[30px] p-8 hover:shadow-xl transition-all duration-300 h-[460px] flex flex-col justify-between"
              >
                <div className="flex-1 flex items-center justify-center">
                    {/* Placeholder for product image - using Icon */}
                    <Icon className="w-40 h-40 text-[#1F4B43] drop-shadow-sm" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <h3 className="text-[28px] font-medium text-[#1F4B43] font-sans">{product.name}</h3>
                    <p className="text-[#70908B] text-lg">{product.description}</p>
                    <p className="text-[#1F4B43] font-bold text-2xl mt-2">{product.price}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Scrollbar & Controls */}
        <div className="mt-8 relative h-[70px] w-full flex flex-col justify-end">
             {/* Track */}
             <div className="absolute top-[6px] left-0 right-0 h-[6px] bg-[#07484A]"></div>

             {/* Thumb */}
             <div
                 className="absolute top-[3px] h-[12px] bg-[#70908B]"
                 style={{
                     width: '120px',
                     left: `calc(${scrollProgress}% - ${scrollProgress / 100 * 120}px)`
                 }}
             ></div>

             {/* Buttons (Bottom Right) */}
             <div className="flex justify-end gap-6 mt-4 pr-0">
                <button
                    onClick={() => scroll('left')}
                    className="w-[40px] h-[40px] rounded-full bg-[#E0EFF6] flex items-center justify-center hover:opacity-80 transition-opacity"
                    aria-label="Scroll Left"
                >
                    <ChevronLeft className="text-[#07484A] w-6 h-6" />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="w-[40px] h-[40px] rounded-full bg-[#F9D9DA] flex items-center justify-center hover:opacity-80 transition-opacity"
                    aria-label="Scroll Right"
                >
                    <ChevronRight className="text-[#07484A] w-6 h-6" />
                </button>
             </div>
        </div>
      </div>
    </section>
  );
}
