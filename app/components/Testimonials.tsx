"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
     {
          quote:
               "My experience with Mark is a complete success, from customer service, wide range of products, clean store, purchasing experience, the newsletter.Thank you.",
          author: "Leona Paul",
          role: "CEO of Floatcom",
          image: "/testimonials/leona_paul.png",
     },
     {
          quote:
               "The layout and design are simply stunning. It's incredibly user-friendly and the support team was quick to answer all my questions. Highly recommended!",
          author: "Daniel Craig",
          role: "Marketing Director at Solace",
          image: "/testimonials/daniel_craig.png",
     },
     {
          quote:
               "I was amazed by the quality of the products and the speed of delivery. Mark's store is my go-to for everything I need now. Outstanding service!",
          author: "Sarah Jenkins",
          role: "Founder of CreativeUi",
          image: "/testimonials/sarah_jenkins.png",
     },
];

export default function Testimonials() {
     const [currentIndex, setCurrentIndex] = useState(0);

     const handleNext = () => {
          setCurrentIndex((prev) => (prev + 1) % testimonials.length);
     };

     const handlePrev = () => {
          setCurrentIndex((prev) =>
               prev === 0 ? testimonials.length - 1 : prev - 1
          );
     };

     const progressWidth = ((currentIndex + 1) / testimonials.length) * 100;

     return (
          <section className="w-full bg-white py-12 lg:py-24">
               <div className="max-w-[1440px] mx-auto px-6 md:px-16 xl:px-[135px]">
                    {/* Header */}
                    <div className="text-center mb-12 lg:mb-20">
                         <h2 className="text-[#07484A] font-serif text-[40px] lg:text-[64px] leading-tight mb-4">
                              Testimonials
                         </h2>
                         <p className="text-[#07484A] text-lg lg:text-2xl font-[family-name:var(--font-open-sans)]">
                              Over 15,000 happy customers.
                         </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:items-center mb-12 lg:mb-20">
                         {/* Left Side: Image Placeholder & Quotes */}
                         <div className="lg:col-span-5 relative w-full flex justify-center lg:block">
                              {/* Quote Marks Decoration - Now on top (z-20) */}
                              <div className="absolute -top-10 -left-4 lg:-top-16 lg:-left-12 flex gap-[12px] lg:gap-[18px] z-20">
                                   <Image
                                        src="/quote.svg"
                                        alt="Quote"
                                        width={73}
                                        height={121}
                                        className="w-[50px] h-[80px] lg:w-[73px] lg:h-[121px]"
                                   />
                                   <Image
                                        src="/quote.svg"
                                        alt="Quote"
                                        width={73}
                                        height={121}
                                        className="w-[50px] h-[80px] lg:w-[73px] lg:h-[121px]"
                                   />
                              </div>

                              {/* Testimonial Image */}
                              <div className="w-full aspect-square max-w-[320px] lg:max-w-[480px] bg-[#D9D9D9] rounded-[30px] relative z-10 mx-auto lg:mx-0 overflow-hidden">
                                   <Image
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].author}
                                        fill
                                        className="object-cover"
                                   />
                              </div>
                         </div>

                         {/* Middle: Testimonial Text - Carousel Window */}
                         <div className="lg:col-span-6 relative z-10 min-h-[200px] lg:min-h-[300px] overflow-hidden">
                              <div
                                   className="flex transition-transform duration-500 ease-in-out"
                                   style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                              >
                                   {testimonials.map((testimonial, index) => (
                                        <div key={index} className="w-full flex-shrink-0 lg:pl-8 flex flex-col justify-center text-center lg:text-left">
                                             <blockquote className="text-[#07484A] text-2xl lg:text-[32px] leading-snug font-[family-name:var(--font-open-sans)] mb-8 lg:mb-10">
                                                  “{testimonial.quote}”
                                             </blockquote>

                                             <div className="font-[family-name:var(--font-open-sans)]">
                                                  <h4 className="text-[#07484A] text-xl font-bold">
                                                       {testimonial.author}
                                                  </h4>
                                                  <p className="text-[#07484A] text-lg opacity-80">
                                                       {testimonial.role}
                                                  </p>
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </div>

                         {/* Right Side: Navigation Buttons */}
                         <div className="lg:col-span-1 flex flex-row lg:flex-col gap-4 justify-center items-center lg:items-end w-full lg:w-auto mt-4 lg:mt-0">
                              <button
                                   onClick={handlePrev}
                                   className="w-12 h-12 rounded-full bg-[#E0EFF6] flex items-center justify-center text-[#07484A] hover:opacity-80 transition-opacity cursor-pointer"
                              >
                                   <ArrowLeft size={20} />
                              </button>
                              <button
                                   onClick={handleNext}
                                   className="w-12 h-12 rounded-full bg-[#F9D9DA] flex items-center justify-center text-[#07484A] hover:opacity-80 transition-opacity cursor-pointer"
                              >
                                   <ArrowRight size={20} />
                              </button>
                         </div>
                    </div>

                    {/* Bottom Bar: Progress & See All */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 font-[family-name:var(--font-open-sans)]">
                         {/* Progress Bar */}
                         <div className="w-full md:flex-1 h-[2px] bg-[#07484A] relative">
                              <div
                                   className="absolute left-0 top-1/2 -translate-y-1/2 h-[6px] bg-[#70908B] transition-all duration-300"
                                   style={{ width: `${progressWidth}%` }}
                              ></div>
                         </div>

                         {/* See all review Link */}
                         <button className="flex items-center gap-2 text-[#07484A] font-medium hover:opacity-70 cursor-pointer whitespace-nowrap text-sm">
                              See all review <ArrowRight size={16} />
                         </button>
                    </div>
               </div>
          </section>
     );
}
