import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { experience } from '@/lib/data'
import { ExperienceItem } from '@/components/experience-item'

export default function About() {

  return (
    <main className="flex-grow flex flex-col bg-background text-foreground">


      <div className="mx-auto max-w-2xl flex-grow flex flex-col px-6 py-16 sm:px-8 sm:py-24 w-full">
        <div className="flex-grow space-y-20 mb-20">
          {/* Header */}
          <section className="mb-20">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-500 hover:text-emerald-400 transition-colors group mb-8"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to home
            </Link>
            <div className="flex flex-col items-start gap-8 sm:gap-6">
              <Image
                src="/profile.png"
                alt="Profile"
                width={120}
                height={120}
                className="rounded-full object-cover ring-2 ring-border/40"
                priority
              />
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Me</h1>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-xl">
                  I&apos;m a software engineer passionate about building practical, scalable, and user-focused applications. I enjoy turning ideas into working products, from backend systems and APIs to modern web interfaces and AI-powered solutions. I believe in learning by building, writing clean code, and continuously improving my skills through real-world projects.
                </p>
              </div>
            </div>
          </section>

          {/* Bio */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold tracking-tight mb-6">My Journey</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I started coding with a curiosity for understanding how software works and gradually turned that curiosity into a passion for building things. Over time, I&apos;ve worked across backend development, full-stack applications, databases, and AI/LLM integrations, while continuously exploring new technologies.
              </p>
              <p>
                My approach is simple: build, learn, improve, and repeat. I enjoy solving challenging problems, experimenting with new ideas, and creating applications that are both technically solid and genuinely useful.
              </p>
              <p>
                When I&apos;m not coding, you can find me playing badminton, listening to music, or exploring new technologies. I believe in the power of technology to transform lives and am excited to continue building impactful digital products.
              </p>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-10">Experience</h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <ExperienceItem key={index} experience={job} />
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
