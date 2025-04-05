"use client"

import { motion } from "framer-motion"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-8"
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your privacy is important to us. This Privacy Policy explains how we collect, use,
            and protect your information.
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              title: "1. Information We Collect",
              content:
                "We may collect information such as your name, email address, and any messages you send through our contact forms. We also use cookies to improve user experience.",
            },
            {
              title: "2. How We Use Your Information",
              content:
                "The information you provide is used to respond to inquiries, improve our services, and communicate with you. We do not sell or share your personal data with third parties.",
            },
            {
              title: "3. Cookies",
              content:
                "Cookies are small files stored on your device. They help us understand user behavior and personalize your experience. You can disable cookies in your browser settings.",
            },
            {
              title: "4. Third-Party Services",
              content:
                "We may use third-party services like Google Analytics to track website usage. These services may collect information as governed by their own privacy policies.",
            },
            {
              title: "5. Changes to This Policy",
              content:
                "We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with a revised effective date.",
            },
            {
              title: "6. Contact Us",
              content:
                "If you have any questions about this Privacy Policy, feel free to reach out via the contact form on our website.",
            },
          ].map(({ title, content }, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-secondary/10 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <p className="text-muted-foreground text-sm">{content}</p>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </motion.div>
    </main>
  )
}
