import type { Metadata } from 'next'
import Image from 'next/image'
import { Badge } from '~/components/badge'
import { Button } from '~/components/button'
import { ProjectCard } from '~/components/project-card'
import { allProjects } from '~/content'
import { experiences } from '~/data'
import { cn } from '~/utils/cn'

export const metadata: Metadata = {
  title: 'Leon Dawson Portfolio',
}


export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        id="top"
        className="-mt-30 flex min-h-[528px] items-center justify-center border-white/8 border-b bg-neutral-850 py-20"
      >
        <div className="container mt-20 flex flex-col items-center gap-8 text-center">
          <h1 className="font-medium text-5xl text-neutral-500">
            Leon Dawson
            <br />
            <span className="font-normal text-white">
              Software Engineer
            </span>
          </h1>
          <p className="max-w-lg font-medium text-lg text-neutral-250">
            Detail-oriented and persistent software engineer. Full-stack developer and AI tutor. 
            Obtained a masters degree in computer science from CSUSB. Worked on GBCS Group's Lokomotive and annotated data for 
            AI for Outlier AI. 
          </p>
          <Button>Let's work together</Button>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className={cn(
          'container relative z-10 mt-20 mb-30 grid scroll-m-12 grid-cols-1 place-content-center items-center gap-4 p-8 md:grid-cols-2',
        )}
      >
        {allProjects.map((project) => {
          return <ProjectCard project={project} key={project.slug} />
        })}
      </section>

      {/* About */}
      <section
        id="about"
        className={cn(
          'container relative z-10 mt-20 mb-10 grid scroll-m-12 grid-cols-1 place-content-center items-center gap-12 rounded-b-2xl bg-linear-to-tl from-white/8 to-20% p-8 md:grid-cols-12',
        )}
      >
        <div className="col-span-1 space-y-3 md:col-span-8">
          <Badge>About me</Badge>
          <p className="font-medium text-neutral-250 text-xl">
            {/*TODO: fill out this about me*/}
            I'm dedicated software engineer with varied experiences in full stack development, DevOps, embedded software development,
            and machine learning. I am currently working as a software engineer AI annotator for Outlier AI, and I volunteer for 
            Hack for LA. I have a master's degree in computer science from CSUSB, and I have MS/BS in biomedical engineering from 
            FIU. 
          </p>
        </div>
      </section>

      {/* Experience */}
      <section
        className={cn(
          'container relative z-10 mt-10 mb-20 space-y-8 divide-y divide-white/8 p-8',
        )}
      >
        <Badge>Experience</Badge>
        {experiences.map(({ title, years, company, description }) => {
          return (
            <div
              className="grid grid-cols-1 justify-between gap-8 pb-8 md:grid-cols-12"
              key={title}
            >
              <h3 className="col-span-4 font-medium text-white">{title}</h3>

              <div className="col-span-8">
                <span className="mb-2 font-medium text-white">{company}</span>
                <p className="text-neutral-500">{years}</p>
                <p className="mt-4">{description}</p>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}
