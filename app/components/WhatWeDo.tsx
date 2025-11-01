import Image from "next/image";

interface SectionProps {
  id: string;
}

export default function WhatWeDo({ id }: SectionProps) {
  const images = Array(5).fill("/assets/star.png");

  const services = [
    {
      image: "/assets/what1.png",
      title: "Whole Sale Marketing",
      imageClass: "object-cover",
    },
    {
      image: "/assets/distribution.png",
      title: "Company Distribution",
      imageClass: "object-cover",
    },
    {
      image: "/assets/distribution.png",
      title: "Company Distribution",
      imageClass: "object-cover",
    },
    {
      image: "/assets/exporting.png",
      title: "International Exporting",
      imageClass: "object-cover",
    },
  ];

  return (
    <div
      id={id}
      className="md:py-12 py-8 scroll-mt-10 md:scroll-mt-25 lg:py-20 bg-white overflow-hidden px-4 md:px-20"
    >
      <div className=" flex flex-col mx-auto">
        {/* Desktop Layout - 1:2 ratio with heading on left */}
        <div className="hidden lg:grid lg:grid-cols-100 gap-3 items-center justify-center">
          {/* Left Column - Heading (takes 1 column) */}
          <div className="flex col-span-25 items-start pt-8">
            <h1 className="text-black text-center font-bold text-4xl xl:text-5xl leading-tight">
              What we do?
            </h1>
          </div>

          {/* Right Column - Services Grid (takes 2 columns) */}
          <div className="col-span-75 grid grid-cols-4 gap-4">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="border border-black/10 rounded-2xl overflow-hidden pb-4 flex flex-col justify-center items-center bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-full h-64 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={service.imageClass}
                  />
                </div>
                <p className="font-semibold text-black text-base px-4 text-center mt-4">
                  {service.title}
                </p>
                <div className="flex space-x-1 mt-2">
                  {images.map((src, index) => (
                    <Image
                      key={index}
                      src={src}
                      alt={`Star ${index + 1}`}
                      width={13.41}
                      height={13}
                      className="rounded-lg"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout - Vertical Stack */}
        <div className="lg:hidden">
          <h1 className="text-black font-bold text-2xl mb-8">What we do?</h1>

          <div className="flex flex-col justify-center items-center space-y-6">
            {services.slice(0, 3).map((service, idx) => (
              <div
                key={idx}
                className="border border-black/15 rounded-2xl overflow-hidden w-3/5 pb-3 flex space-y-2 flex-col justify-center items-center"
              >
                <div className="w-full h-48 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={service.imageClass}
                  />
                </div>
                <p className="font-semibold text-black/80 text-sm">
                  {service.title}
                </p>
                <div className="flex space-x-1">
                  {images.map((src, index) => (
                    <Image
                      key={index}
                      src={src}
                      alt={`Star ${index + 1}`}
                      width={13.41}
                      height={13}
                      className="rounded-lg"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Book an enquiry button */}
        <div className="flex justify-center mt-12 lg:mt-16">
          <a
            href="#contact"
            className="bg-[#699C47] py-4 px-8 text-sm font-bold rounded-full text-white inline-block hover:bg-[#5a8539] transition-colors"
          >
            Book an enquiry
          </a>
        </div>
      </div>
    </div>
  );
}
