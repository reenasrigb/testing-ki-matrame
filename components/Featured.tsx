import React from "react";
import Link from "next/link";
import { FEATURED_ITEMS } from "@/data/menu";
import { MenuCard } from "./MenuCard";

export function Featured() {
  return (
    <section id="featured" className="py-20 bg-[#0E0E0E] border-y border-[#262626]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                Crowd Favorites & Signatures
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Featured Creations
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-xl">
              Curated bowls that define The Lavish Bowl standard — loaded to the brim and crafted with our legendary crunch.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="#menu"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37] hover:text-[#f5e7a9] transition-colors"
            >
              <span>View full 18-item menu</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Featured Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURED_ITEMS.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
