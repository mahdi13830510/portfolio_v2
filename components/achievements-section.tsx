"use client"

import { motion } from "framer-motion"
import { HolographicCard } from "./holographic-card"
import { useState } from "react"

const achievements = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    icon: "☁️",
    description: "Demonstrated expertise in designing distributed systems on AWS",
    skills: ["Cloud Architecture", "Security", "Cost Optimization"],
  },
  {
    title: "Linux Professional Institute Certification (LPIC-1)",
    issuer: "Linux Professional Institute",
    date: "2024",
    icon: "🐧",
    description: "Proven proficiency in Linux system administration",
    skills: ["System Administration", "Shell Scripting", "Network Configuration"],
  },
  {
    title: "Kubernetes Certified Application Developer",
    issuer: "Cloud Native Computing Foundation",
    date: "2023",
    icon: "⚙️",
    description: "Expertise in developing and deploying applications on Kubernetes",
    skills: ["Container Orchestration", "Microservices", "DevOps"],
  },
  {
    title: "Ethical Hacker Certification",
    issuer: "EC-Council",
    date: "2023",
    icon: "🔒",
    description: "Advanced knowledge in cybersecurity and penetration testing",
    skills: ["Penetration Testing", "Vulnerability Assessment", "Security Auditing"],
  },
]

const stats = [
  { label: "Years of Experience", value: "2+", icon: "📅" },
  { label: "Projects Completed", value: "50+", icon: "🚀" },
  { label: "Lines of Code", value: "500K+", icon: "💻" },
  { label: "Coffee Cups", value: "∞", icon: "☕" },
  { label: "Bug Fixes", value: "9999+", icon: "🐛" },
  { label: "Happy Clients", value: "25+", icon: "😊" },
]

export function AchievementsSection() {
  const [selectedAchievement, setSelectedAchievement] = useState(0)

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {"> achievements.unlock()"}
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <HolographicCard className="p-4 text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </HolographicCard>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <HolographicCard
                  className={`p-4 cursor-pointer transition-all duration-300 ${
                    selectedAchievement === index ? "scale-105 border-cyan-400" : ""
                  }`}
                  onClick={() => setSelectedAchievement(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-lg">{achievement.title}</h3>
                      <p className="text-cyan-400">{achievement.issuer}</p>
                      <p className="text-green-400 text-sm">{achievement.date}</p>
                    </div>
                  </div>
                </HolographicCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            key={selectedAchievement}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <HolographicCard className="p-8 h-full">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{achievements[selectedAchievement].icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{achievements[selectedAchievement].title}</h3>
                <p className="text-cyan-400 mb-2">{achievements[selectedAchievement].issuer}</p>
                <p className="text-green-400">{achievements[selectedAchievement].date}</p>
              </div>

              <p className="text-gray-300 mb-6 text-center">{achievements[selectedAchievement].description}</p>

              <div>
                <h4 className="text-lg font-bold text-purple-400 mb-3 text-center">Skills Validated:</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {achievements[selectedAchievement].skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-400/20 text-purple-400 rounded-full text-sm border border-purple-400/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </HolographicCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
