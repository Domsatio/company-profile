import { useEffect } from "react"
import { Label } from "../ui/label"
import { useTheme } from "next-themes"
import { useState } from "react"
import { Switch } from "../ui/switch"
import { Moon, Sun } from "lucide-react"

const ToggleDarkMode = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  // Prevent hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div>
      <div className="relative inline-grid h-9 grid-cols-[1fr_1fr] items-center text-sm font-medium">
        <Switch
          id="dark-mode-switch"
          checked={theme === 'dark'}
          onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="peer absolute inset-0 h-[inherit] w-auto data-[state=checked]:bg-input/50 data-[state=unchecked]:bg-input/50 [&_span]:h-full [&_span]:w-1/2 [&_span]:transition-transform [&_span]:duration-300 [&_span]:[transition-timing-function:cubic-bezier(0.16,1,0.3,1)] data-[state=checked]:[&_span]:translate-x-full rtl:data-[state=checked]:[&_span]:-translate-x-full"
        />
        <span className="pointer-events-none relative me-0.5 flex min-w-8 items-center justify-center text-center">
          <Sun size={16} strokeWidth={2} aria-hidden="true" />
        </span>
        <span className="pointer-events-none relative ms-0.5 flex min-w-8 items-center justify-center text-center">
          <Moon size={16} strokeWidth={2} aria-hidden="true" />
        </span>
      </div>
      <Label htmlFor="dark-mode-switch" className="sr-only">
        Dark Mode Switch
      </Label>
    </div>
  )
}

export default ToggleDarkMode