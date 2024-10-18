'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { allProjects } from '.contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import Link from 'next/link'
import Image from 'next/image'

const recentProjectContent = {
  heading: {
    title: 'Project récents',
    subTitle: 'Mes réalisations',
    description: '',
  },
}
const ProjectCard = ({ index, project }) => {
  index *= 0.05
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: index,
          duration: 0.5,
        },
      }}
      viewport={{ once: true }}
      className="border border-gray-300 bg-white relative overflow-hidden group rounded "
    >
      <Link href={project.url} className="relative block overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={1064}
          height={544}
          className="object-cover object-center h-[200px] duration-300
            transition-all ease-in-out group-hover:scale-[1.1]"
        />
      </Link>

      <div className="p-6 ">
        <p className="text-[#2F2E2E] mb-2 uppercase text-[12px] tracking-[1px]">
          {format(parseISO(project.date), 'LLL d, yyyy')} • {project.author}
        </p>

        <h3 className="mb-4 text-orange-500">
          <Link href={project.url} className="text-lg leading-none">
            {project.title}
          </Link>
        </h3>

        <p className="text-[#2F2E2E] mb-3 text-[14px] tracking-[1px]">
          {project.excerpt}
        </p>
        <div>
          <Link
            href={project.url}
            className="text-gray-500 hover:text-[#2F2E2E] text-[12px] tracking-[2px] uppercase
            inline-block  duration-300 transistion-all bg-white-600
            ease-in-out relative before:content-['']
            before:absolute before:bottom-0 before:left-0 before:w-full
            before:h-[2px] before:bg-orange-500 before:origin-[100%, 50%]
            before:transistion-all before:duration-300 before:ease-in-out
            before:scale-x-0 before:scale-y-[1] before:scale-z[1]
            before:wil-change-transform hover:before:origin-[100%, 0%]
            hover:before:scale-x-[1] hover:before:scale-y-[1]
            hover:before:scale-z-[1] pb-2"
          >
            lire plus dl&apos;informations
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

const RecentProject = ({ className }) => {
  const projects = allProjects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )
  return (
    <section className={`${className}`}>
      <div className="container mx-auto rounded-md ">
        <div className=" px-4 lg:flex justify-left mb-2">
          <div className="lg:w-7/12">
            {recentProjectContent.heading.subTitle && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.05,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className="uppercase tracking-[3px] text-sm inline-block text-orange-400"
              >
                {recentProjectContent.heading.subTitle}
              </motion.span>
            )}
            {recentProjectContent.heading.title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.1,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className="text-2xl lg:text-4xl mb-4 lg:mb-0 text-[#2F2E2E]"
              >
                {recentProjectContent.heading.title}
              </motion.h2>
            )}
          </div>
          <div className="lg:w-5/12 self-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.15,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
              className="text-[#2F2E2E]"
            >
              {recentProjectContent.heading.description}
            </motion.p>
          </div>
        </div>
      </div>

      <div
        className="px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4
          gap-4 w-full lg:w-11/12 mx-auto mt-10 mb-10  "
      >
        {projects.slice(0, 4).map((project, index) => (
          <ProjectCard key={index} index={index} project={project} />
        ))}

        {/*  Content center - btn Right + de Article  */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="btn-container text-left mt-5"
        >
          <Link
            href="/projects"
            className="transistion-all duration-300 ease-in-out text-[11.5px]
          tracking-[2px] font-bold uppercase bg-gradient-to-tr from-[#e78738] to-[#fb923c]py-4 px-3
          rounded text-white inline-block items-center hover:bg-white hover:text-orange-400
          hover:shadow-1xl h-12"
          >
            Voir tous les projects
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default RecentProject
