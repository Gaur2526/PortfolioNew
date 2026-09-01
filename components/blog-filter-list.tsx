'use client'

import React, { useState } from 'react'
import { BlogCard } from './blog-card'
import type { Blog } from '@/lib/blogs'
import { getTagIcon, getTagStyles } from "@/components/skill-icon"

interface BlogFilterListProps {
  blogs: Blog[]
}

export function BlogFilterList({ blogs }: BlogFilterListProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Extract all unique tags
  const allTags = Array.from(
    new Set(
      blogs.flatMap((blog) => blog.tags || [])
    )
  ).sort()

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    )
  }

  const filteredBlogs = selectedTags.length > 0
    ? blogs.filter((blog) =>
        selectedTags.every((tag) => blog.tags?.includes(tag))
      )
    : blogs

  return (
    <div className="space-y-8">
      {/* Tag filter pills */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 select-none">
          <button
            onClick={() => setSelectedTags([])}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 cursor-pointer ${
              selectedTags.length === 0
                ? 'bg-emerald-500 text-white border-emerald-500 scale-105 shadow-sm shadow-emerald-500/20'
                : 'bg-secondary/40 text-muted-foreground border-border/40 hover:border-emerald-500/40 hover:text-foreground'
            }`}
          >
            All
          </button>
          {allTags.map((tag) => {
            const isSelected = selectedTags.includes(tag)
            const style = getTagStyles(tag)
            const Icon = getTagIcon(tag)
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? `${style.activeBg} ${style.activeBorder} ${style.activeText} scale-105 shadow-sm shadow-emerald-500/10`
                    : `${style.inactiveBg} ${style.inactiveBorder} ${style.color}`
                }`}
              >
                {Icon && <Icon className="h-3.5 w-3.5 shrink-0" />}
                {style.displayName}
              </button>
            )
          })}
        </div>
      )}

      {/* Blog list */}
      {filteredBlogs.length > 0 ? (
        <div className="space-y-4 animate-fade-in">
          {filteredBlogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">No writings found under this topic.</p>
      )}
    </div>
  )
}
