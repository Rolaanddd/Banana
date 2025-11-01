import React from "react";
import Image from "next/image";
import {
  Leaf,
  Award,
  Thermometer,
  ShieldCheck,
  Truck,
  Clock,
} from "lucide-react";
interface SectionProps {
  id: string;
}
const WhyChooseUs = ({ id }: SectionProps) => {
  const reasons = [
    {
      title: "Consistent Quality",
      description:
        "We guarantee uniform quality, size, and freshness in every single shipment.",
      Icon: Leaf,
      iconStyle: "default",
      position: "left",
    },
    {
      title: "Neat & Clean",
      description:
        "Our integrated cold chain ensures bananas maintain temperature control from farm to facility, extending shelf life.",
      Icon: Award,
      iconStyle: "circle",
      position: "left",
    },
    {
      title: "Optimal Ripening Control",
      description:
        "We deliver bananas at the precise color and firmness you require, using state-of-the-art chambers.",
      Icon: Thermometer,
      iconStyle: "default",
      position: "left",
    },
    {
      title: "Rigorous Quality Assurance",
      description:
        "Every batch undergoes comprehensive, multi-point inspections by experts before distribution.",
      Icon: ShieldCheck,
      iconStyle: "default",
      position: "right",
    },
    {
      title: "Tailored Logistics Solutions",
      description:
        "We offer flexible schedules and custom volumes to seamlessly integrate with your operations.",
      Icon: Truck,
      iconStyle: "default",
      position: "right",
    },
    {
      title: "Reliable On-Time Delivery",
      description:
        "Our dedicated fleet and advanced logistics ensure your orders arrive precisely when expected.",
      Icon: Clock,
      iconStyle: "default",
      position: "right",
    },
  ];

  const leftReasons = reasons.filter((r) => r.position === "left");
  const rightReasons = reasons.filter((r) => r.position === "right");

  return (
    <div
      id={id}
      className="w-full scroll-mt-10 md:scroll-mt-25 bg-[#f8f8f8] py-8 md:py-16    px-4"
    >
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center md:mb-16 mb-8">
          <p className="text-[#699C47] text-[18px] md:mb-6 font-semibold mb-2">
            Why Choose Us
          </p>
          <h2 className="text-[30px] md:text-5xl  font-bold text-gray-900">
            6 Reasons to Choose SVP
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 md:px-7 items-start md:items-center">
          {/* Left Column */}
          <div className="md:space-y-16 space-y-9">
            {leftReasons.map((reason) => {
              const IconComponent = reason.Icon;

              return (
                <div
                  key={reason.title}
                  className="flex gap-4 items-start flex-row-reverse lg:flex-row"
                >
                  <div className="flex-1 text-left lg:text-right">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-[14px] text-[#777777] pr-4 md:pr-0 md:pl-19 ">
                      {reason.description}
                    </p>
                  </div>
                  <div
                    className={`w-12 h-12 shrink-0 flex items-center justify-center ${
                      reason.iconStyle === "circle"
                        ? "bg-[#6b8e6b] rounded-full"
                        : ""
                    }`}
                  >
                    <IconComponent
                      className={
                        reason.iconStyle === "circle"
                          ? "w-6 h-6 text-white"
                          : "w-10 h-10 text-[#6b8e6b]"
                      }
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Image - Hidden on Mobile */}
          <div className="hidden lg:block relative w-full h-[300px]">
            <Image
              src="/assets/whychooseus.png"
              alt="Fresh bananas in crates"
              fill
              className="object-cover rounded-sm shadow-lg"
            />
          </div>

          {/* Right Column */}
          <div className="md:space-y-16 space-y-9">
            {rightReasons.map((reason) => {
              const IconComponent = reason.Icon;

              return (
                <div
                  key={reason.title}
                  className="flex gap-4 items-start flex-row-reverse"
                >
                  <div className="flex-1 text-left">
                    <h3 className="text-black font-bold text-lg mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-[14px] pr-5 md:pr-19 text-[#777777]">
                      {reason.description}
                    </p>
                  </div>
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center">
                    <IconComponent className="w-10 h-10 text-[#6b8e6b]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
