"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = element.offsetTop;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 flex flex-col justify-around items-center text-center lg:flex-row-reverse lg:items-center lg:gap-x-10 lg:px-8 lg:text-left">
        
        {/* Image Section - Subtle hover animation */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src="/Mehraj_Portfolio.jpg"
            alt="Full-Stack Developer"
            width={600}
            height={600}
            className="w-[300px] sm:w-[400px] lg:w-[500px] rounded-2xl shadow-xl ring-1 ring-gray-900/10"
          />
        </motion.div>

        {/* Text Content */}
        <div className="max-w-2xl lg:max-w-lg">
          <motion.h1
            className="mt-10 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-black bg-clip-text text-transparent">
              Hi, I am Mehraj
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A passionate{" "}
            <span className="text-primary font-semibold text-xl md:text-2xl">
              Full-Stack Developer
            </span>{" "}
            crafting beautiful web experiences.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-10 flex items-center gap-x-6 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              onClick={() => scrollToSection("portfolioGrid")}
              className="bg-primary text-white px-5 py-2 rounded-xl text-sm font-medium shadow hover:scale-105 transition-all cursor-pointer"
            >
              Explore My Work
            </a>
            <a
              onClick={() => scrollToSection("wearYourStory")}
              className="text-foreground border border-foreground px-5 py-2 rounded-xl text-sm font-medium hover:bg-foreground hover:text-background transition-all cursor-pointer"
            >
              Learn More →
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
