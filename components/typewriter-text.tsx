"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface TypewriterTextProps {
  texts: string[]
  className?: string
  speed?: number
}

export function TypewriterText({ texts, className = "", speed = 100 }: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = texts[currentTextIndex]

        if (isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length - 1))
        } else {
          setCurrentText(fullText.substring(0, currentText.length + 1))
        }

        if (!isDeleting && currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }
      },
      isDeleting ? speed / 2 : speed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTextIndex, texts, speed])

  return (
    <motion.div className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
        className="ml-1"
      >
        |
      </motion.span>
    </motion.div>
  )
}
