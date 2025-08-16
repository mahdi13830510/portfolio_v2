"use client"

import { motion } from "framer-motion"

export function FloatingElements() {
  const elements = [
    { symbol: "01", x: "10%", y: "20%", delay: 0 },
    { symbol: "11", x: "80%", y: "30%", delay: 1 },
    { symbol: "10", x: "20%", y: "70%", delay: 2 },
    { symbol: "00", x: "90%", y: "80%", delay: 3 },
    { symbol: "01", x: "60%", y: "10%", delay: 4 },
    { symbol: "11", x: "30%", y: "90%", delay: 5 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-green-400/20 font-mono text-2xl"
          style={{ left: element.x, top: element.y }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: element.delay,
          }}
        >
          {element.symbol}
        </motion.div>
      ))}
    </div>
  )
}
