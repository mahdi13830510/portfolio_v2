"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useAudio } from "./audio-provider"
import { useTheme } from "./theme-provider"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isPlaying, toggleAudio } = useAudio()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "./about" },
    { href: "#tech-stack", label: "./skills" },
    { href: "#interests", label: "./interests" },
    { href: "#contact", label: "./contact" },
    { href: "/terminal", label: "./terminal" },
  ]

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <motion.div className="text-lg sm:text-xl font-bold text-green-400" whileHover={{ scale: 1.05 }}>
            root@mahdi:~$
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-green-400 hover:text-cyan-400 transition-colors duration-300 relative group text-sm xl:text-base"
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -left-4">
                  {"> "}
                </span>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={toggleAudio}
              className="text-green-400 hover:text-cyan-400 transition-colors duration-300 text-lg sm:text-xl"
              aria-label="Toggle audio"
            >
              {isPlaying ? "🔊" : "🔇"}
            </button>

            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value as any)}
              className="bg-black border border-green-400 text-green-400 px-1 sm:px-2 py-1 rounded text-xs sm:text-sm"
            >
              <option value="matrix">Matrix</option>
              <option value="cyber">Cyber</option>
              <option value="neon">Neon</option>
              <option value="hacker">Hacker</option>
            </select>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-green-400 text-xl sm:text-2xl"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-green-400/30"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-green-400 hover:text-cyan-400 transition-colors duration-300 py-2 text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-cyan-400 mr-2">&gt;</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
