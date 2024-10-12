'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import Image from 'next/image'
import Link from 'next/link'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const recentProjectContent = {
  heading: {
    title: 'Réalisations ',
    subTitle: 'Mes Expériences',
  },
  btn: {
    href: '/projects',
    label: '+ de projets',
  },
  main: {
    title: 'Les Projets',
  },
  recentProjects: [
    {
      img: '/images/unlcoaching.png',
      title: 'Unlcoaching.com',
      years: 'Mars. 2024',
      type: 'Site vitrine',
      name: 'Jérémy Prat',
      role: 'Coach Sportif',
      quote:
        "Ayant à présent un développeur web capable de transformer mes idées ambitieuses en solutions numériques, J'ai demandé à Andy de réaliser un autre project pour moi. Un site web vitrine avec un blog présentant mon activité de coaching, on a réalisé la maquette ensemble puis l'a intégrée pour me livrer un site web responsive et performant.",
    },
    {
      img: '/images/Fille-de-la-grace2.png',
      title: 'Fille-de-la-grace.com',
      years: ' Avril 2024',
      type: 'Refonte du site complet',
      name: 'Fara Rabefary',
      role: 'Designe interieur',
      quote:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ipsum consectetur repellat, corporis eaque corrupti in dolores reprehenderit, enim consequatur dolore, nam praesentium sint veniam ad recusandae ab amet impedit  consectetur repellat, corporis eaque corrupti in dolores reprehenderit, enim consequatur dolore, nam praesentium sint veniam ad recusandae ab amet impedit !',
    },
    {
      img: '/images/Fille-de-la-grace1.png',
      title: 'Fille-de-la-grace.com',
      years: ' Avril 2024',
      type: "Création d'un blog",
      name: 'Fara Rabefary',
      role: 'Designe interieur',
      quote:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ipsum consectetur repellat, corporis eaque corrupti in dolores reprehenderit, enim consequatur dolore, nam praesentium sint veniam ad recusandae ab amet impedit  consectetur repellat, corporis eaque corrupti in dolores reprehenderit, enim consequatur dolore, nam praesentium sint veniam ad recusandae ab amet impedit !',
    },
    {
      img: '/images/desktop.jpg',
      title: 'VanilleB2B.com',
      years: ' Mai 2024',
      type: 'Refonte du site complet',
      name: 'Honoré Rabefary',
      role: 'Landscape Architect',
      quote:
        'Collaborating with Lemurian on projects has been a rewarding experience. Their ability to seamlessly integrate indoor and outdoor spaces, creating a harmonious flow, has elevated the overall design and user experience.',
    },
    {
      img: '/images/lemurianV1.png',
      title: 'AndyRamaroson.com',
      years: 'Juin 2024',
      type: 'Site vitrine',
      name: 'Andy Ramaroson',
      role: 'Développeur Fullstack Js',
      quote:
        "Réalisation d'un portfolio afin de présenter mon activité, Je souhaitais aussi tenir un blog tech me permetant de partager régulièrement mes connaissances et mes réflexions sur les dernières tendances du développement web.  Vitrine en ligne captivante pour promouvoir mon expertise, attirer nouveaux clients, collaborer avec d'autres professionnels en mettant en valeur quelques réalisations.",
    },
    {
      img: '/images/unlcoaching.png',
      title: 'School-Unlcoaching.com',
      years: ' Juin 2024',
      type: 'Application web',
      name: 'Jérémy Prat',
      role: 'Coach Sportif',
      quote:
        "En tant qu'entrepreneur exigeant, je recherchais un développeur web capable de transformer mes idées ambitieuses en solutions numériques percutantes. Andy s'est montré à l'écoute de mes besoins spécifiques, apportant des solutions créatives et adaptées à mon contexte d'enseignement. Mon site web est optimisé pour tous les appareils, offre une expérience fluide et facilite l'engagement et la participation des apprenants.",
    },
    // {
    //   img: '/images/desktop.jpg',
    //   title: 'MarketPlace.com',
    //   years: ' juil. 2024',
    //   type: 'Création du site de vente produit malgache',
    //   name: 'Fara Rabefary',
    //   role: 'Designe interieur',
    //   quote:
    //     'Collaborating with Lemurian on projects has been a rewarding experience. Their ability to seamlessly integrate indoor and outdoor spaces, creating a harmonious flow, has elevated the overall design and user experience.',
    // },
    // {
    //   img: '/images/desktop.jpg',
    //   title: 'Andyrb.com',
    //   years: ' Dec. 2024',
    //   type: 'Création du site location',
    //   name: 'Andy Ramaroson',
    //   role: 'Développeur Fullstack Js',
    //   quote:
    //     'Collaborating with Lemurian on projects has been a rewarding experience. Their ability to seamlessly integrate indoor and outdoor spaces, creating a harmonious flow, has elevated the overall design and user experience.',
    // },
  ],
}

const RecentProject = ({ className }) => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [isEnd, setIsEnd] = useState(false)
  const [isBeginning, setIsBeginning] = useState(true)
  const sliderRef = useRef(null)

  useEffect(() => {
    if (sliderRef.current) {
      setIsEnd(sliderRef.current.swiper.isEnd)
      setIsBeginning(sliderRef.current.swiper.isBeginning)
    }
  }, [])

  const prevHandler = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.swiper.slidePrev()
    }
  }, [])

  const nextHandler = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.swiper.slideNext()
    }
  }, [])

  return (
    <section className={`${className} overflow-hidden`}>
      <div className="container px-4 mx-auto">
        <div className="flex ">
          <div className="w-full gap-0 ">
            <div className="text-left w-auto md:w-screen max-w-full lg:max-w-xl">
              {recentProjectContent.heading.subTitle && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.2,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className="uppercase tracking-[3px] text-[12.5px] mb-2 inline-block text-[#ff5e29]"
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
                      delay: 0.3,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className="text-2xl lg:text-4xl mb-10 "
                >
                  {recentProjectContent.heading.title}
                </motion.h2>
              )}
            </div>
          </div>
        </div>

        <div className="lg:flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.9, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="w-full lg:w-12/12 lg:flex gap-0 items-center"
          >
            <Swiper
              ref={sliderRef}
              speed={700}
              spaceBetween={30}
              onSlideChangeTransitionEnd={(swiper) =>
                setSlideIndex(swiper.realIndex)
              }
              className="z-50 py-16 relative flex items-center"
            >
              {recentProjectContent.recentProjects.map(
                (recentProject, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div className="block md:flex overflow-y-visible items-stretch bg-[#f8f3f3] ">
                      <div className="md:w-5/12">
                        <Image
                          src={recentProject.img}
                          alt={recentProject.name}
                          width={500}
                          height={400}
                          className="object-cover h-[400px] w-[500px] object-center rounded-md border-2"
                        />
                      </div>
                      <div className="md:w-7/12 p-7 md:p-8 flex items-center">
                        <div>
                          <h2 className="text-2xl text-[#ff5e29] block">
                            {recentProject.title}
                          </h2>
                          <div className="flex space-x-2 text-sm">
                            <span>{recentProject.type}</span>
                            <span>&mdash;</span>
                            <p className="mb-4">{recentProject.years}</p>
                          </div>
                          <blockquote className="text-lg mb-4 text-gray-500">
                            {recentProject.quote}
                          </blockquote>
                          <p>
                            <strong>{recentProject.name}</strong>
                          </p>
                          <p>{recentProject.role}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ),
              )}
            </Swiper>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.9, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="flex justify-center md:mt-20"
        >
          <div className="flex space-x-3">
            <div
              onClick={prevHandler}
              className={`${
                isBeginning
                  ? 'opacity-30 bg-gray-300 text-gray-600 cursor-not-allowed'
                  : 'opacity-100 bg--[#ff5e29] text-white cursor-pointer'
              } relative top-0 group transition-all duration-300 ease-in-out w-12 h-12 rounded-full inline-flex justify-center items-center`}
            >
              <BiChevronLeft
                className={`text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-black`}
              />
            </div>

            <div
              onClick={nextHandler}
              className={`${
                isEnd
                  ? 'opacity-30 bg-gray-300 text-gray-600 cursor-not-allowed'
                  : 'opacity-100 bg-gradient-to-tr from-orange-400 to-orange-600 text-white cursor-pointer'
              } relative top-0 group transition-all duration-300 ease-in-out w-12 h-12 rounded-full inline-flex justify-center items-center`}
            >
              <BiChevronRight
                className={`text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-black`}
              />
            </div>

            {/*  Content center - btn Right + de Projects  */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true }}
            >
              <Link
                href={recentProjectContent.btn.href}
                className="transistion-all duration-300 ease-in-out text-[11.5px]
                      tracking-[2px] font-bold uppercase bg-gradient-to-tr from-orange-400 to-orange-600 py-4 px-3
                      rounded text-white inline-block items-end hover:text-black
                      hover:shadow-2xl h-12"
              >
                {recentProjectContent.btn.label}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RecentProject
