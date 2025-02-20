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
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval) // Cleanup on unmount
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden h-full">
      <div className="container mx-auto">
        <h2 className="section-title text-5xl font-black mb-16 text-center text-black">Our Expertise</h2>
        <div className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProduct}
              className="flex flex-col md:flex-row items-center justify-between"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-3xl font-bold mb-4">{products[currentProduct].name}</h3>
                <p className="text-xl text-gray-600 mb-8">{products[currentProduct].description}</p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src={products[currentProduct].image || "/placeholder.svg"}
                  alt={products[currentProduct].name}
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
