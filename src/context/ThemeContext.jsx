import { createContext, useContext, useState, useEffect } from "react"

const ThemeContext = createContext()
const THEME_STORAGE_KEY = "portfolio-theme"

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY)
    if (saved === "dark") return true
    if (saved === "light") return false
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
    document.documentElement.classList.toggle("light", !isDark)
    localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light")
  }, [isDark])

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
