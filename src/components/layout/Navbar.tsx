"use client";

import React, { useState } from "react";
import {
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
  Sparkles,
  ChevronRight,
  Heart,
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const cartItemCount = 2; // Example count

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Dresses", href: "/products" },
    { name: "Punjabi", href: "/products" },
    { name: "About Us", href: "/our-story" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F5F0E8]/75 backdrop-blur-md border-b border-[#E5DCCB] transition-all duration-300">
      <div className=" mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        {/* LEFT: Mobile Menu Button & Brand Emblem */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-[#2C1810] p-2 hover:bg-[#E5DCCB]/50 rounded-full transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Artistic Brand Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full bg-linear-to-br from-[#8B1538] to-[#5C3D1E] p-px shadow-sm transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#F5F0E8] rounded-full flex items-center justify-center border border-[#E5DCCB]">
                <span className="font-serif text-[#8B1538] font-bold text-xs tracking-widest pl-0.5">
                  TL
                </span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-serif text-lg tracking-[0.18em] uppercase font-semibold text-[#2C1810] leading-none">
                Zam Zam
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#8B1538] font-medium mt-1">
                Katha & Silk
              </span>
            </div>
          </a>
        </div>

        {/* CENTER: Artistic Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-xs uppercase tracking-[0.2em] font-medium text-[#2C1810]/80 hover:text-[#8B1538] transition-colors py-2 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#8B1538] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
        </nav>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search */}
          <div className="relative flex items-center">
            <div
              className={`overflow-hidden transition-all duration-300 ${
                searchOpen ? "w-52 sm:w-64 mr-2" : "w-0"
              }`}
            >
              <div className="relative">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8B7355]"
                />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full h-10 pl-9 pr-4 rounded-full text-sm text-[#2C1810] placeholder:text-[#8B7355] outline-none focus:ring-2 focus:ring-[#8B1538]/10"
                  autoFocus
                />
              </div>
            </div>

            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-full  text-[#2C1810] hover:bg-[#EFE6D8] hover:text-[#8B1538] transition"
              aria-label="Search"
            >
              {searchOpen ? <X size={18} /> : <Search size={18} />}
            </button>
          </div>

          {/* Account */}
          <a
            href="/myAccount"
            className="w-10 h-10 flex items-center justify-center rounded-full  text-[#2C1810] hover:bg-[#EFE6D8] hover:text-[#8B1538] transition"
            aria-label="Account"
          >
            <User size={18} />
          </a>

          {/* Wishlist */}
          <a
            href="/wishlist"
            className="w-10 h-10 flex items-center justify-center rounded-full  text-[#2C1810] hover:bg-[#EFE6D8] hover:text-[#8B1538] transition"
            aria-label="Wishlist"
          >
            <Heart size={18} />
          </a>

          {/* Cart */}
          <a
            href="/cart"
            className="relative w-10 h-10 flex items-center justify-center rounded-full text-[#2C1810] hover:bg-[#EFE6D8] hover:text-[#8B1538] transition"
            aria-label="Cart"
          >
            <ShoppingBag size={18} />

            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-4.5 h-4.5 px-1 rounded-full bg-[#8B1538] text-white text-[10px] font-semibold flex items-center justify-center">
                {cartItemCount > 99 ? "99+" : cartItemCount}
              </span>
            )}
          </a>
        </div>
      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E5DCCB] bg-[#F5F0E8] px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-300 shadow-xl">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#8B1538] font-bold pb-2 border-b border-[#E5DCCB]">
            <Sparkles size={12} /> Curated Collections
          </div>

          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center justify-between text-sm uppercase tracking-widest text-[#2C1810] hover:text-[#8B1538] py-2 transition-colors border-b border-[#E5DCCB]/40"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{link.name}</span>
                <ChevronRight size={14} className="text-[#8B1538]" />
              </a>
            ))}
          </div>

          <div className="pt-4 flex items-center justify-between text-xs text-[#5C3D1E]">
            <span>Crafted in Bengal</span>
            <span className="font-serif italic text-xs">
              Authentic Artisanal
            </span>
          </div>
        </div>
      )}
    </header>
  );
}

// const navLinks = [
//     { href: "/", label: "Home" },
//     {
//         href: "/products",
//         label: "Shop",
//         subLinks: [
//             { href: "/products", label: "Shoping Products" },
//             { href: "/gifting", label: "Gifting" },
//         ]
//     },
//     { href: "/artists", label: "Artisans" },
//     {
//         href: "/our-story", label: "Our Story", subLinks: [
//             { href: "/our-story", label: "Our Story" },
//             { href: "/media/careers", label: "Join Us" },
//             { href: "/contact", label: "Contact Us" },
//         ]
//     },
//     {
//         href: "/media/privacy&security",
//         label: "Policy&security",
//         subLinks: [
//             { href: "/media/shipping", label: "Shipping Policy" },
//             { href: "/media/returns", label: "Return & Refund Policy" },
//             // { href: "/media/refund", label: "Refund Policy" },
//             { href: "/media/terms", label: "Terms of Service" },
//             { href: "/media/privacy&security", label: "Privacy & Security" },
//         ]
//     },

// ];

// const MobileLink = [
//     { href: "/myAccount", label: "My Account", icon: User },
//     { href: "/wishlist", label: "Wishlist", icon: Heart },
//     { href: "/contact", label: "Contact Us", icon: Mail },
//     { href: "/media/ourStory", label: "Our Story", icon: BookOpen },
//     { href: "/auth/register", label: "Register", icon: UserPlus },
//     { href: "/track-order/1", label: "Track Order", icon: Truck },
//     // { href: "/media/post", label: "Journal", icon: Newspaper },
//     { href: "/media/careers", label: "Careers", icon: Briefcase },
//     { href: "/media/vendor", label: "Vendor", icon: Store },
//     { href: "/cart", label: "Cart", icon: ShoppingBag },
//     { href: "/media/faq", label: "FAQ", icon: HelpCircle },
//     { href: "/media/shipping", label: "Shipping Policy", icon: Truck },
//     { href: "/media/returns", label: "Return & Refund Policy", icon: RefreshCcw },
//     // { href: "/media/refund", label: "Refund Policy" },
//     { href: "/admin/dashboard", label: "admin", icon: Settings },
//     { href: "/media/terms", label: "Terms of Service", icon: FileText },
//     { href: "/media/privacy&security", label: "Privacy & Security", icon: Lock },
//     { href: "/media/cookies", label: "Cookie Policy", icon: Cookie },
//     // { href: "/media/post", label: "Post" },
// ];
