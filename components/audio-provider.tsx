"use client"

import type React from "react"

import { createContext, useContext, useEffect, useRef, useState } from "react"

interface AudioContextType {
  isPlaying: boolean
  toggleAudio: () => void
  playSound: (frequency: number, duration: number) => void
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    // Create a simple beep sound instead of loading external audio
    if (typeof window !== "undefined") {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  const toggleAudio = () => {
    // Toggle a simple ambient sound effect
    if (isPlaying) {
      setIsPlaying(false)
    } else {
      setIsPlaying(true)
      // Play a simple ambient tone
      playSound(220, 1000)
    }
  }

  const playSound = (frequency: number, duration: number) => {
    if (audioContextRef.current) {
      const oscillator = audioContextRef.current.createOscillator()
      const gainNode = audioContextRef.current.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContextRef.current.destination)

      oscillator.frequency.value = frequency
      gainNode.gain.value = 0.05 // Lower volume

      oscillator.start()
      setTimeout(() => oscillator.stop(), duration)
    }
  }

  return <AudioContext.Provider value={{ isPlaying, toggleAudio, playSound }}>{children}</AudioContext.Provider>
}

export function useAudio() {
  const context = useContext(AudioContext)
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider")
  }
  return context
}
