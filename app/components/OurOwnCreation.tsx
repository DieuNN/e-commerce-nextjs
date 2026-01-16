import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function OurOwnCreation() {
  return (
    <section className="hidden lg:block w-full max-w-[1920px] mx-auto px-6 py-10 lg:px-10 xl:px-[150px] lg:py-20 bg-white">
       <div className="grid grid-cols-4 gap-8 h-[600px]">
          {/* Card 1: Intro */}
          <div className="bg-[#658C86] rounded-[10px] p-8 xl:p-12 flex flex-col justify-between relative">
             <div className="mt-12">
                <h2 className="font-serif text-white text-[56px] leading-[1.1] mb-6">Our<br/>Own Creation</h2>
                <p className="font-sans text-white text-xl tracking-wide">Designed in our studio</p>
             </div>

             <div className="mb-4">
                <div className="flex items-center gap-4 mb-8">
                   <span className="text-white text-lg font-medium">More</span>
                   <div className="flex-1 h-[2px] bg-[#FFFFFF50] max-w-[200px]">
                      <div className="w-1/3 h-full bg-white"></div>
                   </div>
                </div>
                <div className="flex gap-4">
                   <button className="w-12 h-12 rounded-full bg-[#E0EFF6] flex items-center justify-center text-[#07484A] hover:opacity-90 transition-opacity">
                      <ArrowLeft size={20} />
                   </button>
                   <button className="w-12 h-12 rounded-full bg-[#F9D9DA] flex items-center justify-center text-[#07484A] hover:opacity-90 transition-opacity">
                      <ArrowRight size={20} />
                   </button>
                </div>
             </div>
          </div>

          {/* Card 2: Action */}
          <div className="bg-[#D9D9D9] rounded-[10px] relative group transition-all duration-300 hover:scale-[1.05] hover:shadow-lg">
             <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-[#07484A] px-8 py-4 rounded-[6px] font-medium text-lg shadow-sm hover:bg-gray-50 transition-colors">
                   Explore All Rooms
                </button>
             </div>
          </div>

          {/* Card 3: Placeholder */}
          <div className="bg-[#D9D9D9] rounded-[10px] group transition-all duration-300 hover:scale-[1.05] hover:shadow-lg"></div>

          {/* Card 4: Placeholder */}
          <div className="bg-[#D9D9D9] rounded-[10px] group transition-all duration-300 hover:scale-[1.05] hover:shadow-lg"></div>
       </div>
    </section>
  );
}
