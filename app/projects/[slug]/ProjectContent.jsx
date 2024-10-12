'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { allProjects } from '.contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'

import { motion } from 'framer-motion'
import { getMDXComponent } from 'next-contentlayer/hooks'
import RecentBlog from '@/app/components/project/RecentBlog'
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}
const ProjectContent = ({ project }) => {
  const projects = allProjects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  let MDXContent

  if (!projects) return null
  if (!project) {
    console.log('Post not found')
  } else {
    MDXContent = getMDXComponent(project.body.code)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transistion: { delay: 0.2, duration: 0.5 },
      }}
      viewport={{ once: true }}
      className="pt-44 pb-20 lg:py-44 container px-4 mx-auto"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          {/* Content title project */}
          <h1 className="text-slate-900 text-center text-4xl/none lg:text-5xl/none font-medium">
            {project.title}
          </h1>
          <p className="text-slate-500 mt-10">
            <span className="inline-flex space-x-3">
              <span>{format(parseISO(project.date), 'LLL d, yyyy')}</span>
              <span>•</span>

              {project.categories?.map((category, index) => (
                <Link
                  href={`/projects/categories/${slugify(category.title)}`}
                  key={category.title}
                  className="font-medium"
                >
                  {category.title}
                  {index < project.categories.length - 1 ? ` | ` : ``}
                </Link>
              ))}

              <span>•</span>

              <span>{project.realisation}</span>
            </span>
          </p>
        </div>

        <div className="mb-16">
          {/* Content Image project */}
          <Image
            src={project.image}
            width={1065}
            height={644}
            className="object-cover object-top rounded-md"
            alt={project.title}
          />
        </div>
        <article className="prose mx-auto max-w-2xl">
          <div className="mx-auto max-w32xl mb-10">
            <div className=" flex justify-between ">
              <div
                className="border-l border-gray-200 relative pl-3 before:content-['']
                before:top-0 before:-left-[1px] before:absolute before:h-7 before:w-[1px]
                before:bg-green-600"
              >
                {/* Content Client */}
                <span className="block text-gray-400">Client</span>
                <span>{project.client}</span>
              </div>

              {/* Content Year */}
              <div
                className="border-l border-gray-200 relative pl-3 before:content-['']
                before:top-0 before:-left-[1px] before:absolute before:h-7 before:w-[1px]
                before:bg-green-600"
              >
                <span className="block text-gray-400">Year</span>
                <span>{project.year}</span>
              </div>

              {/* Content Role */}
              <div
                className="border-l border-gray-200 relative pl-3 before:content-['']
                before:top-0 before:-left-[1px] before:absolute before:h-7 before:w-[1px]
                before:bg-green-600"
              >
                <span className="block text-gray-400">Durée</span>
                <span>{project.duration}</span>
              </div>

              {/* Content Role */}
              {/* <div
                className="border-l border-gray-200 relative pl-3 before:content-['']
                before:top-0 before:-left-[1px] before:absolute before:h-7 before:w-[1px]
                before:bg-green-600"
              >
                <span className="block text-gray-400">Durée</span>
                <span>{project.duration}</span>
              </div> */}
            </div>
          </div>
          {/* Content Article */}
          <MDXContent />
        </article>
      </div>

      {/* More Projects */}
      <div className="mx-auto mt-20 lg:mt-32">
        <RecentBlog />
      </div>
    </motion.div>
  )
}

export default ProjectContent
