"use client";

import { motion } from "framer-motion";

export default function WearYourStory() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 relative inline-block">
            Bringing Ideas to Life with Code.
            <span className="block h-1 w-24 bg-blue-500 mx-auto mt-4 rounded-full" />
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Let’s build something amazing together. Whether you need a sleek website,
            a powerful web app, or innovative solutions, I’m here to help.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
