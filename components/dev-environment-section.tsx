"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { HolographicCard } from "./holographic-card"

export function DevEnvironmentSection() {
  const [cpuUsage, setCpuUsage] = useState(0)
  const [memUsage, setMemUsage] = useState(0)
  const [diskUsage, setDiskUsage] = useState(0)
  const [networkSpeed, setNetworkSpeed] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage(Math.floor(Math.random() * 30) + 20) // 20-50%
      setMemUsage(Math.floor(Math.random() * 40) + 30) // 30-70%
      setDiskUsage(Math.floor(Math.random() * 20) + 40) // 40-60%
      setNetworkSpeed(Math.floor(Math.random() * 1000) + 500) // 500-1500 MB/s
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const dockerContainers = [
    { name: "postgres", status: "running", port: "5432", uptime: "7d 13h" },
    { name: "redis", status: "running", port: "6379", uptime: "7d 13h" },
    { name: "nginx", status: "running", port: "80,443", uptime: "7d 13h" },
    { name: "backend-api", status: "running", port: "8000", uptime: "2d 5h" },
    { name: "monitoring", status: "running", port: "3000", uptime: "7d 13h" },
    { name: "elasticsearch", status: "running", port: "9200", uptime: "7d 13h" },
  ]

  const gitRepos = [
    { name: "epic-backend-api", branch: "feature/optimization", commits: "42 ahead" },
    { name: "cyberpunk-portfolio", branch: "main", commits: "up to date" },
    { name: "linux-automation", branch: "develop", commits: "13 ahead" },
    { name: "dotfiles", branch: "arch-config", commits: "5 ahead" },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {"# htop && docker ps"}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* System Monitor */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <HolographicCard className="p-6">
              <h3 className="text-2xl font-bold text-green-400 mb-6">SYSTEM RESOURCES</h3>

              <div className="space-y-4 font-mono">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">CPU Usage:</span>
                    <span className="text-green-400">{cpuUsage}%</span>
                  </div>
                  <div className="w-full bg-gray-800 h-2 rounded">
                    <div
                      className="h-2 bg-green-400 rounded transition-all duration-500"
                      style={{ width: `${cpuUsage}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Memory:</span>
                    <span className="text-cyan-400">{memUsage}%</span>
                  </div>
                  <div className="w-full bg-gray-800 h-2 rounded">
                    <div
                      className="h-2 bg-cyan-400 rounded transition-all duration-500"
                      style={{ width: `${memUsage}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Disk I/O:</span>
                    <span className="text-purple-400">{diskUsage}%</span>
                  </div>
                  <div className="w-full bg-gray-800 h-2 rounded">
                    <div
                      className="h-2 bg-purple-400 rounded transition-all duration-500"
                      style={{ width: `${diskUsage}%` }}
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <div className="text-yellow-400 mb-2">Network Activity:</div>
                  <div className="text-sm text-gray-300">
                    <div>↓ Download: {networkSpeed} MB/s</div>
                    <div>↑ Upload: {Math.floor(networkSpeed * 0.3)} MB/s</div>
                  </div>
                </div>
              </div>
            </HolographicCard>
          </motion.div>

          {/* Docker Containers */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <HolographicCard className="p-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">DOCKER CONTAINERS</h3>

              <div className="space-y-3 font-mono text-sm">
                {dockerContainers.map((container, index) => (
                  <motion.div
                    key={container.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 bg-black/30 rounded border border-gray-700"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white font-bold">{container.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-cyan-400">:{container.port}</div>
                      <div className="text-gray-400 text-xs">{container.uptime}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </HolographicCard>
          </motion.div>
        </div>

        {/* Git Repositories */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <HolographicCard className="p-6">
            <h3 className="text-2xl font-bold text-purple-400 mb-6">GIT REPOSITORIES</h3>

            <div className="grid md:grid-cols-2 gap-4 font-mono text-sm">
              {gitRepos.map((repo, index) => (
                <motion.div
                  key={repo.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-black/30 rounded border border-gray-700"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-400">📁</span>
                    <span className="text-white font-bold">{repo.name}</span>
                  </div>
                  <div className="text-gray-300">
                    <div>
                      Branch: <span className="text-green-400">{repo.branch}</span>
                    </div>
                    <div>
                      Status: <span className="text-cyan-400">{repo.commits}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </HolographicCard>
        </motion.div>

        {/* Terminal Commands */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <HolographicCard className="p-6">
            <h3 className="text-2xl font-bold text-red-400 mb-6">RECENT COMMANDS</h3>

            <div className="bg-black/50 p-4 rounded font-mono text-sm space-y-1">
              <div className="text-green-400">$ git commit -m "feat: implement epic feature"</div>
              <div className="text-green-400">$ docker-compose up -d</div>
              <div className="text-green-400">$ kubectl apply -f deployment.yaml</div>
              <div className="text-green-400">$ terraform plan</div>
              <div className="text-green-400">$ ansible-playbook deploy.yml</div>
              <div className="text-green-400">$ npm run build</div>
              <div className="text-green-400">$ pytest tests/ -v</div>
              <div className="text-green-400">$ sudo pacman -Syu</div>
              <div className="text-yellow-400 animate-pulse">$ _</div>
            </div>
          </HolographicCard>
        </motion.div>
      </div>
    </section>
  )
}
