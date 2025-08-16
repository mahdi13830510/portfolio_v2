"use client"

import { motion } from "framer-motion"
import { HolographicCard } from "./holographic-card"
import { TypewriterText } from "./typewriter-text"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {"# cat /etc/passwd | grep mahdi"}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <HolographicCard className="p-8">
              <div className="space-y-6">
                <div className="text-green-400 font-mono">
                  <div className="text-sm opacity-70">$ sudo cat /home/mahdi/.profile</div>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed">
                  Welcome to my digital realm! I'm <span className="text-cyan-400 font-bold">Mahdi Dolati</span>, a
                  passionate backend engineer who lives and breathes code. Armed with{" "}
                  <span className="text-green-400">Arch Linux</span> (btw I use Arch) and an arsenal of development
                  tools, I craft scalable systems and automate everything in sight.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  My journey through the digital matrix spans from <span className="text-purple-400">kernel-level</span>{" "}
                  optimizations to <span className="text-yellow-400">cloud-native</span> architectures. I'm obsessed
                  with cyberpunk aesthetics, retro gaming culture, and the endless possibilities of open-source
                  technology.
                </p>

                <div className="border-l-4 border-cyan-400 pl-4 bg-cyan-400/10 p-4 rounded">
                  <TypewriterText
                    texts={[
                      "Code is poetry, Linux is life",
                      "In Arch we trust, all others we compile",
                      "Sleep is for those without root access",
                      "There are only 10 types of people...",
                      "sudo make me a sandwich",
                      "I don't always test my code, but when I do, I do it in production",
                    ]}
                    className="text-cyan-400 italic font-mono"
                  />
                </div>
              </div>
            </HolographicCard>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HolographicCard className="p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">$ ls -la /home/mahdi/passions/</h3>
              <div className="grid grid-cols-2 gap-3 font-mono text-sm">
                {[
                  "🐧 Linux Kernel",
                  "☁️ Cloud Architecture",
                  "🚀 DevOps Automation",
                  "🌃 Cyberpunk Culture",
                  "🕹️ Retro Gaming",
                  "🤖 AI & Machine Learning",
                  "🔧 System Optimization",
                  "📡 Network Engineering",
                  "🎮 Indie Game Dev",
                  "🎵 Synthwave Music",
                  "📚 Sci-Fi Literature",
                  "🔒 Privacy & Security",
                ].map((passion) => (
                  <div key={passion} className="flex items-center gap-2 text-gray-300">
                    <span className="text-cyan-400">-rwxr-xr-x</span>
                    <span>{passion}</span>
                  </div>
                ))}
              </div>
            </HolographicCard>

            <HolographicCard className="p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">$ cat /proc/dev/stats</h3>
              <div className="space-y-3 font-mono">
                <div className="flex justify-between">
                  <span className="text-gray-300">Lines of Code:</span>
                  <span className="text-green-400 font-bold">500K+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Docker Containers:</span>
                  <span className="text-blue-400 font-bold">1337+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Git Commits:</span>
                  <span className="text-purple-400 font-bold">10K+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Coffee Consumed:</span>
                  <span className="text-yellow-400 font-bold">∞ L</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Bugs Fixed:</span>
                  <span className="text-red-400 font-bold">9999+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Uptime Record:</span>
                  <span className="text-cyan-400 font-bold">42 days</span>
                </div>
              </div>
            </HolographicCard>

            <HolographicCard className="p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">$ neofetch</h3>
              <div className="font-mono text-sm space-y-2">
                <div className="text-green-400">OS: Arch Linux x86_64</div>
                <div className="text-cyan-400">Host: Custom Gaming Rig</div>
                <div className="text-purple-400">Kernel: 6.6.6-arch1-1</div>
                <div className="text-yellow-400">Shell: zsh 5.9</div>
                <div className="text-blue-400">WM: i3-gaps</div>
                <div className="text-pink-400">Terminal: alacritty</div>
                <div className="text-orange-400">Editor: neovim</div>
                <div className="text-teal-400">CPU: AMD Ryzen 9 5900X</div>
                <div className="text-indigo-400">GPU: NVIDIA RTX 3080</div>
                <div className="text-lime-400">Memory: 32GB DDR4</div>
              </div>
            </HolographicCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
