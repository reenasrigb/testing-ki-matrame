import React from "react";
import { MenuItem } from "@/data/menu";
import { BowlPlaceholder } from "./BowlPlaceholder";

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="group relative flex flex-col justify-between rounded-2xl bg-[#141414] border border-[#262626] p-4 transition-all duration-300 hover:border-[#D4AF37]/60 hover:shadow-[0_8px_30px_rgba(212,175,55,0.12)] hover:-translate-y-1">
      {/* Visual / Image Area */}
      <div className="relative">
        <BowlPlaceholder 
          name={item.name} 
          isVeg={item.isVeg} 
          dishType={item.dishType} 
          isSignature={item.isSignature}
        />

        {/* Floating Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5 z-20">
          {item.isSignature && (
            <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F5E7A9] px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase text-black shadow-md">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2l2.5 5 5 .5-4 4 1 5.5-4.5-2.5L5.5 17 6.5 11.5l-4-4 5-.5L10 2z" />
              </svg>
              Signature
            </span>
          )}
          {item.isNew && (
            <span className="inline-flex items-center rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase text-[#D4AF37]">
              New Launch
            </span>
          )}
        </div>

        {/* Veg / Non-Veg Indicator Icon */}
        <div 
          className="absolute top-2.5 right-2.5 z-20 rounded-md bg-black/70 backdrop-blur-sm p-1 border border-white/10"
          title={item.isVeg ? "Vegetarian" : "Non-Vegetarian"}
        >
          {item.isVeg ? (
            <div className="w-4 h-4 border border-green-500 flex items-center justify-center p-[2px]">
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
          ) : (
            <div className="w-4 h-4 border border-red-500 flex items-center justify-center p-[2px]">
              <div className="w-2 h-2 rounded-full bg-red-500" />
            </div>
          )}
        </div>
      </div>

      {/* Details Area */}
      <div className="flex flex-col flex-1 justify-between pt-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-400">
              {item.category === "new-launch" ? "New Launch" : "Original"}
            </span>
            <span className="text-neutral-600">•</span>
            <span className="text-[11px] font-medium capitalize text-neutral-400">
              {item.dishType === "fries" ? "Sides & Fries" : `${item.dishType} bowl`}
            </span>
          </div>

          <h3 className="text-base font-semibold text-white group-hover:text-[#D4AF37] transition-colors duration-200 line-clamp-2">
            {item.name}
          </h3>
        </div>

        {/* Pricing row */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-neutral-400 uppercase tracking-wider">Price</span>
            <span className="text-lg font-bold text-[#D4AF37]">
              ₹{item.price}
            </span>
          </div>

          <span className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-300 group-hover:text-white bg-white/5 group-hover:bg-[#D4AF37] group-hover:text-black px-3 py-1.5 rounded-lg border border-white/10 group-hover:border-[#D4AF37] transition-all duration-200">
            Select
            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
}
