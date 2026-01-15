import React from 'react';
import { Monitor, CheckCircle, MapPin } from 'lucide-react';

export default function FeatureSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="w-full max-w-[1920px] mx-auto px-10 lg:px-[150px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 rounded-full bg-[#E0EFF6] p-4">
              <Monitor className="w-10 h-10 text-[#1F4B43]" strokeWidth={1.5} />
            </div>
            <h3 className="text-[28px] font-serif text-[#1F4B43] font-medium mb-3">Modern</h3>
            <p className="text-[#70908B] text-lg max-w-sm">
              Award-winning designs that look great on any device or screen size.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 rounded-full bg-[#E0EFF6] p-4">
              <CheckCircle className="w-10 h-10 text-[#1F4B43]" strokeWidth={1.5} />
            </div>
            <h3 className="text-[28px] font-serif text-[#1F4B43] font-medium mb-3">Clean</h3>
            <p className="text-[#70908B] text-lg max-w-sm">
              Clean code structure that is easy to maintain and scale for future growth.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 rounded-full bg-[#E0EFF6] p-4">
              <MapPin className="w-10 h-10 text-[#1F4B43]" strokeWidth={1.5} />
            </div>
            <h3 className="text-[28px] font-serif text-[#1F4B43] font-medium mb-3">Real Time</h3>
            <p className="text-[#70908B] text-lg max-w-sm">
              Real-time updates and tracking to keep you informed every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
