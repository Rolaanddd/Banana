import React from "react";
import Image from "next/image";

interface SectionProps {
  id: string;
}
const AboutVideoSection = ({ id }: SectionProps) => {
  const videos = [
    {
      id: 1,
      thumbnail: "/assets/about-video.mp4",
      title: "Video",
    },
    {
      id: 2,
      thumbnail: "/assets/about-video.mp4",
      title: "Video",
    },
    {
      id: 3,
      thumbnail: "/assets/about-video.mp4",
      title: "Video",
    },
  ];

  return (
    <section
      id={id}
      className="w-full scroll-mt-25 hidden md:block bg-[#f8f8f8] py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            {/* Section Label */}
            <p className="text-[#699C47] text-sm font-semibold mb-4">
              About Us
            </p>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              We believe in pure and consistent quality
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base mb-8 leading-8">
              At SVP Banana Distributor, we&apos;ve built our reputation on an
              unwavering commitment to excellence. We understand that in the
              produce industry, consistency is king, and freshness is paramount.
              Our journey began with a clear vision: to be the most reliable
              source for high-quality bananas, ensuring every delivery meets the
              highest standards, from cultivation to your store.
            </p>

            {/* Feature Box */}
            <div className="flex gap-4 items-start mb-8">
              <div className="w-12 h-12 bg-[#e8f5e0] rounded-full flex items-center justify-center shrink-0">
                <Image
                  src="/assets/about-icon.png"
                  alt="About Us Image"
                  width={39}
                  height={41}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  100% Guaranteed Freshness
                </h3>
                <p className="text-gray-600 text-sm leading-8">
                  Our extensive network and meticulous processes guarantee that
                  every banana we deliver is of premium quality, perfectly
                  handled, and ready for your customers. We ensure freshness,
                  every single time.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#why"
              className="bg-[#699C47] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#5a8539] transition"
            >
              Learn More
            </a>
          </div>

          {/* Right Side - Video Grid */}
          <div className="grid grid-cols-2 h-3/4 justify-center lg:grid-cols-3 gap-4">
            {videos.map((video) => (
              <div
                key={video.id}
                className="relative h-full flex group cursor-pointer overflow-hidden rounded-sm"
              >
                <video
                  src={video.thumbnail}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVideoSection;
