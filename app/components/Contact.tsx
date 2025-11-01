"use client";
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
interface SectionProps {
  id: string;
}
export default function Contact({ id }: SectionProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      items: [
        { label: "Mobile:", value: "1234567890" },
        { label: "Mobile:", value: "123456789" },
      ],
    },
    {
      icon: Mail,
      title: "Email",
      items: [
        { label: "", value: "Info@example.com" },
        { label: "", value: "Contact@example.com" },
      ],
    },
    {
      icon: MapPin,
      title: "Location",
      items: [{ label: "", value: "address" }],
    },
  ];

  return (
    <div
      id={id}
      className="bg-white scroll-mt-7 md:scroll-mt-25 flex justify-center items-center  py-12 px-4 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="w-9/10 md:mr-0 mx-auto">
        <div className="grid wrap-normal justify-around items-center grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h1 className="text-4xl font-bold text-black mb-8">Get in Touch</h1>

            <div className="space-y-4 md:space-y-6">
              <div className="grid text-black grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4  text-black  placeholder:text-gray-400 bg-gray-100 py-3 bg-gray-00 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#699C47]"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3  text-black  placeholder:text-gray-400 bg-gray-100 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#699C47]"
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3  text-black  bg-gray-100 placeholder:text-gray-400 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#699C47]"
              />

              <textarea
                placeholder="Messages"
                rows={6}
                className="w-full px-4 py-3  text-black  bg-gray-100 placeholder:text-gray-400 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#699C47] resize-none"
              />

              <div className="flex">
                <button
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-[#699C47] hover:bg-green-700 text-white font-medium rounded-md transition-colors"
                >
                  Submit Now
                </button>
              </div>
            </div>
          </div>

          <div className="lg:pl-12 lg:w-3/4">
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h2 className="text-xl font-semibold text-black mb-6">
                Support Contact
              </h2>

              <div className="space-y-6">
                {contactInfo.map((section, index) => {
                  const IconComponent = section.icon;
                  return (
                    <div key={index}>
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="w-5 h-5 text-[#699C47]" />
                        <h3 className="font-semibold text-black">
                          {section.title}
                        </h3>
                      </div>
                      <div className="ml-7 space-y-1">
                        {section.items.map((item, idx) => (
                          <p key={idx} className="text-sm text-gray-600">
                            {item.label && `${item.label} `}
                            <span className={item.label ? "text-black" : ""}>
                              {item.value}
                            </span>
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
