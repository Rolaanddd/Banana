"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Header from "./Header";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 md:border-b md:border-black/10 text-black z-50">
      <div className="max-w-7xl">
        <div className="flex justify-between items-center h-11 md:h-26">
          {/* Logo */}
          <div className="bg-[url('/assets/logo-bg.png')] overflow-hidden flex justify-center items-center h-full w-[42vw] bg-contain bg-no-repeat ">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={90}
              height={50}
              className="-ml-14 md:-ml-100 w-[90px] md:w-32 h-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <Header />

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col mr-7 gap-1 w-6 z-50"
            aria-label="Toggle menu"
          >
            <span className="h-0.5 w-full bg-[#699C47] transition-all"></span>
            <span className="h-0.5 w-full bg-[#699C47] transition-all"></span>
            <span className="h-0.5 w-full bg-[#699C47] transition-all"></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute left-0 right-0 bg-[#f8f8f8] text-[#699C47] text-center font-semibold transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-4 pt-2 pb-4 space-y-5">
          <li>
            <Link
              href="#home"
              className="block hover:opacity-70 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="block hover:opacity-70 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="block hover:opacity-70 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              What we do?{" "}
            </Link>
          </li>
          <li>
            <Link
              href="#why"
              className="block hover:opacity-70 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              Why Choose us?
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="block hover:opacity-70 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              Our Partners
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="block hover:opacity-70 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
