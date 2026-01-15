import React from 'react';

export default function Newsletter() {
  return (
    <section className="hidden lg:flex w-full h-[500px] mb-20 max-w-[1920px] mx-auto">
      {/* Left side: Gray placeholder */}
      <div className="w-1/2 bg-[#D9D9D9] flex items-center justify-center">
        {/* Placeholder content if needed, currently empty gray box as per image */}
      </div>

      {/* Right side: Newsletter form */}
      <div className="w-1/2 bg-[#E0EFF6] flex flex-col justify-center px-20 xl:px-[150px]">
        <h2 className="text-[#07484A] font-serif text-[64px] leading-tight mb-4">
          Join Our <br />
          Newsletter
        </h2>
        <p className="text-[#1F4B43] text-lg mb-10 font-sans">
          Receive exclusive deals, discounts and many offers.
        </p>

        <form className="flex flex-col gap-4 max-w-[500px]">
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Enter your email address"
            className="w-full h-[60px] bg-transparent border-b border-[#1F4B43] text-[#1F4B43] placeholder-[#1F4B43]/60 text-lg focus:outline-none focus:border-[#07484A]"
          />
          <button
            type="button"
            className="w-[200px] h-[60px] bg-[#70908B] text-white text-xl font-medium rounded-[10px] hover:bg-[#5e7a76] transition-colors mt-6"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
