"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="border-b border-gray-200"
    >
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
          <Plus className="w-6 h-6" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-600">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Faq = () => {
  const faqData = [
    {
      question: "What is Microlab Studio?",
      answer:
        "Microlab Studio is a custom 3D printing service provider offering end-to-end solutions — from design to production...",
    },
    {
      question: "What 3D printing technologies does Microlab offer?",
      answer: "We provide various printing technologies: FDM, SLA, SLS...",
    },
    {
      question: "I only have a sketch or an idea — can you help?",
      answer:
        "Absolutely! Our 3D design team can turn sketches into printable CAD files.",
    },
    {
      question: "How much do your printing services cost?",
      answer:
        "Pricing starts from IDR 1,500/gr. Design services are quoted based on complexity.",
    },
    {
      question: "How long does production take?",
      answer:
        "Simple prints: 1–2 days. Complex: 3–7 days. Express service available.",
    },
    {
      question: "Can I order single pieces?",
      answer: "Yes! We support both one-off prototypes and bulk orders.",
    },
    {
      question: "Do you ship throughout Indonesia?",
      answer: "Yes, we ship nationwide via trusted courier partners.",
    },
    {
      question: "What if I'm not satisfied?",
      answer:
        "We'll fix or reprint any error that’s our fault at no extra cost.",
    },
    {
      question: "How do I start a project?",
      answer:
        "Click [Explore Our Services] or use our [Contact] form to get started.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto 2xl:w-4/5 md:px-16 px-6 py-16 pb-32"
    >
      <h1 className="text-4xl font-bold mb-12">FAQ</h1>
      <div className="space-y-2">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Faq;
