"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Marquee() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
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
      style={{
        willChange: "transform",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      }}
      initial={{ y: 100, opacity: 0 }}
      animate={controls}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />

      {/* Marquee Animation */}
      <motion.div
        className="flex whitespace-nowrap"
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        }}
        animate={{ transform: ["translateX(0%)", "translateX(-50%)"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex items-center mx-4">
            <span
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-transparent px-4"
              style={{
                WebkitTextStroke: "3px rgb(0 0 0)",
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
