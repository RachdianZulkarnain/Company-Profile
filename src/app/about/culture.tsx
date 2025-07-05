"use client";

import React from "react";
import { motion } from "framer-motion";

interface Value {
  title: string;
  description: string;
}

const CultureValue: React.FC<Value> = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} // This ensures the animation only happens once
      transition={{ duration: 0.5 }}
      className="py-6 border-t border-gray-200"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        <h3 className="text-lg font-semibold w-full md:w-1/3">{title}</h3>
        <p className="text-[#7b7b7b] w-full md:w-1/2">{description}</p>
      </div>
    </motion.div>
  );
};

const Culture = () => {
  const values = [
    {
      title: "Ambitious execution",
      description:
        "A technically flawless deliverable should be no exception. Our creativity ensures that we bring you the unexpected.",
    },
    {
      title: "Promises kept",
      description:
        "Our promises are well thought out. What we say, we do. What we don't know, we find someone who does (and they're the best). That's Grandpa's lesson.",
    },
    {
      title: "Genuine interest",
      description:
        "Understanding, helping, learning—that's how we approach relationships. Everyone receives top-notch treatment, without exception.",
    },
    {
      title: "Playful spirit",
      description:
        "Like us, Bruno was a child at heart: curious, filled with wonder, and intense. The day we lose that is the day we step aside.",
    },
    {
      title: "Provoked luck",
      description:
        "Luck is an attitude. We don't wait for opportunities—we create them. We try, we learn, we succeed, and we start again. In short, we sow and we reap.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div
        className=" px-6 py-24 md:mx-auto 
      
       2xl:w-4/5 md:px-16
      "
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-xl uppercase tracking-wider text-gray-500 mb-6">
            /Culture
          </p>
          <div className="text-[#7b7b7b] text-lg">
            We believe in: <br />
            • Open collaboration between team and clients <br />
            • Rapid iteration for better product development <br />
            • Sustainability in material choice and process
          </div>
        </motion.div>

        <div className="space-y-2">
          {values.map((value, index) => (
            <CultureValue
              key={index}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Culture;
