"use client";

import { Marquee } from "@/components/magicui/marquee";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface Project {
  src: string;
  name: string;
  description: string;
  logo?: string;
  className?: string;
}

const projects: Project[] = [
  { src: "/assets/projectimg/1.webp", name: "Cable - Winder", description: "" },
  { src: "/assets/projectimg/2.webp", name: "Batman", description: "" },
  { src: "/assets/projectimg/3.webp", name: "Remote - Caddy", description: "" },
  { src: "/assets/projectimg/4.webp", name: "Deks Lamp", description: "" },
  { src: "/assets/projectimg/5.webp", name: "Low Poly", description: "" },
  {
    src: "/assets/projectimg/6.webp",
    name: "Pitstachio Bowl",
    description: "",
  },
  { src: "/assets/projectimg/7.webp", name: "Mesh Bowl", description: "" },
  {
    src: "/assets/projectimg/8.webp",
    name: "Baskets Stackable",
    description: "",
  },
  { src: "/assets/projectimg/9.webp", name: "Desk Organizer", description: "" },
  {
    src: "/assets/projectimg/12.webp",
    name: "Catch Tray All",
    description: "",
  },
  { src: "/assets/projectimg/11.webp", name: "Shade Stand", description: "" },
];

const ReviewCard = ({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) => (
  <motion.figure
    className="relative cursor-pointer overflow-hidden group"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    onClick={onClick}
  >
    <Image
      width={500}
      height={500}
      src={project.src}
      alt={project.name}
      className="object-cover w-full h-[300px]"
    />
    <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/60 to-transparent w-full">
      <h3 className="text-white text-xl font-semibold">{project.name}</h3>
      <p className="text-white/80 text-sm">{project.description}</p>
    </div>
  </motion.figure>
);

const ProjectDetails = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => (
  <motion.div
    initial={{ x: "100%" }}
    animate={{ x: 0 }}
    exit={{ x: "100%" }}
    transition={{ type: "spring", damping: 25, stiffness: 200 }}
    className="fixed right-0 top-0 h-full md:w-2/5 bg-white shadow-lg p-6 z-50 overflow-y-auto"
  >
    <button
      onClick={onClose}
      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
    >
      &times;
    </button>
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
      <Image
        src={project.src}
        alt={project.name}
        width={500}
        height={300}
        className="w-full rounded-lg mb-6 object-cover h-60"
      />
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Project Details</h3>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
            3D Design
          </span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
            3D Printing
          </span>
        </div>
      </div>
    </div>
  </motion.div>
);

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const rows = [projects, projects.slice(3), projects.slice(6)];

  return (
    <section className="w-full bg-white py-16 md:mx-auto 2xl:w-4/5 md:px-16">
      <motion.div
        className="mx-auto mb-12 px-6 md:px-0 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4">Explore Our Projects</h2>
        <p className="text-[#7b7b7b] text-lg">
          Our projects showcase the best visuals.
        </p>
      </motion.div>

      <div className="w-full h-[800px] flex items-center justify-center overflow-hidden py-8 flex-col md:flex-row gap-6">
        {rows.map((row, rowIndex) => (
          <Marquee
            key={rowIndex}
            vertical
            pauseOnHover
            className="[--duration:60s]"
          >
            {row.map((project, index) => (
              <ReviewCard
                key={`${rowIndex}-${index}`}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </Marquee>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setSelectedProject(null)}
            />
            <ProjectDetails
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
