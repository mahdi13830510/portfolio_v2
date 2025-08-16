"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function GlitchOverlay() {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.1) {
        // 10% chance every 5 seconds
        setIsGlitching(true)
        setTimeout(() => setIsGlitching(false), 200)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isGlitching && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-red-500/10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-cyan-500/10 mix-blend-screen transform translate-x-1" />
          <div className="absolute inset-0 bg-green-500/10 mix-blend-overlay transform -translate-x-1" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
