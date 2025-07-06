"use client";

import { Input } from "@/components/ui/input";
import React from "react";
import Link from "next/link";
import { lato } from "@/lib/fonts";
import { motion, Variant, Variants } from "framer-motion";

const containerVariants : Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const JumboTron = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col justify-center items-center min-h-[50vh] gap-4 sm:gap-6 bg-gradient-to-b from-white via-gray-50 to-white text-center px-4 sm:px-6"
    >
      {/* Logo & Title */}
      <motion.div variants={containerVariants}>
        <Link href="/" className="flex items-center space-x-3">
          <span
            className={`text-xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 tracking-wide ${lato.className}`}
          >
            Micro Blog
          </span>
        </Link>
      </motion.div>

      {/* Subheading */}
      <motion.p
        variants={containerVariants}
        className="text-sm sm:text-base text-gray-600 max-w-md"
      >
        3D Printing, Technology, and more.
      </motion.p>

      {/* Search Bar */}
      <motion.div variants={containerVariants} className="w-full max-w-md">
        <Input
          type="text"
          placeholder="Search..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-gray-400 transition duration-200"
        />
      </motion.div>
    </motion.section>
  );
};

export default JumboTron;
