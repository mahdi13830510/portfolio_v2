"use client"

import { motion } from "framer-motion"
import { HolographicCard } from "./holographic-card"

const experiences = [
  {
    title: "Senior Backend Developer",
    company: "Husan",
    period: "2023 - Present",
    description:
      "Architecting scalable APIs and microservices using Django and FastAPI. Leading a team of 5 developers in building next-generation fintech solutions.",
    achievements: [
      "Reduced API response time by 60%",
      "Implemented CI/CD pipeline reducing deployment time by 80%",
      "Designed fault-tolerant architecture handling 1M+ requests/day",
    ],
    tech: ["Python", "Django", "FastAPI", "PostgreSQL", "Redis", "Docker"],
  },
  {
    title: "DevOps Engineer",
    company: "Bulut_Takin",
    period: "2023 - 2024",
    description:
      "Automated infrastructure deployment and monitoring using modern DevOps practices. Managed multi-cloud environments with focus on reliability and cost optimization.",
    achievements: [
      "Automated 95% of deployment processes",
      "Reduced infrastructure costs by 40%",
      "Achieved 99.9% uptime across all services",
    ],
    tech: ["AWS", "Terraform", "Jenkins", "Kubernetes", "Prometheus", "Grafana"],
  },
  {
    title: "Junior Backend Developer",
    company: "Inonext",
    period: "2022 - 2023",
    description:
      "Developed RESTful APIs and database solutions for various startup projects. Gained expertise in agile development and collaborative coding practices.",
    achievements: [
      "Built 15+ production-ready APIs",
      "Optimized database queries improving performance by 50%",
      "Mentored 3 junior developers",
    ],
    tech: ["Python", "Flask", "MySQL", "Git", "Linux", "Nginx"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {"> experience.log"}
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <HolographicCard className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <span className="text-cyan-400 font-mono">@{exp.company}</span>
                      <span className="text-green-400 text-sm bg-green-400/10 px-3 py-1 rounded">{exp.period}</span>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-purple-400 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">▶</span>
                            <span className="text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-cyan-400 mb-4">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800 text-green-400 rounded-full text-sm border border-green-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </HolographicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
