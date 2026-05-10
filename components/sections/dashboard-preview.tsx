"use client"

import { motion } from "framer-motion"
import { 
  DollarSign, 
  Users, 
  Calendar, 
  QrCode,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Search,
  Bell,
  Settings
} from "lucide-react"
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts"

const revenueData = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 4500 },
  { name: "May", value: 6000 },
  { name: "Jun", value: 5500 },
  { name: "Jul", value: 7000 },
  { name: "Aug", value: 6500 },
  { name: "Sep", value: 8000 },
  { name: "Oct", value: 7500 },
  { name: "Nov", value: 9000 },
  { name: "Dec", value: 8500 },
]

const membershipData = [
  { name: "Premium", value: 45, color: "#06b6d4" },
  { name: "Standard", value: 35, color: "#3b82f6" },
  { name: "Basic", value: 20, color: "#a855f7" },
]

const ptPerformanceData = [
  { name: "Alex", sessions: 45 },
  { name: "Sarah", sessions: 38 },
  { name: "Mike", sessions: 32 },
  { name: "Emma", sessions: 28 },
  { name: "John", sessions: 25 },
]

const stats = [
  {
    label: "Total Revenue",
    value: "$124,580",
    change: "+18%",
    trend: "up",
    icon: DollarSign,
  },
  {
    label: "Active Members",
    value: "2,847",
    change: "+12%",
    trend: "up",
    icon: Users,
  },
  {
    label: "PT Sessions",
    value: "1,234",
    change: "+24%",
    trend: "up",
    icon: Calendar,
  },
  {
    label: "Check-ins Today",
    value: "342",
    change: "-5%",
    trend: "down",
    icon: QrCode,
  },
]

const recentActivity = [
  { member: "John Doe", action: "Checked in", time: "2 min ago" },
  { member: "Sarah Smith", action: "Booked PT session", time: "5 min ago" },
  { member: "Mike Johnson", action: "Payment received", time: "12 min ago" },
  { member: "Emma Wilson", action: "Checked out", time: "15 min ago" },
]

export function DashboardPreview() {
  return (
    <section id="dashboard" className="py-24 relative">
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
            Admin Dashboard
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Powerful Analytics <span className="gradient-text">at Your Fingertips</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Real-time insights into revenue, member activity, trainer performance, and more.
          </p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="glass-card rounded-3xl overflow-hidden gradient-border">
            <div className="bg-[#080808] p-6">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold">X</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Agetive Gym</h3>
                    <p className="text-xs text-white/40">Admin Dashboard</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg">
                    <Search className="w-4 h-4 text-white/40" />
                    <span className="text-sm text-white/40">Search...</span>
                  </div>
                  <button className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors">
                    <Bell className="w-4 h-4" />
                  </button>
                  <button className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors">
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                        <stat.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <span className={`flex items-center gap-1 text-xs ${
                        stat.trend === "up" ? "text-green-400" : "text-red-400"
                      }`}>
                        {stat.trend === "up" ? (
                          <ArrowUpRight className="w-3 h-3" />
                        ) : (
                          <ArrowDownRight className="w-3 h-3" />
                        )}
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-xs text-white/40 mb-1">{stat.label}</p>
                    <p className="text-xl font-bold text-white">{stat.value}</p>
                  </motion.div>
                ))}
              </div>

              {/* Charts Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Revenue Chart */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="lg:col-span-2 bg-white/5 rounded-xl p-4"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-white font-semibold">Revenue Analytics</h4>
                      <p className="text-xs text-white/40">Monthly revenue overview</p>
                    </div>
                    <button className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={revenueData}>
                        <defs>
                          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                        <XAxis 
                          dataKey="name" 
                          stroke="rgba(255,255,255,0.3)" 
                          fontSize={10}
                          tickLine={false}
                          axisLine={false}
                        />
                        <YAxis 
                          stroke="rgba(255,255,255,0.3)" 
                          fontSize={10}
                          tickLine={false}
                          axisLine={false}
                          tickFormatter={(value) => `$${value / 1000}k`}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "rgba(0,0,0,0.8)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: "8px",
                            fontSize: "12px",
                          }}
                          formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
                        />
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke="#06b6d4"
                          strokeWidth={2}
                          fillOpacity={1}
                          fill="url(#colorRevenue)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>

                {/* Membership Distribution */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white/5 rounded-xl p-4"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-white font-semibold">Memberships</h4>
                      <p className="text-xs text-white/40">By plan type</p>
                    </div>
                  </div>
                  <div className="h-32 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={membershipData}
                          cx="50%"
                          cy="50%"
                          innerRadius={35}
                          outerRadius={50}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {membershipData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex items-center justify-center gap-4 mt-2">
                    {membershipData.map((item) => (
                      <div key={item.name} className="flex items-center gap-2">
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-xs text-white/50">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* PT Performance */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white/5 rounded-xl p-4"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-white font-semibold">PT Performance</h4>
                      <p className="text-xs text-white/40">Sessions this month</p>
                    </div>
                  </div>
                  <div className="h-32">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={ptPerformanceData} layout="vertical">
                        <XAxis type="number" hide />
                        <YAxis 
                          type="category" 
                          dataKey="name" 
                          stroke="rgba(255,255,255,0.3)" 
                          fontSize={10}
                          tickLine={false}
                          axisLine={false}
                          width={40}
                        />
                        <Bar 
                          dataKey="sessions" 
                          fill="url(#barGradient)"
                          radius={[0, 4, 4, 0]}
                        />
                        <defs>
                          <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#a855f7" />
                          </linearGradient>
                        </defs>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>

                {/* Recent Activity */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="lg:col-span-2 bg-white/5 rounded-xl p-4"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-white font-semibold">Recent Activity</h4>
                      <p className="text-xs text-white/40">Live updates from your gym</p>
                    </div>
                    <span className="flex items-center gap-2 text-xs text-green-400">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      Live
                    </span>
                  </div>
                  <div className="space-y-3">
                    {recentActivity.map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                            <span className="text-xs text-white font-medium">
                              {activity.member.split(" ").map(n => n[0]).join("")}
                            </span>
                          </div>
                          <div>
                            <p className="text-sm text-white">{activity.member}</p>
                            <p className="text-xs text-white/40">{activity.action}</p>
                          </div>
                        </div>
                        <span className="text-xs text-white/30">{activity.time}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 -z-10 blur-3xl opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
