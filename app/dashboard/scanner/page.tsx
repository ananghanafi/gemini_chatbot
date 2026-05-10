"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  QrCode,
  Scan,
  CheckCircle,
  XCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"

type ScanResult = {
  success: boolean
  member?: {
    name: string
    id: string
    membership: string
    sessionsRemaining: number
    lastVisit: string
    trainer?: string
  }
  error?: string
}

type ScanHistoryItem = {
  result: ScanResult
  time: string
}

const mockScans: ScanResult[] = [
  {
    success: true,
    member: {
      name: "John Doe",
      id: "MEM-001",
      membership: "Premium",
      sessionsRemaining: 8,
      lastVisit: "Yesterday at 6:30 PM",
      trainer: "Alex Johnson",
    },
  },
  {
    success: true,
    member: {
      name: "Sarah Smith",
      id: "MEM-042",
      membership: "Standard",
      sessionsRemaining: 4,
      lastVisit: "2 days ago",
    },
  },
  {
    success: false,
    error: "Membership expired. Please renew to continue.",
  },
]

export default function ScannerPage() {
  const [mounted, setMounted] = useState(false)

  const [isScanning, setIsScanning] = useState(false)
  const [scanResult, setScanResult] = useState<ScanResult | null>(null)
  const [scanTime, setScanTime] = useState("")
  const [scanHistory, setScanHistory] = useState<ScanHistoryItem[]>([])

  // ✅ FIX HYDRATION: ensure client-only render
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="p-6 text-white/40">
        Loading scanner...
      </div>
    )
  }

  const simulateScan = () => {
    setIsScanning(true)
    setScanResult(null)

    setTimeout(() => {
      const result =
        mockScans[Math.floor(Math.random() * mockScans.length)]

      const currentTime = new Date().toLocaleTimeString()

      setScanResult(result)
      setScanTime(currentTime)
      setIsScanning(false)

      setScanHistory((prev) => [
        { result, time: currentTime },
        ...prev.slice(0, 9),
      ])
    }, 2000)
  }

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-display font-bold text-white">
          QR Scanner
        </h1>
        <p className="text-sm text-white/50">
          Scan member QR codes for check-in and session tracking
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SCANNER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-xl p-6"
        >
          <h2 className="text-lg font-semibold text-white mb-6">
            Scanner
          </h2>

          <div className="relative aspect-square max-w-md mx-auto mb-6">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 overflow-hidden">
              <div className="absolute inset-0 grid-pattern opacity-30" />

              {/* SCAN LINE */}
              <AnimatePresence>
                {isScanning && (
                  <motion.div
                    initial={{ top: "0%" }}
                    animate={{ top: "100%" }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                    className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                  />
                )}
              </AnimatePresence>

              {/* ICON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={
                    isScanning
                      ? { scale: [1, 1.1, 1] }
                      : { scale: 1 }
                  }
                  transition={{
                    duration: 1,
                    repeat: isScanning ? Infinity : 0,
                  }}
                >
                  <QrCode
                    className={`w-24 h-24 ${
                      isScanning
                        ? "text-cyan-400"
                        : "text-white/20"
                    }`}
                  />
                </motion.div>
              </div>
            </div>
          </div>

          <Button
            onClick={simulateScan}
            disabled={isScanning}
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 border-0 py-6"
          >
            {isScanning ? (
              <>
                <Scan className="w-5 h-5 mr-2 animate-pulse" />
                Scanning...
              </>
            ) : (
              <>
                <Scan className="w-5 h-5 mr-2" />
                Start Scan
              </>
            )}
          </Button>
        </motion.div>

        {/* RESULT */}
        <div className="glass-card rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-6">
            Scan Result
          </h2>

          <AnimatePresence mode="wait">
            {!scanResult ? (
              <motion.div
                key="empty"
                className="text-center py-16 text-white/40"
              >
                No scan results yet
              </motion.div>
            ) : scanResult.success ? (
              <motion.div key="success" className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-green-500/10 rounded-xl">
                  <CheckCircle className="text-green-400" />
                  <div>
                    <p className="text-green-400 font-medium">
                      Check-in Successful
                    </p>
                    <p className="text-sm text-green-400/60">
                      Session recorded at {scanTime}
                    </p>
                  </div>
                </div>

                <div className="text-white">
                  <p className="font-semibold text-lg">
                    {scanResult.member?.name}
                  </p>
                  <p className="text-white/50 text-sm">
                    {scanResult.member?.id}
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div key="error" className="text-center">
                <XCircle className="text-red-400 mx-auto mb-2" />
                <p className="text-red-400 font-medium">
                  {scanResult.error}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* HISTORY */}
      <div className="glass-card rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">
          Recent Scans
        </h2>

        {scanHistory.length === 0 ? (
          <p className="text-white/40 text-center py-6">
            No history yet
          </p>
        ) : (
          <div className="space-y-3">
            {scanHistory.map((scan, i) => (
              <div
                key={i}
                className="flex justify-between text-sm text-white/70"
              >
                <span>
                  {scan.result.success
                    ? scan.result.member?.name
                    : "Failed"}
                </span>
                <span>{scan.time}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}