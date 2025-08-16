"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { TypewriterText } from "./typewriter-text"
import { HolographicCard } from "./holographic-card"
import { CyberButton } from "./cyber-button"
import { AsciiArt } from "./ascii-art"

export function HeroSection() {
  const [glitchActive, setGlitchActive] = useState(false)
  const [systemBooting, setSystemBooting] = useState(true)

  useEffect(() => {
    const bootSequence = setTimeout(() => setSystemBooting(false), 3000)
    const interval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 200)
    }, 5000)
    return () => {
      clearTimeout(bootSequence)
      clearInterval(interval)
    }
  }, [])

  if (systemBooting) {
    return (
      <section className="min-h-screen flex items-center justify-center px-4 bg-black">
        <div className="text-center font-mono w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400 text-left text-xs sm:text-sm md:text-base"
          >
            <div className="mb-1 sm:mb-2">[ 0.000000] Linux version 6.6.6-arch1-1 (mahdi@matrix)</div>
            <div className="mb-1 sm:mb-2">[ 0.123456] Command line: BOOT_IMAGE=/vmlinuz-linux</div>
            <div className="mb-1 sm:mb-2 hidden sm:block">
              [ 0.234567] x86/fpu: Supporting XSAVE feature 0x001: 'x87 floating point registers'
            </div>
            <div className="mb-1 sm:mb-2">[ 0.345678] BIOS-provided physical RAM map:</div>
            <div className="mb-1 sm:mb-2 hidden md:block">
              [ 0.456789] BIOS-e820: [mem 0x0000000000000000-0x000000000009fbff] usable
            </div>
            <div className="mb-1 sm:mb-2">[ 0.567890] NX (Execute Disable) protection: active</div>
            <div className="mb-1 sm:mb-2 hidden sm:block">[ 0.678901] SMBIOS 3.0.0 present.</div>
            <div className="mb-1 sm:mb-2">[ 0.789012] DMI: MAHDI-MATRIX/CYBER-BOARD, BIOS 1337.0 04/20/2077</div>
            <div className="mb-1 sm:mb-2 hidden md:block">[ 0.890123] tsc: Fast TSC calibration using PIT</div>
            <div className="mb-1 sm:mb-2 hidden md:block">[ 0.901234] tsc: Detected 3200.000 MHz processor</div>
            <div className="mb-2 sm:mb-4 text-cyan-400">[ 1.012345] Freeing SMP alternatives memory: 32K</div>
            <div className="text-yellow-400 animate-pulse text-sm sm:text-base">SYSTEM INITIALIZATION COMPLETE...</div>
            <div className="text-red-400 mt-2 text-sm sm:text-base">ENTERING CYBER SPACE...</div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent" />

      <motion.div
        className="text-center z-10 w-full max-w-6xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="hidden sm:block">
          <AsciiArt />
        </div>

        <motion.div
          className={`text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 font-orbitron ${glitchActive ? "animate-glitch" : ""}`}
          style={{
            color: "#00ff00",
            textShadow: "0 0 5px #00ff00, 0 0 10px #00ff00",
            filter: "none",
          }}
        >
          MAHDI DOLATI
        </motion.div>

        <TypewriterText
          texts={[
            "Elite Backend Architect",
            "Linux Kernel Enthusiast",
            "Cloud Infrastructure Wizard",
            "DevOps Automation Master",
            "Cyberpunk Code Samurai",
            "Retro Gaming Aficionado",
            "Open Source Evangelist",
            "Terminal Virtuoso",
          ]}
          className="text-lg sm:text-xl md:text-2xl lg:text-4xl mb-6 sm:mb-8 text-cyan-400 font-orbitron px-4"
        />

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-8 sm:mb-12 max-w-4xl mx-auto"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, type: "spring" }}
        >
          <HolographicCard className="p-2 sm:p-4">
            <div className="text-green-400">
              <div className="text-xs sm:text-sm opacity-70">$ uptime</div>
              <div className="text-sm sm:text-xl font-bold">1337 days</div>
            </div>
          </HolographicCard>

          <HolographicCard className="p-2 sm:p-4">
            <div className="text-cyan-400">
              <div className="text-xs sm:text-sm opacity-70">$ whoami</div>
              <div className="text-sm sm:text-xl font-bold">dev_wizard</div>
            </div>
          </HolographicCard>

          <HolographicCard className="p-2 sm:p-4">
            <div className="text-purple-400">
              <div className="text-xs sm:text-sm opacity-70">$ uname -a</div>
              <div className="text-sm sm:text-xl font-bold">ARCH BTW</div>
            </div>
          </HolographicCard>

          <HolographicCard className="p-2 sm:p-4">
            <div className="text-yellow-400">
              <div className="text-xs sm:text-sm opacity-70">$ docker ps</div>
              <div className="text-sm sm:text-xl font-bold">42 RUNNING</div>
            </div>
          </HolographicCard>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <CyberButton href="#about" variant="primary" className="w-full sm:w-auto">
            ./initiate_connection.sh
          </CyberButton>
          <CyberButton href="/terminal" variant="secondary" className="w-full sm:w-auto">
            sudo su -
          </CyberButton>
          <CyberButton href="#tech-stack" variant="accent" className="w-full sm:w-auto">
            cat /proc/cpuinfo
          </CyberButton>
        </motion.div>
      </motion.div>
    </section>
  )
}
