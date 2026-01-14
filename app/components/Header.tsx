"use client";

import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, Armchair, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-white w-full py-6 px-6 md:px-12 flex items-center justify-between text-[#1F4B43] shadow-sm relative z-20">
        {/* Left Section: Logo (and Hamburger on Phone) */}
        <div className="flex items-center shrink-0 gap-4">
          {/* Phone: Hamburger */}
          <button
            className="md:hidden"
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo - Always here */}
          <div className="flex items-center gap-2 font-bold text-2xl tracking-wide">
            <div className="relative w-8 h-8 flex items-center justify-center">
               <div className="border-2 border-[#1F4B43] p-0.5 rounded-sm">
                   <Armchair className="w-5 h-5" strokeWidth={2} />
               </div>
            </div>
            <span className="text-xl md:text-2xl">INWOOD</span>
          </div>
        </div>

        {/* Center Section: Navigation or Hamburger (Tablet/Laptop) */}
        {/* Hidden on Phone, Visible on Tablet+ and positioned absolutely in the center */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">

          {/* Tablet (md) & Laptop (lg): Hamburger */}
          <button
            className="hidden md:block xl:hidden"
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <Menu className="w-8 h-8" />
          </button>

          {/* Desktop (xl): Navigation Links */}
          <nav className="hidden xl:flex items-center gap-12 font-medium text-lg">
            <a href="#" className="border-b-2 border-[#1F4B43] pb-1">Home</a>
            <a href="#" className="hover:opacity-75 transition-opacity">Products</a>
            <a href="#" className="hover:opacity-75 transition-opacity">Categories</a>
            <a href="#" className="hover:opacity-75 transition-opacity">About</a>
            <a href="#" className="hover:opacity-75 transition-opacity">Contact Us</a>
          </nav>
        </div>

        {/* Right Section: Icons */}
        <div className="flex items-center gap-4 md:gap-8 shrink-0">
          <button aria-label="Search">
              <Search className="w-6 h-6 md:w-7 md:h-7" />
          </button>
          <button aria-label="Cart">
              <ShoppingCart className="w-6 h-6 md:w-7 md:h-7" />
          </button>
          <button aria-label="Account">
              <User className="w-6 h-6 md:w-7 md:h-7" />
          </button>
        </div>
      </header>

      {/* Mobile/Tablet Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6 text-[#1F4B43]">
          <div className="flex items-center justify-between mb-8">
             <div className="flex items-center gap-2 font-bold text-2xl tracking-wide">
                <div className="relative w-8 h-8 flex items-center justify-center">
                   <div className="border-2 border-[#1F4B43] p-0.5 rounded-sm">
                       <Armchair className="w-5 h-5" strokeWidth={2} />
                   </div>
                </div>
                <span className="text-xl md:text-2xl">INWOOD</span>
             </div>
             <button onClick={toggleMenu} aria-label="Close menu">
               <X className="w-8 h-8" />
             </button>
          </div>
          <nav className="flex flex-col gap-6 text-2xl font-medium items-center mt-12">
            <a href="#" className="border-b-2 border-[#1F4B43] pb-1" onClick={toggleMenu}>Home</a>
            <a href="#" className="hover:opacity-75" onClick={toggleMenu}>Products</a>
            <a href="#" className="hover:opacity-75" onClick={toggleMenu}>Categories</a>
            <a href="#" className="hover:opacity-75" onClick={toggleMenu}>About</a>
            <a href="#" className="hover:opacity-75" onClick={toggleMenu}>Contact Us</a>
          </nav>
        </div>
      )}
    </>
  );
}
