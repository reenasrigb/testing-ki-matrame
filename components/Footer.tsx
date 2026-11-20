import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-[#262626] bg-[#080808] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#262626]">
          {/* Brand info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.25)] bg-black shrink-0">
              <Image
                src="/images/logo.jpeg"
                alt="The Lavish Bowl Logo"
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-white">The Lavish Bowl</h3>
              <p className="text-xs font-semibold tracking-wider uppercase text-[#D4AF37] mt-0.5">
                Loaded. Crispy. Legendary.
              </p>
            </div>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-neutral-400">
            <Link href="#home" className="hover:text-[#D4AF37] transition-colors">
              Home
            </Link>
            <Link href="#featured" className="hover:text-[#D4AF37] transition-colors">
              Featured
            </Link>
            <Link href="#menu" className="hover:text-[#D4AF37] transition-colors">
              Menu
            </Link>
            <Link href="#about" className="hover:text-[#D4AF37] transition-colors">
              About
            </Link>
          </nav>

          {/* Call to action */}
          <div>
            <Link
              href="#menu"
              className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-6 py-2.5 text-sm font-bold text-black transition-all hover:bg-[#c59f2c] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              Explore Menu
            </Link>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© {currentYear} The Lavish Bowl. All rights reserved.</p>
          <p className="text-[#D4AF37]/90 font-medium tracking-wide">
            Loaded. Crispy. Legendary.
          </p>
        </div>
      </div>
    </footer>
  );
}
