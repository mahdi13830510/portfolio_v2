"use client"

import { motion } from "framer-motion"

interface SkillOrbProps {
  skill: string
}

export function SkillOrb({ skill }: SkillOrbProps) {
  return (
    <motion.div
      className="px-3 py-1 bg-gradient-to-r from-green-400/20 to-cyan-400/20 border border-green-400/30 rounded-full text-sm text-green-400 cursor-pointer"
      whileHover={{
        scale: 1.1,
        boxShadow: "0 0 20px rgba(0, 255, 0, 0.5)",
        borderColor: "rgba(0, 255, 255, 0.8)",
      }}
      whileTap={{ scale: 0.95 }}
    >
      {skill}
    </motion.div>
  )
}
