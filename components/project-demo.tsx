"use client"

import { motion } from "framer-motion"

interface ProjectDemoProps {
  demo: string
}

export function ProjectDemo({ demo }: ProjectDemoProps) {
  const renderDemo = () => {
    switch (demo) {
      case "neural-gateway":
        return (
          <div className="bg-black/80 border border-cyan-400/30 rounded p-4">
            <div className="text-green-400 font-mono text-sm mb-2">
              $ curl -X POST https://api.neural-gateway.com/route
            </div>
            <div className="text-cyan-400 text-xs">
              {"{"}
              <br />
              &nbsp;&nbsp;"route": "/api/v1/users",
              <br />
              &nbsp;&nbsp;"method": "GET",
              <br />
              &nbsp;&nbsp;"predicted_load": "high",
              <br />
              &nbsp;&nbsp;"recommended_server": "server-03",
              <br />
              &nbsp;&nbsp;"confidence": 0.94
              <br />
              {"}"}
            </div>
          </div>
        )
      case "quantum-scheduler":
        return (
          <div className="bg-black/80 border border-purple-400/30 rounded p-4">
            <div className="text-purple-400 font-mono text-sm mb-2">Quantum Task Distribution Algorithm</div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="bg-green-400/20 p-2 rounded">Node 1: 85%</div>
              <div className="bg-yellow-400/20 p-2 rounded">Node 2: 92%</div>
              <div className="bg-blue-400/20 p-2 rounded">Node 3: 78%</div>
            </div>
          </div>
        )
      default:
        return (
          <div className="bg-black/80 border border-gray-400/30 rounded p-4 text-center text-gray-400">
            Demo coming soon...
          </div>
        )
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h4 className="text-lg font-bold mb-3 text-yellow-400">Live Demo:</h4>
      {renderDemo()}
    </motion.div>
  )
}
