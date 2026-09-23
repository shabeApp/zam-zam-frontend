"use client";

import { Suspense } from "react";
import Link from "next/link";
// import { Button } from "@/components/ui/button";
import {
  Award,
  ChevronDown,
  Clock,
  LoaderCircle,
  ShieldCheck,
  ThumbsUp,
  Truck,
} from "lucide-react";
// import Image from "next/image";

// const Hero = () => {
//     return (
//         <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-stone-900 group">
//             {/* Video Background with Poster for Performance */}
//             <Suspense fallback={<LoaderCircle className="text-black" />}>
//                 <video
//                     autoPlay
//                     muted
//                     loop
//                     playsInline
//                     preload="auto"
//                     poster="/figimage.webp"
//                     className="absolute inset-0 w-full h-full object-cover opacity-50"
//                 >
//                     <source src="https://cdn.pixabay.com/video/2018/10/25/18897-297379518_large.mp4" type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//             </Suspense>

//             {/* Premium Gradients */}
//             <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60" />
//             <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/20" />

//             {/* Centered Content */}
//             <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto">
//                 <div className="space-y-6">
//                     <div className="space-y-2">
//                         <p className="text-white/40 text-[6px] md:text-xs tracking-[0.5em] font-medium uppercase">
//                             Spring / Summer 2024
//                         </p>
//                         <h2 className="text-5xl md:text-9xl font-heading font-black uppercase tracking-tighter text-white leading-[0.9]">
//                             Fashion <br />
//                             <span className="italic font-light text-white/90">Is Art</span>
//                         </h2>
//                     </div>
//                 </div>
//             </div>

//             {/* Floating Scroll Indicator */}
//             <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block opacity-60">
//                 <div className="flex flex-col items-center gap-2">
//                     <span className="text-[8px] tracking-[0.3em] font-bold text-white uppercase">SCROLL</span>
//                     <ChevronDown className="text-white w-4 h-4" />
//                 </div>
//             </div>

//             {/* Side Branding */}
//             <div className="absolute left-6 bottom-0 top-0 hidden lg:flex items-center z-10">
//                 <p className="text-white/20 text-[10px] tracking-[0.8em] uppercase font-black vertical-text -rotate-180" style={{ writingMode: 'vertical-rl' }}>
//                     ESTABLISHED 1994 &bull; SHANTINIKETAN
//                 </p>
//             </div>
//         </section>
//     );
// };

const Hero = () => {
  return (
    <>
      {/* hero */}
      <section className="relative w-full min-h-105 md:h-145 overflow-hidden flex items-center py-10 md:py-0">
        <Suspense fallback={<LoaderCircle className="text-black" />}>
          <div className="absolute inset-0 w-full h-full bg-[url('https://i.pinimg.com/1200x/b3/eb/55/b3eb55ed042c7348538963b575611228.jpg')] bg-cover bg-center bg-black" />
        </Suspense>
        <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-black opacity-40"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 flex flex-col items-center justify-center text-center shrink-0"></div>

          <div className="text-center md:text-right mt-2 md:mt-0">
            <h2 className="text-2xl sm:text-3xl md:text-5xl text-white font-light mb-1 md:mb-2">
              Largest collection of
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white drop-shadow-md mb-1 md:mb-2">
              Wedding
            </h1>
            <h3 className="text-xl sm:text-2xl md:text-3xl text-white mb-4 md:mb-6">
              Designer Sarees
            </h3>
            <Link href="/products" passHref>
              <button className="bg-[#604020] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-sm hover:bg-[#805020] hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg text-sm sm:text-base">
                Shopping &rarr;
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* --- FEATURES BAR --- */}
      <section className="py-6 px-4 sm:px-6 max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-between items-center text-center gap-6">
        {[
          { icon: Award, text: "Quality\nGuaranteed" },
          { icon: ThumbsUp, text: "100%\nSatisfaction" },
          { icon: Truck, text: "Free\nShipping" },
          { icon: ShieldCheck, text: "Secure\nPayments" },
          { icon: Clock, text: "24/7\nSupport" },
        ].map((feat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-gray-600 text-xs uppercase tracking-wide"
          >
            <feat.icon size={26} className="mb-2 text-gray-400 sm:w-7 sm:h-7" />
            <span className="whitespace-pre-line leading-tight">
              {feat.text}
            </span>
          </div>
        ))}
      </section>
    </>
  );
};

export default Hero;
