"use client";

import React from "react";
import Image from "next/image";
import { ShoppingBag, Heart, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category?: string;
  installmentPrice?: number; // Optional: e.g. "10x of R$..."
  onAddToCart?: () => void;
  onToggleFavorite?: () => void;
  isFavorite?: boolean;
}

export default function ProductCard({
  name = "Lavender Oatmeal Bar", // Default for preview
  price = 45.0,
  image,
  category = "Natural Soap",
  onAddToCart,
  onToggleFavorite,
  isFavorite = false,
}: ProductCardProps) {
  return (
    <div
      className={cn(
        "group relative w-full max-w-sm h-[480px]", // Fixed height for consistency
        "rounded-[32px] overflow-hidden", // Large rounded corners like reference
        "shadow-2xl transition-all duration-500",
        "hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]",
        "hover:scale-[1.02]"
      )}
    >
      {/* 1. Full Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Dark Gradient Overlay (Bottom) - Essential for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />
      </div>

      {/* 2. Top Right: Glassy Heart Button */}
      <button
        onClick={onToggleFavorite}
        className={cn(
          "absolute top-5 right-5 z-20",
          "w-12 h-12 rounded-full",
          "flex items-center justify-center",
          "bg-white/10 backdrop-blur-md", // Glass effect
          "border border-white/20",
          "transition-all duration-300",
          "hover:bg-white/20 hover:scale-110 active:scale-95"
        )}
      >
        <Heart
          className={cn(
            "w-6 h-6 transition-colors duration-300",
            isFavorite ? "fill-red-500 stroke-red-500" : "stroke-white"
          )}
        />
      </button>

      {/* 3. Bottom Content Area */}
      <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col gap-5">
        
        {/* Product Text */}
        <div className="space-y-1">
          <p className="text-white/70 text-xs font-bold tracking-widest uppercase">
            {category}
          </p>
          <h3 className="font-sans font-black text-2xl text-white uppercase leading-tight tracking-wide">
            {name}
          </h3>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-xl text-white">
              Rs  {price}
            </span>
            {/* {installmentPrice && (
              <span className="text-white/60 text-xs">
                 ou até 10X de R$ {installmentPrice.toFixed(2).replace('.', ',')}
              </span>
            )} */}
          </div>
        </div>

        {/* Glass Action Bar */}
        <div className="flex items-center gap-3">
          
          {/* Small Icon Button (Shopping Bag) */}
          <button
            onClick={onAddToCart}
            className={cn(
              "w-14 h-14 rounded-2xl", // Squircle shape like iOS
              "flex items-center justify-center shrink-0",
              "bg-white/10 backdrop-blur-md",
              "border border-white/30",
              "transition-all duration-300",
              "hover:bg-white/20 hover:border-white/50",
              "active:scale-95"
            )}
            aria-label="View Details"
          >
            <ShoppingBag className="w-6 h-6 text-white" />
          </button>

          {/* Large Pill Button (Primary Action) */}
          <button
            onClick={onAddToCart}
            className={cn(
              "flex-1 h-14 rounded-2xl",
              "flex items-center justify-center",
              "bg-white/10 backdrop-blur-md",
              "border border-white/30",
              "font-sans font-semibold text-white tracking-wide",
              "transition-all duration-300",
              // Hover Effect: Fill white, text becomes black/dark (Reverse)
              "hover:bg-white hover:text-black hover:border-white",
              "active:scale-95"
            )}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}