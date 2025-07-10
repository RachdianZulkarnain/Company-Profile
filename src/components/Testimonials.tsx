"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  PiArrowArcLeft,
  PiArrowArcRight,
  PiGlobe,
  PiLinkedinLogo,
} from "react-icons/pi";

interface Social {
  linkedin: string;
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
      linkedin:
        "https://www.linkedin.com/in/rachdian-muhammad-adha-zulkarnain-4280a6174/",
    },
  },
  {
    name: "Sinta Wirawan",
    role: "3D Artist",
    image: "/assets/Testimonials/sinta.webp",
    description:
      "Dengan teknologi 3D printing dari Microlab, kami bisa membuat prototipe lebih cepat dan efisien. Ini sangat membantu dalam proses kreatif saya.",
    social: {
      linkedin:
        "https://www.linkedin.com/in/rachdian-muhammad-adha-zulkarnain-4280a6174/",
    },
  },
  {
    name: "Rahmat Fadli",
    role: "3D Visual Expert",
    image: "/assets/Testimonials/rahmat.webp",
    description:
      "Microlab adalah mitra ideal dalam proyek desain kami. Timnya responsif dan hasil cetaknya sangat memuaskan.",
    social: {
      linkedin:
        "https://www.linkedin.com/in/rachdian-muhammad-adha-zulkarnain-4280a6174/",
    },
  },
  {
    name: "Tania Zahra",
    role: "Mechanical Engineer",
    image: "/assets/Testimonials/tania.webp",
    description:
      "Saya kagum dengan kualitas dan akurasi cetak dari Microlab. Sangat membantu dalam pengembangan komponen mekanik.",
    social: {
      linkedin:
        "https://www.linkedin.com/in/rachdian-muhammad-adha-zulkarnain-4280a6174/",
    },
  },
  {
    name: "Dimas Haryono",
    role: "Robotics Engineer",
    image: "/assets/Testimonials/dimas.webp",
    description:
      "Microlab memberikan solusi praktis dan cepat untuk kebutuhan cetak 3D dalam proyek robotika kami. Hasilnya presisi dan memuaskan.",
    social: {
      linkedin:
        "https://www.linkedin.com/in/rachdian-muhammad-adha-zulkarnain-4280a6174/",
    },
  },
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  const updateItemsToShow = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setItemsToShow(1);
    } else if (width < 1024) {
      setItemsToShow(2);
    } else {
      setItemsToShow(4);
    }

    setStartIndex((prev) => {
      const maxStart = founders.length - itemsToShow;
      return prev > maxStart ? maxStart : prev;
    });
  };

  useEffect(() => {
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const next = () => {
    const maxStart = founders.length - itemsToShow;
    setStartIndex((prev) => (prev < maxStart ? prev + 1 : 0));
  };

  const prev = () => {
    const maxStart = founders.length - itemsToShow;
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxStart));
  };

  const visibleFounders = founders.slice(startIndex, startIndex + itemsToShow);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", bounce: 0.3, duration: 0.6 },
    },
  };

  return (
    <section className="px-4 py-12 md:px-16 md:py-24 mx-auto max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12 gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Testimonials</h2>
          <p className="text-gray-600">
            Meet the passionate experts driving our 3D printing solutions.
          </p>
        </div>
        <div className="flex gap-2">
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={prev}
            className="p-2 border rounded-full hover:bg-black/10 transition-colors"
            aria-label="Previous testimonial"
          >
            <PiArrowArcLeft className="text-2xl" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={next}
            className="p-2 border rounded-full hover:bg-black/10 transition-colors"
            aria-label="Next testimonial"
          >
            <PiArrowArcRight className="text-2xl" />
          </motion.button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={startIndex}
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {visibleFounders.map((founder) => (
            <motion.div
              key={founder.name}
              variants={item}
              whileHover={{
                scale: 1.05,
                y: -6,
                boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="bg-white rounded-xl p-4 shadow-md"
            >
              <div className="rounded-lg overflow-hidden mb-4">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={500}
                  height={500}
                  className="object-cover w-full h-48 rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold mb-1">{founder.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{founder.role}</p>
              <p className="text-sm text-gray-700 mb-4">
                {founder.description}
              </p>
              <div className="flex gap-3">
                <a
                  href={founder.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn ${founder.name}`}
                  title={`LinkedIn ${founder.name}`}
                >
                  <PiLinkedinLogo className="text-gray-500 hover:text-gray-900 transition-colors" />
                </a>
                {founder.social.website && (
                  <a
                    href={founder.social.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Website of ${founder.name}`}
                    title={`Website of ${founder.name}`}
                  >
                    <PiGlobe className="text-gray-500 hover:text-gray-900 transition-colors" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Testimonials;
