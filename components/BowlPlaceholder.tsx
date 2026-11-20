import React from "react";

interface BowlPlaceholderProps {
  name?: string;
  isVeg: boolean;
  dishType: 'chicken' | 'paneer' | 'fries';
  isSignature?: boolean;
}

export function BowlPlaceholder({ isVeg, dishType, isSignature }: BowlPlaceholderProps) {
  return (
    <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#121212] to-[#0d0d0d] border border-white/5 flex flex-col items-center justify-center p-6 text-center group-hover:border-[#D4AF37]/40 transition-all duration-300">
      {/* Subtle radial backdrop glow */}
      <div 
        className="absolute inset-0 opacity-25 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
        style={{
          background: isSignature 
            ? "radial-gradient(circle at center, rgba(212,175,55,0.35) 0%, transparent 70%)"
            : isVeg
            ? "radial-gradient(circle at center, rgba(34,197,94,0.2) 0%, transparent 70%)"
            : "radial-gradient(circle at center, rgba(239,68,68,0.2) 0%, transparent 70%)"
        }}
      />

      {/* Decorative Bowl Icon Artwork */}
      <div className="relative z-10 w-20 h-20 mb-3 flex items-center justify-center">
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
        >
          {/* Outer ring accent */}
          <circle cx="50" cy="50" r="46" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
          
          {/* Steam / Crunch waves */}
          <path d="M40 22 Q42 16 40 10" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          <path d="M50 20 Q52 14 50 8" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
          <path d="M60 22 Q62 16 60 10" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          
          {/* Loaded Layer Toppings silhouette */}
          <ellipse cx="50" cy="45" rx="34" ry="12" fill="#222222" stroke="#D4AF37" strokeWidth="1.5" />
          <path 
            d="M24 45 Q36 34 50 36 Q64 34 76 45" 
            fill="none" 
            stroke={dishType === 'fries' ? '#FBBF24' : isVeg ? '#22C55E' : '#EF4444'} 
            strokeWidth="3" 
            strokeLinecap="round"
          />
          <circle cx="42" cy="43" r="3" fill="#D4AF37" />
          <circle cx="58" cy="42" r="3.5" fill="#D4AF37" />
          <circle cx="50" cy="44" r="2.5" fill="#FFFFFF" opacity="0.7" />

          {/* Deep Bowl Base */}
          <path 
            d="M18 45 C18 68 32 82 50 82 C68 82 82 68 82 45 Z" 
            fill="#151515" 
            stroke="#D4AF37" 
            strokeWidth="2"
          />
          
          {/* Bowl Rim Highlight */}
          <ellipse cx="50" cy="45" rx="32" ry="7" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.5" />
          
          {/* Bowl Base Stand */}
          <path d="M38 82 L62 82 L58 87 L42 87 Z" fill="#D4AF37" opacity="0.8" />
        </svg>
      </div>

      {/* Brand stamp on placeholder */}
      <span className="relative z-10 text-[11px] font-semibold uppercase tracking-widest text-[#D4AF37]/80">
        The Lavish Bowl
      </span>
      <span className="relative z-10 text-xs text-neutral-400 font-medium mt-0.5 line-clamp-1 max-w-[90%]">
        {dishType === 'fries' ? 'Crispy Fry Craft' : dishType === 'paneer' ? 'Loaded Paneer Creation' : 'Signature Chicken Bowl'}
      </span>
    </div>
  );
}
