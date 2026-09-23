import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TrustBadges = () => {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 py-10 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Image */}
          <div className="lg:col-span-5 relative w-full">
            <div className="aspect-3/4 bg-[#1a1a1a] rounded-sm overflow-hidden relative w-full">
              <Image
                src="https://i.pinimg.com/736x/5f/c4/a6/5fc4a661eca32c2dfb3c3da868aec43b.jpg"
                alt="Kantha Craftsmanship"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20" />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div className="lg:pt-4">
              <span className="inline-block text-[#8B1538] text-[11px] font-semibold tracking-[0.2em] uppercase mb-3 sm:mb-4">
                Since 1954
              </span>

              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-serif font-bold text-[#2C1810] leading-[1.15] mb-1 sm:mb-2">
                Everything about
              </h2>
              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-serif font-bold text-[#2C1810] leading-[1.15] mb-4 sm:mb-6">
                Kantha Revival.
              </h2>

              <p className="text-[13px] sm:text-sm text-[#5C4A3A] leading-relaxed max-w-md mb-2">
                Each piece is a labor of love, taking 3,000 hours to complete.
                Our master craftsmen use the same techniques that have been
                passed down for generations, ensuring every thread tells a
                story.
              </p>
              <p className="text-[13px] sm:text-sm text-[#5C4A3A] leading-relaxed max-w-md mb-6 sm:mb-8">
                The revival brings traditional motifs back to life with
                contemporary sensibilities, creating heirlooms for the modern
                wardrobe.
              </p>
              <Link href="/products" passHref>
              <button className="group inline-flex items-center gap-2 bg-[#5C3D1E] hover:bg-[#4A2F17] text-white text-sm font-medium px-6 py-2.5 rounded-sm transition-all duration-200 active:scale-[0.98]">
                Shopping
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
              </Link>
            </div>

            <div className="mt-8 lg:mt-16">
              <div className="aspect-video bg-[#D4A574] rounded-sm overflow-hidden relative max-w-lg w-full">
                <Image
                  src="https://i.pinimg.com/1200x/02/c1/45/02c1450326f683f72395956aa49bba28.jpg"
                  alt="Kantha fabric details"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
