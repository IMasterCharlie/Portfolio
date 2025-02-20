"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Mehraj, your web development skills are exceptional. Our website's performance and design have improved tremendously!",
    author: "Zain Ali",
    position: "CTO, NextGen Solutions",
    image: "/Client_1.jpg",
  },
  {
    quote:
      "Your expertise in UI/UX and SEO optimization has completely changed our platform. Our users love the new intuitive design!",
    author: "Ayesha Rahman",
    position: "Product Manager, VisionTech",
    image: "/Client_3.jpg",
  },
  {
    quote:
      "Mehraj, your attention to detail and commitment to excellence have been truly inspiring. Our sales have doubled since the redesign!",
    author: "Omar Siddiqui",
    position: "Head of Marketing, BrandElevate",
    image: "/Client_2.jpg",
  },
  {
    quote:
      "Working with you was a seamless experience. Your problem-solving skills and technical expertise set you apart.",
    author: "Fatima Noor",
    position: "CEO, WebSphere",
    image: "/Client_7.webp",
  },
  {
    quote:
      "Your backend development expertise streamlined our operations. Our platform is now faster and more scalable!",
    author: "Arif Mehmood",
    position: "Lead Developer, CloudSync",
    image: "/Client_5.webp",
  },
  {
    quote:
      "From branding to digital marketing, your strategies have helped us establish a strong online presence. Highly recommended!",
    author: "Sara Khan",
    position: "Founder, DigitalCrafters",
    image: "/Client_6.jpg",
  },
];



export default function Testimonials() {
  return (
    <motion.section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-16 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}