import React from 'react';
import { Search, ArrowRight, ArrowUp, ArrowDown, Menu } from 'lucide-react';
import Image from 'next/image';

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
  { id: 1, title: 'Casual', image: '/images/categories/casual.png' },
  { id: 2, title: 'Workspace', image: '/images/categories/workspace.png' },
  { id: 3, title: 'Living Room', image: '/images/categories/living-room.png' },
  { id: 4, title: 'Kitchen', image: '/images/categories/kitchen.png' },
  { id: 5, title: 'Bedroom', image: '/images/categories/bedroom.png' },
  { id: 6, title: 'Dining', image: '/images/categories/dining.png' },
];

export default function CategorySection() {
  return (
    <section className="w-full max-w-[1920px] mx-auto px-6 py-10 lg:px-10 xl:px-[150px] lg:py-20 bg-white">
      {/* Desktop Title */}
      <h2 className="hidden lg:block text-[#07484A] font-serif text-[64px] font-normal lg:text-center xl:text-left mb-10 xl:mb-16 tracking-wide">Explore by Category</h2>

      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-col xl:flex-row gap-10 xl:gap-[60px]">
        {/* Sidebar / Top Bar */}
        <div className="w-full xl:w-[350px] flex-shrink-0 flex flex-col gap-8">
          {/* Search */}
          <div className="w-full lg:max-w-[463px] xl:max-w-none h-[75px] bg-[#F0F0F0] rounded-[10px] flex items-center px-6 gap-4 mx-auto xl:mx-0">
            <Search className="text-[#6E757E] w-6 h-6" />
            <span className="text-[#6E757E] text-xl font-medium">Search</span>
          </div>

          {/* Categories List & Scroll */}
          <div className="flex lg:flex-row xl:flex-row lg:justify-center xl:justify-between relative lg:h-auto xl:h-[450px] lg:py-8 xl:py-0">
            <div className="flex lg:flex-row xl:flex-col lg:flex-wrap gap-x-8 gap-y-4 lg:pl-0 xl:pl-4 lg:justify-center xl:justify-start lg:items-center xl:items-start lg:max-w-[700px] lg:mx-auto xl:max-w-none xl:mx-0">
              {categories.map((cat, index) => (
                <a
                  key={index}
                  href="#"
                  className={`text-[#07484A] text-2xl font-normal hover:font-bold transition-all whitespace-nowrap ${cat === 'Bedroom' ? 'font-bold' : ''}`}
                >
                  {cat}
                </a>
              ))}
            </div>

            {/* Custom Scroll Indicator (Desktop only) */}
            <div className="hidden xl:flex flex-col items-center h-full relative w-10">
              {/* Vertical Line */}
              <div className="absolute right-4 top-0 h-[340px] w-[2px] bg-[#E5E5E5]">
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
          <div className="mt-8 w-[265px] h-[89px] bg-[#70908B] rounded-[10px] flex items-center justify-center cursor-pointer hover:bg-[#5e7a76] transition-colors gap-2 mx-auto xl:mx-0">
            <span className="text-white text-xl font-medium">All Categories</span>
            <ArrowRight className="text-white w-6 h-6" />
          </div>
        </div>

        {/* Grid */}
        <div className="flex-1 grid grid-cols-2 lg:gap-5 xl:gap-x-[32px] xl:gap-y-[26px]">
          {gridItems.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-[10px] overflow-hidden lg:h-[277px] xl:h-[345px] group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="bg-[#FDFBF8] w-[200px] h-[80px] rounded shadow-sm flex items-center justify-center">
                  <span className="text-[#07484A] font-serif text-3xl">{item.title}</span>
                </div>
                <button className="bg-[#E0EFF6] text-[#07484A] px-6 py-3 rounded-[6px] text-lg font-medium flex items-center justify-center hover:bg-[#d0e6f0] transition-colors min-w-[160px]">
                  Explore
                </button>
              </div>
              {/* Title when not hovering - optional, keeping clean as per design */}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block lg:hidden flex flex-col gap-6">
        {/* Mobile Title */}
        <h2 className="text-[#07484A] font-serif text-3xl font-bold mb-4">Explore by Category</h2>

        {/* Mobile Search & Menu */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-12 bg-[#F0F0F0] rounded-[6px] flex items-center px-4 gap-3">
            <Search className="text-[#6E757E] w-5 h-5" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-[#6E757E] text-base w-full focus:outline-none"
            />
          </div>
          <button className="p-2">
            <Menu className="text-[#07484A] w-8 h-8" />
          </button>
        </div>

        {/* Mobile Category List */}
        <div className="flex flex-col gap-4 mt-4">
          {gridItems.map((item, index) => (
            <div
              key={item.id}
              className="w-full h-[200px] rounded-[10px] relative overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-white font-serif text-3xl drop-shadow-md">{item.title}</span>
                {index === 0 && (
                  <button className="mt-4 bg-[#E0EFF6] text-[#07484A] px-8 py-2 rounded-[4px] text-base font-medium hover:bg-[#d0e6f0] transition-colors">
                    Explore
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
