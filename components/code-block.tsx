'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export function CodeBlock({ children }: { children: string }) {
  const [copied, setCopied] = useState(false)

  const copyCode = async () => {
    await navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      <button
        onClick={copyCode}
        className="absolute right-2 top-2 p-2 rounded bg-muted hover:bg-muted/80 opacity-0 group-hover:opacity-100 transition-opacity"
        title="Copy code"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>
      <pre className="bg-muted p-4 rounded overflow-x-auto mb-4 pt-10">
        <code>{children}</code>
      </pre>
    </div>
  )
}
