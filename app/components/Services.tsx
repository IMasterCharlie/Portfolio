"use client";
import React from "react";

import { motion } from "framer-motion";
import {
  Paintbrush,
  Code,
  Megaphone,
  Smartphone,
  Palette,
  Search,
  ShoppingCart,
  Cloud,
  Brain,
  FileText,
} from "lucide-react";

const services = [
  {
    icon: <Paintbrush className="w-12 h-12 mb-4 text-blue-500" />,
    title: "UI/UX Design",
    description:
      "Crafting intuitive and visually stunning interfaces that engage and delight users.",
  },
  {
    icon: <Code className="w-12 h-12 mb-4 text-green-500" />,
    title: "Web Development",
    description:
      "Building robust, scalable, and high-performance websites and web applications.",
  },
  {
    icon: <Megaphone className="w-12 h-12 mb-4 text-yellow-500" />,
    title: "Digital Marketing",
    description:
      "Developing strategic campaigns that increase brand visibility and drive conversions.",
  },
  {
    icon: <Smartphone className="w-12 h-12 mb-4 text-purple-500" />,
    title: "Mobile App Development",
    description:
      "Creating innovative mobile applications for iOS and Android platforms.",
  },
  {
    icon: <Palette className="w-12 h-12 mb-4 text-red-500" />,
    title: "Brand Identity",
    description:
      "Designing memorable logos, color schemes, and branding materials that define your business.",
  },
  {
    icon: <Search className="w-12 h-12 mb-4 text-indigo-500" />,
    title: "SEO Optimization",
    description:
      "Enhancing your website's visibility with search engine optimization strategies.",
  },
  {
    icon: <ShoppingCart className="w-12 h-12 mb-4 text-pink-500" />,
    title: "E-commerce Solutions",
    description:
      "Developing powerful online stores with seamless shopping experiences and secure payment gateways.",
  },
  {
    icon: <Cloud className="w-12 h-12 mb-4 text-cyan-500" />,
    title: "Cloud Solutions",
    description:
      "Deploying scalable, cost-effective, and secure cloud infrastructure for businesses.",
  },
  {
    icon: <Brain className="w-12 h-12 mb-4 text-teal-500" />,
    title: "AI & Machine Learning",
    description:
      "Leveraging artificial intelligence and machine learning to automate processes and analyze data.",
  },
  {
    icon: <FileText className="w-12 h-12 mb-4 text-orange-500" />,
    title: "Content Creation",
    description:
      "Creating high-quality, engaging, and SEO-friendly content for blogs, websites, and social media.",
  },
];

export default function Services() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          My Services
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          I offer a wide range of services to help bring your digital ideas to life.
        </motion.p>

        <div className="h-1 w-24 mx-auto mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full" />

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-muted p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {React.cloneElement(service.icon, {
                className:
                  service.icon.props.className +
                  " group-hover:scale-110 group-hover:drop-shadow-glow transition-transform duration-300",
              })}
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
