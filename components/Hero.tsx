import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Background radial gold gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-10 right-0 w-[300px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#D4AF37]">
                Loaded. Crispy. Legendary.
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Elevate Your Craving With <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F5E7A9] to-[#D4AF37]">
                The Lavish Bowl
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl text-base sm:text-lg text-neutral-300 leading-relaxed">
              Every bowl is crafted with generous layers, an unforgettable crisp, and legendary flavors. Experience our signature loaded bowls and crispy sides prepared to perfection.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-8 py-3.5 text-base font-bold text-black transition-all duration-300 hover:bg-[#c59f2c] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] active:scale-95"
              >
                <span>Explore Menu</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="#featured"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-[#262626] bg-[#141414] px-8 py-3.5 text-base font-semibold text-neutral-200 hover:border-[#D4AF37]/50 hover:text-white transition-all duration-300"
              >
                View Signatures
              </Link>
            </div>

            {/* Brand Key Stats / Highlights */}
            <div className="pt-8 grid grid-cols-3 gap-4 sm:gap-8 border-t border-[#262626] w-full max-w-lg">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">18</p>
                <p className="text-xs sm:text-sm text-neutral-400 font-medium">Distinct Bowls</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">8</p>
                <p className="text-xs sm:text-sm text-neutral-400 font-medium">New Launches</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">100%</p>
                <p className="text-xs sm:text-sm text-neutral-400 font-medium">Loaded & Crispy</p>
              </div>
            </div>
          </div>

          {/* Visual Showcase with Official Logo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/30 scale-105 animate-[spin_40s_linear_infinite]" />
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#D4AF37]/10 blur-xl" />

              {/* Central Card with Official Logo */}
              <div className="relative h-full w-full rounded-3xl bg-[#141414] border-2 border-[#D4AF37]/60 p-6 flex flex-col items-center justify-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden">
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-[0_0_25px_rgba(212,175,55,0.25)] bg-black">
                  <Image
                    src="/images/logo.jpeg"
                    alt="The Lavish Bowl"
                    fill
                    sizes="(max-width: 768px) 208px, 208px"
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="mt-5 space-y-1">
                  <h2 className="text-xl font-bold tracking-tight text-white">The Lavish Bowl</h2>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                    Loaded • Crispy • Legendary
                  </p>
                </div>

                <div className="absolute bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
