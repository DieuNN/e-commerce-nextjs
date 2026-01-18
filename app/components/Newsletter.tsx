import React from 'react';
import Image from 'next/image';

export default function Newsletter() {
  return (
    <section className="w-full flex flex-col lg:flex-row items-stretch max-w-[1920px] mx-auto min-h-[500px]">
      {/* Left side: Gray placeholder (Image on desktop/laptop, Top on mobile/tablet) */}
      <div className="w-full lg:w-1/2 bg-[#D9D9D9] relative min-h-[300px] lg:min-h-full">
        <Image
          src="/newsletter-interior.png"
          alt="Modern interior reading corner with armchair and plants"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right side: Newsletter form */}
      <div className="w-full lg:w-1/2 bg-[#EEF9F6] flex flex-col justify-center py-16 px-6 sm:px-12 md:px-20 lg:py-0 xl:px-[150px]">
        <h2 className="text-[#07484A] font-serif text-4xl sm:text-5xl lg:text-[64px] leading-tight mb-4 text-center lg:text-left">
          Join Our <br className="hidden sm:block" />
          Newsletter
        </h2>
        <p className="text-[#1F4B43] text-base sm:text-lg mb-10 font-sans text-center lg:text-left">
          Receive exclusive deals, discounts and many offers.
        </p>

        <form className="flex flex-col gap-6 max-w-[500px] mx-auto lg:mx-0 w-full">
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Enter your email address"
              className="w-full h-[60px] bg-transparent border-b border-[#1F4B43] text-[#1F4B43] placeholder-[#1F4B43]/60 text-base sm:text-lg focus:outline-none focus:border-[#07484A] font-sans transition-colors"
            />
          </div>
          <button
            type="button"
            className="w-full sm:w-[200px] h-[60px] bg-[#70908B] text-white text-lg sm:text-xl font-medium rounded-[10px] hover:bg-[#5e7a76] transition-colors mt-4 self-center lg:self-start shadow-md hover:shadow-lg active:scale-[0.98]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

