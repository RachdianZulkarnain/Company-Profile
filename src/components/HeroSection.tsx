"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  easeOut,
  Variants,
} from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const navigation = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming;
    if (navigation?.type === "reload" || navigation?.type === "navigate") {
      setHasAnimated(false);
    } else {
      setHasAnimated(true);
    }
  }, []);

  const videoScale = useTransform(scrollY, [0, 500], [0.9, 1], {
    ease: easeOut,
  });
  const videoWidth = useTransform(scrollY, [0, 500], ["85%", "100%"], {
    ease: easeOut,
  });
  const videoBorderRadius = useTransform(scrollY, [0, 500], [32, 0], {
    ease: easeOut,
  });

  const contentVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(12px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.15,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.6,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const videoContainerVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.8,
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div className="flex flex-col items-center">
      {/* Content */}
      <motion.div
        className="w-full flex justify-center items-center md:px-0 pt-32 md:pt-40 bg-white"
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        <div className="md:max-w-3xl text-center px-4">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
            variants={item}
          >
            Brings Your Imagination To Life With Cutting-edge 3D Printing
            Solutions
          </motion.h1>

          <motion.p className="text-xl text-gray-800 mb-8">
            "From idea to object — digitally designed, physically real."
          </motion.p>

          <motion.div
            className="flex gap-x-3 md:gap-x-6 justify-center mb-10"
            variants={buttonVariants}
          >
            <Link
              href="/Services"
              className="bg-black text-white px-6 md:px-8 py-3 rounded-full text-lg font-medium transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              View Our Services
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Video */}
      <motion.div
        className="flex justify-center w-full md:px-0"
        initial="hidden"
        animate="visible"
        variants={videoContainerVariants}
      >
        <motion.div
          style={{
            width: videoWidth,
            scale: videoScale,
            borderRadius: videoBorderRadius,
            overflow: "hidden",
          }}
          className="relative w-full md:w-auto shadow-xl"
        >
          <video
            src="/assets/3dprinted.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover pointer-events-none"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
