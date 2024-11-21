'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const statContent = {
  stats: [
    {
      number: '24h/24',
      label: 'interventions',
    },
    {
      number: '7j/7',
      label: "toutes l'années",
    },
  ],
}

const heroContent = {
  intro: {
    title: 'Depannage',
    subTitle: 'Express Plomberie',
    description:
      'Une urgence plomberie ? Pas de panique ! Expresse Dépannage est à votre service 24h/7 pour des interventions rapides et professionnelles partout en Gironde.',
    btn: {
      href: '#',
      label: '05.56.34.79.58',
    },
  },
}

const Hero = ({ className }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const imgScroll1 = useTransform(scrollYProgress, [0, 1], ['30%', '-20%'])

  return (
    <section className={`${className}`} ref={ref}>
      {/* Image - main - bg-cover  */}
      <div
        className="md-h-[110vh] -mt-[34px] bg-fixed bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url('/images/bg_home.jpg')`,
        }}
      >
        <div className="px-4 w-full flex justify-center pt-10 md:pt-20 pb-28 text-center">
          <div className="space-y-4 lg:space-y-8 max-w-4xl">
            {/* heure - intervention */}
            <div className="grid grid-cols-2 gap-4 pb-8">
              {statContent.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="font-bold text-white"
                >
                  <strong className="text-5xl xl:text-[64px] font-bold leading-tight">
                    {stat.number}
                  </strong>
                  <br />
                  <span className="text-xl font-semibold">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Titre */}
            {heroContent.intro.title && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="text-white font-bold text-6xl md:text-7xl lg:text-8xl"
              >
                {heroContent.intro.title}
              </motion.h1>
            )}

            {/* Sous-titre */}
            {heroContent.intro.subTitle && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.6, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="text-red-500 font-bold text-4xl md:text-7xl lg:text-8xl pb-8"
              >
                {heroContent.intro.subTitle}
              </motion.h2>
            )}

            {/* Description */}
            {heroContent.intro.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.8, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="text-white text-xl font-bold xl:text-3xl pb-10 leading-relaxed mx-auto"
              >
                {heroContent.intro.description}
              </motion.p>
            )}

            {/* Bouton */}
            {heroContent.intro.btn.label && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 1, duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                <Link
                  href={heroContent.intro.btn.href}
                  alt="Team Page redirection"
                  className="transistion-all duration-300 ease-in-out text-[22px] md:text-[28px] tracking-[2px] font-bold uppercase py-5 px-8
                    rounded text-white hover:text-red-500 border border-red-500 hover:border-white"
                >
                  {heroContent.intro.btn.label}
                </Link>
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
