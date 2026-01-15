import React from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="hidden lg:block w-full bg-white py-20">
      <div className="max-w-[1920px] mx-auto px-[150px]">
        {/* Header */}
        <div className="text-center mb-24">
             <h2 className="text-[#07484A] font-serif text-[64px] font-normal mb-4">Testimonials</h2>
             <p className="text-[#07484A] text-2xl font-sans">Over 15,000 happy customers.</p>
        </div>

        {/* Content */}
        <div className="flex items-center justify-between relative mb-20">
             <div className="flex items-center gap-20 w-full pr-24"> {/* pr-24 to leave space for absolute buttons if needed, or just flex gap */}
                 {/* Left Image Placeholder + Quote Icon */}
                 <div className="relative flex-shrink-0">
                      {/* Big Quote Icon Background */}
                      <div className="absolute -top-16 -left-16 text-[#E0EFF6] z-0">
                           <Quote size={180} className="fill-[#E0EFF6]" strokeWidth={0} />
                      </div>
                      <div className="absolute -top-16 -left-4 text-[#E0EFF6] z-0">
                           {/* Second quote for styling if needed, or just one big one. Image shows two distinct marks. */}
                      </div>

                      {/* Gray Box */}
                      <div className="w-[480px] h-[480px] bg-[#D9D9D9] rounded-[30px] relative z-10"></div>
                 </div>

                 {/* Right Text Content */}
                 <div className="flex-1 max-w-[650px] z-10">
                      <p className="text-[#07484A] text-[32px] leading-snug mb-10 font-sans">
                          “My experience with Mark is a complete success, from customer service, wide range of products, clean store, purchasing experience, the newsletter.Thank you.”
                      </p>
                      <div>
                          <h4 className="text-[#07484A] text-xl font-bold font-sans">Leona Paul</h4>
                          <p className="text-[#07484A] text-lg opacity-80 font-sans">CEO of Floatcom</p>
                      </div>
                 </div>
             </div>

             {/* Navigation Buttons - Stacked on the right */}
             <div className="flex flex-col gap-4">
                  <button className="w-[50px] h-[50px] rounded-full bg-[#E0EFF6] flex items-center justify-center text-[#07484A] hover:opacity-80 transition-opacity cursor-pointer">
                      <ArrowLeft size={24} />
                  </button>
                  <button className="w-[50px] h-[50px] rounded-full bg-[#F9D9DA] flex items-center justify-center text-[#07484A] hover:opacity-80 transition-opacity cursor-pointer">
                      <ArrowRight size={24} />
                  </button>
             </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center gap-8">
             {/* Progress Bar Line */}
             <div className="flex-1 h-[2px] bg-[#07484A] relative mt-1">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[6px] w-[80px] bg-[#70908B]"></div>
             </div>

             {/* See all review */}
             <button className="flex items-center gap-2 text-[#07484A] font-medium hover:opacity-70 cursor-pointer whitespace-nowrap">
                 See all reviews <ArrowRight size={20} />
             </button>
        </div>
      </div>
    </section>
  );
}
