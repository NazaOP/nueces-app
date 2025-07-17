"use client"

import * as React from "react"

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768) // Tailwind's 'md' breakpoint is 768px
    }

    checkIsMobile() // Check on mount
    window.addEventListener("resize", checkIsMobile) // Check on resize

    return () => {
      window.removeEventListener("resize", checkIsMobile)
    }
  }, [])

  return isMobile
}
