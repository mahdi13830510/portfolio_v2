"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
]

export function KonamiProvider({ children }: { children: React.ReactNode }) {
  const [sequence, setSequence] = useState<string[]>([])
  const [activated, setActivated] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setSequence((prev) => {
        const newSequence = [...prev, event.code].slice(-KONAMI_CODE.length)

        if (
          newSequence.length === KONAMI_CODE.length &&
          newSequence.every((key, index) => key === KONAMI_CODE[index])
        ) {
          setActivated(true)
          setTimeout(() => setActivated(false), 5000)
          return []
        }

        return newSequence
      })
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      {children}
      <AnimatePresence>
        {activated && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/80"
          >
            <div className="text-center">
              <motion.h1
                className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 mb-4"
                animate={{
                  textShadow: ["0 0 20px #00ff00", "0 0 40px #00ffff", "0 0 60px #ff00ff", "0 0 20px #00ff00"],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                KONAMI CODE ACTIVATED!
              </motion.h1>
              <motion.p
                className="text-2xl text-cyan-400"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                🎮 CYBER OVERDRIVE ENGAGED! 🎮
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
