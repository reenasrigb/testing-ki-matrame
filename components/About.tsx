import React from "react";

export function About() {
  const pillars = [
    {
      title: "Loaded",
      tag: "Abundant & Generous",
      description:
        "Every bowl is crafted with generous layers, hearty bases, and rich toppings that deliver total satisfaction from top to bottom.",
      icon: (
        <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Crispy",
      tag: "Irresistible Crunch",
      description:
        "Engineered for texture. From our golden fried sides to crunchy signature toppings, crunch is at the heart of our craft.",
      icon: (
        <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Legendary",
      tag: "Signature Taste",
      description:
        "Bold spices, harmonious sauces, and uncompromising standards that make every order at The Lavish Bowl an unforgettable experience.",
      icon: (
        <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0E0E0E] border-t border-[#262626] relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Our Brand Philosophy
            </span>
            <span className="h-px w-8 bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            About The Lavish Bowl
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
            The Lavish Bowl is dedicated to elevating everyday comfort food into a luxury experience. We combine uncompromising freshness with bold culinary pairings, built around our core promise: <span className="text-[#D4AF37] font-semibold">Loaded. Crispy. Legendary.</span>
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl bg-[#141414] border border-[#262626] p-8 flex flex-col justify-between hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(212,175,55,0.08)]"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-1">
                  {pillar.tag}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
