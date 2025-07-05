import { Input } from "@/components/ui/input";
import React from "react";
import Link from "next/link";
import { lato } from "@/lib/fonts";
import Image from "next/image";

const JumboTron = () => {
  return (
    <section className="flex flex-col justify-center items-center h-[50vh] gap-6 bg-gradient-to-b from-white via-gray-50 to-white text-center px-4">
      {/* Logo & Title */}
      <Link href="/" className="flex items-center space-x-3">
        <span
          className={`text-3xl md:text-4xl font-extrabold text-gray-800 tracking-wide ${lato.className}`}
        >
          Micro Blog
        </span>
      </Link>

      {/* Subheading */}
      <p className="text-sm md:text-base text-gray-600">
        3D Printing, Technology, and .
      </p>

      {/* Search Bar */}
      <Input
        type="text"
        placeholder="Search..."
        className="max-w-md w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-gray-400 transition duration-200"
      />
    </section>
  );
};

export default JumboTron;
