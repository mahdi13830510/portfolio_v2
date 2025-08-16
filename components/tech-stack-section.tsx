"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { HolographicCard } from "./holographic-card"
import { SkillOrb } from "./skill-orb"
import { CodeBlock } from "./code-block"

const techStacks = [
  {
    category: "Backend Engineering",
    icon: "🚀",
    skills: ["Python", "Django", "FastAPI", "Node.js", "PostgreSQL", "Redis"],
    color: "from-green-400 to-emerald-600",
    code: `
# High-performance Django API
from django.http import JsonResponse
from django.views.decorators.cache import cache_page

@cache_page(60 * 15)  # Cache for 15 minutes
def api_endpoint(request):
    data = optimize_database_query()
    return JsonResponse(data, safe=False)

# FastAPI with async/await
from fastapi import FastAPI
import asyncio

app = FastAPI()

@app.get("/api/data")
async def get_data():
    result = await async_database_call()
    return {"data": result}
    `,
  },
  {
    category: "DevOps & Cloud",
    icon: "☁️",
    skills: ["Docker", "Kubernetes", "AWS", "Terraform", "Jenkins", "Ansible"],
    color: "from-blue-400 to-cyan-600",
    code: `
# Kubernetes Deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: backend
  template:
    spec:
      containers:
      - name: backend
        image: mahdi/backend:latest
        ports:
        - containerPort: 8000

# Terraform AWS Infrastructure
resource "aws_instance" "web_server" {
  ami           = "ami-0c55b159cbfafe1d0"
  instance_type = "t3.medium"
  
  tags = {
    Name = "CyberServer"
    Environment = "Production"
  }
}
    `,
  },
  {
    category: "Linux & Systems",
    icon: "🐧",
    skills: [
      "Arch Linux",
      "Bash Scripting",
      "System Administration",
      "Kernel Modules",
      "Performance Tuning",
      "Networking",
    ],
    color: "from-purple-400 to-pink-600",
    code: `
#!/bin/bash
# System optimization script

# Update system
sudo pacman -Syu --noconfirm

# Optimize kernel parameters
echo 'vm.swappiness=10' | sudo tee -a /etc/sysctl.conf
echo 'net.core.rmem_max=134217728' | sudo tee -a /etc/sysctl.conf

# Enable performance governor
echo 'performance' | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor

# Custom kernel module
insmod /lib/modules/$(uname -r)/extra/custom_driver.ko

echo "System optimized for maximum performance!"
    `,
  },
  {
    category: "Development Tools",
    icon: "⚙️",
    skills: ["Git", "Vim/Neovim", "Tmux", "Zsh", "Docker Compose", "VS Code"],
    color: "from-orange-400 to-red-600",
    code: `
# Advanced Git workflow
git checkout -b feature/epic-enhancement
git add .
git commit -m "feat: implement legendary feature"
git push origin feature/epic-enhancement

# Vim configuration (.vimrc)
set number relativenumber
set tabstop=4 shiftwidth=4 expandtab
set hlsearch incsearch
set background=dark
colorscheme cyberpunk

# Tmux session management
tmux new-session -d -s dev
tmux split-window -h
tmux split-window -v
tmux send-keys 'vim' Enter
tmux attach-session -t dev
    `,
  },
]

export function TechStackSection() {
  const [selectedStack, setSelectedStack] = useState(0)

  return (
    <section id="tech-stack" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {"# cat /proc/tech_stack"}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          <motion.div
            className="space-y-4 lg:space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {techStacks.map((stack, index) => (
              <HolographicCard
                key={stack.category}
                className={`p-4 sm:p-6 cursor-pointer transition-all duration-300 ${
                  selectedStack === index ? "scale-105 shadow-2xl border-cyan-400" : ""
                }`}
                onClick={() => setSelectedStack(index)}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="text-2xl sm:text-4xl">{stack.icon}</div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{stack.category}</h3>
                </div>

                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {stack.skills.map((skill) => (
                    <SkillOrb key={skill} skill={skill} />
                  ))}
                </div>
              </HolographicCard>
            ))}
          </motion.div>

          <motion.div
            className="lg:sticky lg:top-20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <HolographicCard className="p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-cyan-400 break-words">
                # vim /home/mahdi/code/{techStacks[selectedStack].category.toLowerCase().replace(" ", "_")}.py
              </h4>
              <div className="overflow-x-auto">
                <CodeBlock code={techStacks[selectedStack].code} />
              </div>
            </HolographicCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
