"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800 ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="text-xl font-medium">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          <Plus className="w-6 h-6 " />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-neutral-600">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  const faqData = [
    {
      question: "What is Microlab Studio?",
      answer:
        "Microlab Studio is a custom 3D printing service provider offering end-to-end solutions — from design to production. We serve individuals, small businesses, and large enterprises that need rapid prototyping, accurate printing, and professional post-processing.",
    },
    {
      question: "What 3D printing technologies does Microlab offer?",
      answer:
        "We provide various printing technologies: FDM (Fused Deposition Modeling), SLA (Stereolithography), SLS (Selective Laser Sintering) Each technology has its own strengths depending on your needs — from fast prints, high detail, to durable materials.",
    },
    {
      question:
        " I only have a sketch or an idea — can you help turn it into a printable design?",
      answer:
        "Absolutely! Our 3D design and modeling team can help you turn sketches, concepts, or images into ready-to-print 3D files (CAD, STL, OBJ, etc.).",
    },
    {
      question: "How much do your printing services cost?",
      answer:
        "Custom 3D Printing: From IDR 1,500/gr, Rapid Prototyping: From IDR 150,000 per project, Post-Processing Add-ons: From IDR 50,000 For design & modeling, the cost depends on complexity and is quoted after consultation.",
    },
    {
      question: "How long does production take?",
      answer:
        "Simple prints: 1 – 2 working days, Complex prototypes: 3 – 7 working days We also offer express service for urgent projects (contact us for details).",
    },
    {
      question: "Can I order single pieces or do you only offer bulk printing?",
      answer:
        "We support both single prints and bulk production. Many of our clients start with one prototype before ordering in larger quantities.",
    },
    {
      question: "Do you ship throughout Indonesia?",
      answer:
        "Yes! We deliver prints across Indonesia using reliable and fast shipping services.",
    },
    {
      question: "What if I'm not satisfied with the printed result?",
      answer:
        "Customer satisfaction is our priority. If there’s a production error on our side, we’ll reprint or fix it free of charge.",
    },
    {
      question: "How do I start a project with Microlab Studio?",
      answer:
        "Simply click [Explore Our Services] or reach out through our [Contact] page. You can upload your design file, share your concept, or describe your needs — our team will assist you every step of the way.",
    },
  ];

  return (
    <div
      className=" 
    
    mx-auto 2xl:w-4/5 md:px-16
    
     px-6   py-16 pb-32 "
    >
      <h1 className="text-4xl font-bold mb-12 ">FAQ</h1>
      <div className="space-y-2">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
