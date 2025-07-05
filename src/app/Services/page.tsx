import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Image from "next/image";


import Footer from "@/components/footerSection";

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
    <div className="md:min-h-screen bg-white">
      <Navbar />

      {/* hero section */}

      <div className="pt-32 pb-20 px-6 mx-auto 2xl:w-4/5 md:px-16">
        <div className="mx-auto flex items-center">
          <div className="md:w-2/3">
            <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-bold mb-8">
              Turning imagination into reality through full-service 3D
              innovation.
            </h1>
            <p className="text-xl text-neutral-500">
              Where artistry meets technology — your creative ideas in 3D form.
            </p>
          </div>
        </div>
      </div>

      {/* <Brands /> */}
      <Separator className="my-16" />

      {/* services section */}

      <div className="md:py-20 px-6 mx-auto 2xl:w-4/5 md:px-16">
        <h2 className="text-xl font-bold text-[#7b7b7b] mb-10">
          / Our Services
        </h2>

        <div className="space-y-16 md:space-y-32">
          {services.map((service, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* image section */}
              <div className="w-full">
                <Image
                  priority
                  width={1200}
                  height={675}
                  src={service.image}
                  alt="image"
                  className="shadow-lg md:w-[640px] h-[400px] object-cover"
                />
              </div>

              {/* content section */}
              <div className="w-full">
                <h2 className="text-2xl font-bold mb-8">{service.title}</h2>
                <p className="text-[#7b7b7b] mb-12">{service.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div
                      className="flex items-center space-x-2"
                      key={benefitIndex}
                    >
                      <span className="text-[#7b7b7b]">/ {benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
