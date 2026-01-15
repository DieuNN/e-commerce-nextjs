import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Dribbble, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="hidden lg:block w-full bg-[#F6F8F8] text-[#1F4B43]">
      <div className="max-w-[1920px] mx-auto px-[150px] py-[80px]">
        <div className="grid grid-cols-12 gap-8">
          {/* Brand & Address Column - Spans 4 columns */}
          <div className="col-span-4 flex flex-col">
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/logo.svg"
                alt="INWOOD"
                width={144}
                height={36}
                className="h-10 w-auto object-contain"
              />
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6 mb-12">
              <a href="#" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Dribbble">
                <Dribbble className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="w-6 h-6" />
              </a>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-xl font-bold mb-6">Address</h3>
              <div className="flex flex-col gap-2 text-[#547665]">
                <p>+123 654 987</p>
                <p>877 The Bronx, NY</p>
                <p>14568, USA</p>
              </div>
            </div>
          </div>

          {/* Links Columns - Span 2 columns each */}
          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-8">My Account</h3>
            <ul className="flex flex-col gap-4 text-[#547665]">
              <li><a href="#" className="hover:underline">Sign in</a></li>
              <li><a href="#" className="hover:underline">Register</a></li>
              <li><a href="#" className="hover:underline">Order status</a></li>
            </ul>
          </div>

          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-8">Help</h3>
            <ul className="flex flex-col gap-4 text-[#547665]">
              <li><a href="#" className="hover:underline">Shipping</a></li>
              <li><a href="#" className="hover:underline">Returns</a></li>
              <li><a href="#" className="hover:underline">Sizing</a></li>
            </ul>
          </div>

          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-8">Shop</h3>
            <ul className="flex flex-col gap-4 text-[#547665]">
              <li><a href="#" className="hover:underline">All Products</a></li>
              <li><a href="#" className="hover:underline">Bedroom</a></li>
              <li><a href="#" className="hover:underline">Dining Room</a></li>
            </ul>
          </div>

          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-8">Legal Stuff</h3>
            <ul className="flex flex-col gap-4 text-[#547665]">
              <li><a href="#" className="hover:underline">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy & Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 text-[#547665]">
          <p>Copyright ©2020 INWOOD. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
