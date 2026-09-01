'use client'

import { useEffect, useState } from 'react'

export function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const scrollPosition = window.scrollY
        setProgress((scrollPosition / totalHeight) * 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Run once initially
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-[100] pointer-events-none">
      <div 
        className="h-full bg-emerald-500 transition-all duration-75 ease-out shadow-sm shadow-emerald-500/50"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
