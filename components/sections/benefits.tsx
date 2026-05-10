"use client"

import { motion } from "framer-motion"
import { 
  Zap, 
  BarChart3, 
  Heart, 
  Calendar, 
  TrendingUp, 
  Clock 
} from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Reduce Manual Operations",
    description: "Automate repetitive tasks like check-ins, bookings, and payment tracking to save hours every day.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: BarChart3,
    title: "Real-time Business Monitoring",
    description: "Track revenue, member activity, and trainer performance with live analytics and instant alerts.",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    icon: Heart,
    title: "Better Member Experience",
    description: "Delight members with seamless app experiences, instant notifications, and personalized engagement.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Calendar,
    title: "Automated Booking System",
    description: "Smart scheduling that handles conflicts, sends reminders, and optimizes trainer availability.",
    gradient: "from-pink-500 to-red-500",
  },
  {
    icon: TrendingUp,
    title: "PT Performance Tracking",
    description: "Monitor trainer sessions, client retention, and performance metrics to optimize your team.",
    gradient: "from-green-500 to-cyan-500",
  },
  {
    icon: Clock,
    title: "Faster Check-in Process",
    description: "QR-based check-in reduces wait times to under 3 seconds, enhancing the gym experience.",
    gradient: "from-orange-500 to-yellow-500",
  },
]

export function Benefits() {
  return (
    <section className="py-24 relative">
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
            Why Choose Xenith
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Benefits That <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Transform your gym operations with features designed to increase efficiency and member satisfaction.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]"
                style={{
                  background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                }}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${benefit.gradient} opacity-20`} />
              </div>

              <div className="relative glass-card p-6 rounded-2xl h-full overflow-hidden">
                {/* Glow effect on hover */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${benefit.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} p-[1px] mb-5`}>
                    <div className="w-full h-full rounded-2xl bg-[#0a0a0a] flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
