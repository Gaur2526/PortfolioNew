import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail, FileText } from 'lucide-react'
import { getAllBlogs } from '@/lib/blogs'
import { projects, experience } from '@/lib/data'
import { SkillIcon } from '@/components/skill-icon'
import { ExperienceItem } from '@/components/experience-item'
import { BlogCard } from '@/components/blog-card'

const socials = [
  { name: 'GitHub', url: 'https://github.com/Gaur2526' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/akash-gaur-295936227/' },
  { name: 'Instagram', url: 'https://www.instagram.com/myownlife_24x7' },
  { name: 'Email', url: 'mailto:akashgaur2526@gmail.com' },
]

export default function Home() {
  const blogs = getAllBlogs().slice(0, 2); // Show first 2 blogs on home page

  return (
    <main className="flex-grow flex flex-col bg-background text-foreground animate-fade-in">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:px-8 sm:py-24 flex-grow flex flex-col">
        <div className="flex-grow space-y-20 mb-20">

          {/* Hero Section */}
          <section className="flex flex-row items-center gap-8 sm:gap-6 pb-2">
            <Image
              src="/profile.png"
              alt="Profile"
              width={110}
              height={110}
              className="rounded-full object-cover ring-2 ring-border/40 shrink-0"
              priority
            />
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold tracking-tight">
                Akash Gaur
              </h1>
              <p className="mt-2 text-md leading-relaxed text-muted-foreground">
                Software Engineer · Full-Stack Developer · Building scalable web applications and AI-powered solutions. Focused on backend engineering, modern web technologies, and building reliable products that solve real-world problems.
              </p>
            </div>
          </section>

          {/* Connect / Socials Section */}
          <section className="border-y border-border/40 py-4 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Socials</span>
            <div className="flex items-center gap-4 select-none">
              {socials.map((social, index) => {
                const getIcon = (name: string) => {
                  switch (name.toLowerCase()) {
                    case 'github':
                      return (
                        <svg className="h-4 w-4 text-neutral-800 dark:text-neutral-200" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                      )
                    case 'linkedin':
                      return (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path fill="#0A66C2" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      )
                    case 'instagram':
                      return (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      )
                    case 'email':
                      return (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#EA4335" />
                        </svg>
                      )
                    default:
                      return null
                  }
                }
                return (
                  <Link
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center h-9 w-9 rounded-full border border-border/40 hover:border-emerald-500 hover:scale-110 active:scale-95 transition-all duration-300 ease-out overflow-hidden"
                    title={social.name}
                  >
                    <span className="absolute inset-0 bg-secondary/50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 flex items-center justify-center shrink-0 transition-transform duration-300 ease-out group-hover:scale-110">
                      {getIcon(social.name)}
                    </span>
                  </Link>
                )
              })}
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Experience</h2>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-sm font-medium text-emerald-500 hover:text-emerald-400 transition-colors group"
              >
                More about me
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <ExperienceItem key={index} experience={job} />
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Projects</h2>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1 text-sm font-medium text-emerald-500 hover:text-emerald-400 transition-colors group"
              >
                All projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="flex flex-col gap-10">
              {projects.slice(0, 2).map((project, index) => (
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

          {/* Blogs Section */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Latest Writings</h2>
              <Link
                href="/blogs"
                className="inline-flex items-center gap-1 text-sm font-medium text-emerald-500 hover:text-emerald-400 transition-colors group"
              >
                Read more blogs
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {blogs.length > 0 ? (
              <div className="space-y-4">
                {blogs.map((blog, index) => (
                  <BlogCard key={index} blog={blog} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No writings published yet. Stay tuned!</p>
            )}
          </section>
        </div>

        {/* Footer */}
        <footer className="text-center text-xs text-muted-foreground mt-auto">
          <p>© 2026 Akash Gaur. All rights reserved.</p>
        </footer>
      </div>
    </main>
  )
}
