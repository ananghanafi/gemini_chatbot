"use client"

import { motion } from "framer-motion"

const logos = [
  "FitLife Pro",
  "GymForce",
  "Iron Athletics",
  "Peak Fitness",
  "Elite Training",
  "PowerHouse",
]

export function Trusted() {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-white/40 uppercase tracking-widest mb-12">
            Trusted by modern fitness businesses
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {logos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="text-xl md:text-2xl font-display font-bold text-white/20 group-hover:text-white/40 transition-colors duration-300 cursor-default">
                  {logo}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
