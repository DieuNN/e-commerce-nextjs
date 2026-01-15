import React from 'react';
import { Search, ArrowRight, ArrowUp, ArrowDown } from 'lucide-react';

const categories = [
  "Bedroom",
  "Dining Room",
  "Meeting Room",
  "Workspace",
  "Living Room",
  "Kitchen",
  "Living Space"
];

const gridItems = [
  { id: 1, type: 'featured', title: 'Casual', imageColor: 'bg-[#ADADAD]' },
  { id: 2, imageColor: 'bg-[#D9D9D9]' },
  { id: 3, imageColor: 'bg-[#D9D9D9]' },
  { id: 4, imageColor: 'bg-[#D9D9D9]' },
  { id: 5, imageColor: 'bg-[#D9D9D9]' },
  { id: 6, imageColor: 'bg-[#D9D9D9]' },
];

export default function CategorySection() {
  return (
    <section className="hidden lg:block w-full max-w-[1920px] mx-auto px-[150px] py-20">
      <h2 className="text-[#07484A] font-serif text-[64px] font-normal mb-16 tracking-wide">CATEGORIES</h2>

      <div className="flex gap-[60px]">
        {/* Sidebar */}
        <div className="w-[350px] flex-shrink-0 flex flex-col gap-8">
          {/* Search */}
          <div className="w-full h-[75px] bg-[#F0F0F0] rounded-[10px] flex items-center px-6 gap-4">
             <Search className="text-[#6E757E] w-6 h-6" />
             <span className="text-[#6E757E] text-xl font-medium">Search</span>
          </div>

          {/* Categories List & Scroll */}
          <div className="flex flex-row justify-between relative h-[450px]">
            <div className="flex flex-col gap-8 pl-4">
              {categories.map((cat, index) => (
                <a
                  key={index}
                  href="#"
                  className={`text-[#07484A] text-2xl font-normal hover:font-bold transition-all ${cat === 'Bedroom' ? 'font-bold' : ''}`}
                >
                  {cat}
                </a>
              ))}
            </div>

            {/* Custom Scroll Indicator */}
            <div className="flex flex-col items-center h-full relative w-10">
               {/* Vertical Line */}
               <div className="absolute right-4 top-0 h-[380px] w-[2px] bg-[#E5E5E5]">
                  {/* Active Segment */}
                  <div className="absolute top-0 left-0 w-full h-[60px] bg-[#70908B]"></div>
               </div>

               {/* Buttons */}
               <div className="absolute bottom-0 right-0 flex flex-col gap-4">
                  <button className="w-10 h-10 rounded-full bg-[#E0EFF6] flex items-center justify-center text-[#07484A] hover:bg-[#d0e6f0] transition-colors">
                     <ArrowUp size={20} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#F9D9DA] flex items-center justify-center text-[#07484A] hover:bg-[#f2c6c7] transition-colors">
                     <ArrowDown size={20} />
                  </button>
               </div>
            </div>
          </div>

          {/* Bottom Button */}
           <div className="mt-8 w-[265px] h-[89px] bg-[#70908B] rounded-[10px] flex items-center justify-center cursor-pointer hover:bg-[#5e7a76] transition-colors gap-2">
              <span className="text-white text-xl font-medium">All Categories</span>
              <ArrowRight className="text-white w-6 h-6" />
           </div>
        </div>

        {/* Grid */}
        <div className="flex-1 grid grid-cols-2 gap-x-[32px] gap-y-[26px]">
           {gridItems.map((item, index) => (
             <div
                key={item.id}
                className={`relative rounded-[10px] ${item.imageColor} ${item.type === 'featured' ? 'h-[345px] group' : 'h-[321px]'} ${index === 1 ? 'mt-[12px]' : ''}`}
             >
                {item.type === 'featured' && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4">
                     <div className="bg-[#FDFBF8] w-[200px] h-[80px] rounded shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-[#07484A] font-serif text-3xl">{item.title}</span>
                     </div>
                     <button className="bg-[#E0EFF6] text-[#07484A] px-6 py-3 rounded-full text-lg font-medium flex items-center justify-center hover:bg-[#d0e6f0] transition-colors min-w-[160px]">
                        <span className="group-hover:hidden flex items-center gap-2">Shop Now <ArrowRight size={20} /></span>
                        <span className="hidden group-hover:block">Explore</span>
                     </button>
                  </div>
                )}
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
