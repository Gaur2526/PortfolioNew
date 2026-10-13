'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Switch } from '@/components/ui/switch'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/resume', label: 'Resume' },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname.startsWith(path)) return true
    return false
  }

  return (
    <nav className="sticky top-4 z-50 mx-auto mt-4 w-[calc(100%-2rem)] max-w-4xl rounded-2xl border border-primary/10 bg-secondary/15 p-4 shadow-lg shadow-neutral-600/5 backdrop-blur-lg sm:p-5">
      <div className="flex w-full items-center justify-between gap-6">
        <Link href="/" className="shrink-0 text-lg font-semibold tracking-tight transition-colors">
          Akash Gaur
        </Link>

        {/* Desktop Navigation */}
        <div className="flex shrink-0 items-center gap-4 sm:gap-6">
          <div className="hidden items-center gap-5 text-sm sm:flex md:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  isActive(link.href) ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 rounded-full border border-border/50 bg-background/45 px-2.5 py-1.5 shadow-sm backdrop-blur-md">
            <Sun className="h-4 w-4 text-amber-500" aria-hidden="true" />
            <Switch
              checked={mounted && resolvedTheme === 'dark'}
              onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
              aria-label="Use dark theme"
              title="Toggle color theme"
              className="h-5 w-9 data-[state=checked]:bg-neutral-700 data-[state=unchecked]:bg-neutral-300 dark:data-[state=unchecked]:bg-neutral-600"
            />
            <Moon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="-mr-2 flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground focus:outline-none sm:hidden"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="mt-4 flex flex-col gap-3 border-t border-border/40 pt-4 pb-2 text-sm animate-in fade-in duration-200 sm:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`py-1 transition-colors ${
                isActive(link.href) ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
