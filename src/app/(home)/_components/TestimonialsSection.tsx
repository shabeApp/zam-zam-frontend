"use client";

// import React, { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import {  Heart, MessageCircle, Share2, Bookmark } from "lucide-react";
// import { cn } from "@/lib/utils";

// const testimonials = [
//   {
//     name: "Karan",
//     location: "Mumbai",
//     review:
//       "My buying experience is so nice, and received me very politely. Riding experience is very good. Very good performance. I never experienced such a kind of performance. Very good service.",
//     avatar: "https://i.pravatar.cc/150?img=12",
//   },
//   {
//     name: "Catherine",
//     location: "Bangalore",
//     review:
//       "I love my new purchase and the customer service is excellent. They respond in a timely fashion with loads of information about the products, accessories and maintenance.",
//     avatar: "https://i.pravatar.cc/150?img=5",
//   },
//   {
//     name: "Peter",
//     location: "Delhi",
//     review:
//       "Visited the store recently. Product particularly well-crafted, looked beautiful and I took a small test. We went over all the options and pricing together. Great experience.",
//     avatar: "https://i.pravatar.cc/150?img=33",
//   },
// ];

function TestimonialsSection() {
  return (
    <section className="flex items-center justify-center px-4 py-12 sm:py-20 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none bg-[url('https://i.pinimg.com/1200x/b3/42/b6/b342b66be1216362af70993168d4d190.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 pointer-events-none bg-black/60" />

        <div className="relative w-full max-w-[900px] mx-auto">
          {/* HEADING */}
          <div className="text-center mb-8 sm:mb-12 relative z-10">
            <h1 className="font-serif text-[#F5E6D3] text-center leading-[0.95] tracking-wide">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl italic font-normal">
                SAME GRACE,
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl italic font-normal mt-1 sm:mt-2">
                DIFFERENT FRAME
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-[#F5E6D3]/90 text-sm sm:text-base md:text-lg font-light tracking-wide">
              Our classic Patola sarees captured in a new light{" "}
              <span className="inline-block ml-1">👀</span>
            </p>
          </div>

          {/* CARDS CONTAINER */}
          <div className="relative h-[500px] sm:h-[600px] md:h-[680px] w-full max-w-[800px] mx-auto">
            {/* CARD 1 */}
            <div className="absolute left-[0%] sm:left-[8%] top-[5%] w-[42%] sm:w-[38%] md:w-[40%] z-10 group">
              <div className="bg-[#F0EBE3] rounded-sm overflow-hidden shadow-2xl border border-white/20 transform transition-transform duration-500">
                <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-[#F0EBE3]">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#8B4513] flex items-center justify-center shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-[#A0522D] to-[#5C2E0E]" />
                  </div>
                  <span className="text-[11px] sm:text-[13px] text-gray-700 font-medium">
                    Chamunda patola 1
                  </span>
                </div>
                <div className="relative aspect-[3/4] bg-gradient-to-br from-[#E8B89D] to-[#C68642] overflow-hidden">
                  <Image
                    src="https://i.pinimg.com/736x/a4/65/85/a4658599ee56c39f1bd32193364bc343.jpg"
                    alt="Kantha Craftsmanship"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-[#F0EBE3]">
                  <div className="flex gap-3">
                    <Heart
                      size={18}
                      className="text-gray-500 hover:text-red-500 transition-colors cursor-pointer"
                    />
                    <MessageCircle
                      size={18}
                      className="text-gray-500 hover:text-blue-500 transition-colors cursor-pointer"
                    />
                    <Share2
                      size={18}
                      className="text-gray-500 hover:text-green-500 transition-colors cursor-pointer"
                    />
                  </div>
                  <Bookmark
                    size={18}
                    className="text-gray-500 hover:text-yellow-500 transition-colors cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="absolute left-[28%] sm:left-[32%] top-[30%] sm:top-[28%] w-[40%] sm:w-[36%] md:w-[40%] z-20 group">
              <div className="bg-[#F0EBE3] rounded-sm overflow-hidden shadow-2xl border border-white/20 transform transition-transform duration-500">
                <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-[#F0EBE3]">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#8B4513] flex items-center justify-center shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-[#A0522D] to-[#5C2E0E]" />
                  </div>
                  <span className="text-[11px] sm:text-[13px] text-gray-700 font-medium">
                    Chamunda patola 2
                  </span>
                </div>
                <div className="relative aspect-[3/4] bg-gradient-to-br from-[#E8B89D] to-[#C68642] overflow-hidden">
                  <Image
                    src="https://i.pinimg.com/736x/8f/8e/46/8f8e46c72eead181520ab6db1a2d2557.jpg"
                    alt="Kantha Craftsmanship"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-[#F0EBE3]">
                  <div className="flex gap-3">
                    <Heart
                      size={18}
                      className="text-gray-500 hover:text-red-500 transition-colors cursor-pointer"
                    />
                    <MessageCircle
                      size={18}
                      className="text-gray-500 hover:text-blue-500 transition-colors cursor-pointer"
                    />
                    <Share2
                      size={18}
                      className="text-gray-500 hover:text-green-500 transition-colors cursor-pointer"
                    />
                  </div>
                  <Bookmark
                    size={18}
                    className="text-gray-500 hover:text-yellow-500 transition-colors cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="absolute right-[0%] sm:right-[8%] top-[10%] sm:top-[8%] w-[44%] sm:w-[40%] md:w-[40%] z-10 group">
              <div className="bg-[#F0EBE3] rounded-sm overflow-hidden shadow-2xl border border-white/20 transform transition-transform duration-500">
                <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-[#F0EBE3]">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#8B4513] flex items-center justify-center shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-[#A0522D] to-[#5C2E0E]" />
                  </div>
                  <span className="text-[11px] sm:text-[13px] text-gray-700 font-medium">
                    Chamunda patola 3
                  </span>
                </div>
                <div className="relative aspect-[3/4] bg-gradient-to-br from-[#E8B89D] to-[#C68642] overflow-hidden">
                  <Image
                    src="https://i.pinimg.com/736x/10/d5/91/10d591a916d5916beaa9d6f3e4a39316.jpg"
                    alt="Kantha Craftsmanship"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-[#F0EBE3]">
                  <div className="flex gap-3">
                    <Heart
                      size={18}
                      className="text-gray-500 hover:text-red-500 transition-colors cursor-pointer"
                    />
                    <MessageCircle
                      size={18}
                      className="text-gray-500 hover:text-blue-500 transition-colors cursor-pointer"
                    />
                    <Share2
                      size={18}
                      className="text-gray-500 hover:text-green-500 transition-colors cursor-pointer"
                    />
                  </div>
                  <Bookmark
                    size={18}
                    className="text-gray-500 hover:text-yellow-500 transition-colors cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* CURVED TEXT */}
            <div className="absolute right-[-5%] sm:right-[-2%] top-[20%] w-24 h-48 sm:w-28 sm:h-56 z-0 pointer-events-none hidden sm:block">
              <svg viewBox="0 0 100 200" className="w-full h-full">
                <defs>
                  <path
                    id="curvePath"
                    d="M 90 10 A 70 90 0 0 1 90 190"
                    fill="none"
                  />
                </defs>
                <text className="fill-[#F5E6D3] text-[11px] font-bold tracking-[0.25em] uppercase opacity-90">
                  <textPath href="#curvePath" startOffset="0%">
                    CHAMUNDA PATOLA
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>
  );
}

export default TestimonialsSection;
