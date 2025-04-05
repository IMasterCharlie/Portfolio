"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect } from "react"

interface FullScreenMenuProps {
  isOpen: boolean
  onClose: () => void
}

const menuItems = [
  { name: "Work", id: "portfolioGrid" },
  { name: "About", id: "wearYourStory" },
  { name: "Services", id: "services" },
  { name: "Contact", id: "contact" },
]

export default function FullScreenMenu({ isOpen, onClose }: FullScreenMenuProps) {
  // Optional: prevent body scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      })
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-white/95 backdrop-blur-sm z-[9999] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-gray-900 hover:text-gray-600 transition"
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Menu items */}
          <nav className="text-center">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="block text-4xl font-bold text-gray-900 mb-6 hover:text-gray-600 transition-colors"
                >
                  {item.name}
                </button>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
