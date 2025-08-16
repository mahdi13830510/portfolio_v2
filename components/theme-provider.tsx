"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "matrix" | "cyber" | "neon" | "hacker"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("matrix")

  useEffect(() => {
    const root = document.documentElement

    const themes = {
      matrix: {
        "--primary": "#00ff00",
        "--secondary": "#00ffff",
        "--accent": "#ff00ff",
      },
      cyber: {
        "--primary": "#00ffff",
        "--secondary": "#0080ff",
        "--accent": "#ff0080",
      },
      neon: {
        "--primary": "#ff00ff",
        "--secondary": "#ffff00",
        "--accent": "#00ff80",
      },
      hacker: {
        "--primary": "#ff0000",
        "--secondary": "#ffff00",
        "--accent": "#00ff00",
      },
    }

    Object.entries(themes[theme]).forEach(([property, value]) => {
      root.style.setProperty(property, value)
    })
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
