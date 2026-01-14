import React from 'react';
import { Search, ArrowRight } from 'lucide-react';

const categories = [
  "New Arrivals",
  "Accessories",
  "Bags",
  "Clothing",
  "Shoes",
  "Jewelry",
  "Home Decor",
  "Beauty"
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

          {/* Categories List */}
          <div className="flex flex-col gap-8 pl-4">
            {categories.map((cat, index) => (
              <a
                key={index}
                href="#"
                className={`text-[#07484A] text-2xl font-normal hover:font-bold transition-all ${cat === 'New Arrivals' ? 'font-bold' : ''}`}
              >
                {cat}
              </a>
            ))}
          </div>

          {/* Bottom Button */}
           <div className="mt-20 w-[265px] h-[89px] bg-[#70908B] rounded-[10px] flex items-center justify-center cursor-pointer hover:bg-[#5e7a76] transition-colors">
              <span className="text-white text-xl font-medium">Help & Support</span>
           </div>
        </div>

        {/* Grid */}
        <div className="flex-1 grid grid-cols-2 gap-x-[32px] gap-y-[26px]">
           {gridItems.map((item, index) => (
             <div
                key={item.id}
                className={`relative rounded-[10px] ${item.imageColor} ${item.type === 'featured' ? 'h-[345px]' : 'h-[321px]'} ${index === 1 ? 'mt-[12px]' : ''}`}
             >
                {item.type === 'featured' && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4">
                     <div className="bg-[#FDFBF8] w-[200px] h-[80px] rounded shadow-sm flex items-center justify-center">
                        <span className="text-[#07484A] font-serif text-3xl">{item.title}</span>
                     </div>
                     <button className="bg-[#E0EFF6] text-[#07484A] px-6 py-3 rounded-full text-lg font-medium flex items-center gap-2 hover:bg-[#d0e6f0] transition-colors">
                        Shop Now <ArrowRight size={20} />
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
