"use client"

import { motion } from "framer-motion"

interface TerminalCommandProps {
  input: string
  output: string[]
  timestamp: Date
}

export function TerminalCommand({ input, output, timestamp }: TerminalCommandProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-1"
    >
      <div className="flex items-center">
        <span className="text-red-400">root@mahdi:~$</span>
        <span className="ml-2 text-green-400">{input}</span>
        <span className="ml-auto text-xs text-gray-500">{timestamp.toLocaleTimeString()}</span>
      </div>

      {output.map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="text-cyan-400 ml-4"
        >
          {line}
        </motion.div>
      ))}
    </motion.div>
  )
}
