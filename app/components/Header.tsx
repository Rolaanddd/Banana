import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { FaPinterestP } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full self-start  -ml-90 -mr-50 hidden md:block">
      {/* Top Bar */}
      <div className="bg-white">
        <div className=" px-4 py-2 pt-2 flex justify-between items-center text-sm">
          {/* Left Side - Contact Info */}
          <div className="flex text-xs items-center gap-7">
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="w-3 h-3" />
              <span>+91 99867 19991</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="w-3 h-3" />
              <span>Bengaluru, address</span>
            </div>
          </div>

          {/* Right Side - Social Media */}
          <div className="flex -mr-10 items-center">
            <Link
              href="#"
              className="text-gray-600 border-r px-3 hover:text-[#699C47] transition"
            >
              <Facebook className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="text-gray-600 border-r px-3 hover:text-[#699C47] transition"
            >
              <Twitter className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="text-gray-600 border-r px-3 hover:text-[#699C47] transition"
            >
              <Instagram className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="text-gray-600 border-r-0 px-3 hover:text-[#699C47] transition"
            >
              <FaPinterestP className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white">
        <div className="mx-auto px-4 pt-4 flex justify-between items-center">
          {/* Left Side - Navigation Links */}
          <div className="flex items-center text-xs gap-8">
            <Link
              href="#home"
              className="text-gray-900  hover:text-[#699C47] transition flex items-center gap-1"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-gray-900 hover:text-[#699C47] transition flex items-center gap-1"
            >
              About us
            </Link>
            <Link
              href="#services"
              className="text-gray-900 hover:text-[#699C47] transition flex items-center gap-1"
            >
              What We Do
            </Link>
            <Link
              href="#why"
              className="text-gray-900 hover:text-[#699C47] transition flex items-center gap-1"
            >
              Why Choose Us?
            </Link>
            <Link
              href="#contact"
              className="text-gray-900 hover:text-[#699C47] transition flex items-center gap-1"
            >
              Contact
            </Link>
          </div>

          {/* Right Side - Contact Hotline */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded">
              <Image
                src="/assets/Container.png"
                alt="Logo"
                width={30}
                height={50}
                className=""
              />
            </div>
            <div>
              <p className="text-xs text-gray-600">Contact hotline</p>
              <p className="text-md font-semibold text-gray-900">99867 19991</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
