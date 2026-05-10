"use client"

import { motion } from "framer-motion"
import { 
  Calendar, 
  QrCode, 
  Smartphone, 
  MinusCircle, 
  ClipboardCheck, 
  BarChart3 
} from "lucide-react"

const steps = [
  {
    icon: Calendar,
    title: "Member Books PT Session",
    description: "Members easily book sessions through the app or dashboard with their preferred trainer.",
  },
  {
    icon: QrCode,
    title: "System Generates QR Code",
    description: "A unique QR code is automatically generated for the booking confirmation.",
  },
  {
    icon: Smartphone,
    title: "Member Scans QR at Gym",
    description: "Quick and contactless check-in by scanning the QR code at the gym entrance.",
  },
  {
    icon: MinusCircle,
    title: "PT Session Auto Deducted",
    description: "The session is automatically deducted from the member's package balance.",
  },
  {
    icon: ClipboardCheck,
    title: "Trainer Updates Progress",
    description: "Personal trainers log workout details and track member progress in real-time.",
  },
  {
    icon: BarChart3,
    title: "Admin Monitors Analytics",
    description: "Administrators view comprehensive analytics and business insights on the dashboard.",
  },
]

export function Workflow() {
  return (
    <section className="py-24 relative overflow-hidden">
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
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Seamless Gym <span className="gradient-text">Workflow</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            From booking to analytics, experience a streamlined process that saves time and enhances member satisfaction.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 transform md:-translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center glow-cyan"
                  >
                    <span className="text-xs font-bold text-white">{index + 1}</span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-20" : "md:pl-20"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass-card p-6 rounded-2xl group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center shrink-0 group-hover:glow-cyan transition-all duration-300">
                        <step.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                        <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>

          {/* Animated glow orbs */}
          <motion.div
            className="absolute -top-20 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-20 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  )
}
