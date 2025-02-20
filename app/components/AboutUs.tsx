"use client"

import { motion } from "framer-motion"

export default function AboutUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-20 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-4 text-white">I Am a Software Innovator</h3>
            <p className="text-gray-300 mb-6">
            As a passionate software developer, I combine cutting-edge technology with creative problem-solving to build efficient, scalable, and user-friendly solutions. With a deep understanding of software development and a keen eye for innovation, I strive to craft applications that enhance user experiences and drive meaningful impact.
            </p>
            <p className="text-gray-300">
            From designing seamless user interfaces to developing powerful backend systems, I am dedicated to transforming ideas into reality through clean code, modern technologies, and a commitment to excellence.
            </p>
          </motion.div>
          <motion.div
            className="relative h-96"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg transform rotate-3"></div>
            <div className="absolute inset-0 bg-gray-800 rounded-lg transform -rotate-3 flex items-center justify-center">
              <p className="text-2xl font-bold text-white">Creative Work With Better Performance</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
