"use client"

import { motion } from "framer-motion"
import { 
  QrCode, 
  Calendar, 
  Clock, 
  Dumbbell, 
  TrendingUp, 
  CreditCard,
  Users,
  BarChart3,
  Activity,
  History,
  CalendarCheck,
  UserCheck
} from "lucide-react"

const memberFeatures = [
  {
    icon: QrCode,
    title: "QR Check-in",
    description: "Instant gym access with personalized QR codes. No waiting, no hassle.",
  },
  {
    icon: Calendar,
    title: "PT Booking",
    description: "Book personal training sessions with your favorite trainers in seconds.",
  },
  {
    icon: Clock,
    title: "Remaining Sessions",
    description: "Track your PT session balance and membership status in real-time.",
  },
  {
    icon: Dumbbell,
    title: "Workout Programs",
    description: "Access custom workout programs designed by your personal trainer.",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Monitor your fitness journey with detailed progress analytics.",
  },
  {
    icon: CreditCard,
    title: "Membership Status",
    description: "View membership details, payment history, and renewal dates.",
  },
]

const trainerFeatures = [
  {
    icon: CalendarCheck,
    title: "Schedule Management",
    description: "Manage your availability and sessions with an intuitive calendar.",
  },
  {
    icon: Users,
    title: "Member Monitoring",
    description: "Track all your clients' progress and attendance in one place.",
  },
  {
    icon: Activity,
    title: "Workout Progress",
    description: "Log and analyze each client's workout performance over time.",
  },
  {
    icon: History,
    title: "Session History",
    description: "Complete history of all sessions with notes and outcomes.",
  },
  {
    icon: UserCheck,
    title: "Calendar Integration",
    description: "Sync with Google Calendar, iCal, and other calendar apps.",
  },
  {
    icon: BarChart3,
    title: "Performance Reports",
    description: "Generate detailed reports for clients and gym management.",
  },
]

const FeatureCard = ({ 
  feature, 
  index 
}: { 
  feature: typeof memberFeatures[0]
  index: number 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="group relative glass-card p-6 rounded-2xl overflow-hidden"
  >
    {/* Gradient border on hover */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
    </div>
    
    {/* Glow effect */}
    <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative z-10">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:glow-cyan transition-all duration-300">
        <feature.icon className="w-6 h-6 text-cyan-400" />
      </div>
      
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:gradient-text transition-all duration-300">
        {feature.title}
      </h3>
      
      <p className="text-sm text-white/50 leading-relaxed">
        {feature.description}
      </p>
    </div>
  </motion.div>
)

export function Features() {
  return (
    <section id="features" className="py-24 relative">
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
            Features
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Everything Your Gym <span className="gradient-text">Needs to Thrive</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Powerful features designed for members, trainers, and administrators to streamline gym operations.
          </p>
        </motion.div>

        {/* Member Features */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xl font-display font-semibold text-white mb-8 flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            Member Features
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memberFeatures.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>

        {/* Trainer Features */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xl font-display font-semibold text-white mb-8 flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Dumbbell className="w-4 h-4 text-white" />
            </div>
            Personal Trainer Features
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainerFeatures.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
