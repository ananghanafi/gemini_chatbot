"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "David Chen",
    role: "Gym Owner",
    company: "FitLife Pro Gym",
    avatar: "DC",
    quote: "Xenith transformed how we manage our gym. The QR check-in system alone saved us hours of manual work every day. Our members love the seamless experience.",
    rating: 5,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    name: "Sarah Martinez",
    role: "Personal Trainer",
    company: "Elite Training Center",
    avatar: "SM",
    quote: "As a PT, tracking client progress used to be a nightmare. Now I have everything in one place - schedules, workout logs, and member analytics. Game changer!",
    rating: 5,
    gradient: "from-blue-500 to-purple-500",
  },
  {
    name: "Michael Thompson",
    role: "Gym Member",
    company: "PowerHouse Fitness",
    avatar: "MT",
    quote: "Booking PT sessions and checking in with a QR code is so convenient. I can see my progress, remaining sessions, and book my favorite trainer all from the app.",
    rating: 5,
    gradient: "from-purple-500 to-pink-500",
  },
]

export function Testimonials() {
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
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Loved by <span className="gradient-text">Fitness Professionals</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            See what gym owners, trainers, and members are saying about Xenith.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative h-full glass-card rounded-2xl p-6 overflow-hidden">
                {/* Quote icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-white" />
                </div>

                {/* Glow effect */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${testimonial.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-white/70 leading-relaxed mb-6">
                    {`"${testimonial.quote}"`}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center`}>
                      <span className="text-sm font-bold text-white">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-white/40">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
