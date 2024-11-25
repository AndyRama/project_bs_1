'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { allProjects } from '.contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import Link from 'next/link'
import Image from 'next/image'
import { FaClock } from 'react-icons/fa'
import { AiOutlineEuro } from 'react-icons/ai'

const recentProjectContent = {
  heading: {
    title: 'Interventions Courantes',
    subTitle: 'Nos Services',
    description: '',
  },
}

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
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
      className="border border-gray-300 bg-gray-50 relative overflow-hidden group rounded "
    >
      <Link href={project.url} className="relative block overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={1064}
          height={350}
          className="object-cover object-center h-[250px] duration-300
            transition-all ease-in-out group-hover:scale-[1.1]"
        />
      </Link>

      <div className="p-6">
        <h3 className="mb-4 text-red-500">
          <Link href={project.url} className="text-lg leading-none">
            {project.title}
          </Link>
        </h3>
        <p className="text-[#2F2E2E] mb-2 uppercase text-[12px] tracking-[1px]">
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
        </p>

        <p className="text-[#2F2E2E] mb-3 text-[14px] tracking-[1px]">
          {project.description}
        </p>

        <div className='flex'>
          <div className="text-red-500 flex flex-row mr-24">
            <FaClock className='mt-1.5 mr-1' />
            <span>{project.duration}</span>
          </div>
          <div className="text-red-500 flex flex-row ">
            <AiOutlineEuro className='mt-1.5 mr-1'/>
            <span>{project.price}</span>
          </div>
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
      <div className="  mx-auto rounded-md ">
        <div className="px-4 lg:flex mb-2">
          <div className="lg:w-10/12">
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
                className="uppercase tracking-[3px] text-sm inline-block text-red-500 "
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
                className="text-2xl lg:text-4xl mb-4 lg:mb-0 text-black "
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

        <div
          className="px-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4
          gap-4 w-full mx-auto mt-10 mb-10"
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
          className="btn-container text-left mt-5 px-4"
        >
          <Link
            href="/projects"
            className="transistion-all duration-300 ease-in-out text-[11px]
          tracking-[2px] font-bold uppercase bg-gradient-to-r from-red-400 to-red-600 py-4 px-4
          rounded hover:text-black text-white inline-block items-start hover:bg-white hover:shadow-2xl 
          hover:shadow-1xl h-12 mb-10"
          >
            Voir tous les services
          </Link>
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default RecentProject
