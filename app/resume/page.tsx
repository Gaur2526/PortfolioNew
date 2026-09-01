'use client'

import Link from 'next/link'
import { ArrowLeft, Download } from 'lucide-react'

export default function ResumePage() {
  return (
    <main className="flex-grow flex flex-col w-full bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:px-8 sm:py-24 flex-grow flex flex-col w-full">
        {/* Header */}
        <section className="mb-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-500 hover:text-emerald-400 transition-colors group mb-8"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground">Resume</h1>
            <a 
              href="/resume.pdf" 
              download="Akash_Gaur_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-400 transition-colors cursor-pointer select-none"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </section>

        {/* PDF Viewer Container */}
        <div className="w-full rounded-xl overflow-hidden border border-border bg-muted/20 p-2">
          <iframe 
            src="/resume.pdf#toolbar=0" 
            className="w-full h-[600px] sm:h-[800px] rounded-lg bg-background border-0"
            title="Akash Gaur Resume"
          />
        </div>
      </div>
    </main>
  )
}
