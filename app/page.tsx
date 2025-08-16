"use client"

import { motion } from "framer-motion"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { ExperienceSection } from "@/components/experience-section"
import { InterestsSection } from "@/components/interests-section"
import { DevEnvironmentSection } from "@/components/dev-environment-section"
import { SystemMonitor } from "@/components/system-monitor"
import { NetworkTopology } from "@/components/network-topology"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { FloatingElements } from "@/components/floating-elements"
import { ParticleField } from "@/components/particle-field"
import { GlitchOverlay } from "@/components/glitch-overlay"
import { BinaryRain } from "@/components/binary-rain"
import { HackerTerminal } from "@/components/hacker-terminal"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-green-400 overflow-x-hidden">
      <ParticleField />
      <FloatingElements />
      <GlitchOverlay />
      <BinaryRain />
      <Navigation />
      <SystemMonitor />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ExperienceSection />
        <InterestsSection />
        <DevEnvironmentSection />
        <NetworkTopology />
        <HackerTerminal />
        <ContactSection />
      </motion.div>
    </main>
  )
}
