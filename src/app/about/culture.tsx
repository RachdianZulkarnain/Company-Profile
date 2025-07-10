"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface Value {
  title: string;
  description: string;
}

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      bounce: 0.2,
    },
  },
};

const CultureValue: React.FC<Value> = ({ title, description }) => {
  return (
    <motion.div
      variants={itemVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="py-6 border-t border-gray-200"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <h3 className="text-lg font-semibold w-full md:w-1/3">{title}</h3>
        <p className="text-[#7b7b7b] w-full md:w-2/3">{description}</p>
      </div>
    </motion.div>
  );
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Culture = () => {
  const values = [
    {
      title: "Innovation First",
      description:
        "We thrive on turning bold ideas into reality. By embracing new tools and techniques, we stay ahead—delivering products that redefine what's possible.",
    },
    {
      title: "Design with Purpose",
      description:
        "Every model we make solves a problem or sparks joy. We believe great design isn't just beautiful—it's functional, thoughtful, and built to last.",
    },
    {
      title: "Precision Matters",
      description:
        "From millimeter-perfect prototypes to production-grade prints, we obsess over the details. Because quality isn’t optional—it’s our baseline.",
    },
    {
      title: "Client-Centered Collaboration",
      description:
        "We're not just printers, we're partners. Listening deeply, iterating fast, and building trust are the core of how we work with every client.",
    },
    {
      title: "Accessible Technology",
      description:
        "3D printing should be for everyone. From students to startups, we make cutting-edge fabrication easy to access, understand, and afford.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="px-6 py-24 md:mx-auto 2xl:w-4/5 md:px-16">
        {/* Content + Image */}
        <div className="flex flex-col-reverse md:flex-row md:items-center gap-10">
          {/* Intro Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl uppercase tracking-wider text-gray-500 mb-6"
            >
              /Culture
            </motion.p>
            <div className="text-[#7b7b7b] text-lg leading-relaxed">
              We believe in: <br />
              • Open collaboration between team and clients <br />
              • Rapid iteration for better product development <br />•
              Sustainability in material choice and process
            </div>
          </motion.div>

          {/* Animated Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02, rotate: 0.5 }}
            className="flex-1"
          >
            <img
              src="/assets/culture1.webp"
              alt="Culture"
              className="w-full rounded-2xl shadow-lg object-cover max-h-[400px] transition-transform"
            />
          </motion.div>
        </div>

        {/* Values List */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 space-y-2"
        >
          {values.map((value, index) => (
            <CultureValue
              key={index}
              title={value.title}
              description={value.description}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Culture;
