"use client";

import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/footerSection";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom 3D Printing",
    description: `From simple models to complex parts — print with precision and high quality.`,
    benefits: [
      "FDM / SLA / SLS",
      "Layer resolution up to 0.05mm",
      "Fast turnaround",
      "Supports a variety of materials",
      "Ideal for prototyping or final parts",
      "Accurate and reliable results",
    ],
    image: "/assets/custom.webp",
  },
  {
    title: "3D Design & Modeling",
    description: `Whether it's a sketch or a concept, we help turn it into a print-ready model.`,
    benefits: [
      "CAD Design",
      "Organic sculpting",
      "3D scan cleanup",
      "Concept to reality workflow",
      "Collaborative design process",
      "Tailored for manufacturability",
    ],
    image: "/assets/3dmodeling.webp",
  },
  {
    title: "Rapid Prototyping",
    description: `Bring your MVP product to life in days, not weeks.`,
    benefits: [
      "Fast delivery (starting from 4 days)",
      "Multiple revision support",
      "Client-friendly tracking",
      "Functional testing capabilities",
      "Early-stage feedback loops",
      "Efficient development cycles",
    ],
    image: "/assets/rapid.webp",
  },
  {
    title: "Post-Processing / Finishing",
    description: `A professional and durable final look.`,
    benefits: [
      "Sanding & smoothing",
      "Painting & coating",
      "UV curing treatment",
      "Optional waterproof sealing",
      "Enhanced visual appeal",
      "Improved durability",
    ],
    image: "/assets/finishing.webp",
  },
];

const Services = () => {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center"
        >
          <div className="md:w-2/3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Turning imagination into reality through full-service 3D
              innovation.
            </h1>
            <p className="text-lg text-gray-600">
              Where artistry meets technology — your creative ideas in 3D form.
            </p>
          </div>
        </motion.div>
      </section>

      <Separator className="my-16" />

      {/* Services Section */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <h2 className="text-base font-semibold text-gray-500 mb-10">
          / Our Services
        </h2>

        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Image */}
              <motion.div
                className="w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  priority
                  width={1200}
                  height={675}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg shadow-lg"
                />
              </motion.div>

              {/* Content */}
              <div className="w-full">
                <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
                <p className="text-gray-600 mb-8">{service.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <motion.div
                      key={benefitIndex}
                      className="text-gray-600 text-sm flex items-start space-x-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: benefitIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-indigo-500 font-bold">/</span>
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
