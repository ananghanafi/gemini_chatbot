"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  LayoutDashboard,
  Users,
  Calendar,
  QrCode,
  CreditCard,
  BarChart3,
  Settings,
  Menu,
  X,
  Bell,
  Search,
  ChevronDown,
  Dumbbell,
  LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const sidebarLinks = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Members", href: "/dashboard/members", icon: Users },
  { name: "Bookings", href: "/dashboard/bookings", icon: Calendar },
  { name: "QR Scanner", href: "/dashboard/scanner", icon: QrCode },
  { name: "Payments", href: "/dashboard/payments", icon: CreditCard },
  { name: "Trainers", href: "/dashboard/trainers", icon: Dumbbell },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#050505] flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        <div className="flex flex-col flex-1 min-h-0 bg-[#0a0a0a] border-r border-white/5">
          {/* Logo */}
          <div className="flex items-center h-16 px-6 border-b border-white/5">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 rounded-lg rotate-12" />
                <div className="absolute inset-0.5 bg-[#0a0a0a] rounded-lg rotate-12 flex items-center justify-center">
                  <span className="text-white font-bold text-sm -rotate-12">X</span>
                </div>
              </div>
              <span className="text-lg font-display font-bold text-white">Xenith</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <link.icon className={`w-5 h-5 ${isActive ? "text-cyan-400" : ""}`} />
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute left-0 w-1 h-6 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-r-full"
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* User */}
          <div className="p-4 border-t border-white/5">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                <span className="text-sm font-bold text-white">AG</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">Admin User</p>
                <p className="text-xs text-white/40 truncate">admin@agetivegym.com</p>
              </div>
              <Button variant="ghost" size="icon" className="text-white/40 hover:text-white">
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-64 z-50 lg:hidden"
            >
              <div className="flex flex-col h-full bg-[#0a0a0a] border-r border-white/5">
                {/* Logo */}
                <div className="flex items-center justify-between h-16 px-6 border-b border-white/5">
                  <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-8 h-8">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 rounded-lg rotate-12" />
                      <div className="absolute inset-0.5 bg-[#0a0a0a] rounded-lg rotate-12 flex items-center justify-center">
                        <span className="text-white font-bold text-sm -rotate-12">X</span>
                      </div>
                    </div>
                    <span className="text-lg font-display font-bold text-white">Xenith</span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSidebarOpen(false)}
                    className="text-white/60"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                  {sidebarLinks.map((link) => {
                    const isActive = pathname === link.href
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                          isActive
                            ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white"
                            : "text-white/60 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <link.icon className={`w-5 h-5 ${isActive ? "text-cyan-400" : ""}`} />
                        {link.name}
                      </Link>
                    )
                  })}
                </nav>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="flex-1 lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-30 flex items-center h-16 px-4 lg:px-8 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-white/60"
          >
            <Menu className="w-5 h-5" />
          </Button>

          <div className="flex-1 flex items-center gap-4 ml-4 lg:ml-0">
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl max-w-md flex-1">
              <Search className="w-4 h-4 text-white/40" />
              <input
                type="text"
                placeholder="Search members, bookings..."
                className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="relative text-white/60 hover:text-white"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-cyan-400 rounded-full" />
            </Button>

            <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-white/10">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                <span className="text-xs font-bold text-white">AG</span>
              </div>
              <span className="text-sm text-white/80">Admin</span>
              <ChevronDown className="w-4 h-4 text-white/40" />
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
