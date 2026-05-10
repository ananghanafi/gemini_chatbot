"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Users, QrCode, Calendar, TrendingUp } from "lucide-react"

const floatingCards = [
  {
    icon: Users,
    label: "Active Members",
    value: "2,847",
    change: "+12%",
    position: "top-32 -right-8 md:right-12",
    delay: 0.2,
  },
  {
    icon: QrCode,
    label: "Check-ins Today",
    value: "342",
    change: "+8%",
    position: "top-72 -left-8 md:left-8",
    delay: 0.4,
  },
  {
    icon: Calendar,
    label: "PT Sessions",
    value: "156",
    change: "+24%",
    position: "bottom-32 right-4 md:right-24",
    delay: 0.6,
  },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm text-white/80">Now available for gyms worldwide</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
          >
            <span className="text-white">Transform Your Gym</span>
            <br />
            <span className="gradient-text">Operations Into a</span>
            <br />
            <span className="text-white">Digital Ecosystem</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Xenith MVP App & Dashboard helps gyms manage members, QR check-ins, PT bookings, 
            schedules, payments, and analytics in one modern platform.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              size="lg"
              className="group bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white hover:opacity-90 transition-all border-0 px-8 py-6 text-base font-semibold rounded-xl"
            >
              Request Demo
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group border-white/20 text-white hover:bg-white/5 px-8 py-6 text-base font-semibold rounded-xl"
            >
              <Play className="mr-2 w-4 h-4 fill-current" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Dashboard mockup */}
            <div className="relative glass-card p-2 rounded-2xl overflow-hidden gradient-border">
              <div className="bg-[#0a0a0a] rounded-xl overflow-hidden">
                {/* Dashboard Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1 bg-white/5 rounded-md text-xs text-white/40">
                      dashboard.xenith.app
                    </div>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-6 grid grid-cols-12 gap-4">
                  {/* Sidebar */}
                  <div className="col-span-2 hidden md:block">
                    <div className="space-y-2">
                      {['Dashboard', 'Members', 'Bookings', 'Payments', 'Analytics'].map((item, i) => (
                        <div
                          key={item}
                          className={`px-3 py-2 rounded-lg text-xs ${
                            i === 0 ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white' : 'text-white/40'
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Main Content */}
                  <div className="col-span-12 md:col-span-10 space-y-4">
                    {/* Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        { label: 'Total Revenue', value: '$124,580', change: '+18%' },
                        { label: 'Active Members', value: '2,847', change: '+12%' },
                        { label: 'PT Sessions', value: '1,234', change: '+24%' },
                        { label: 'Check-ins', value: '8,421', change: '+8%' },
                      ].map((stat) => (
                        <div key={stat.label} className="bg-white/5 rounded-lg p-3">
                          <p className="text-[10px] text-white/40">{stat.label}</p>
                          <p className="text-sm font-semibold text-white">{stat.value}</p>
                          <p className="text-[10px] text-cyan-400">{stat.change}</p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Chart Area */}
                    <div className="bg-white/5 rounded-lg p-4 h-32">
                      <div className="flex items-end justify-between h-full gap-2">
                        {[40, 65, 45, 80, 55, 75, 90, 60, 85, 70, 95, 80].map((height, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-cyan-500/50 to-purple-500/50 rounded-t"
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ duration: 0.5, delay: 0.6 + i * 0.05 }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            {floatingCards.map((card) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: card.delay + 0.4 }}
                className={`absolute ${card.position} hidden sm:block`}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="glass-card p-4 rounded-xl glow-cyan"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <card.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/50">{card.label}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-white">{card.value}</span>
                        <span className="text-xs text-green-400">{card.change}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Glow effect behind dashboard */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
