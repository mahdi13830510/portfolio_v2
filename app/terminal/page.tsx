"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { TerminalCommand } from "@/components/terminal-command"
import { MatrixRain } from "@/components/matrix-rain"

interface Command {
  input: string
  output: string[]
  timestamp: Date
}

const initialCommands = [
  {
    input: "whoami",
    output: ["mahdi-dolati :: Backend Architect & Linux Enthusiast"],
    timestamp: new Date(),
  },
  {
    input: "help",
    output: [
      "Available commands:",
      "  whoami     - Display user information",
      "  ls         - List directory contents",
      "  cat        - Display file contents",
      "  skills     - Show technical skills",
      "  projects   - List recent projects",
      "  contact    - Display contact information",
      "  matrix     - Toggle matrix effect",
      "  hack       - Initialize hacking sequence",
      "  clear      - Clear terminal",
      "  exit       - Return to main site",
    ],
    timestamp: new Date(),
  },
]

export default function Terminal() {
  const [commands, setCommands] = useState<Command[]>(initialCommands)
  const [currentInput, setCurrentInput] = useState("")
  const [isHacking, setIsHacking] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)

  const executeCommand = (input: string) => {
    const cmd = input.toLowerCase().trim()
    let output: string[] = []

    switch (cmd) {
      case "ls":
        output = ["projects/", "skills/", "experience/", "contact.txt", "resume.pdf"]
        break
      case "skills":
        output = [
          "Backend Development: ████████████ 95%",
          "DevOps & Cloud:     ███████████  90%",
          "Linux Systems:      ████████████ 95%",
          "Database Design:    ██████████   85%",
          "Security:           █████████    80%",
        ]
        break
      case "projects":
        output = [
          "1. Neural Network API Gateway - Production",
          "2. Quantum Task Scheduler - Beta",
          "3. Cyber Security Scanner - Development",
          "4. Blockchain Data Pipeline - Production",
        ]
        break
      case "contact":
        output = [
          "Email: mahdi.dlt13830510@gmail.com",
          "GitHub: github.com/mahdi13830510",
          "LinkedIn: linkedin.com/in/mahdi-dlt-81857628a",
        ]
        break
      case "hack":
        setIsHacking(true)
        output = [
          "Initializing hacking sequence...",
          "Scanning network topology...",
          "Bypassing firewall protocols...",
          "Accessing mainframe...",
          "HACK COMPLETE! Welcome to the Matrix.",
        ]
        setTimeout(() => setIsHacking(false), 3000)
        break
      case "matrix":
        output = ["Matrix effect toggled!"]
        break
      case "clear":
        setCommands([])
        return
      case "exit":
        window.location.href = "/"
        return
      default:
        output = [`Command not found: ${input}. Type 'help' for available commands.`]
    }

    const newCommand: Command = {
      input,
      output,
      timestamp: new Date(),
    }

    setCommands((prev) => [...prev, newCommand])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentInput.trim()) {
      executeCommand(currentInput)
      setCurrentInput("")
    }
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [commands])

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      <MatrixRain />

      {isHacking && <div className="fixed inset-0 bg-red-500/20 animate-pulse z-10" />}

      <motion.div
        className="relative z-20 p-4 h-screen flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="mb-4 text-center">
          <h1 className="text-2xl font-bold text-cyan-400">CYBER TERMINAL v2.0.77</h1>
          <p className="text-sm text-gray-400">Secure Shell Access - Authorized Personnel Only</p>
        </div>

        <div ref={terminalRef} className="flex-1 overflow-y-auto space-y-2 mb-4">
          {commands.map((command, index) => (
            <TerminalCommand key={index} input={command.input} output={command.output} timestamp={command.timestamp} />
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-red-400 mr-2">root@mahdi:~$</span>
          <input
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-green-400"
            autoFocus
            placeholder="Enter command..."
          />
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
            className="ml-1 text-green-400"
          >
            █
          </motion.span>
        </form>
      </motion.div>
    </div>
  )
}
