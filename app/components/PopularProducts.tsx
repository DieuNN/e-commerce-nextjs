'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ShoppingBag, Armchair, Lamp, Sofa, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const products = [
  { id: 1, name: 'Velvet Sofa', description: 'Cozy 3-seater', price: '$1200', image: '/products/sofa-1.jpg', bgColor: '#CAF3E5' },
  { id: 2, name: 'Modern Lamp', description: 'Minimalist desk light', price: '$150', image: '/products/lamp-1.jpg', bgColor: '#E0EFF6' },
  { id: 3, name: 'Armchair', description: 'Light single chair', price: '$145', image: '/products/armchair-1.jpg', bgColor: '#F9D9DA' },
  { id: 4, name: 'Coffee Table', description: 'Oak wood finish', price: '$300', image: '/products/coffee-table-1.jpg', bgColor: '#F4F4F4' },
  { id: 5, name: 'Velvet Sofa', description: 'Cozy 3-seater', price: '$1200', image: '/products/sofa-1.jpg', bgColor: '#CAF3E5' },
  { id: 6, name: 'Modern Lamp', description: 'Minimalist desk light', price: '$150', image: '/products/lamp-1.jpg', bgColor: '#E0EFF6' },
  { id: 7, name: 'Armchair', description: 'Light single chair', price: '$145', image: '/products/armchair-1.jpg', bgColor: '#F9D9DA' },
  { id: 8, name: 'Coffee Table', description: 'Oak wood finish', price: '$300', image: '/products/coffee-table-1.jpg', bgColor: '#F4F4F4' },
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
      // Scroll by approximately one card width + gap
      // On mobile, clientWidth is usually the card width + padding
      const scrollAmount = clientWidth > 640 ? clientWidth / 2 : clientWidth - 48;
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
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background Image Placeholder */}
      <div
        className="absolute top-1/2 -translate-y-1/2 left-[-463px] w-[926px] h-[1098px] opacity-50 flex items-center justify-center pointer-events-none hidden lg:block overflow-hidden"
      >
        <Image
          src="/popular-chair.png"
          alt="Popular Product Background"
          fill
          className="object-cover opacity-60 mix-blend-multiply"
        />
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-4 py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 xl:px-[150px] xl:py-20 relative z-10">
        <h2 className="text-[#07484A] font-serif text-4xl md:text-5xl lg:text-[64px] font-normal mb-8 xl:mb-16 tracking-wide text-center">Popular Products</h2>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-6 lg:gap-8 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {products.map((product, index) => {
            return (
              <div
                key={`${product.id}-${index}`}
                className="flex-shrink-0 w-[237px] md:w-[416px] snap-start group rounded-[30px] overflow-hidden hover:shadow-xl transition-all duration-300 h-[340px] md:h-[585px] flex flex-col justify-between"
                style={{ backgroundColor: product.bgColor }}
              >
                {/* Image Container */}
                <div className="relative w-[197px] h-[116px] md:w-[351px] md:h-[270px] mx-auto mt-6 md:mt-8">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-2xl md:rounded-[20px]"
                    sizes="(max-width: 768px) 197px, 351px"
                  />
                </div>

                {/* Content Container */}
                <div className="flex flex-col justify-end p-6 md:p-8 pt-0">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[24px] md:text-[28px] font-medium text-[#1F4B43] font-sans">{product.name}</h3>
                    <p className="text-[#70908B] text-base md:text-lg">{product.description}</p>
                    <p className="text-[#1F4B43] font-bold text-xl md:text-2xl mt-2">{product.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Scrollbar & Controls */}
        <div className="mt-4 md:mt-8 relative h-[80px] md:h-[100px] w-full flex flex-col justify-end">
          {/* Track */}
          <div className="absolute top-[6px] left-0 right-0 h-[4px] md:h-[6px] bg-[#07484A] rounded-full opacity-10"></div>
          <div className="absolute top-[6px] left-0 right-0 h-[4px] md:h-[6px] bg-[#07484A] opacity-20 md:opacity-100 hidden sm:block"></div>

          {/* Thumb */}
          <div
            className="absolute top-[3px] h-[10px] md:h-[12px] bg-[#70908B] hidden sm:block"
            style={{
              width: '100px',
              left: `calc(${scrollProgress}% - ${scrollProgress / 100 * 100}px)`
            }}
          ></div>

          {/* Buttons (Bottom Right) */}
          <div className="hidden lg:flex justify-end gap-6 mt-6 md:mt-10 pr-0">
            <button
              onClick={() => scroll('left')}
              className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full bg-[#E0EFF6] flex items-center justify-center hover:opacity-80 transition-opacity shadow-sm"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="text-[#07484A] w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full bg-[#F9D9DA] flex items-center justify-center hover:opacity-80 transition-opacity shadow-sm"
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
