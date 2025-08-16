"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { HolographicCard } from "./holographic-card"
import { CyberButton } from "./cyber-button"
import { ProjectDemo } from "./project-demo"

const projects = [
  {
    id: 1,
    title: "Neural Network API Gateway",
    description: "AI-powered API gateway with intelligent routing and load balancing",
    tech: ["Python", "TensorFlow", "FastAPI", "Redis", "Docker"],
    status: "Production",
    metrics: { requests: "1M+", uptime: "99.99%", latency: "12ms" },
    demo: "neural-gateway",
    github: "https://github.com/mahdi13830510/neural-gateway",
    features: ["ML-based routing", "Auto-scaling", "Real-time analytics"],
  },
  {
    id: 2,
    title: "Quantum Task Scheduler",
    description: "Distributed task scheduling system with quantum-inspired algorithms",
    tech: ["Go", "Kubernetes", "NATS", "PostgreSQL", "Prometheus"],
    status: "Beta",
    metrics: { tasks: "10M+", nodes: "500+", efficiency: "94%" },
    demo: "quantum-scheduler",
    github: "https://github.com/mahdi13830510/quantum-scheduler",
    features: ["Quantum algorithms", "Auto-healing", "Multi-cloud"],
  },
  {
    id: 3,
    title: "Cyber Security Scanner",
    description: "Advanced vulnerability scanner with AI threat detection",
    tech: ["Rust", "Python", "OpenAI", "Elasticsearch", "React"],
    status: "Development",
    metrics: { scans: "100K+", threats: "50K+", accuracy: "98%" },
    demo: "security-scanner",
    github: "https://github.com/mahdi13830510/cyber-scanner",
    features: ["AI detection", "Real-time scanning", "Custom rules"],
  },
  {
    id: 4,
    title: "Blockchain Data Pipeline",
    description: "High-throughput blockchain data processing and analytics platform",
    tech: ["Scala", "Apache Spark", "Kafka", "Cassandra", "Web3"],
    status: "Production",
    metrics: { blocks: "1B+", tps: "10K", storage: "50TB" },
    demo: "blockchain-pipeline",
    github: "https://github.com/mahdi13830510/blockchain-pipeline",
    features: ["Real-time processing", "Multi-chain", "Analytics"],
  },
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(0)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {"> projects.list()"}
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <HolographicCard
                  className={`p-4 cursor-pointer transition-all duration-300 ${
                    selectedProject === index ? "scale-105 border-cyan-400" : ""
                  }`}
                  onClick={() => setSelectedProject(index)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-white">{project.title}</h3>
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        project.status === "Production"
                          ? "bg-green-500"
                          : project.status === "Beta"
                            ? "bg-yellow-500"
                            : "bg-blue-500"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-800 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800 rounded text-xs">+{project.tech.length - 3}</span>
                    )}
                  </div>
                </HolographicCard>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-2">
            <motion.div
              key={selectedProject}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <HolographicCard className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold text-white">{projects[selectedProject].title}</h3>
                  <div className="flex gap-2">
                    <CyberButton href={projects[selectedProject].github} variant="secondary" size="sm">
                      GitHub
                    </CyberButton>
                    <CyberButton href="#" variant="primary" size="sm">
                      Live Demo
                    </CyberButton>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{projects[selectedProject].description}</p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(projects[selectedProject].metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{value}</div>
                      <div className="text-sm text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold mb-3 text-green-400">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {projects[selectedProject].features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <ProjectDemo demo={projects[selectedProject].demo} />
              </HolographicCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
