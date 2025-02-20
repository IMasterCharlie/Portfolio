"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = element.offsetTop; // Get the exact position
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 flex flex-col justify-around items-center text-center lg:flex-row-reverse lg:items-center lg:gap-x-10 lg:px-8 lg:text-left">
        
        {/* Image Section - Slides from Left to Right */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ x: 100, opacity: 0 }} // Starts off-screen to the left
          animate={{ x: 0, opacity: 1 }} // Moves to its normal position
          transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
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
            className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gradient w-full">Hi, I am Mehraj</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A passionate{" "}
            <span className="text-black text-2xl">Full-Stack Developer</span>{" "}
            crafting beautiful web experiences.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center gap-x-6 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              onClick={() => scrollToSection("portfolioGrid")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black p-2 rounded-lg text-white hover:cursor-pointer hover:scale-110 transition-all"
            >
              Explore Our Work
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold leading-6 text-foreground hover:cursor-pointer hover:bg-black hover:text-white p-2 rounded-lg transition-all"
              onClick={() => scrollToSection("wearYourStory")}
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
