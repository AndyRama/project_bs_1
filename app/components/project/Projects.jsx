'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { allProjects } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import { motion } from 'framer-motion'

const Items = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((project, index) => {
          index *= 0.05
          const production = `${project.herb}`
          const repository = `${project.github}`
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: index,
                  duration: 0.3,
                },
              }}
              viewport={{ once: true }}
              className="bg-white relative overflow-hidden group rounded-md border border-gray-200 mb-10"
              key={project.title}
            >
              <Link
                href={project.url}
                className="relative block overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1064}
                  height={644}
                  className="object-cover object-center h-[200px] lg:h-[300px] duration-300
                  transition-all ease-in-out group-hover:scale-[1.05] rounded-t-md"
                />

                <div className="px-4 mt-4">
                  <p className="text-[#2F2E2E] mb-3 uppercase text-[12px] tracking-[2px]">
                    {format(parseISO(project.date), 'LLL d, yyyy')} •{' '}
                    {project.realisation}
                  </p>
                  <h3>
                    <Link
                      href={project.url}
                      className="text-lg leading-none"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-[#2F2E2E] text-[12px] tracking-[2px]">
                    {project.description}
                  </p>
                </div>
              </Link>

              <div className="flex flex-row px-4 pb-6">
                <Link
                  href={project.url}
                  className={
                    `text-[12px] tracking-[2px] uppercase mt-6 md:px-2 mr-2 border
                   border-gray-200 px-4 pt-2 pb-2 rounded-md hover:text-bold hover:text-orange-900
                   hover:border-orange-500`}
                >
                  plus d&apos;infos
                </Link>
              </div>
            </motion.div>
          )
        })}
    </>
  )
}
const Project = ({ className, itemsPerPage, archive = false, params }) => {
  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [clickPaginate, setClickPaginate] = useState(false)
  const ref = useRef(null)

  let items = null

  if (archive === false) {
    items = allProjects.sort((a, b) =>
      compareDesc(new Date(a.date), new Date(b.date)),
    )
  } else {
    if (params?.slug) {
      items = allProjects.filter((project) =>
        project.categories.some(
          (category) =>
            category.title
              .toLowerCase()
              .trim()
              .replace(/[^\w\s-]/g, '')
              .replace(/[\s_-]+/g, '-')
              .replace(/^-+|-+$/g, '') === params.slug,
        ),
      )
    }
  }

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(items.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(items.length / itemsPerPage))

    if (clickPaginate === true) {
      setTimeout(function () {
        ref.current?.scrollIntoView({ block: 'start', behavior: 'smooth' })
      }, 300)
      setClickPaginate(false)
    }
  }, [
    setCurrentItems,
    setPageCount,
    setClickPaginate,
    itemOffset,
    itemsPerPage,
    clickPaginate,
    ref,
    items,
  ])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    setClickPaginate(true)
    setItemOffset(newOffset)
  }

  if (!items) return null

  return (
    <>
      <section className={`${className}`} ref={ref}>
        <div className="container mx-auto">
          <div className="flex">
            <div className="w-12/12 lg:w-10/12 mx-auto mb-20 grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
              <Items currentItems={currentItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Project
