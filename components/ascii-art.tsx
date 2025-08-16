"use client"

import { motion } from "framer-motion"

export function AsciiArt() {
  const asciiSkull = `
    ██████╗ ██╗   ██╗██████╗ ███████╗██████╗ 
    ██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗
    ██║      ╚████╔╝ ██████╔╝█████╗  ██████╔╝
    ██║       ╚██╔╝  ██╔══██╗██╔══╝  ██╔══██╗
    ╚██████╗   ██║   ██████╔╝███████╗██║  ██║
     ╚═════╝   ╚═╝   ╚═════╝ ╚══════╝╚═╝  ╚═╝
                                              
    ██╗  ██╗ █████╗  ██████╗██╗  ██╗███████╗██████╗ 
    ██║  ██║██╔══██╗██╔════╝██║ ██╔╝██╔════╝██╔══██╗
    ███████║███████║██║     █████╔╝ █████╗  ██████╔╝
    ██╔══██║██╔══██║██║     ██╔═██╗ ██╔══╝  ██╔══██╗
    ██║  ██║██║  ██║╚██████╗██║  ██╗███████╗██║  ██║
    ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
  `

  return (
    <motion.pre
      className="text-green-400 text-xs md:text-sm mb-8 font-mono leading-tight"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
      style={{
        textShadow: "0 0 10px #00ff00",
        filter: "drop-shadow(0 0 5px #00ff00)",
      }}
    >
      {asciiSkull}
    </motion.pre>
  )
}
