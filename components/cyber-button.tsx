"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import type { ReactNode } from "react"

interface CyberButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary" | "accent"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function CyberButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}: CyberButtonProps) {
  const baseClasses =
    "relative font-mono font-bold uppercase tracking-wider transition-all duration-300 overflow-hidden text-center"

  const variants = {
    primary: "bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black",
    secondary: "bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black",
    accent: "bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black",
  }

  const sizes = {
    sm: "px-3 py-2 text-xs sm:text-sm",
    md: "px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base",
    lg: "px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg",
  }

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  const ButtonContent = () => (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={buttonClasses}>
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
    </motion.div>
  )

  if (href) {
    return (
      <Link href={href}>
        <ButtonContent />
      </Link>
    )
  }

  return (
    <button onClick={onClick}>
      <ButtonContent />
    </button>
  )
}
