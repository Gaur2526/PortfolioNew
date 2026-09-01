'use client'

import Link from 'next/link'
import { ArrowUpRight, ArrowLeft } from 'lucide-react'
import { projects } from '@/lib/data'
import { SkillIcon } from '@/components/skill-icon'

export default function Projects() {
  return (
    <main className="flex-grow flex flex-col w-full bg-background text-foreground">


      <div className="mx-auto max-w-2xl flex-grow flex flex-col px-6 py-16 sm:px-8 sm:py-24 w-full">
        <div className="flex-grow space-y-14 mb-20">
        {/* Header */}
        <section className="mb-14">
          <Link 
            href="/" 
            className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-500 hover:text-emerald-400 transition-colors group mb-6"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground">Projects</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            A gallery of tools, apps, and platforms I&apos;ve developed.
          </p>
        </section>

        {/* Projects Grid */}
        <section>
          <div className="flex flex-col gap-10">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <Link 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group inline-flex items-center gap-1.5 text-lg font-bold text-foreground hover:text-emerald-500 transition-colors duration-300"
                  >
                    {project.title}
                    <ArrowUpRight className="h-4.5 w-4.5 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-500" />
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag, i) => (
                    <SkillIcon key={i} name={tag} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        </div>

        {/* Footer */}
        <footer className="border-t border-border pt-8 text-center text-sm text-muted-foreground mt-auto">
          <p>© 2026 Akash Gaur. All rights reserved.</p>
        </footer>
      </div>
    </main>
  )
}
