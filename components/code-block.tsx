"use client"

import { motion } from "framer-motion"

interface CodeBlockProps {
  code: string
}

export function CodeBlock({ code }: CodeBlockProps) {
  return (
    <motion.div
      className="bg-black/80 border border-green-400/30 rounded p-4 font-mono text-sm overflow-x-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <pre className="text-green-400">
        <code>{code}</code>
      </pre>
    </motion.div>
  )
}
