"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Developed a full-stack e-commerce website with payment integration.",
    imageUrl: "/Ecommerce.png",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Mobile Budget Tracker",
    description: "Built a cross-platform mobile app to track expenses and savings.",
    imageUrl: "/BudgetTracker.jpg",
    category: "Mobile App Development",
  },
  {
    id: 3,
    title: "AI-Powered Chatbot",
    description: "Implemented an AI chatbot for customer support using NLP models.",
    imageUrl: "/chatbot.jpeg",
    category: "Artificial Intelligence",
  },
  {
    id: 4,
    title: "Cloud-Based Inventory System",
    description: "Developed a cloud-based inventory management system with real-time analytics.",
    imageUrl: "/inventor.jpg",
    category: "Cloud Computing",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Created a responsive personal portfolio website using React and Tailwind CSS.",
    imageUrl: "/portfolio.webp",
    category: "Web Development",
  },
  {
    id: 6,
    title: "Cybersecurity Threat Detector",
    description: "Built a tool to detect potential cybersecurity threats using machine learning.",
    imageUrl: "/ThreatDetection.png",
    category: "Cybersecurity",
  },
];

const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <motion.section
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black text-gray-900">My Work</h2>
          <p className="mt-4 text-lg text-gray-700">
            A showcase of our minimalist designs and creative solutions.
          </p>
        </motion.div>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium border transition-all duration-300 ${
                filter === category
                  ? "bg-black text-white border-black shadow-md"
                  : "text-gray-700 border-gray-300 hover:bg-gray-100 hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl grayscale hover:grayscale-0 transition duration-500 ease-in-out"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-gray-800 mb-2">{project.category}</div>
                  <h3 className="text-2xl font-semibold text-black mb-4">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}
