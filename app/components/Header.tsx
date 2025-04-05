"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  // Lock scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = element.offsetTop - 80; // adjust for sticky header height
      window.scrollTo({ top: offset, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { id: "portfolioGrid", label: "Work" },
    { id: "wearYourStory", label: "About" },
    { id: "services", label: "Services" },
    { id: "testimonials", label: "Testimonials" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md h-20 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <button
            onClick={() => scrollToSection("hero")}
            className="-m-1.5 p-1.5 hover:scale-105 transition-transform"
            aria-label="Scroll to top"
          >
            <Image
              src="/Mehraj_Logo.png"
              alt="Mehraj Logo"
              width={48}
              height={48}
              className="rounded-full"
            />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-x-10">
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-sm font-semibold text-foreground hover:bg-black hover:text-white p-3 rounded-lg transition-all"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Hire Me */}
        <div className="hidden md:flex flex-1 justify-end">
          {mounted && (
            <button
              onClick={() => scrollToSection("contact")}
              className="w-28 rounded-lg p-2 text-white flex items-center justify-around bg-black hover:scale-105 transition-transform"
            >
              Hire me
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-20 left-0 w-full bg-background/95 backdrop-blur-md shadow-lg rounded-b-lg p-4 z-40"
          >
            <div className="flex flex-col items-center space-y-4">
              {navLinks.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-lg font-semibold text-foreground hover:bg-black hover:text-white p-3 rounded-lg w-full text-center transition-all"
                >
                  {label}
                </button>
              ))}

              {/* Mobile Hire Me Button */}
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full rounded-lg p-3 text-white flex items-center justify-center bg-black hover:scale-105 transition-transform"
              >
                Hire me
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
