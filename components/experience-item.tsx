'use client'

import React from 'react'

export interface Experience {
  title: string
  company: string
  period: string
  description: string
}

interface ExperienceItemProps {
  experience: Experience
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  const isCurrent = experience.period.toLowerCase().includes('present')
  return (
    <div className="border-l-2 border-border pl-5">
      <div className="flex flex-wrap items-baseline gap-2">
        <h3 className="text-lg font-semibold text-foreground">{experience.title}</h3>
        <span className="text-sm font-medium text-emerald-500/80">@{experience.company}</span>
      </div>
      <div className="flex items-center gap-3 mt-1 select-none">
        <p className="text-xs text-muted-foreground">{experience.period}</p>
        {isCurrent && (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-500 ring-1 ring-inset ring-emerald-500/20">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            Currently Working
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{experience.description}</p>
    </div>
  )
}
