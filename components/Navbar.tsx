"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Featured", href: "#featured" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#262626] bg-[#0B0B0B]/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand & Logo */}
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)] bg-black shrink-0">
            <Image
              src="/images/logo.jpeg"
              alt="The Lavish Bowl Logo"
              fill
              sizes="48px"
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-[#D4AF37] transition-colors">
              The Lavish Bowl
            </span>
            <span className="text-[10px] font-semibold tracking-wider uppercase text-[#D4AF37]/90 hidden sm:inline-block">
              Loaded. Crispy. Legendary.
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-neutral-300 hover:text-[#D4AF37] transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="#menu"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-5 py-2 text-sm font-bold text-black transition-all duration-200 hover:bg-[#c59f2c] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] active:scale-95"
          >
            Explore Menu
          </Link>

          {/* Hamburger button for mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-neutral-300 hover:bg-neutral-800 hover:text-white focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#262626] bg-[#0E0E0E] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-base font-medium text-neutral-300 hover:bg-neutral-900 hover:text-[#D4AF37]"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-2">
            <Link
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-xl bg-[#D4AF37] px-4 py-2.5 text-center text-sm font-bold text-black shadow-md hover:bg-[#c59f2c]"
            >
              Explore Menu
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
