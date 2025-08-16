"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface HolographicCardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function HolographicCard({ children, className = "", onClick }: HolographicCardProps) {
  return (
    <motion.div
      className={`relative bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg overflow-hidden ${className}`}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 30px rgba(0, 255, 255, 0.3)",
        borderColor: "rgba(0, 255, 255, 0.6)",
      }}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-400/10" />
      <div className="relative z-10">{children}</div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent animate-pulse" />
    </motion.div>
  )
}
