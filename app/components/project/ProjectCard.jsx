'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'

const ProjectCard = ({ project, index }) => {
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
      className="relative overflow-hidden rounded-t-md"
    >
      {/* Image top card */}
      <Link
        href={`/${project.url}`}
        className="relative block overflow-hidden group"
      >
        <Image
          src={project.image}
          alt={project.title}
          width={1064}
          height={644}
          className="object-cover object-center h-[400px] !max-w-full duration-300
            transition-all ease-in-out group-hover:scale-[1.05] rounded-t-md"
        />
      </Link>

      <div className="p-4 bg-white border border-[#2F2E2E] rounded-b-md">
        <p className="text-gray-500 mb-3 uppercase text-[12px] tracking-[1px]">
          {format(parseISO(project.date), 'LLL d, yyyy')} • {project.author}
        </p>
        <h3 className="mb-4">
          <Link href={`/${project.url}`} className="text-lg leading-none">
            {project.title}
          </Link>
        </h3>
        <div>
          <Link
            href={`/${project.url}`}
            className="text-red-500 uppercase text-[12px] tracking-[2px] border-b-2
            pb-2 inline-block border-red-500"
          >
            Plus d&apos;informations
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
