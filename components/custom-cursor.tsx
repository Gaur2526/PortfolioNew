'use client'

import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    // Hide custom cursor on mobile/touch devices
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches
    if (isTouchDevice) return

    setIsHidden(false)

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseLeave = () => {
      setIsHidden(true)
    }

    const handleMouseEnter = () => {
      setIsHidden(false)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.cursor-pointer') ||
        target.closest('[role="button"]') ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  if (isHidden) return null

  return (
    <>
      {/* Hide native cursor globally when this component is active */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (pointer: fine) {
          body, a, button, [role="button"], .cursor-pointer {
            cursor: none !important;
          }
        }
      `}} />

      {/* Main Cursor Dot - follows cursor instantly */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-white mix-blend-difference"
        style={{
          width: '8px',
          height: '8px',
          left: 0,
          top: 0,
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0) scale(${isHovered ? 0.5 : 1})`,
          transition: 'transform 50ms cubic-bezier(0.25, 1, 0.5, 1)',
        }}
      />

      {/* Outer Trailing Ring - follows cursor with a smooth delay */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border border-white mix-blend-difference"
        style={{
          width: '36px',
          height: '36px',
          left: 0,
          top: 0,
          transform: `translate3d(${position.x - 18}px, ${position.y - 18}px, 0) scale(${isHovered ? 1.6 : 1})`,
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
          transition: 'transform 150ms cubic-bezier(0.1, 0.8, 0.3, 1), background-color 200ms ease, border-color 200ms ease',
        }}
      />
    </>
  )
}
