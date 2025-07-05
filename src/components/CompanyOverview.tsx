"use client";

import React from "react";
import Image from "next/image";

const features = [
  {
    name: "PLA (Polylactic Acid)",
    description:
      "Biodegradable thermoplastic derived from renewable resources like corn starch. Ideal for prototyping and low-stress applications.",
    image: "/assets/materials/pla.webp",
    alt: "PLA Filament",
  },
  {
    name: "ABS (Acrylonitrile Butadiene Styrene)",
    description:
      "Strong, impact-resistant plastic commonly used for durable parts. Requires heated bed during printing.",
    image: "/assets/materials/abs.webp",
    alt: "ABS Filament",
  },
  {
    name: "PETG (Polyethylene Terephthalate Glycol)",
    description:
      "Combines strength and flexibility. Offers high durability and moisture resistance. Great for mechanical parts.",
    image: "/assets/materials/petg.webp",
    alt: "PETG Filament",
  },
  {
    name: "TPU (Thermoplastic Polyurethane)",
    description:
      "Flexible rubber-like filament used for parts that require elasticity, such as phone cases and seals.",
    image: "/assets/materials/tpu.webp",
    alt: "TPU Filament",
  },
  {
    name: "Resin (SLA/DLP Printing)",
    description:
      "Liquid photopolymer that solidifies under UV light. Offers high detail and smooth finish, perfect for miniatures or dental use.",
    image: "/assets/materials/resin.webp",
    alt: "SLA Resin",
  },
  {
    name: "Nylon (Polyamide)",
    description:
      "Tough, wear-resistant material ideal for functional parts requiring high strength and flexibility.",
    image: "/assets/materials/nylon.webp",
    alt: "Nylon Powder",
  },
  {
    name: "Carbon Fiber Filled",
    description:
      "Composite filament with added carbon fiber for extra stiffness and strength. Ideal for aerospace and automotive applications.",
    image: "/assets/materials/carbonfiber.webp",
    alt: "Carbon Fiber",
  },
  {
    name: "Metal Powder (SLS/DMLS)",
    description:
      "Used in industrial-grade printers for printing metal parts like stainless steel, titanium, or aluminum.",
    image: "/assets/materials/metal.webp",
    alt: "Metal Powder",
  },
];

const CompanyOverview = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Materials
        </h2>
        <p className="text-lg text-gray-600">
          From idea to object — it all starts with the right material.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:px-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 group"
          >
            <div className="relative w-full h-52 mb-6 rounded-xl overflow-hidden">
              <Image
                src={feature.image}
                alt={feature.alt}
                fill
                className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
              {feature.name}
            </h3>

            <p className="text-gray-600 text-md leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyOverview;
