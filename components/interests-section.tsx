"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { HolographicCard } from "./holographic-card"

const interests = [
  {
    category: "Cyberpunk Culture",
    icon: "🌃",
    items: [
      "Blade Runner & Ghost in the Shell",
      "Cyberpunk 2077 & Deus Ex",
      "Neuromancer & Snow Crash",
      "Matrix Trilogy",
      "Akira & Alita Battle Angel",
      "Synthwave & Darksynth Music",
    ],
    description: "Living in the neon-lit future where technology meets humanity",
    color: "from-purple-400 to-pink-600",
  },
  {
    category: "Retro Gaming",
    icon: "🕹️",
    items: [
      "Arcade Classics (Pac-Man, Space Invaders)",
      "8-bit & 16-bit Consoles",
      "Pixel Art & Chiptune Music",
      "Speedrunning Communities",
      "ROM Hacking & Emulation",
      "Indie Games with Retro Aesthetics",
    ],
    description: "Preserving the golden age of gaming and pixel-perfect memories",
    color: "from-yellow-400 to-orange-600",
  },
  {
    category: "Linux Ecosystem",
    icon: "🐧",
    items: [
      "Arch Linux (btw I use Arch)",
      "Kernel Development & Modules",
      "Window Managers (i3, dwm, bspwm)",
      "Terminal Ricing & Dotfiles",
      "Open Source Contributions",
      "Command Line Mastery",
    ],
    description: "The penguin is my spirit animal, the terminal is my home",
    color: "from-green-400 to-emerald-600",
  },
  {
    category: "Tech Philosophy",
    icon: "🤖",
    items: [
      "Open Source Everything",
      "Privacy & Digital Rights",
      "Minimalist Computing",
      "Self-Hosting Services",
      "Automation & Scripting",
      "Future of Technology",
    ],
    description: "Believing in technology that empowers rather than enslaves",
    color: "from-cyan-400 to-blue-600",
  },
]

const retroGames = [
  "🎮 Super Mario Bros",
  "👾 Space Invaders",
  "🟡 Pac-Man",
  "🦔 Sonic the Hedgehog",
  "🗡️ The Legend of Zelda",
  "🏰 Castlevania",
  "🤖 Mega Man",
  "🎯 Contra",
]

export function InterestsSection() {
  const [selectedInterest, setSelectedInterest] = useState(0)
  const [currentGame, setCurrentGame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGame((prev) => (prev + 1) % retroGames.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="interests" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {"# ls -la /home/mahdi/interests/"}
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-16">
          <div className="lg:col-span-2 space-y-4 lg:space-y-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.category}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <HolographicCard
                  className={`p-4 sm:p-6 cursor-pointer transition-all duration-300 ${
                    selectedInterest === index ? "scale-105 border-purple-400" : ""
                  }`}
                  onClick={() => setSelectedInterest(index)}
                >
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="text-2xl sm:text-4xl flex-shrink-0">{interest.icon}</div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">
                        {interest.category}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm">{interest.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                    {interest.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm">
                        <span className="text-cyan-400 flex-shrink-0">▶</span>
                        <span className="text-gray-300 min-w-0">{item}</span>
                      </div>
                    ))}
                  </div>
                </HolographicCard>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4 lg:space-y-6">
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <HolographicCard className="p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-bold text-yellow-400 mb-3 sm:mb-4">🕹️ NOW PLAYING</h4>
                <div className="text-center">
                  <motion.div
                    key={currentGame}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-2xl sm:text-3xl mb-2"
                  >
                    {retroGames[currentGame]}
                  </motion.div>
                  <div className="text-xs sm:text-sm text-gray-400">Classic Gaming Session</div>
                </div>
              </HolographicCard>
            </motion.div>

            <HolographicCard className="p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl font-bold text-green-400 mb-3 sm:mb-4">🐧 CURRENT SETUP</h4>
              <div className="space-y-1 sm:space-y-2 font-mono text-xs sm:text-sm">
                <div className="text-gray-300">OS: Arch Linux x86_64</div>
                <div className="text-gray-300">WM: i3-gaps</div>
                <div className="text-gray-300">Shell: zsh + oh-my-zsh</div>
                <div className="text-gray-300">Terminal: alacritty</div>
                <div className="text-gray-300">Editor: neovim</div>
                <div className="text-gray-300">Browser: firefox</div>
                <div className="text-cyan-400 mt-2 sm:mt-3">Uptime: 42 days, 13:37</div>
              </div>
            </HolographicCard>

            <HolographicCard className="p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl font-bold text-purple-400 mb-3 sm:mb-4">🎵 CODING PLAYLIST</h4>
              <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <div className="text-gray-300">🎶 Synthwave Essentials</div>
                <div className="text-gray-300">🎶 Cyberpunk Ambient</div>
                <div className="text-gray-300">🎶 Chiptune Classics</div>
                <div className="text-gray-300">🎶 Lo-fi Hip Hop</div>
                <div className="text-gray-300">🎶 Dark Electronic</div>
                <div className="text-cyan-400 mt-2 sm:mt-3 animate-pulse">♪ Currently vibing ♪</div>
              </div>
            </HolographicCard>
          </div>
        </div>

        {/* Cyberpunk Quote */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <HolographicCard className="p-6 sm:p-8 max-w-4xl mx-auto">
            <blockquote className="text-lg sm:text-xl lg:text-2xl text-cyan-400 italic mb-3 sm:mb-4 font-orbitron leading-relaxed">
              "The future is not some place we are going to, but one we are creating. The paths are not to be found, but
              made, and the activity of making them changes both the maker and the destination."
            </blockquote>
            <cite className="text-gray-400 text-sm sm:text-base">- John Schaar (adapted for the digital age)</cite>
          </HolographicCard>
        </motion.div>
      </div>
    </section>
  )
}
