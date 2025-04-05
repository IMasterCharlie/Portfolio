"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section
      id="about-us"
      aria-labelledby="about-heading"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2
            id="about-heading"
            className="text-4xl sm:text-5xl font-extrabold text-gray-900"
          >
            About Us
          </h2>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Textual content */}
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-gray-800"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              I Am a Software Innovator
            </h3>
            <div className="space-y-4 text-base sm:text-lg leading-relaxed">
              <p>
                As a passionate software developer, I blend modern technology with creative
                problem-solving to build efficient, scalable, and user-friendly solutions.
              </p>
              <p>
                With a strong foundation in software development and a keen eye for innovation,
                I aim to craft applications that improve user experiences and deliver lasting impact.
              </p>
              <p>
                From sleek frontends to robust backends, I turn ideas into powerful digital
                products through clean code and modern frameworks.
              </p>
            </div>
          </motion.article>

          {/* Visual block */}
          <motion.div
            className="relative min-h-[250px] sm:min-h-[300px] md:min-h-[350px] w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            role="presentation"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg transform rotate-3" />
            <div className="absolute inset-0 bg-gray-800 rounded-lg transform -rotate-3 flex items-center justify-center p-4 text-center">
              <p className="text-xl sm:text-2xl font-bold text-white">
                Creative Work With Better Performance
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
