"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { HolographicCard } from "./holographic-card"

export function NetworkTopology() {
  const [activeNodes, setActiveNodes] = useState<number[]>([])
  const [scanProgress, setScanProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNodes((prev) => {
        const newNodes = [...prev]
        const randomNode = Math.floor(Math.random() * 10)
        if (newNodes.includes(randomNode)) {
          return newNodes.filter((n) => n !== randomNode)
        } else {
          return [...newNodes, randomNode]
        }
      })
    }, 1000)

    const scanInterval = setInterval(() => {
      setScanProgress((prev) => (prev + 1) % 101)
    }, 100)

    return () => {
      clearInterval(interval)
      clearInterval(scanInterval)
    }
  }, [])

  const nodes = [
    { id: 0, name: "Gateway", ip: "192.168.1.1", type: "router", x: 50, y: 50 },
    { id: 1, name: "Web Server", ip: "10.0.0.10", type: "server", x: 20, y: 80 },
    { id: 2, name: "Database", ip: "10.0.0.20", type: "database", x: 80, y: 80 },
    { id: 3, name: "Firewall", ip: "192.168.1.254", type: "firewall", x: 50, y: 20 },
    { id: 4, name: "DMZ Server", ip: "172.16.0.10", type: "server", x: 30, y: 40 },
    { id: 5, name: "Admin PC", ip: "192.168.1.100", type: "workstation", x: 70, y: 40 },
    { id: 6, name: "Backup Server", ip: "10.0.0.30", type: "server", x: 10, y: 60 },
    { id: 7, name: "Load Balancer", ip: "10.0.0.5", type: "router", x: 90, y: 60 },
    { id: 8, name: "VPN Gateway", ip: "203.0.113.1", type: "router", x: 60, y: 70 },
    { id: 9, name: "Honeypot", ip: "192.168.1.200", type: "trap", x: 40, y: 30 },
  ]

  const getNodeColor = (type: string, isActive: boolean) => {
    const colors = {
      router: isActive ? "#00ff00" : "#004400",
      server: isActive ? "#0088ff" : "#002244",
      database: isActive ? "#ff8800" : "#442200",
      firewall: isActive ? "#ff0000" : "#440000",
      workstation: isActive ? "#8800ff" : "#220044",
      trap: isActive ? "#ff00ff" : "#440044",
    }
    return colors[type as keyof typeof colors] || "#666666"
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {"# nmap -sn 192.168.1.0/24"}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <HolographicCard className="p-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">NETWORK TOPOLOGY</h3>

            <div className="relative h-96 bg-black/50 rounded border border-green-400/30">
              <svg className="w-full h-full">
                {/* Draw connections */}
                {nodes.map((node, i) =>
                  nodes.slice(i + 1).map((otherNode, j) => {
                    const distance = Math.sqrt(Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2))
                    if (distance < 40) {
                      return (
                        <line
                          key={`${i}-${j}`}
                          x1={`${node.x}%`}
                          y1={`${node.y}%`}
                          x2={`${otherNode.x}%`}
                          y2={`${otherNode.y}%`}
                          stroke={
                            activeNodes.includes(node.id) && activeNodes.includes(otherNode.id) ? "#00ff00" : "#333"
                          }
                          strokeWidth="1"
                          className="transition-all duration-500"
                        />
                      )
                    }
                    return null
                  }),
                )}

                {/* Draw nodes */}
                {nodes.map((node) => (
                  <g key={node.id}>
                    <circle
                      cx={`${node.x}%`}
                      cy={`${node.y}%`}
                      r="8"
                      fill={getNodeColor(node.type, activeNodes.includes(node.id))}
                      stroke="#00ff00"
                      strokeWidth="1"
                      className="transition-all duration-500"
                    />
                    <text
                      x={`${node.x}%`}
                      y={`${node.y + 8}%`}
                      textAnchor="middle"
                      className="text-xs fill-green-400 font-mono"
                    >
                      {node.name}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            <div className="mt-4 text-sm font-mono">
              <div className="text-green-400">Active Nodes: {activeNodes.length}/10</div>
              <div className="text-cyan-400">Scan Progress: {scanProgress}%</div>
              <div className="w-full bg-gray-800 h-2 rounded mt-2">
                <div
                  className="h-2 bg-green-400 rounded transition-all duration-100"
                  style={{ width: `${scanProgress}%` }}
                />
              </div>
            </div>
          </HolographicCard>

          <div className="space-y-4">
            <HolographicCard className="p-6">
              <h4 className="text-xl font-bold text-red-400 mb-4">INTRUSION DETECTION</h4>
              <div className="space-y-2 font-mono text-sm">
                <div className="text-red-400">[ALERT] Suspicious activity detected on 192.168.1.100</div>
                <div className="text-yellow-400">[WARN] Multiple failed login attempts from 203.0.113.50</div>
                <div className="text-green-400">[INFO] Firewall rules updated successfully</div>
                <div className="text-red-400">[ALERT] Port scan detected from external IP</div>
                <div className="text-cyan-400">[INFO] Honeypot triggered - logging attacker behavior</div>
              </div>
            </HolographicCard>

            <HolographicCard className="p-6">
              <h4 className="text-xl font-bold text-purple-400 mb-4">PACKET ANALYSIS</h4>
              <div className="space-y-2 font-mono text-xs">
                <div className="text-green-400">TCP 192.168.1.100:22 → 10.0.0.10:80 [SYN]</div>
                <div className="text-cyan-400">UDP 192.168.1.1:53 → 8.8.8.8:53 [DNS Query]</div>
                <div className="text-red-400">TCP 203.0.113.50:1337 → 192.168.1.100:22 [RST]</div>
                <div className="text-yellow-400">ICMP 192.168.1.254 → 192.168.1.100 [Echo Request]</div>
                <div className="text-purple-400">HTTP 10.0.0.10:80 → 192.168.1.100:8080 [GET /admin]</div>
              </div>
            </HolographicCard>

            <HolographicCard className="p-6">
              <h4 className="text-xl font-bold text-orange-400 mb-4">SYSTEM LOGS</h4>
              <div className="space-y-1 font-mono text-xs">
                <div className="text-gray-400">Jan 01 13:37:01 matrix sshd[1337]: Failed password for root</div>
                <div className="text-gray-400">Jan 01 13:37:02 matrix kernel: iptables: DROP IN=eth0</div>
                <div className="text-gray-400">Jan 01 13:37:03 matrix httpd: 404 /admin/login.php</div>
                <div className="text-red-400">Jan 01 13:37:04 matrix sshd[1338]: POSSIBLE BREAK-IN ATTEMPT!</div>
                <div className="text-green-400">Jan 01 13:37:05 matrix fail2ban: NOTICE [ssh] Ban 203.0.113.50</div>
              </div>
            </HolographicCard>
          </div>
        </div>
      </div>
    </section>
  )
}
