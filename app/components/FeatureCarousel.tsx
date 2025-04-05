"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

const features = [
  {
    title: "Expertise & Experience",
    description: "Years of experience in web development, React, and 3D design.",
    icon: "🧠",
  },
  {
    title: "Innovative & Creative",
    description: "Unique, modern, and visually appealing designs.",
    icon: "🎨",
  },
  {
    title: "Performance & Efficiency",
    description: "Optimized, fast, and responsive websites.",
    icon: "⚡",
  },
  {
    title: "User-Centric Approach",
    description: "Focus on seamless user experience and accessibility.",
    icon: "🌈",
  },
];

export default function FeatureCarousel() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    if (carousel.current) {
      const updateWidth = () =>
        setWidth(carousel.current!.scrollWidth - carousel.current!.offsetWidth);

      updateWidth();
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }
  }, []);

  const handleDragEnd = () => {
    const currentX = x.get();
    if (currentX > 0) {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } });
    } else if (currentX < -width) {
      controls.start({ x: -width, transition: { type: "spring", stiffness: 300, damping: 30 } });
    }
  };

  return (
    <motion.section
      className="py-24 bg-background relative z-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-center text-4xl sm:text-5xl font-bold mb-16 bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Makes Me Different?
        </motion.h2>

        <motion.div
          ref={carousel}
          className="cursor-grab overflow-hidden"
          aria-label="Unique Features"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            animate={controls}
            style={{ x }}
            onDragEnd={handleDragEnd}
            className="flex gap-8 px-2"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] sm:min-w-[340px] h-[260px] p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl hover:scale-[1.03] hover:rotate-[1deg] transition-all duration-300 ease-in-out relative group"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="text-5xl mb-4 drop-shadow-sm">
                  <span suppressHydrationWarning>{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>

                <div className="absolute inset-0 rounded-3xl border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
