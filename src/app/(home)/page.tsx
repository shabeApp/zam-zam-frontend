// _____________________ui_______________________
import FeaturedProductsList from "./_components/FeaturedProductsList";
// import ProductCard from "./_components/ProductCard"
import Hero from "./_components/Hero";
import Category from "./_components/Category";
import TestimonialsSection from "./_components/TestimonialsSection";
import DecorativeSeparator from "@/components/custom/decorativeSeparator";
import TrustBadges from "./_components/TrustBadges";
// _____________________logic_______________________

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] font-sans text-gray-900">
      {/* Mobile Drawer Toggle / Menu */}
      {/* {mobileMenuOpen && (
                <div className="md:hidden bg-[#F5F0E8] border-b border-gray-300 px-6 py-4 flex flex-col gap-3 text-sm font-medium shadow-md">
                    <a href="#" className="py-1 hover:text-[#a67c52] transition-colors">Home</a>
                    <a href="#" className="py-1 hover:text-[#a67c52] transition-colors">Dresses</a>
                    <a href="#" className="py-1 hover:text-[#a67c52] transition-colors">Punjabi</a>
                    <a href="#" className="py-1 hover:text-[#a67c52] transition-colors">About Us</a>
                    <a href="#" className="py-1 hover:text-[#a67c52] transition-colors">Contact Us</a>
                </div>
            )} */}

      {/* --- HERO BANNER --- */}
      <Hero />

      {/*--- FEATURES BAR ---*/}

      <DecorativeSeparator />

      {/* --- CATEGORY SECTION --- */}
      <Category />

      <DecorativeSeparator />

      {/* --- TRENDING SECTION --- */}
      <section className="py-8 sm:py-12 mx-auto px-4 sm:px-12 max-w-7xl">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif text-gray-800 inline-block border-b-2 border-gray-400 pb-2 px-6 sm:px-8">
            Trending
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {/* {FeaturedProductsList.map((product) => (
                        <ProductCard
                            key={product.id}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                        />
                    ))} */}
          <FeaturedProductsList />
        </div>
      </section>

      <DecorativeSeparator />

      {/* --- ABOUT KANTHA REVIVAL --- */}
      <TrustBadges/>

      <DecorativeSeparator />

      {/* --- PATOLA SHOWCASE SECTION --- */}
      <TestimonialsSection/>

      {/* <DecorativeSeparator /> */}
    </div>
  );
}
