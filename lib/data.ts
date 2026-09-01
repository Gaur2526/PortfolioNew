export interface Project {
  title: string
  description: string
  link: string
  tags: string[]
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
}

export const projects: Project[] = [
  {
    title: 'FlowBuilder',
    description: 'Visual workflow builder that allows users to create, configure, and connect reusable nodes into processing pipelines. Implemented reusable node abstractions, dynamic text-node variable detection, and a FastAPI backend for processing frontend-defined workflows as DAGs.',
    link: 'https://flow-builder-node-flow.vercel.app/',
    tags: ['Python', 'React', 'React Flow', 'JavaScript', 'Zustand', 'FastAPI', 'Pydantic', 'REST APIs'],
  },
  {
    title: 'Collab Editor',
    description: 'Collaborative document editor with secure authentication, document management, version history, and AI-powered writing assistance for summarization, grammar correction, rewriting, and action-item extraction.',
    link: 'https://akash-gaur-full-stack-assignment.vercel.app/',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Google Gemini'],
  }
]

export const experience: Experience[] = [
  {
    title: 'Associate Software Engineer',
    company: 'Nagarro',
    period: 'June 2025 - April 2026',
    description: 'Developed and maintained enterprise applications across frontend and backend, working with Java, Spring Boot, Hibernate, REST APIs, SQL, React.js, Node.js, Express.js, and MongoDB. Implemented business workflows, reusable UI components, data models, and application logic while contributing to debugging, testing, production support, and application enhancements. Worked in an Agile environment, collaborating with cross-functional teams to analyze requirements, troubleshoot issues, and deliver scalable solutions.',
  },
  {
    title: 'Frontend Developer Intern',
    company: 'WhatBytes',
    period: 'Jan 2025 - March 2025',
    description: 'Developed responsive and maintainable web interfaces using Next.js, React.js, TypeScript, and Tailwind CSS. Integrated frontend applications with backend APIs and optimized performance to improve user experience. Collaborated with the development team using Git and modern development practices, including AI-assisted development tools.',
  },
]
