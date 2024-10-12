'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const subHeroContent = {
  heading: {
    subTitle: '',
    title: '',
    description: '',
  },
}
const SubHero = ({ className, title, subTitle, description, image }) => {
  title = title || subHeroContent.heading.title
  subTitle = subTitle || subHeroContent.heading.subTitle
  description = description || subHeroContent.heading.description

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const imgScroll1 = useTransform(scrollYProgress, [0, 1], ['20%', '-20%'])

  return (
    <section className={`${className}`}>
      <div className="container mx-auto px-4">
        <div className="lg:flex lg:w-12/12 mx-auto">
          {/* Content center - subtitle */}
          <div className="lg:max-w-3xl mx-auto mt-[75px] mb-10">
            {subTitle && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.03, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="uppercase tracking-[3px] text-[18px]
                  mb-5 inline-block text-orange-500 font-bold"
              >
                {subTitle}
              </motion.span>
            )}

            {/* Content center - title */}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.06, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl xl:text-7xl text-[#2F2E2E] mb-10"
              >
                {title}
              </motion.h2>
            )}

            {/* Content left - description */}
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="leading-relaxed text-gray-500 w-auto lg:w-screen max-w-xl text-left lg:text-lg mb-10 lg:mb-16"
              >
                {description}
              </motion.p>
            )}
          </div>

          {/* Image right */}
          <div className="lg:w-12/12 relative lg:-mt-140 mb-8 ">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  delai: 0.4,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
              style={{ y: imgScroll1 }}
              className="z-[2] relative bg-cover bg-center"
            >
              {image && (
                <Image src={image} width={700} height={985} alt="hero image" />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubHero
