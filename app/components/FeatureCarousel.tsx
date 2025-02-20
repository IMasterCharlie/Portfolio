"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"

const features = [
  {
    title: "Expertise & Experience",
    description: "Years of experience in web development, React, and 3D design.",
    icon: "✨",
  },
  {
    title: "Innovative & Creative",
    description: "Unique, modern, and visually appealing designs.",
    icon: "📱",
  },
  {
    title: "Performance & Efficiency",
    description: "Optimized, fast, and responsive websites.",
    icon: "⚡",
  },
  {
    title: "User-Centric Approach",
    description: "Focus on seamless user experience and accessibility",
    icon: "🌈",
  }
]

export default function FeatureCarousel() {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  const handleDragEnd = () => {
    const currentX = x.get()
    if (currentX > 0) {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } })
    } else if (currentX < -width) {
      controls.start({ x: -width, transition: { type: "spring", stiffness: 300, damping: 30 } })
    }
  }

  return (
    <motion.div 
      className="py-20 bg-gradient-to-b from-background to-secondary/20"
      initial={{ opacity: 0, y: 50 }} // Start hidden and below
      whileInView={{ opacity: 1, y: 0 }} // Animate into view
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the section is visible
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={carousel} className="cursor-grab overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            animate={controls}
            style={{ x }}
            onDragEnd={handleDragEnd}
            className="flex"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] h-[250px] p-8 m-4 bg-background rounded-3xl shadow-lg flex flex-col justify-between hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
              >
                <div>
                  <div className="text-4xl mb-4">
                    <span suppressHydrationWarning>{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
