import React from 'react';
import { Star, ShoppingCart, Plus, ChevronDown, ArrowUp, ArrowDown, Maximize2 } from 'lucide-react';

const packages = [
  {
    id: 1,
    title: "Living Room Family Set",
    price: "$229.99",
    rating: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 2,
    title: "Living Room Special Set",
    price: "$329.99",
    rating: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 3,
    title: "Living Room Special Set",
    price: "$587.99",
    rating: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];

export default function SpecialPackages() {
  return (
    <section className="hidden lg:block w-full max-w-[1920px] mx-auto px-10 xl:px-[150px] py-20 bg-white">
      <h2 className="text-[#07484A] font-serif text-[64px] font-normal text-center mb-16 tracking-wide">Special Package</h2>

      <div className="flex gap-10 xl:gap-[60px]">
        {/* Left Side - Featured Product */}
        <div className="flex-1 flex flex-col gap-6">
            {/* Image Placeholder */}
            <div className="w-full aspect-[4/3] bg-[#D9D9D9] rounded-[20px] relative">
                 <button className="absolute bottom-4 right-4 w-10 h-10 bg-[#07484A] rounded-lg flex items-center justify-center text-white hover:bg-[#053335] transition-colors cursor-pointer">
                    <Maximize2 size={20} />
                 </button>
            </div>

            <div className="flex justify-between items-end">
                <div className="flex flex-col gap-2">
                    <h3 className="text-[#07484A] text-4xl font-normal">Larkin Wood Full Set</h3>
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                            <Star key={i} className="w-6 h-6 fill-[#FACC15] text-[#FACC15]" />
                        ))}
                    </div>
                    <span className="text-[#07484A] text-3xl font-bold mt-2">$729.99</span>
                </div>

                <button className="bg-[#70908B] text-white px-8 py-4 rounded-[10px] text-xl font-medium flex items-center gap-3 hover:bg-[#5e7a76] transition-colors cursor-pointer">
                    Add to cart
                    <ShoppingCart className="w-6 h-6" />
                </button>
            </div>
        </div>

        {/* Right Side - List */}
        <div className="w-[40%] xl:w-[480px] flex flex-col gap-8">
            {/* Description */}
            <div className="flex flex-col gap-4">
                <h3 className="text-[#07484A] text-2xl font-bold">Description</h3>
                <p className="text-[#07484A] text-lg leading-relaxed opacity-80">
                    Cast Aluminum Outdoor Chaise Lounge As an elegant and classic touch to your outdoor space, this cast Aluminum Chaise Lounge combines the appearance, function and quality all together, offering you with the best experience.
                </p>
                <button className="text-black font-bold text-lg flex items-center gap-2 hover:opacity-70 cursor-pointer w-fit">
                    See More <ChevronDown className="w-5 h-5" />
                </button>
            </div>

            {/* Product Items List */}
            <div className="flex flex-col gap-6 relative">
                {packages.map((pkg, index) => (
                    <div
                        key={pkg.id}
                        className="group relative rounded-[20px] transition-all duration-300 hover:bg-[#E0EFF6] hover:p-4 p-0"
                    >
                        <div className="flex gap-4 items-start group-hover:items-center">
                            {/* Image Placeholder */}
                            <div className="w-[120px] h-[100px] bg-[#D9D9D9] rounded-[10px] flex-shrink-0 transition-all"></div>

                            {/* Right Content */}
                            <div className="flex-1 flex flex-col gap-1 min-h-[100px] justify-center">
                                {/* Header */}
                                <div className="flex justify-between items-start">
                                    <h4 className="text-[#07484A] text-lg group-hover:text-xl font-serif group-hover:font-sans group-hover:font-normal transition-all">
                                        {pkg.title}
                                    </h4>
                                    <span className="text-[#07484A] text-xl font-bold">{pkg.price}</span>
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1">
                                    {[...Array(pkg.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-[#FACC15] text-[#FACC15]" />
                                    ))}
                                </div>

                                {/* Default Content (Description) */}
                                <div className="block group-hover:hidden">
                                    <p className="text-[#07484A] text-xs mt-1 leading-snug">{pkg.description}</p>
                                    <button className="text-[#07484A] font-bold text-sm flex items-center gap-1 mt-1 cursor-pointer w-fit">
                                        See More <ChevronDown className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Hover Content (Actions) */}
                                <div className="hidden group-hover:flex justify-between items-end mt-2">
                                    <button className="text-[#07484A] underline text-sm hover:text-[#053335] cursor-pointer">
                                        See Details
                                    </button>
                                    <button className="w-8 h-8 bg-[#07484A] rounded-full flex items-center justify-center text-white hover:bg-[#053335] cursor-pointer">
                                        <Plus className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                         {/* Restore Vertical Scroll Line for Index 1 (matches original Item 2 position) */}
                         {index === 1 && (
                            <div className="absolute right-[-24px] top-0 h-[220%] w-[2px] bg-[#E5E5E5] hidden xl:block">
                                <div className="h-[30%] w-full bg-[#70908B]"></div>
                            </div>
                         )}

                         {/* Restore Buttons for Index 2 (matches original Item 3 position) */}
                         {index === 2 && (
                             <div className="absolute -right-16 bottom-0 flex flex-col gap-2 hidden xl:flex">
                                  <button className="w-8 h-8 rounded-full bg-[#E0EFF6] flex items-center justify-center text-[#07484A] hover:bg-[#d0e6f0] cursor-pointer">
                                     <ArrowUp size={16} />
                                  </button>
                                  <button className="w-8 h-8 rounded-full bg-[#F9D9DA] flex items-center justify-center text-[#07484A] hover:bg-[#f2c6c7] cursor-pointer">
                                     <ArrowDown size={16} />
                                  </button>
                             </div>
                         )}
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
