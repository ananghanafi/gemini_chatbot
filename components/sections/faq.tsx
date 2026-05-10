"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is it available for Android & iOS?",
    answer: "Yes! Xenith is available on both Android and iOS platforms. Members and trainers can download the app from the Google Play Store or Apple App Store. The app offers full feature parity across both platforms with native performance.",
  },
  {
    question: "Does QR check-in work automatically?",
    answer: "Absolutely. Once a member scans their QR code at the gym entrance, the system automatically logs their attendance, updates their session count, and notifies their trainer if they have a booking. The entire process takes less than 3 seconds.",
  },
  {
    question: "Can admins scan QR from dashboard?",
    answer: "Yes, the admin dashboard includes a built-in QR scanner feature. Admins can use their computer's webcam or connect a dedicated QR scanner device to check in members directly from the dashboard interface.",
  },
  {
    question: "Does it support multiple gym branches?",
    answer: "Our Enterprise plan fully supports multi-location management. You can manage all your gym branches from a single dashboard, with separate analytics, staff management, and member tracking for each location while maintaining centralized control.",
  },
  {
    question: "Can PT monitor member progress?",
    answer: "Personal trainers have dedicated dashboards where they can track each client's workout progress, log session notes, update fitness metrics, and create personalized workout programs. Progress data includes weight tracking, body measurements, strength gains, and more.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-cyan-400 mb-6">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Find answers to common questions about Xenith.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-0 overflow-hidden group"
              >
                <AccordionTrigger className="text-white hover:no-underline py-5 group-hover:text-cyan-400 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/50 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
