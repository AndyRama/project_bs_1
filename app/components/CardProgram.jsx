'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const program = {
  heading: {
    title: 'Mes services',
    subTitle: 'programmes',
  },
}

const programs = [
  {
    title: 'Pack 1 Musculation | Homme Femme',
    subTitle: 'Personnel',
    description:
      'Coaching spécialisé pour les athlètes : si la compétition, le dépassement de soi et la discipline sont essentiels à votre vie et à votre bien-être, se fixer des objectifs concrets est un moyen efficace de les atteindre. Je vous propose un suivi musculation et alimentaire personnalisés pour relever les défis que vous vous fixerez.',
    mount: '3 mois (minimum)',
    time: '8h/semaine',
    btn: {
      href: '/prestations/#pack',
      label: 'Ok, je change de vie !',
    },
    image: '/images/plumber7.jpg',
  },
  {
    title: 'Pack 2 Musculation | Homme Femme',
    subTitle: 'Personnel',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus pariatur soluta corrupti quisquam illo ducimus adipisci recusandae possimus tempora esse, aspernatur repudiandae cupiditate ipsum enim, quibusdam porro odio sit. Quis!',
    mount: '3 mois (minimum)',
    time: '8h/semaine',
    btn: {
      href: '/prestations/#pack',
      label: 'Ok, je change de vie !',
    },
    image: '/images/plumber7.jpg',
  },
  {
    title: 'Pack 3 Musculation | Homme Femme',
    subTitle: 'Personnel',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus pariatur soluta corrupti quisquam illo ducimus adipisci recusandae possimus tempora esse, aspernatur repudiandae cupiditate ipsum enim, quibusdam porro odio sit. Quis!',
    mount: '3 mois (minimum)',
    time: '8h/semaine',
    btn: {
      href: '/prestations/#pack',
      label: 'Ok, je change de vie !',
    },
    image: '/images/plumber7.jpg',
  },
]

const CardProgram = ({ className }) => {
  return (
    <section className={`${className}`}>
      <div className="container px-4 md:px-8 mx-auto w-11/12 mb-10">
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
          className="uppercase tracking-[3px] text-sm inline-block text-red-500"
        >
          {program.heading.subTitle}
        </motion.span>
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
          className="text-2xl lg:text-4xl text-[#2F2E2E]"
        >
          {program.heading.title}
        </motion.h2>
      </div>

      <div className="container px-4 md:px-16 mx-auto">
        {programs.map((program, index) => (
          <div
            key={index}
            className="md:flex justify-between space-x-0 mb-10"
          >
            <div className="lg:w-8/12">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                data-testid="program-title"
                className="text-red-500 font-bold text:lg md:text-2xl w-auto lg:w-screen max-w-xl mb-2"
              >
                {program.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="leading-relaxed text-[#2F2E2E] text-justify max-w-xl text-lg mb-10 lg:mb-16"
              >
                {program.description}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                <Link
                  href={program.btn.href}
                  alt="prestations page"
                  className="transistion-all duration-300 ease-in-out text-[14px] 
                    tracking-[2px] font-bold uppercase text-[#2F2E2E] hover:text-red-500 
                    hover:border-red-400 bg-transparent py-4 px-5 rounded inline-block 
                    border hover:shadow-2xl mb-10"
                >
                  {program.btn.label}
                </Link>
              </motion.button>
            </div>
            <div className="md:w-6/12 mb-10">
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delai: 0.4,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className="z-[1] relative bg-cover bg-center"
              >
                <Image
                  src={program.image}
                  width={300}
                  height={400}
                  alt="program image"
                  className="rounded-md h-[300px] w-[400px] "
                />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CardProgram
