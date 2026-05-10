"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, QrCode, Calendar, Dumbbell, Activity, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const screens = [
  {
    id: 1,
    title: "QR Check-in",
    icon: QrCode,
    gradient: "from-cyan-500 to-blue-500",
    content: {
      header: "Quick Check-in",
      stats: [
        { label: "Today", value: "3 visits" },
        { label: "This week", value: "12 visits" },
      ],
    },
  },
  {
    id: 2,
    title: "PT Booking",
    icon: Calendar,
    gradient: "from-blue-500 to-purple-500",
    content: {
      header: "Book a Session",
      trainers: [
        { name: "Alex Johnson", specialty: "Strength Training", available: true },
        { name: "Sarah Williams", specialty: "HIIT & Cardio", available: true },
        { name: "Mike Chen", specialty: "CrossFit", available: false },
      ],
    },
  },
  {
    id: 3,
    title: "Workout Tracking",
    icon: Dumbbell,
    gradient: "from-purple-500 to-pink-500",
    content: {
      header: "Today's Workout",
      exercises: [
        { name: "Bench Press", sets: "4x12", completed: true },
        { name: "Squats", sets: "4x10", completed: true },
        { name: "Deadlift", sets: "3x8", completed: false },
      ],
    },
  },
  {
    id: 4,
    title: "Session Balance",
    icon: Activity,
    gradient: "from-pink-500 to-red-500",
    content: {
      header: "Your Balance",
      balance: {
        pt: 8,
        group: 12,
        expires: "Dec 31, 2024",
      },
    },
  },
  {
    id: 5,
    title: "Progress Analytics",
    icon: TrendingUp,
    gradient: "from-green-500 to-cyan-500",
    content: {
      header: "Your Progress",
      metrics: [
        { label: "Weight", value: "75 kg", change: "-2.5 kg" },
        { label: "Body Fat", value: "18%", change: "-1.2%" },
        { label: "Muscle Mass", value: "32 kg", change: "+0.8 kg" },
      ],
    },
  },
]

export function MobileApp() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextScreen = () => {
    setActiveIndex((prev) => (prev + 1) % screens.length)
  }

  const prevScreen = () => {
    setActiveIndex((prev) => (prev - 1 + screens.length) % screens.length)
  }

  const activeScreen = screens[activeIndex]

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
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-purple-400 mb-6">
            Mobile Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Your Gym in <span className="gradient-text">Your Pocket</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Access all features on the go with our beautifully designed mobile app.
          </p>
        </motion.div>

        {/* Phone Mockup Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-8">
            {/* Navigation - Left */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevScreen}
              className="hidden md:flex w-12 h-12 rounded-full border-white/10 text-white hover:bg-white/5"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Floating effect */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Phone frame */}
                <div className="relative w-[280px] sm:w-[320px] mx-auto">
                  {/* Phone bezel */}
                  <div className="relative bg-[#1a1a1a] rounded-[3rem] p-3 shadow-2xl">
                    {/* Dynamic island */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />
                    
                    {/* Screen */}
                    <div className="relative bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeScreen.id}
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 p-6 pt-12"
                        >
                          {/* Header */}
                          <div className={`bg-gradient-to-r ${activeScreen.gradient} p-4 rounded-2xl mb-4`}>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                                <activeScreen.icon className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <p className="text-xs text-white/70">Xenith</p>
                                <h3 className="text-white font-semibold">{activeScreen.content.header}</h3>
                              </div>
                            </div>
                          </div>

                          {/* Dynamic Content */}
                          {activeScreen.id === 1 && (
                            <div className="space-y-4">
                              <div className="w-32 h-32 mx-auto bg-white rounded-xl p-2">
                                <div className="w-full h-full bg-gradient-to-br from-black to-gray-800 rounded-lg flex items-center justify-center">
                                  <QrCode className="w-16 h-16 text-white" />
                                </div>
                              </div>
                              <p className="text-center text-white/50 text-xs">Scan at gym entrance</p>
                              <div className="grid grid-cols-2 gap-3 mt-4">
                                {activeScreen.content.stats?.map((stat) => (
                                  <div key={stat.label} className="bg-white/5 rounded-xl p-3 text-center">
                                    <p className="text-xs text-white/40">{stat.label}</p>
                                    <p className="text-sm font-semibold text-white">{stat.value}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {activeScreen.id === 2 && (
                            <div className="space-y-3">
                              {activeScreen.content.trainers?.map((trainer) => (
                                <div key={trainer.name} className="bg-white/5 rounded-xl p-3 flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20" />
                                    <div>
                                      <p className="text-sm text-white">{trainer.name}</p>
                                      <p className="text-xs text-white/40">{trainer.specialty}</p>
                                    </div>
                                  </div>
                                  <div className={`w-2 h-2 rounded-full ${trainer.available ? 'bg-green-400' : 'bg-red-400'}`} />
                                </div>
                              ))}
                            </div>
                          )}

                          {activeScreen.id === 3 && (
                            <div className="space-y-3">
                              {activeScreen.content.exercises?.map((exercise) => (
                                <div key={exercise.name} className="bg-white/5 rounded-xl p-3 flex items-center justify-between">
                                  <div>
                                    <p className="text-sm text-white">{exercise.name}</p>
                                    <p className="text-xs text-white/40">{exercise.sets}</p>
                                  </div>
                                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                    exercise.completed ? 'bg-green-500/20' : 'bg-white/10'
                                  }`}>
                                    {exercise.completed && <span className="text-green-400 text-xs">✓</span>}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {activeScreen.id === 4 && (
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-3">
                                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-4 text-center">
                                  <p className="text-3xl font-bold text-white">{activeScreen.content.balance?.pt}</p>
                                  <p className="text-xs text-white/50">PT Sessions</p>
                                </div>
                                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-4 text-center">
                                  <p className="text-3xl font-bold text-white">{activeScreen.content.balance?.group}</p>
                                  <p className="text-xs text-white/50">Group Classes</p>
                                </div>
                              </div>
                              <div className="bg-white/5 rounded-xl p-3 text-center">
                                <p className="text-xs text-white/40">Valid until</p>
                                <p className="text-sm text-white">{activeScreen.content.balance?.expires}</p>
                              </div>
                            </div>
                          )}

                          {activeScreen.id === 5 && (
                            <div className="space-y-3">
                              {activeScreen.content.metrics?.map((metric) => (
                                <div key={metric.label} className="bg-white/5 rounded-xl p-3 flex items-center justify-between">
                                  <div>
                                    <p className="text-xs text-white/40">{metric.label}</p>
                                    <p className="text-lg font-semibold text-white">{metric.value}</p>
                                  </div>
                                  <span className={`text-xs ${metric.change.startsWith('+') ? 'text-green-400' : 'text-cyan-400'}`}>
                                    {metric.change}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>

                      {/* Bottom bar */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full" />
                    </div>
                  </div>

                  {/* Phone glow */}
                  <div className="absolute inset-0 -z-10 blur-3xl opacity-40">
                    <div className={`w-full h-full bg-gradient-to-br ${activeScreen.gradient} rounded-full`} />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Navigation - Right */}
            <Button
              variant="outline"
              size="icon"
              onClick={nextScreen}
              className="hidden md:flex w-12 h-12 rounded-full border-white/10 text-white hover:bg-white/5"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Screen indicators */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {screens.map((screen, index) => (
              <button
                key={screen.id}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white"
                    : "text-white/40 hover:text-white/60"
                }`}
              >
                <screen.icon className="w-4 h-4" />
                <span className="text-xs hidden sm:inline">{screen.title}</span>
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-center gap-4 mt-4 md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={prevScreen}
              className="w-10 h-10 rounded-full border-white/10 text-white hover:bg-white/5"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextScreen}
              className="w-10 h-10 rounded-full border-white/10 text-white hover:bg-white/5"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
