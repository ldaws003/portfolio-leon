import type { ReactNode } from 'react'

export const navItems: Array<{
  label: string
  href: string
  type?: 'button' | 'link'
}> = [
  {
    label: 'Projects',
    href: '/#projects',
  },
  {
    label: 'About me',
    href: '/#about',
  }
]

export const experiences: Array<{
  title: string
  company: string
  years: string
  description: ReactNode
}> = [
  {
    title: 'Software Engineer, AI Annotator – Contractor',
    company: 'Outlier AI',
    years: '2025-Present',
    description:
      'Rated the performance of several AI models on how well they answered prompts related to programming and created code for models to be trained on.',
  },
  {
    title: 'Software Engineer II',
    company: 'Raytheon',
    years: '2023-2024',
    description:
      'Worked as a software engineer II where I worked on their embedded software and their in-house software libraries.',
  },
  {
    title: 'Frontend Developer Intern',
    company: 'GBCS Group',
    years: '2022-2023',
    description:
      'Worked on the frontend of app such as Lokomotive and worked on the prototype of a website.',
  },
]
