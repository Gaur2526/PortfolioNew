import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getAllBlogs } from '@/lib/blogs'
import { BlogFilterList } from '@/components/blog-filter-list'

export default function Blogs() {

  const blogs = getAllBlogs();

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
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground">Writings</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Thoughts on software engineering, technology, and learning.
          </p>
        </section>

        {/* Blog Posts */}
        <section>
          <BlogFilterList blogs={blogs} />
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
