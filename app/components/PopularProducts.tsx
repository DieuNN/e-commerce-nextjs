import React from 'react';
import { ShoppingBag, Armchair, Lamp, Sofa } from 'lucide-react';

const products = [
  { id: 1, name: 'Velvet Sofa', description: 'Cozy 3-seater', price: '$1200', icon: Sofa },
  { id: 2, name: 'Modern Lamp', description: 'Minimalist desk light', price: '$150', icon: Lamp },
  { id: 3, name: 'Armchair', description: 'Light single chair', price: '$145', icon: Armchair },
  { id: 4, name: 'Coffee Table', description: 'Oak wood finish', price: '$300', icon: ShoppingBag },
];

export default function PopularProducts() {
  return (
    <section className="hidden lg:block relative w-full overflow-hidden bg-white">
      {/* Background Image Placeholder */}
      {/* 926x1098, absolute 50% outside (left side) */}
      <div
        className="absolute top-1/2 -translate-y-1/2 left-[-463px] w-[926px] h-[1098px] bg-[#E0EFF6] opacity-50 flex items-center justify-center pointer-events-none"
        style={{ borderRadius: '0 50% 50% 0' }}
      >
        <span className="text-[#07484A] text-2xl font-bold ml-[200px]">Background Image</span>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-[150px] py-20 relative z-10">
        <h2 className="text-[#07484A] font-serif text-[64px] font-normal mb-16 tracking-wide text-center">Popular Products</h2>

        <div className="grid grid-cols-4 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div key={product.id} className="group bg-[#CAF3E5] rounded-[30px] p-8 hover:shadow-xl transition-all duration-300 h-[460px] flex flex-col justify-between">
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
      </div>
    </section>
  );
}
