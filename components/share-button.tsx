'use client'

import React, { useState } from 'react'
import { Link, Check } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

interface ShareButtonProps {
  title: string
}

export function ShareButton({ title }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  const getUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.href
    }
    return ''
  }

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault()
    const url = getUrl()
    if (!url) return

    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      toast.success('Link copied to clipboard!')
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast.error('Failed to copy link.')
    }
  }

  return (
    <Button
      id="share-post-button"
      variant="outline"
      size="sm"
      onClick={handleCopy}
      className={`h-8 gap-1.5 px-3 border-border/60 transition-all duration-300 cursor-pointer ${
        copied
          ? 'text-emerald-500 border-emerald-500/40 bg-emerald-500/5'
          : 'text-muted-foreground hover:text-emerald-500 hover:border-emerald-500/30 hover:bg-emerald-500/5'
      }`}
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-emerald-500 animate-in fade-in zoom-in duration-300" />
          <span className="font-medium text-emerald-500">Copied!</span>
        </>
      ) : (
        <>
          <Link className="h-3.5 w-3.5" />
          <span>Copy link</span>
        </>
      )}
    </Button>
  )
}
