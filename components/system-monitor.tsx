"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { HolographicCard } from "./holographic-card"

export function SystemMonitor() {
  const [cpuUsage, setCpuUsage] = useState(0)
  const [memUsage, setMemUsage] = useState(0)
  const [networkActivity, setNetworkActivity] = useState(0)
  const [threats, setThreats] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Hide on mobile, show on desktop
    const checkScreenSize = () => {
      setIsVisible(window.innerWidth >= 1024)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    const interval = setInterval(() => {
      setCpuUsage(Math.floor(Math.random() * 100))
      setMemUsage(Math.floor(Math.random() * 100))
      setNetworkActivity(Math.floor(Math.random() * 1000))
      setThreats(Math.floor(Math.random() * 50))
    }, 2000)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed top-20 right-4 z-40 space-y-2"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <HolographicCard className="p-3 w-64">
        <div className="text-xs font-mono">
          <div className="text-green-400 mb-2">SYSTEM MONITOR v2.0.77</div>

          <div className="mb-2">
            <div className="flex justify-between">
              <span>CPU:</span>
              <span className={cpuUsage > 80 ? "text-red-400" : "text-green-400"}>{cpuUsage}%</span>
            </div>
            <div className="w-full bg-gray-800 h-1 rounded">
              <div
                className={`h-1 rounded transition-all duration-500 ${cpuUsage > 80 ? "bg-red-400" : "bg-green-400"}`}
                style={{ width: `${cpuUsage}%` }}
              />
            </div>
          </div>

          <div className="mb-2">
            <div className="flex justify-between">
              <span>MEM:</span>
              <span className={memUsage > 80 ? "text-red-400" : "text-cyan-400"}>{memUsage}%</span>
            </div>
            <div className="w-full bg-gray-800 h-1 rounded">
              <div
                className={`h-1 rounded transition-all duration-500 ${memUsage > 80 ? "bg-red-400" : "bg-cyan-400"}`}
                style={{ width: `${memUsage}%` }}
              />
            </div>
          </div>

          <div className="mb-2">
            <div className="flex justify-between">
              <span>NET:</span>
              <span className="text-purple-400">{networkActivity} KB/s</span>
            </div>
          </div>

          <div className="mb-2">
            <div className="flex justify-between">
              <span>THREATS:</span>
              <span className="text-red-400">{threats} detected</span>
            </div>
          </div>

          <div className="text-yellow-400 text-center animate-pulse text-xs">INTRUSION DETECTION ACTIVE</div>
        </div>
      </HolographicCard>
    </motion.div>
  )
}
