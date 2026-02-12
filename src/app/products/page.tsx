"use client";

import React, { useState } from "react";
import NavBar from "@/components/navigation/NavBar";
import ProductCard from "@/components/products/ProductCard";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: 1,
      name: "Lavender Dreams",
      price: 45.00,
      image: "/hero-soap.png",
    },
    {
      id: 2,
      name: "Ocean Breeze",
      price: 42.00,
      image: "/hero-soap.png",
    },
    {
      id: 3,
      name: "Rose Garden",
      price: 48.00,
      image: "/hero-soap.png",
    },
    {
      id: 4,
      name: "Honey Glow",
      price: 50.00,
      image: "/hero-soap.png",
    },
    {
      id: 5,
      name: "Mint Fresh",
      price: 40.00,
      image: "/hero-soap.png",
    },
    {
      id: 6,
      name: "Vanilla Bliss",
      price: 46.00,
      image: "/hero-soap.png",
    },
  ];

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
      {/* Fixed Background Video */}
      <div className="fixed inset-0 z-0 h-full w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/soapp.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="font-sans font-bold text-5xl md:text-6xl lg:text-7xl text-white [text-shadow:0px_2px_4px_rgba(0,0,0,0.3)] select-none caret-transparent">
              Prodcts For You
            </h1>
            <p className="font-sans text-lg md:text-xl text-white/80 max-w-3xl mx-auto [text-shadow:0px_1px_2px_rgba(0,0,0,0.2)] select-none caret-transparent">
              Discover our handcrafted soaps made with love and natural ingredients.
              Each bar is carefully crafted to nourish your skin and elevate your daily routine.
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex justify-center mb-12">
            <div
              className={cn(
                "relative w-full max-w-2xl",
                "overflow-hidden",
                "rounded-full"
              )}
            >
              {/* Colored Background Patches - Behind glassmorphism */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                {/* Gradient patches for visual interest */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#91B3A0]/30 via-[#E8B8A9]/30 to-[#745241]/30" />
                <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#91B3A0]/20 rounded-full blur-2xl" />
                <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-[#E8B8A9]/20 rounded-full blur-3xl" />
              </div>

              {/* Glassmorphism Layer */}
              <div
                className={cn(
                  "relative",
                  "bg-white/15 backdrop-blur-2xl",
                  "border border-white/30",
                  "shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]",
                  "transition-all duration-300",
                  "focus-within:bg-white/20 focus-within:border-white/40",
                  "focus-within:shadow-[0_12px_40px_0_rgba(0,0,0,0.25)]",
                  "rounded-full"
                )}
              >
                {/* Search Icon */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                  <Search className="w-5 h-5 text-white/80" />
                </div>

                {/* Search Input */}
                <input
                  type="text"
                  placeholder="Search products by name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={cn(
                    "relative z-10",
                    "w-full h-14 pl-14 pr-14",
                    "bg-transparent",
                    "border-none outline-none",
                    "font-sans text-base font-medium text-white placeholder:text-white/60",
                    "[text-shadow:0px_2px_4px_rgba(0,0,0,0.3)]",
                    "rounded-full"
                  )}
                />

                {/* Clear Button (appears when there's text) */}
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className={cn(
                      "absolute right-4 top-1/2 -translate-y-1/2 z-10",
                      "w-8 h-8 rounded-full",
                      "flex items-center justify-center",
                      "bg-white/15 hover:bg-white/25",
                      "border border-white/20",
                      "transition-all duration-200",
                      "active:scale-95"
                    )}
                  >
                    <span className="text-white font-bold text-sm">✕</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  onAddToCart={() => console.log(`Added ${product.name} to cart`)}
                  onToggleFavorite={() => console.log(`Toggled favorite for ${product.name}`)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-sans text-xl text-white/70 [text-shadow:0px_1px_2px_rgba(0,0,0,0.2)]">
                No products found matching "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
