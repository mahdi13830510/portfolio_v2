"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { HolographicCard } from "./holographic-card"
import { CyberButton } from "./cyber-button"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Message transmitted successfully! 🚀")
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      label: "Email",
      value: "mahdi.dlt13830510@gmail.com",
      icon: "📧",
      link: "mailto:mahdi.dlt13830510@gmail.com",
    },
    {
      label: "GitHub",
      value: "github.com/mahdi13830510",
      icon: "🐙",
      link: "https://github.com/mahdi13830510",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/mahdi-dlt-81857628a",
      icon: "💼",
      link: "https://www.linkedin.com/in/mahdi-dlt-81857628a/",
    },
    {
      label: "Location",
      value: "Tabriz, Iran",
      icon: "📍",
      link: "#",
    },
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {"> contact.init()"}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <HolographicCard className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send Transmission</h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-green-400 mb-2 font-mono text-sm sm:text-base">
                    $ echo "name" {">"} /dev/input
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/50 border border-green-400/30 rounded px-3 sm:px-4 py-2 sm:py-3 text-green-400 focus:border-cyan-400 focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder="Enter your name..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-green-400 mb-2 font-mono text-sm sm:text-base">
                    $ echo "email" {">"} /dev/input
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/50 border border-green-400/30 rounded px-3 sm:px-4 py-2 sm:py-3 text-green-400 focus:border-cyan-400 focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder="Enter your email..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-green-400 mb-2 font-mono text-sm sm:text-base">
                    $ cat {">"} /dev/message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full bg-black/50 border border-green-400/30 rounded px-3 sm:px-4 py-2 sm:py-3 text-green-400 focus:border-cyan-400 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                    placeholder="Write your message..."
                    required
                  />
                </div>

                <CyberButton variant="primary" size="lg" className="w-full" onClick={() => {}}>
                  {isSubmitting ? "Transmitting..." : "Send Message"}
                </CyberButton>
              </form>
            </HolographicCard>
          </motion.div>

          <motion.div
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <HolographicCard className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Connection Endpoints</h3>

              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-black/30 rounded border border-gray-700 hover:border-cyan-400 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-xl sm:text-2xl flex-shrink-0">{info.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-cyan-400 font-bold text-sm sm:text-base">{info.label}</div>
                      <div className="text-gray-300 group-hover:text-white transition-colors text-xs sm:text-sm break-all">
                        {info.value}
                      </div>
                    </div>
                    <div className="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                      →
                    </div>
                  </motion.a>
                ))}
              </div>
            </HolographicCard>

            <HolographicCard className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">System Status</h3>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm sm:text-base">Response Time:</span>
                  <span className="text-green-400 font-bold text-sm sm:text-base">{"< 24h"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm sm:text-base">Availability:</span>
                  <span className="text-green-400 font-bold text-sm sm:text-base">99.9%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm sm:text-base">Coffee Level:</span>
                  <span className="text-yellow-400 font-bold text-sm sm:text-base">MAXIMUM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm sm:text-base">Motivation:</span>
                  <span className="text-purple-400 font-bold text-sm sm:text-base">UNLIMITED</span>
                </div>
              </div>
            </HolographicCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
