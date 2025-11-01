"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, MapPin, Headphones, ArrowRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      console.log("Newsletter subscription:", email);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#f8f8f8] relative py-7 px-6 md:py-16 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info Section */}
          <div className="space-y-4 md:-mt-13">
            <div className="justify-end   flex md:flex-col">
              <Image
                src="/assets/logo.png"
                alt="SVP Banana Distributors"
                width={150}
                height={204}
                className="object-containn md:ml-14 top-0 absolute md:relative"
              />
              <p className="text-sm hidden md:block text-gray-600 leading-relaxed max-w-xs">
                At SVP Banana Distributors, we&apos;ve built our reputation on
                an unwavering commitment to excellence. We understand that in
                the produce industry, consistency is king, and freshness is
                paramount.
              </p>
            </div>
            <div className="space-y-2">
              <a
                href="mailto:info@example.com"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@example.com</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Address</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "About Our Company", href: "/about" },
                { label: "Latest Services", href: "/services" },
                { label: "Payment Type", href: "/payment" },
                { label: "Awards Winnings", href: "/awards" },
                { label: "World Media Partner", href: "/media-partner" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Cuts & Sprouts", href: "/category/cuts-sprouts" },
                { label: "Exotic Fruits & Veggies", href: "/category/exotic" },
                { label: "Fresh Fruits", href: "/category/fresh-fruits" },
                {
                  label: "Fresh Vegetables",
                  href: "/category/fresh-vegetables",
                },
                { label: "Herbs & Seasoning", href: "/category/herbs" },
                { label: "Collectionss", href: "/category/collections" },
              ].map((category) => (
                <li key={category.label}>
                  <a
                    href={category.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {category.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <div className="space-y-4 hidden md:block">
              <h3 className="text-base font-semibold text-gray-900 mb-4">
                Newsletter
              </h3>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-2.5 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#699C47] focus:border-transparent pr-10"
                />
                <button
                  onClick={handleSubscribe}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[#699C47] hover:text-green-700 transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex md:mt-10 items-center gap-3">
              <div className="rounded-lg shrink-0">
                <Headphones className="w-10 h-10 text-[#699C47]" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">8:30 AM - 9:30 PM</p>
                <a
                  href="tel:9986719991"
                  className="text-lg font-semibold text-gray-900 hover:text-green-600 transition-colors"
                >
                  99867 19991
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
