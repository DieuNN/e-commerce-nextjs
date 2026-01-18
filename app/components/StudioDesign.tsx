"use client";

import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function StudioDesign() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (!scrollContainerRef.current || !progressBarRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const scrollPercentage = maxScroll > 0 ? scrollLeft / maxScroll : 0;

        // Calculate the translateX value for the progress bar
        // The bar moves within the 96px (w-24) container. 
        // The bar itself is 40px wide. Max movement is 96 - 40 = 56px.
        const maxTranslate = 56;
        const translateX = scrollPercentage * maxTranslate;

        progressBarRef.current.style.transform = `translateX(${translateX}px)`;
    };

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollContainerRef.current) return;
        const scrollAmount = 480; // Roughly one item width + gap
        const targetScroll = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);

        scrollContainerRef.current.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });
    };

    return (
        <section className="w-full max-w-[1920px] mx-auto px-6 py-10 lg:px-10 xl:px-[150px] lg:py-20 bg-white overflow-hidden">
            <div className="flex gap-6 overflow-x-auto no-scrollbar lg:gap-8 lg:overflow-visible items-stretch pb-4 lg:pb-0">
                {/* Left Side - Teal Box */}
                <div className="min-w-[340px] w-[340px] lg:w-[450px] bg-[#70908B] rounded-[30px] p-8 lg:p-16 flex flex-col justify-between shrink-0">
                    <div className="flex flex-col gap-8">
                        <h2 className="text-white font-serif text-[40px] lg:text-[56px] leading-[1.1] font-normal">
                            Our <br /> Own Creation
                        </h2>
                        <p className="text-white text-lg lg:text-xl font-light opacity-90">
                            Designed in our studio
                        </p>
                    </div>

                    <div className="flex items-center gap-12 mt-12">
                        <div className="flex items-center gap-4">
                            <span className="text-white font-bold text-lg">More</span>
                            <div className="hidden lg:block w-24 h-[2px] bg-white/30 relative overflow-hidden">
                                <div
                                    ref={progressBarRef}
                                    className="absolute left-0 top-0 h-full w-[40px] bg-white transition-transform duration-100 ease-out"
                                ></div>
                            </div>
                        </div>

                        <div className="hidden lg:flex gap-4">
                            <button
                                onClick={() => scroll('left')}
                                className="w-12 h-12 rounded-full bg-[#E0EFF6] flex items-center justify-center text-[#07484A] hover:bg-white transition-colors cursor-pointer"
                            >
                                <ArrowLeft size={24} />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-12 h-12 rounded-full bg-[#F2C9CA] flex items-center justify-center text-[#07484A] hover:bg-white transition-colors cursor-pointer"
                            >
                                <ArrowRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side - Carousel Items */}
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="contents no-scrollbar lg:flex lg:gap-6 lg:overflow-x-auto lg:pb-4 lg:pr-10 lg:flex-1 lg:w-full"
                >
                    {[
                        {
                            id: 1,
                            src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2117&auto=format&fit=crop",
                            alt: "Modern Living Room",
                            bgColor: "bg-[#D9D9D9]"
                        },
                        {
                            id: 2,
                            src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop",
                            alt: "Modern Bedroom",
                            bgColor: "bg-[#E5E5E5]"
                        },
                        {
                            id: 3,
                            src: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop",
                            alt: "Modern Dining Room",
                            bgColor: "bg-[#D9D9D9]"
                        },
                        {
                            id: 4,
                            src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
                            alt: "Interior Design",
                            bgColor: "bg-[#E5E5E5]"
                        }
                    ].map((item) => (
                        <div
                            key={item.id}
                            className={`w-[340px] lg:w-[450px] h-[600px] ${item.bgColor} rounded-[30px] shrink-0 relative flex items-end justify-center pb-12 group overflow-hidden shadow-md`}
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="absolute inset-0 w-full h-full object-cover rounded-[30px] transition-transform duration-500 group-hover:scale-105"
                            />
                            <button className="relative z-10 bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-[#70908B] hover:text-white transition-all shadow-lg active:scale-95 cursor-pointer opacity-0 group-hover:opacity-100">
                                Explore All Rooms
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
