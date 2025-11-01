import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";
interface SectionProps {
  id: string;
}
const HeroSection = ({ id }: SectionProps) => {
  return (
    <section
      id={id}
      className="w-full hidden md:block scroll-mt-39 bg-[#f8f8f8]"
    >
      <div className=" mx-auto">
        <div className="grid grid-cols- lg:grid-cols-6 min-h-[600px]">
          {/* Left Side - Content */}
          <div className="flex flex-col col-span-4 justify-end px-8 lg:pr-16 py-12 lg:py-0">
            {/* Main Heading */}
            <h1 className="text-6xl text-left pr-30 ml-40 lg:text-6xl mb-13 xl:text-7xl font-bold text-gray-900 leading-tight">
              The Global Standard in Fresh Produce
            </h1>
            <div className="flex gap-14  relative">
              {/* Bottom Left Image */}
              <Image
                src="/assets/head2.png"
                alt="Worker with bananas"
                width={280}
                height={150}
                className="object-cover"
              />
              <div>
                {/* Subtext */}
                <p className="text-gray-600 text-md w-6/7 mb-8 max-w-md">
                  We deliver consistent supply and perfect ripeness, on time,
                  every time.
                </p>

                {/* CTA Buttons */}
                <div className="flex text-sm items-center gap-6">
                  <a
                    href="#contact"
                    className="bg-[#699C47] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5a8539] transition"
                  >
                    Book an enquiry
                  </a>

                  <a
                    href="#about"
                    className="flex items-center gap-2 text-gray-700 hover:text-[#699C47] transition"
                  >
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 fill-current" />
                    </div>
                    <span className="font-medium">Watch our videos</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="relative bg-[#699C47] col-span-2 flex items-start justify-start lg:p-0">
            {/* Main Right Image */}
            <div className="relative w-3/4 max-w-md h-[550px] lg:absolute lg:left-[-100px] lg:top-0 lg:transform  z-10">
              <Image
                src="/assets/head-veg.png"
                alt="Farmer holding bananas"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
