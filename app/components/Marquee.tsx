"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export default function Marquee() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.2, // Triggers when 20% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className="relative w-full overflow-hidden bg-background py-16"
      initial={{ y: 100, opacity: 0 }} // Initially hidden below
      animate={controls} // Controlled animation
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />

      {/* Marquee Animation */}
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex items-center mx-4">
            <span
              className="text-7xl sm:text-8xl md:text-9xl font-bold text-transparent px-4"
              style={{
                WebkitTextStroke: "3px rgb(0 0 0)", // Tailwind gray-400
              }}
            >
              Mohammed Mehraj
            </span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
