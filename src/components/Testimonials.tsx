"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

import Image from "next/image";
import {
    PiArrowArcLeft,
    PiArrowArcRight
} from "react-icons/pi";

interface Social {
  linkedin: string;
  twitter: string;
  website?: string;
}

interface Founder {
  name: string;
  role: string;
  image: string;
  description: string;
  social: Social;
}

const founders: Founder[] = [
  {
    name: "Arya Nugraha",
    role: "3D Designer",
    image: "/assets/Testimonials/arya.webp",
    description:
      "Mewujudkan ide dalam bentuk nyata dengan pencetakan 3D adalah pengalaman luar biasa. Microlab membantu saya merealisasikan desain dengan presisi tinggi.",
    social: {
      linkedin: "https://linkedin.com/in/aryanugraha",
      twitter: "https://twitter.com/aryanugraha",
    },
  },
  {
    name: "Sinta Wirawan",
    role: "3D Artist",
    image: "/assets/Testimonials/sinta.webp",
    description:
      "Dengan teknologi 3D printing dari Microlab, kami bisa membuat prototipe lebih cepat dan efisien. Ini sangat membantu dalam proses kreatif saya.",
    social: {
      linkedin: "https://linkedin.com/in/sintawirawan",
      twitter: "https://twitter.com/sintawirawan",
    },
  },
  {
    name: "Rahmat Fadli",
    role: "3D Visual Expert",
    image: "/assets/Testimonials/rahmat.webp",
    description:
      "Microlab adalah mitra ideal dalam proyek desain kami. Timnya responsif dan hasil cetaknya sangat memuaskan.",
    social: {
      linkedin: "https://linkedin.com/in/rahmatfadli",
      twitter: "https://twitter.com/rahmatfadli",
    },
  },
  {
    name: "Tania Zahra",
    role: "Mechanical Engineer",
    image: "/assets/Testimonials/tania.webp",
    description:
      "Saya kagum dengan kualitas dan akurasi cetak dari Microlab. Sangat membantu dalam pengembangan komponen mekanik.",
    social: {
      linkedin: "https://linkedin.com/in/taniazahra",
      twitter: "https://twitter.com/taniazahra",
    },
  },
  {
    name: "Dimas Haryono",
    role: "Robotics Engineer",
    image: "/assets/Testimonials/dimas.webp",
    description:
      "Microlab memberikan solusi praktis dan cepat untuk kebutuhan cetak 3D dalam proyek robotika kami. Hasilnya presisi dan memuaskan.",
    social: {
      linkedin: "https://linkedin.com/in/dimasharyono",
      twitter: "https://twitter.com/dimasharyono",
    },
  },
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        duration: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.5,
        bounce: 0.4,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3,
      },
    },
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setItemsToShow(mobile ? 2 : 4);
      setStartIndex((prev) => {
        const maxStart = founders.length - (mobile ? 2 : 4);
        return prev > maxStart ? maxStart : prev;
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [founders.length]);

  const next = () => {
    setStartIndex((prev) => {
      const nextIndex = prev + 1;
      const maxStart = founders.length - itemsToShow;
      return nextIndex > maxStart ? 0 : nextIndex;
    });
  };

  const prev = () => {
    setStartIndex((prev) => {
      const nextIndex = prev - 1;
      return nextIndex < 0 ? founders.length - itemsToShow : nextIndex;
    });
  };

  type PanInfo = {
    offset: {
      x: number;
      y: number;
    };
    velocity: {
      x: number;
    };
  };

  const handleDragEnd = (_event: never, info: PanInfo) => {
    const swipeThreshold = 50;
    if (
      info.offset.x < -swipeThreshold &&
      startIndex < founders.length - itemsToShow
    ) {
      next();
    } else if (info.offset.x > swipeThreshold && startIndex > 0) {
      prev();
    }
  };

  const visibleFounders = founders.slice(startIndex, startIndex + itemsToShow);

  return (
    <div
      className="px-6 
      mx-auto 2xl:w-4/5 md:px-16
      
      py-16 md:py-32"
    >
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-4xl font-bold mb-2">Testimonials</h2>
          <p className="text-gray-600">
            Meet the passionate experts driving our 3D printing solutions.
          </p>
        </div>
        <div className="hidden md:flex gap-2">
          <motion.button onClick={prev}>
            <PiArrowArcLeft className="text-black border rounded-full flex items-center justify-center text-5xl p-3 hover:bg-black/10 transition-colors" />
          </motion.button>
          <motion.button onClick={next}>
            <PiArrowArcRight className="text-black border rounded-full flex items-center justify-center text-5xl p-3 hover:bg-black/10 transition-colors" />
          </motion.button>
        </div>
      </div>

      <div className="relative max-w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8"
            key={startIndex}
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            drag={isMobile ? "x" : false}
            dragSnapToOrigin
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            style={{
              touchAction: "none",
              x: 0,
            }}
          >
            {visibleFounders.map((founder, index) => (
              <motion.div
                key={`${founder.name}-${index}`}
                variants={item}
                className="md:mb-0 mb-8"
              >
                <div className="bg-gray-300 aspect-square mb-4 overflow-hidden rounded-lg">
                  <Image
                    priority
                    width={500}
                    height={500}
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg mb-1">{founder.name}</h3>
                <p className="text-[#7b7b7b] text-sm mb-2">{founder.role}</p>
                <p className="text-gray-700 text-sm mb-4">
                  {founder.description}
                </p>
                <div className="flex gap-4">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {/* <PiLinkedinLogo className="w-5 h-5 text-[#7b7b7b] hover:text-gray-900 cursor-pointer" /> */}
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {/* <PiTwitterLogo className="w-5 h-5 text-[#7b7b7b] hover:text-gray-900 cursor-pointer" /> */}
                  </motion.div>
                  {founder.social.website && (
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      {/* <PiGlobe className="w-5 h-5 text-[#7b7b7b] hover:text-gray-900 cursor-pointer" /> */}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Testimonials;
