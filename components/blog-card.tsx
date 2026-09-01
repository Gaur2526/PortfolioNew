'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, Calendar, Clock } from 'lucide-react'
import type { Blog } from '@/lib/blogs'
import { getTagStyles } from '@/components/skill-icon'

interface BlogCardProps {
  blog: Blog
}

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group block rounded-xl border border-border p-5 transition-all hover:bg-muted/50 hover:border-emerald-500/30"
    >
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-md font-bold leading-tight flex-1 text-foreground group-hover:text-emerald-500 transition-colors">
            {blog.title}
          </h3>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-500" />
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {blog.description}
        </p>
        <div className="flex items-center gap-3 pt-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {blog.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {blog.read_time}
          </span>
        </div>
        {blog.tags && blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-3 select-none">
            {blog.tags.map((tag, i) => {
              const style = getTagStyles(tag)
              return (
                <span key={i} className={`px-2.5 py-0.5 rounded-md text-[10px] font-semibold border transition-all duration-300 ${style.inactiveBg} ${style.inactiveBorder} ${style.color}`}>
                  {style.displayName}
                </span>
              )
            })}
          </div>
        )}
      </div>
    </Link>
  )
}
