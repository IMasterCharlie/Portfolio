"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

const timelineEvents = [
  { year: 2018, title: "Started Learning Programming", description: "Began my journey with Python and Java, focusing on logic building and problem-solving.", details: "Developed small projects like a basic calculator and a to-do list application, setting the foundation for my programming career." },
  { year: 2019, title: "Built My First Web Application", description: "Developed a personal portfolio website using HTML, CSS, and JavaScript.", details: "Experimented with responsive design and animations, showcasing my skills and projects to the world." },
  { year: 2020, title: "Internship as a Frontend Developer", description: "Worked at a startup, enhancing UI/UX and developing reusable React components.", details: "Collaborated with backend developers to integrate APIs, improving the overall user experience of the company's dashboard." },
  { year: 2021, title: "Freelance Projects & Backend Learning", description: "Started working as a freelancer while learning Node.js and databases.", details: "Developed e-commerce websites and personal blogs for clients, gaining experience in both frontend and backend development." },
  { year: 2022, title: "Joined Tech Solutions Inc. as a Full Stack Developer", description: "Built scalable web applications using the MERN stack.", details: "Led the development of an internal tool for employee management, improving efficiency by 40%." },
  { year: 2023, title: "Senior Developer at InnovateX", description: "Promoted to a senior role, mentoring junior developers and optimizing backend performance.", details: "Designed and implemented a microservices architecture for a fintech platform, ensuring better scalability and security." },
  { year: 2024, title: "Developed AI-Powered Web Applications", description: "Created intelligent web apps integrating AI for real-time user analytics.", details: "Developed an AI-driven chatbot for a customer support system, reducing human intervention by 60% and enhancing user engagement." }
]

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section ref={containerRef} className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Experience</h2>
          <p className="mt-4 text-lg text-muted-foreground">A Timeline of Growth and Achievements</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line - Static */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/40 h-full" />

          {/* Dots along the line */}
          {timelineEvents.map((_, index) => (
            <div
              key={index}
              className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-2 border-white"
              style={{ top: `${(index / (timelineEvents.length - 1)) * 100}%` }}
            />
          ))}

          {/* Timeline Events */}
          {timelineEvents.map((event, index) => (
            <TimelineEvent key={event.year} event={event} index={index} isExpanded={expandedEvent === index} onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineEvent({ event, index, isExpanded, onToggle }: { event: (typeof timelineEvents)[0], index: number, isExpanded: boolean, onToggle: () => void }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div ref={ref} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="w-5/12" />
      <motion.div className="w-5/12 cursor-pointer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={onToggle}>
        <div className="p-4 bg-background rounded-lg shadow-md border border-primary/10">
          <span className="font-bold text-primary">{event.year}</span>
          <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
          <p className="text-muted-foreground">{event.description}</p>
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="mt-2 text-sm text-muted-foreground">{event.details}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
