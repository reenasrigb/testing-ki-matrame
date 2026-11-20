"use client";

import React, { useState } from "react";
import { MENU_ITEMS, MenuItem } from "@/data/menu";
import { MenuCard } from "./MenuCard";

type FilterType = "all" | "new-launch" | "original" | "chicken" | "paneer" | "fries";

export function MenuSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filterTabs: { label: string; value: FilterType; count: number }[] = [
    { label: "All Items", value: "all", count: MENU_ITEMS.length },
    {
      label: "New Launches",
      value: "new-launch",
      count: MENU_ITEMS.filter((i) => i.category === "new-launch").length,
    },
    {
      label: "Original Classics",
      value: "original",
      count: MENU_ITEMS.filter((i) => i.category === "original").length,
    },
    {
      label: "Chicken Bowls",
      value: "chicken",
      count: MENU_ITEMS.filter((i) => i.dishType === "chicken").length,
    },
    {
      label: "Paneer Bowls",
      value: "paneer",
      count: MENU_ITEMS.filter((i) => i.dishType === "paneer").length,
    },
    {
      label: "Fries & Sides",
      value: "fries",
      count: MENU_ITEMS.filter((i) => i.dishType === "fries").length,
    },
  ];

  const filteredItems: MenuItem[] = MENU_ITEMS.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "new-launch") return item.category === "new-launch";
    if (activeFilter === "original") return item.category === "original";
    if (activeFilter === "chicken") return item.dishType === "chicken";
    if (activeFilter === "paneer") return item.dishType === "paneer";
    if (activeFilter === "fries") return item.dishType === "fries";
    return true;
  });

  return (
    <section id="menu" className="py-24 bg-[#0B0B0B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              The Full Lineup
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Complete Menu
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            Explore all 18 signature bowls and crispy sides, freshly prepared with bold spices and uncompromising crunch.
          </p>

          {/* Legend */}
          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 border border-green-500 flex items-center justify-center p-[2px]">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              </div>
              <span>Vegetarian</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 border border-red-500 flex items-center justify-center p-[2px]">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
              </div>
              <span>Non-Vegetarian</span>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveFilter(tab.value)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                    : "bg-[#141414] text-neutral-300 hover:text-white border border-[#262626] hover:border-neutral-700"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] rounded-full px-1.5 py-0.2 ${
                    isActive ? "bg-black/20 text-black font-bold" : "bg-white/10 text-neutral-400"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
