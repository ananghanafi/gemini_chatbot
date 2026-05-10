"use client"

import { motion } from "framer-motion"
import {
  DollarSign,
  Users,
  Calendar,
  QrCode,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Clock,
  TrendingUp,
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
  Cell,
} from "recharts"
import { Button } from "@/components/ui/button"

const stats = [
  {
    label: "Total Revenue",
    value: "$124,580",
    change: "+18.2%",
    trend: "up",
    icon: DollarSign,
    color: "cyan",
  },
  {
    label: "Active Members",
    value: "2,847",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    color: "blue",
  },
  {
    label: "PT Sessions",
    value: "1,234",
    change: "+24.3%",
    trend: "up",
    icon: Calendar,
    color: "purple",
  },
  {
    label: "Check-ins Today",
    value: "342",
    change: "-5.2%",
    trend: "down",
    icon: QrCode,
    color: "pink",
  },
]

const revenueData = [
  { name: "Jan", revenue: 4000, members: 240 },
  { name: "Feb", revenue: 3000, members: 220 },
  { name: "Mar", revenue: 5000, members: 280 },
  { name: "Apr", revenue: 4500, members: 260 },
  { name: "May", revenue: 6000, members: 320 },
  { name: "Jun", revenue: 5500, members: 300 },
  { name: "Jul", revenue: 7000, members: 380 },
  { name: "Aug", revenue: 6500, members: 360 },
  { name: "Sep", revenue: 8000, members: 420 },
  { name: "Oct", revenue: 7500, members: 400 },
  { name: "Nov", revenue: 9000, members: 480 },
  { name: "Dec", revenue: 8500, members: 460 },
]

const membershipData = [
  { name: "Premium", value: 45, color: "#06b6d4" },
  { name: "Standard", value: 35, color: "#3b82f6" },
  { name: "Basic", value: 20, color: "#a855f7" },
]

const recentActivity = [
  { member: "John Doe", action: "Checked in", time: "2 min ago", type: "checkin" },
  { member: "Sarah Smith", action: "Booked PT session", time: "5 min ago", type: "booking" },
  { member: "Mike Johnson", action: "Payment received - $99", time: "12 min ago", type: "payment" },
  { member: "Emma Wilson", action: "Cancelled booking", time: "15 min ago", type: "cancel" },
  { member: "David Brown", action: "New membership", time: "22 min ago", type: "new" },
  { member: "Lisa Anderson", action: "Checked out", time: "28 min ago", type: "checkout" },
]

const topTrainers = [
  { name: "Alex Johnson", sessions: 45, revenue: "$4,500", rating: 4.9 },
  { name: "Sarah Williams", sessions: 38, revenue: "$3,800", rating: 4.8 },
  { name: "Mike Chen", sessions: 32, revenue: "$3,200", rating: 4.7 },
  { name: "Emma Davis", sessions: 28, revenue: "$2,800", rating: 4.9 },
]

const upcomingSessions = [
  { member: "John Doe", trainer: "Alex Johnson", time: "10:00 AM", type: "Strength Training" },
  { member: "Jane Smith", trainer: "Sarah Williams", time: "11:30 AM", type: "HIIT" },
  { member: "Bob Wilson", trainer: "Mike Chen", time: "2:00 PM", type: "CrossFit" },
  { member: "Alice Brown", trainer: "Emma Davis", time: "4:30 PM", type: "Yoga" },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-white">Dashboard</h1>
          <p className="text-sm text-white/50">Welcome back! Here&apos;s what&apos;s happening at your gym.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
            Export Report
          </Button>
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:opacity-90 border-0">
            + Add Member
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="glass-card rounded-xl p-5 hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                  stat.color === "cyan"
                    ? "from-cyan-500/20 to-cyan-500/5"
                    : stat.color === "blue"
                    ? "from-blue-500/20 to-blue-500/5"
                    : stat.color === "purple"
                    ? "from-purple-500/20 to-purple-500/5"
                    : "from-pink-500/20 to-pink-500/5"
                } flex items-center justify-center`}
              >
                <stat.icon
                  className={`w-6 h-6 ${
                    stat.color === "cyan"
                      ? "text-cyan-400"
                      : stat.color === "blue"
                      ? "text-blue-400"
                      : stat.color === "purple"
                      ? "text-purple-400"
                      : "text-pink-400"
                  }`}
                />
              </div>
              <span
                className={`flex items-center gap-1 text-sm ${
                  stat.trend === "up" ? "text-green-400" : "text-red-400"
                }`}
              >
                {stat.trend === "up" ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
                {stat.change}
              </span>
            </div>
            <p className="text-sm text-white/50 mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2 glass-card rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-white">Revenue Overview</h3>
              <p className="text-sm text-white/50">Monthly revenue and member growth</p>
            </div>
            <Button variant="ghost" size="icon" className="text-white/40 hover:text-white">
              <MoreHorizontal className="w-5 h-5" />
            </Button>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorMembers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis
                  dataKey="name"
                  stroke="rgba(255,255,255,0.3)"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="rgba(255,255,255,0.3)"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(0,0,0,0.9)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "12px",
                    padding: "12px",
                  }}
                  labelStyle={{ color: "white" }}
                  itemStyle={{ color: "rgba(255,255,255,0.7)" }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#06b6d4"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                />
                <Area
                  type="monotone"
                  dataKey="members"
                  stroke="#a855f7"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorMembers)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Membership Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-white">Membership Types</h3>
              <p className="text-sm text-white/50">Distribution by plan</p>
            </div>
          </div>
          <div className="h-[200px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={membershipData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
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
          <div className="flex items-center justify-center gap-6 mt-4">
            {membershipData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-white/60">{item.name}</span>
                <span className="text-sm font-semibold text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
              <p className="text-sm text-white/50">Live gym updates</p>
            </div>
            <span className="flex items-center gap-2 text-xs text-green-400">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Live
            </span>
          </div>
          <div className="space-y-4 max-h-[300px] overflow-y-auto">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-3 pb-4 border-b border-white/5 last:border-0 last:pb-0"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center shrink-0">
                  <span className="text-xs font-medium text-white">
                    {activity.member
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white truncate">{activity.member}</p>
                  <p className="text-xs text-white/40">{activity.action}</p>
                </div>
                <span className="text-xs text-white/30 whitespace-nowrap">{activity.time}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Top Trainers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass-card rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-white">Top Trainers</h3>
              <p className="text-sm text-white/50">This month&apos;s performance</p>
            </div>
            <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300">
              View All
            </Button>
          </div>
          <div className="space-y-4">
            {topTrainers.map((trainer, index) => (
              <div
                key={trainer.name}
                className="flex items-center gap-3 pb-4 border-b border-white/5 last:border-0 last:pb-0"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                  <span className="text-sm font-bold text-white">{index + 1}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white">{trainer.name}</p>
                  <div className="flex items-center gap-2 text-xs text-white/40">
                    <span>{trainer.sessions} sessions</span>
                    <span>•</span>
                    <span>{trainer.revenue}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-yellow-400">
                  <TrendingUp className="w-3 h-3" />
                  <span className="text-sm">{trainer.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Sessions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="glass-card rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-white">Upcoming Sessions</h3>
              <p className="text-sm text-white/50">Today&apos;s schedule</p>
            </div>
            <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300">
              View Calendar
            </Button>
          </div>
          <div className="space-y-4">
            {upcomingSessions.map((session, index) => (
              <div
                key={index}
                className="flex items-center gap-3 pb-4 border-b border-white/5 last:border-0 last:pb-0"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white">{session.member}</p>
                  <div className="flex items-center gap-2 text-xs text-white/40">
                    <span>{session.trainer}</span>
                    <span>•</span>
                    <span>{session.type}</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-white">{session.time}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
