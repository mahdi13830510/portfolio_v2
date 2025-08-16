"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { HolographicCard } from "./holographic-card"

export function HackerTerminal() {
  const [commands, setCommands] = useState<string[]>([])
  const [currentCommand, setCurrentCommand] = useState("")

  const hackerCommands = [
    "nmap -sS -O target.com",
    "sqlmap -u 'http://target.com/login.php' --dbs",
    "msfconsole -q -x 'use exploit/multi/handler'",
    "hydra -l admin -P /usr/share/wordlists/rockyou.txt ssh://target.com",
    "john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt",
    "aircrack-ng -w /usr/share/wordlists/rockyou.txt capture.cap",
    "nikto -h http://target.com",
    "dirb http://target.com /usr/share/wordlists/dirb/common.txt",
    "gobuster dir -u http://target.com -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt",
    "wpscan --url http://target.com --enumerate u,p,t",
    "searchsploit apache 2.4",
    "msfvenom -p linux/x86/meterpreter/reverse_tcp LHOST=10.0.0.1 LPORT=4444 -f elf > payload.elf",
    "nc -lvnp 4444",
    "python3 -c 'import pty; pty.spawn(\"/bin/bash\")'",
    "find / -perm -4000 2>/dev/null",
    "cat /etc/passwd | grep -v nologin",
    "ps aux | grep root",
    "netstat -tulpn | grep LISTEN",
    "ss -tulpn",
    "lsof -i",
    "tcpdump -i eth0 -w capture.pcap",
    "wireshark -i eth0",
    "ettercap -T -M arp:remote /192.168.1.1// /192.168.1.100//",
    "hashcat -m 0 -a 0 hash.txt /usr/share/wordlists/rockyou.txt",
    "crackmapexec smb 192.168.1.0/24 -u admin -p password",
    "enum4linux -a 192.168.1.100",
    "smbclient -L //192.168.1.100",
    "rpcclient -U '' -N 192.168.1.100",
    "showmount -e 192.168.1.100",
    "snmpwalk -c public -v1 192.168.1.100",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      const randomCommand = hackerCommands[Math.floor(Math.random() * hackerCommands.length)]
      setCurrentCommand(randomCommand)

      setTimeout(() => {
        setCommands((prev) => [...prev.slice(-10), randomCommand])
        setCurrentCommand("")
      }, 2000)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {"$ sudo su -"}
        </motion.h2>

        <HolographicCard className="p-8">
          <div className="bg-black rounded p-6 font-mono text-sm">
            <div className="text-green-400 mb-4">
              <div>Last login: Mon Jan 1 13:37:00 2024 from 127.0.0.1</div>
              <div>Linux matrix 6.6.6-arch1-1 #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux</div>
              <div className="mt-2 text-red-400">
                ██╗ ██╗ █████╗ ██████╗ ███╗ ██╗██╗███╗ ██╗ ██████╗ ██║ ██║██╔══██╗██╔══██╗████╗ ██║██║████╗ ██║██╔════╝
                ██║ █╗ ██║███████║██████╔╝██╔██╗ ██║██║██╔██╗ ██║██║ ███╗
                ██║███╗██║██╔══██║██╔══██╗██║╚██╗██║██║██║╚██╗██║██║ ██║ ╚███╔███╔╝██║ ██║██║ ██║██║ ╚████║██║██║
                ╚████║╚██████╔╝ ╚══╝╚══╝ ╚═╝ ╚═╝╚═╝ ╚═╝╚═╝ ╚═══╝╚═╝╚═╝ ╚═══╝ ╚═════╝
              </div>
              <div className="mt-2 text-yellow-400">UNAUTHORIZED ACCESS IS PROHIBITED</div>
              <div className="text-cyan-400">ALL ACTIVITIES ARE MONITORED AND LOGGED</div>
            </div>

            <div className="space-y-2 max-h-64 overflow-y-auto">
              {commands.map((cmd, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-green-400"
                >
                  <span className="text-red-400">root@matrix:~# </span>
                  {cmd}
                </motion.div>
              ))}

              {currentCommand && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400">
                  <span className="text-red-400">root@matrix:~# </span>
                  <motion.span initial={{ width: 0 }} animate={{ width: "auto" }} transition={{ duration: 2 }}>
                    {currentCommand}
                  </motion.span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                    className="ml-1"
                  >
                    █
                  </motion.span>
                </motion.div>
              )}
            </div>

            <div className="mt-4 text-gray-400 text-xs">
              <div>System load: 1.37, 1.33, 1.42</div>
              <div>Memory usage: 69% of 32GB</div>
              <div>Disk usage: 42% of 1TB NVMe SSD</div>
              <div>Network: eth0: RX 1337 MB TX 420 MB</div>
              <div className="text-red-400 mt-2">WARNING: ROOT ACCESS DETECTED</div>
            </div>
          </div>
        </HolographicCard>
      </div>
    </section>
  )
}
