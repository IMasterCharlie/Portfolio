"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Innovative Web Design",
    description: "Cutting-edge web experiences that captivate and convert.",
    image: "/Innovative_Webdesign.jpg",
  },
  {
    id: 2,
    name: "Mobile App Development",
    description: "Intuitive and powerful apps for iOS and Android platforms.",
    image: "/Mobile_App_Development.jpg",
  },
  {
    id: 3,
    name: "Brand Identity Design",
    description: "Memorable and impactful branding that tells your story.",
    image: "/Brand_Identity_Design.jpg",
  },
]

export default function ProductShowcase() {
  const [currentProduct, setCurrentProduct] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white px-4">
      <div className="container mx-auto max-w-6xl text-black">
        <h2 className="text-5xl font-extrabold text-center mb-16">Our Expertise</h2>

        <div className="relative overflow-hidden w-full h-[500px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProduct}
              className="flex flex-col md:flex-row items-center justify-between w-full"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* Text Section with Glass Effect */}
              <div className="md:w-1/2 p-8 bg-gray-800 bg-opacity-20 backdrop-blur-md rounded-lg shadow-xl">
                <h3 className="text-3xl font-bold mb-4">{products[currentProduct].name}</h3>
                <p className="text-lg">{products[currentProduct].description}</p>
              </div>

              {/* Image Section */}
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src={products[currentProduct].image}
                  alt={products[currentProduct].name}
                  width={500}
                  height={500}
                  className="w-[500px] h-[500px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {products.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full transition-all ${
                currentProduct === index ? "bg-black" : "bg-gray-300"
              }`}
              onClick={() => setCurrentProduct(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
