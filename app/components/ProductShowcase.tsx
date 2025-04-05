"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Innovative Web Design",
    description: "Crafting sleek, high-performance websites that drive engagement and results.",
    features: ["Responsive", "SEO Optimized", "Modern UI/UX"],
    image: "/Innovative_Webdesign.jpg",
  },
  {
    id: 2,
    name: "Mobile App Development",
    description: "Powerful and scalable mobile apps tailored for both Android and iOS.",
    features: ["Cross-platform", "Smooth UX", "High Performance"],
    image: "/Mobile_App_Development.jpg",
  },
  {
    id: 3,
    name: "Brand Identity Design",
    description: "Building a strong, memorable visual identity to make your brand stand out.",
    features: ["Logo Design", "Typography", "Color Palette"],
    image: "/Brand_Identity_Design.jpg",
  },
];

export default function ProductShowcase() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Expertise
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We specialize in delivering digital solutions that are not just functional but visually captivating.
        </motion.p>

        <div className="grid gap-12 md:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={400}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-black transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-gray-100 text-gray-800 rounded-full border border-gray-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
