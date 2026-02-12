"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out",
        scrolled ? "top-4" : "top-8"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center gap-1 px-2 py-2",
          "bg-white/10 backdrop-blur-2xl",
          "border border-white/20",
          "rounded-full",
          "shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]",
          "transition-all duration-500 ease-out",
          scrolled && "bg-white/15 shadow-[0_8px_40px_0_rgba(0,0,0,0.15)]"
        )}
      >
        {navItems.map((item, index) => (
          <Button
            key={item.name}
            asChild
            variant="ghost"
            size="sm"
            className={cn(
              "relative px-6 py-2.5 h-auto",
              "text-sm font-semibold tracking-wide",
              "text-white/90",
              "rounded-full",
              "font-sans",
              "transition-all duration-300 ease-out",
              "hover:bg-white/20 hover:text-white",
              "hover:shadow-[0_4px_16px_0_rgba(255,255,255,0.1)]",
              "active:scale-95",
              "[text-shadow:0px_2px_4px_rgba(0,0,0,0.2)]",
              index === 0 && "bg-white/15 text-white"
            )}
          >
            <Link href={item.href}>
              <span className="relative z-10">{item.name}</span>
            </Link>
          </Button>
        ))}
      </div>
    </nav>
  );
}
