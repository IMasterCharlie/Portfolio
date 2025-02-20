"use client"

import { motion } from "framer-motion"

export default function WearYourStory() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = element.offsetTop;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start hidden and below
          whileInView={{ opacity: 1, y: 0 }} // Animate into view
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of section is visible
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Bringing Ideas to Life with Code.
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Let’s build something amazing together. Whether you need a sleek website, a powerful web app, or innovative solutions, I’m here to help.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
