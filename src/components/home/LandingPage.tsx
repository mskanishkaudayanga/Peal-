"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import NavBar from "@/components/navigation/NavBar";

export default function LandingPage() {
  // Use state to handle scroll-based color changes if needed, 
  // currently we'll set a cohesive fixed background style.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
      {/* Fixed Background - "Video" or Image */}
      <div className="fixed inset-0 z-0 h-full w-full">
        {/* Placeholder for video - using an overlay and image fallback */}
        <div className="absolute inset-0 z-10" />
        {/* <Image
          src="/hero-soap.png"
          alt="Pearl Essence Background"
          fill
          className="object-cover opacity-90"
          priority
        /> */}
        {/* If a real video exists, uncomment below: */}
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

      {/* Main Content Overlay */}
      <div className="relative z-10 flex flex-col items-center w-full">

        {/* Full Height Hero Section */}
        <section className="flex min-h-screen flex-col items-center justify-center p-4 text-center">

          {/* Animated Heading with "animation image" in middle */}
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#F9EFEA] tracking-tighter drop-shadow-lg mix-blend-overlay opacity-90 flex flex-col md:flex-row items-center gap-4 md:gap-8 animate-in fade-in zoom-in duration-1000">
            <span className="font-normal text-[167.463px]">Pearl</span>

            <span className="font-normal text-[167.463px]">Essence</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg md:text-xl text-[#F9EFEA]/90 font-light tracking-widest uppercase">
            Pure • Natural • Radiant
          </p>

        </section>

        {/* Scrolling Content Section (simulating the "single page" depth) */}
        <div className="w-full bg-background/50 backdrop-blur-md min-h-screen">
          <div className="container mx-auto px-4 py-24 space-y-24">

            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-serif text-primary">The Essence of Purity</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Discover the touch of nature with our handcrafted soaps.
                  Made with organic ingredients that nourish your skin and calm your spirit.
                </p>
              </div>
              <div className="h-96 w-full bg-muted/20 rounded-lg border border-primary/10 flex items-center justify-center">
                <span className="text-muted-foreground italic">Product Showcase</span>
              </div>
            </section>

            {/* <section className="text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif text-primary">Our Collection</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-[3/4] bg-white/50 border border-white/40 rounded shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer group flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">View Product</span>
                  </div>
                ))}
              </div>
            </section> */}

          </div>
        </div>

      </div>
    </div>
  );
}
