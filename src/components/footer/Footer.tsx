"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const importantLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Shipping Policy", href: "/shipping" },
    { name: "Return Policy", href: "/returns" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: Facebook,
      hoverColor: "hover:text-[#1877F2]",
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: Instagram,
      hoverColor: "hover:text-[#E4405F]",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/1234567890",
      icon: Phone,
      hoverColor: "hover:text-[#25D366]",
    },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-transparent to-primary/5">
      {/* Glassmorphism Container */}
      <div className="container mx-auto px-4 py-16">
        <div
          className="
            bg-white/10 backdrop-blur-2xl
            border border-white/20
            rounded-3xl
            shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]
            p-8 md:p-12
            transition-all duration-500
            hover:shadow-[0_8px_40px_0_rgba(0,0,0,0.15)]
          "
        >
          {/* Footer Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-serif text-primary font-bold">
                Pearl Essence
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Handcrafted soaps for a radiant, natural glow. Pure ingredients, pure beauty.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:info@pearlessence.com">info@pearlessence.com</a>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </div>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>123 Soap Street, Beauty City, BC 12345</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-serif text-primary font-semibold">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1 transform"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-serif text-primary font-semibold">
                Important
              </h4>
              <ul className="space-y-2">
                {importantLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1 transform"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media & Newsletter */}
            <div className="space-y-4">
              <h4 className="text-lg font-serif text-primary font-semibold">
                Connect With Us
              </h4>

              {/* Social Icons */}
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        w-10 h-10 rounded-full
                        bg-white/10 backdrop-blur-sm
                        border border-white/20
                        flex items-center justify-center
                        text-muted-foreground
                        ${social.hoverColor}
                        transition-all duration-300
                        hover:scale-110 hover:shadow-lg
                        active:scale-95
                      `}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>

              {/* Newsletter Signup */}
              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-3">
                  Subscribe to our newsletter
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="
                      flex-1 px-4 py-2 text-sm
                      bg-white/10 backdrop-blur-sm
                      border border-white/20
                      rounded-full
                      text-foreground placeholder:text-muted-foreground/60
                      focus:outline-none focus:ring-2 focus:ring-primary/50
                      transition-all duration-300
                    "
                  />
                  <button
                    className="
                      px-6 py-2 text-sm font-semibold
                      bg-primary text-primary-foreground
                      rounded-full
                      hover:bg-primary/90
                      active:scale-95
                      transition-all duration-300
                      shadow-md hover:shadow-lg
                    "
                  >
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} Pearl Essence by Sawa. All rights reserved.
            </p>
            <p className="flex items-center gap-2">
              Made with <span className="text-red-400 animate-pulse">♥</span> for natural beauty
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
