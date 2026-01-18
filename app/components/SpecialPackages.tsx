'use client';

import React, { useRef } from 'react';
import { Star, ShoppingCart, Plus, ChevronDown, Maximize2 } from 'lucide-react';

import Image from 'next/image';

const packages = [
    {
        id: 1,
        title: "Living Room Family Set",
        price: "$229.99",
        rating: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/images/special-packages/living-room-family-set.webp"
    },
    {
        id: 2,
        title: "Living Room Special Set",
        price: "$329.99",
        rating: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/images/special-packages/living-room-special-set-1.webp"
    },
    {
        id: 3,
        title: "Living Room Special Set",
        price: "$587.99",
        rating: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/images/special-packages/living-room-special-set-2.webp"
    },
    {
        id: 4,
        title: "Modern Home Deluxe",
        price: "$459.99",
        rating: 4,
        description: "Elegant design for modern living spaces with premium finish.",
        image: "/images/special-packages/modern-home-deluxe.webp"
    },
    {
        id: 5,
        title: "Cozy Corner Bundle",
        price: "$199.99",
        rating: 5,
        description: "Perfect for small apartments and cozy reading corners.",
        image: "/images/special-packages/cozy-corner-bundle.webp"
    },
    {
        id: 6,
        title: "Executive Office Set",
        price: "$899.99",
        rating: 5,
        description: "Professional grade furniture for your home office needs.",
        image: "/images/special-packages/executive-office-set.webp"
    },
    {
        id: 7,
        title: "Outdoor Patio Collection",
        price: "$649.99",
        rating: 4,
        description: "Weather-resistant comfort for your outdoor gatherings.",
        image: "/images/special-packages/outdoor-patio-collection.webp"
    },
    {
        id: 8,
        title: "Bachelor Pad Starter",
        price: "$350.00",
        rating: 3,
        description: "Essential furniture pieces for a stylish fresh start.",
        image: "/images/special-packages/bachelor-pad-starter.webp"
    }
];

export default function SpecialPackages() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (!scrollContainerRef.current || !progressBarRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const scrollPercentage = maxScroll > 0 ? scrollLeft / maxScroll : 0;

        // Progress bar width is 100% of container, indicator is a percentage of that based on view
        // But here we want a simple indicator moving along a track
        // Let's make the indicator width fixed or proportional
        // If track is 100px, indicator is 20px, maxTranslate is 80px
        const trackWidth = progressBarRef.current.parentElement?.clientWidth || 0;
        const indicatorWidth = progressBarRef.current.clientWidth || 0;
        const maxTranslate = trackWidth - indicatorWidth;

        const translateX = scrollPercentage * maxTranslate;

        progressBarRef.current.style.transform = `translateX(${translateX}px)`;
    };

    return (
        <section className="w-full max-w-[1920px] mx-auto bg-white">
            {/* Desktop Layout (>1024px) */}
            <div className="hidden lg:block px-10 xl:px-[150px] py-20">
                <h2 className="text-[#07484A] font-serif text-[64px] font-normal text-center mb-16 tracking-wide">Special Package</h2>

                <div className="flex gap-10 xl:gap-[60px]">
                    {/* Left Side - Featured Product */}
                    <div className="flex-1 flex flex-col gap-6">
                        {/* Image Placeholder */}
                        <div className="w-full aspect-[4/3] bg-[#D9D9D9] rounded-[20px] relative overflow-hidden">
                            <Image
                                src="/images/special-packages/larkin-wood-full-set.webp"
                                alt="Larkin Wood Full Set"
                                fill
                                className="object-cover"
                            />
                            <button className="absolute bottom-4 right-4 w-10 h-10 bg-[#07484A] rounded-lg flex items-center justify-center text-white hover:bg-[#053335] transition-colors cursor-pointer z-10">
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
                        <div className="flex flex-col gap-[24px] relative max-h-[500px] overflow-y-auto no-scrollbar">
                            {packages.map((pkg, index) => (
                                <div
                                    key={pkg.id}
                                    className="group relative rounded-[20px] transition-all duration-300 hover:bg-[#E0EFF6] hover:p-4 p-0 shrink-0"
                                >
                                    <div className="flex gap-4 items-start group-hover:items-center">
                                        {/* Image Placeholder */}
                                        <div className="w-[120px] h-[100px] bg-[#D9D9D9] rounded-[10px] flex-shrink-0 transition-all relative overflow-hidden">
                                            <Image
                                                src={pkg.image}
                                                alt={pkg.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

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
                                            <div>
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
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Tablet Layout (768px - 1024px) */}
            <div className="hidden md:block lg:hidden px-6 py-12">
                <h2 className="text-[#07484A] font-serif text-[48px] font-normal text-center mb-10 tracking-wide">Special Package</h2>

                <div className="bg-white">
                    {/* Featured Product Grid */}
                    <div className="grid grid-cols-2 gap-8 mb-12">
                        {/* Left: Image */}
                        <div className="relative w-full aspect-[4/3] bg-[#D9D9D9] rounded-[20px] overflow-hidden">
                            <Image
                                src="/images/special-packages/larkin-wood-full-set.webp"
                                alt="Larkin Wood Full Set"
                                fill
                                className="object-cover"
                            />
                            <button className="absolute bottom-3 right-3 w-8 h-8 bg-[#07484A] rounded-lg flex items-center justify-center text-white cursor-pointer z-10">
                                <Maximize2 size={16} />
                            </button>
                        </div>

                        {/* Right: Content */}
                        <div className="flex flex-col justify-center gap-4">
                            <h3 className="text-[#07484A] text-3xl font-normal">Larkin Wood Full Set</h3>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-[#FACC15] text-[#FACC15]" />
                                ))}
                            </div>
                            <span className="text-[#07484A] text-2xl font-bold">$729.99</span>

                            <button className="bg-[#70908B] text-white w-full py-3 rounded-[10px] text-lg font-medium flex items-center justify-center gap-2 hover:bg-[#5e7a76] transition-colors cursor-pointer mt-2">
                                Add to cart
                                <ShoppingCart className="w-5 h-5" />
                            </button>

                            <div className="flex flex-col gap-2 mt-4">
                                <h4 className="text-[#07484A] text-lg font-bold">Description</h4>
                                <p className="text-[#07484A] text-base leading-relaxed opacity-80">
                                    Cast Aluminum Outdoor Chaise Lounge As an elegant and classic touch to your outdoor space...
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Horizontal Scrollable List */}
                    <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                        {packages.map((pkg) => (
                            <div
                                key={pkg.id}
                                className="flex-shrink-0 w-[280px] bg-[#E0EFF6] p-4 rounded-[16px] flex flex-col gap-3"
                            >
                                <div className="w-full h-[160px] bg-[#D9D9D9] rounded-[12px] relative overflow-hidden">
                                    <Image
                                        src={pkg.image}
                                        alt={pkg.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex justify-between items-start">
                                    <h4 className="text-[#07484A] text-base font-medium line-clamp-1">{pkg.title}</h4>
                                    <span className="text-[#07484A] text-base font-bold">{pkg.price}</span>
                                </div>
                                <div className="flex gap-1">
                                    {[...Array(pkg.rating)].map((_, i) => (
                                        <Star key={i} className="w-3 h-3 fill-[#FACC15] text-[#FACC15]" />
                                    ))}
                                </div>
                                <div className="flex justify-between items-center mt-auto">
                                    <button className="text-[#07484A] underline text-xs font-medium">
                                        See Details
                                    </button>
                                    <button className="w-7 h-7 bg-[#07484A] rounded-full flex items-center justify-center text-white">
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Layout (<768px) */}
            <div className="block md:hidden px-4 py-8">
                <h2 className="text-[#07484A] font-serif text-[40px] font-normal mb-8 leading-tight">Special Package</h2>

                <div className="flex flex-col gap-6">
                    {/* Horizontal Scroll Snap Container */}
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 pb-4"
                    >
                        {/* We could duplicate the featured logic or just map all packages. 
                            Let's map all packages as full cards for a consistent swipe experience. */}
                        {[
                            // Prepend "Larkin Wood Full Set" as the first "Special" package if not in the list
                            {
                                id: 999,
                                title: "Larkin Wood Full Set",
                                price: "$729.99",
                                rating: 5,
                                description: "Cast Aluminum Outdoor Chaise Lounge As an elegant and classic touch to your outdoor space...",
                                image: "/images/special-packages/larkin-wood-full-set.webp"
                            },
                            ...packages
                        ].map((pkg) => (
                            <div
                                key={pkg.id}
                                className="w-[85vw] flex-shrink-0 snap-center flex flex-col gap-4"
                            >
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-[#07484A] text-2xl font-normal leading-tight">{pkg.title}</h3>
                                    <div className="flex gap-1">
                                        {[...Array(pkg.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-[#FACC15] text-[#FACC15]" />
                                        ))}
                                    </div>
                                    <span className="text-[#07484A] text-2xl font-bold">{pkg.price}</span>
                                </div>

                                <button className="bg-[#70908B] text-white w-full py-3 rounded-[10px] text-lg font-medium flex items-center justify-center gap-2 hover:bg-[#5e7a76] transition-colors cursor-pointer">
                                    Add to cart
                                    <ShoppingCart className="w-5 h-5" />
                                </button>

                                <div className="relative w-full aspect-[4/3] bg-[#D9D9D9] rounded-[20px] overflow-hidden">
                                    <Image
                                        src={pkg.image}
                                        alt={pkg.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h4 className="text-[#07484A] text-lg font-bold">Description</h4>
                                    <p className="text-[#07484A] text-sm leading-relaxed opacity-80 line-clamp-3">
                                        {pkg.description}
                                    </p>
                                    <button className="text-[#07484A] underline text-sm font-medium w-fit">
                                        See Details
                                    </button>
                                </div>

                                <div className="h-[1px] bg-[#07484A] w-[40px] mt-2 opacity-50"></div>
                            </div>
                        ))}
                    </div>

                    {/* Progress Indicator */}
                    <div className="w-full h-[2px] bg-[#E0EFF6] relative overflow-hidden mt-2 rounded-full">
                        <div
                            ref={progressBarRef}
                            className="absolute left-0 top-0 h-full w-1/3 bg-[#07484A] rounded-full transition-transform duration-100 ease-out"
                        ></div>
                    </div>
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
