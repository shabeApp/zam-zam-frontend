"use client";

import Link from "next/link";
import { useState } from "react";
import DecorativeSeparator from "../custom/decorativeSeparator";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    // TODO: Connect your API here
    console.log("Newsletter:", email);

    alert("Thanks for subscribing!");
    setEmail("");
  };

  const footerLinks = {
    initiatives: [
      { name: "hu", href: "/initiatives/housing" },
      { name: "Data Solutions Lab", href: "/initiatives/data" },
      { name: "Builders Lab", href: "/initiatives/builders" },
    ],
    organization: [
      { name: "About", href: "/about" },
      { name: " Contact us", href: "/blog" },
      { name: "hi", href: "/careers" },
    ],
    join: [
      { name: "Contact", href: "/contact" },
      { name: "Supporters", href: "/supporters" },
      { name: "Donate", href: "/donate" },
    ],
    social: [
      { name: "LinkedIn", href: "https://linkedin.com" },
      { name: "X", href: "https://x.com" },
      { name: "Instagram", href: "https://instagram.com" },
    ],
  };

  return (
    <>
    <DecorativeSeparator/>
    <footer className="bg-[#F5F0E8] text-[#111111] border-t border-neutral-200">
      <div className="mx-auto px-5 py-12 sm:px-8 lg:px-16">
        {/* Top Section */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">zam zam</h2>

            <p className="text-[12px] text-gray-400">
              Building innovative housing, data, and community solutions through
              research, technology, and collaboration.
            </p>

            <Link
              href="/initiatives"
              className="inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:scale-105 hover:bg-neutral-800"
            >
              Join an Initiative →
            </Link>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <FooterColumn
              title="Initiatives"
              links={footerLinks.initiatives}
            />
            <FooterColumn
              title="Organization"
              links={footerLinks.organization}
            />
            <FooterColumn title="Join Us" links={footerLinks.join} />
            <FooterColumn title="Follow Us" links={footerLinks.social} />
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-neutral-300" />

        {/* Bottom */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Logo */}
          <div className="flex items-end gap-4">
            <svg
              viewBox="0 0 160 200"
              className="h-28 w-24 text-black"
              fill="currentColor"
            >
              <path d="M0 0H45V28H75V58H45V85H20V58H0Z" />
              <rect x="0" y="105" width="28" height="95" rx="14" />
              <path d="M50 105H90V165C90 182 77 195 60 195H50V165H75V135H50Z" />
            </svg>

            <div>
              <h3 className="font-semibold">Terner Labs</h3>
              <p className="text-sm text-neutral-600">
                Housing Innovation • UC Berkeley
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em]">
              Newsletter
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
                />

                <button
                  type="submit"
                  className="rounded-xl bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 active:scale-95"
                >
                  Subscribe
                </button>
              </div>

              <p className="text-xs leading-6 text-neutral-600">
                Terner Labs complements the work of the{" "}
                <Link
                  href="/terner-center"
                  className="font-medium underline underline-offset-2 hover:no-underline"
                >
                  Terner Center for Housing Innovation
                </Link>{" "}
                at UC Berkeley.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-300 pt-6 text-xs text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Terner Labs. All rights reserved.</p>

          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-black">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-black">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-black">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
</>
  );
}

type LinkItem = {
  name: string;
  href: string;
};

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: LinkItem[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-neutral-500">
        {title}
      </h3>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="group inline-flex items-center text-sm transition hover:text-black"
            >
              {link.name}
              <span className="ml-1 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}