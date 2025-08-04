"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const timelineEvents = [
  {
    year: 2018,
    title: "Introduction to Web Development",
    description: "Began exploring the fundamentals of computers and programming.",
    details: "Started building a foundation in front-end development using HTML, CSS, and JavaScript."
  },
  {
    year: 2020,
    title: "Diploma in Electrical and Electronics Engineering",
    description: "Pursued diploma studies at Mahaveer Institute of Science and Technology.",
    details: "Gained strong technical knowledge in electronics, while maintaining a growing interest in web and software development."
  },
  {
    year: 2023,
    title: "Focused Web Development Practice",
    description: "Dedicated time to learning modern web technologies and building real-world projects.",
    details: "Practiced full-stack development with hands-on projects, focusing on UI/UX, JavaScript, and responsive design."
  },
  {
    year: 2024,
    title: "B.Tech in Computer Science and Engineering",
    description: "Started B.Tech at MLR Institute of Technology.",
    details: "Currently enhancing skills in full-stack development, contributing to academic and personal projects, and staying updated with the latest trends in software technology."
  }
];


export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Experience</h2>
          <p className="mt-4 text-lg text-gray-600">A Timeline of Growth and Achievements</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full" />

          {/* Dots */}
          {timelineEvents.map((_, index) => (
            <div
              key={index}
              className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-2 border-blue-500 rounded-full"
              style={{ top: `${(index / (timelineEvents.length - 1)) * 100}%` }}
            />
          ))}

          {/* Events */}
          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={event.year}
              event={event}
              index={index}
              isExpanded={expandedEvent === index}
              onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineEvent({
  event,
  index,
  isExpanded,
  onToggle,
}: {
  event: (typeof timelineEvents)[0];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="w-5/12" />
      <motion.div
        className="w-5/12 cursor-pointer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onToggle}
      >
        <div className="p-4 bg-white rounded-xl shadow-md border border-gray-200 transition duration-300 hover:shadow-lg">
          <span className="font-bold text-blue-600">{event.year}</span>
          <h3 className="text-lg font-semibold mb-1 text-gray-900">{event.title}</h3>
          <p className="text-gray-600">{event.description}</p>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-sm text-gray-500">{event.details}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
