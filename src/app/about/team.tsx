"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PiLinkedinLogo, PiTwitterLogo } from "react-icons/pi";

interface StatItemProps {
  label: string;
  value: string;
}

interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  website?: string;
}

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  description: string;
  social: SocialLinks;
  index: number;
}

const StatItem: React.FC<StatItemProps> = ({ label, value }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="flex flex-col items-center border-b md:border-b-0 
    md:border-l border-gray-200 px-4 py-6 first:border-l-0 
    flex-1 text-center"
  >
    <h3 className="text-[#7b7b7b] text-base mb-4">{label}</h3>
    <span className="text-4xl md:text-5xl lg:text-6xl font-light">{value}</span>
  </motion.div>
);

const SocialIcon: React.FC<{ href: string; icon: React.ReactNode }> = ({
  href,
  icon,
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-gray-900 transition-colors"
  >
    {icon}
  </Link>
);

const TeamMember: React.FC<TeamMemberProps> = ({
  image,
  name,
  role,
  description,
  social,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.6,
      delay: index * 0.1,
      ease: "easeOut",
    }}
    className="flex flex-col h-full"
  >
    <div className="relative overflow-hidden group rounded-md shadow-sm">
      <motion.div
        className="h-full"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Image
          height={500}
          width={500}
          src={image}
          alt={name}
          className="object-cover h-[300px] w-full"
        />
      </motion.div>
    </div>
    <div className="pt-6 space-y-3 flex-1">
      <h3 className="font-medium text-xl">{name}</h3>
      <p className="text-gray-600 font-medium">{role}</p>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      <div className="flex gap-4 pt-4">
        {social.linkedin && (
          <SocialIcon
            href={social.linkedin}
            icon={<PiLinkedinLogo size={20} />}
          />
        )}
        {social.twitter && (
          <SocialIcon
            href={social.twitter}
            icon={<PiTwitterLogo size={20} />}
          />
        )}
      </div>
    </div>
  </motion.div>
);

const stats: StatItemProps[] = [
  { label: "Team Size", value: "6" },
  { label: "Creative Director", value: "1" },
  { label: "Engineers", value: "2" },
  { label: "UX Researcher", value: "1" },
  { label: "3D Product Designer", value: "1" },
  { label: "3D Print Specialist", value: "1" },
];

const teamMembers: Omit<TeamMemberProps, "index">[] = [
  {
    name: "Emily Johnson",
    role: "3D Product Designer",
    image: "/assets/C.webp",
    description: "Passionate about sustainable design and product aesthetics.",
    social: {
      linkedin: "https://linkedin.com/in/emilyjohnson",
      website: "https://emilyjohnson.design",
    },
  },
  {
    name: "Michael Lee",
    role: "Mechanical Engineer",
    image: "/assets/A.webp",
    description:
      "Engineer by heart, specializing in functional 3D-printed mechanisms.",
    social: {
      linkedin: "https://linkedin.com/in/michaellee",
      website: "https://michaelengineer.dev",
    },
  },
  {
    name: "Sofia Ramirez",
    role: "Creative Director",
    image: "/assets/E.webp",
    description:
      "Loves combining storytelling with design to create immersive visuals.",
    social: {
      linkedin: "https://linkedin.com/in/sofiaramirez",
      website: "https://sofiavisuals.com",
    },
  },
  {
    name: "Dylan Smith",
    role: "3D Print Specialist",
    image: "/assets/D.webp",
    description:
      "Focuses on print optimization and material testing for high-detail projects.",
    social: {
      linkedin: "https://linkedin.com/in/dylansmith",
      website: "https://dylanprints.com",
    },
  },
  {
    name: "Aisha Tan",
    role: "UX Researcher",
    image: "/assets/F.webp",
    description:
      "Bridges user needs and design for seamless product interactions.",
    social: {
      linkedin: "https://linkedin.com/in/aishatan",
      website: "https://aishatan.io",
    },
  },
  {
    name: "Kevin Park",
    role: "Software Engineer",
    image: "/assets/B.webp",
    description:
      "Builds intuitive interfaces and loves working with 3D visualization tools.",
    social: {
      linkedin: "https://linkedin.com/in/kevinpark",
      website: "https://kevinpark.dev",
    },
  },
];

const Team = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-xl uppercase tracking-wider text-gray-500 mb-6">
            /Team
          </p>
          <p className="text-[#7b7b7b] max-w-3xl text-lg">
            Our team is made up of dedicated professionals with diverse
            expertise in design, engineering, and digital manufacturing. With
            backgrounds in mechanical engineering, visual arts, and 3D printing
            technology, we combine creativity and precision to deliver
            innovative and reliable printing solutions. Each team member brings
            unique skills — from organic modeling and CAD design to mechanical
            testing and product finishing. Together, we are committed to
            transforming great ideas into physical reality while ensuring
            quality, efficiency, and client satisfaction every step of the way.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-between w-full mb-20">
          {stats.map((stat, index) => (
            <StatItem key={index} label={stat.label} value={stat.value} />
          ))}
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
