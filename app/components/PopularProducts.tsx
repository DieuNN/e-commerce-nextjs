import React from 'react';
import { ShoppingBag, Armchair, Lamp, Sofa } from 'lucide-react';

const products = [
  { id: 1, name: 'Velvet Sofa', price: '$1200', icon: Sofa },
  { id: 2, name: 'Modern Lamp', price: '$150', icon: Lamp },
  { id: 3, name: 'Lounge Chair', price: '$450', icon: Armchair },
  { id: 4, name: 'Coffee Table', price: '$300', icon: ShoppingBag }, // Placeholder icon
];

export default function PopularProducts() {
  return (
    <section className="hidden lg:block relative w-full overflow-hidden bg-white">
      {/* Background Image Placeholder */}
      {/* 926x1098, absolute 50% outside (right side) */}
      <div
        className="absolute top-1/2 -translate-y-1/2 right-[-463px] w-[926px] h-[1098px] bg-[#E0EFF6] opacity-50 flex items-center justify-center pointer-events-none"
        style={{ borderRadius: '50% 0 0 50%' }}
      >
        <span className="text-[#07484A] text-2xl font-bold -ml-[200px]">Background Image</span>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-[150px] py-20 relative z-10">
        <h2 className="text-[#07484A] font-serif text-[64px] font-normal mb-16 tracking-wide">Popular Products</h2>

        <div className="grid grid-cols-4 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div key={product.id} className="group bg-white rounded-[10px] shadow-sm hover:shadow-xl transition-all duration-300 border border-[#F0F0F0] h-[400px] flex flex-col overflow-hidden">
                <div className="flex-1 bg-[#F9F9F9] flex items-center justify-center group-hover:bg-[#E0EFF6] transition-colors duration-300">
                    <Icon className="w-20 h-20 text-[#70908B]" />
                </div>
                <div className="p-6 flex flex-col gap-2 bg-white">
                    <h3 className="text-xl font-medium text-[#07484A]">{product.name}</h3>
                    <p className="text-[#70908B] font-bold">{product.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
