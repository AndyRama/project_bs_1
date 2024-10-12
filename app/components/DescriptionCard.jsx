'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const CardDescription = ({ className, title, subTitle, description }) => {
  const cardDescriptionContent = {
    heading: {
      title: title || '',
      subTitle: subTitle || '',
      description: description || '',
    },
    content: {
      img: '/images/plumber8.jpg',
      descriptions: [
        "Expresse Dépannage intervient 24h/24 et 7j/7 pour tous vos besoins en plomberie et sanitaires. En cas de fuite d'eau ou de problème avec vos installations, notre équipe de professionnels qualifiés se déplace rapidement pour vous dépanner efficacement.",
        "Une urgence plomberie ? Pas de panique ! Expresse Dépannage est à votre service 24h/24 et 7j/7 pour des interventions rapides et professionnelles. Nous nous déplaçons immédiatement pour régler tous vos problèmes de plomberie, où que vous soyez en Gironde.",
        "Avec Expresse Dépannage, vous n’êtes jamais seul face à une urgence plomberie. Disponible jour et nuit, nos techniciens qualifiés se mobilisent pour intervenir rapidement et efficacement sur toutes vos installations, du débouchage à la réparation de fuites."
      ],
    },
  }

  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imgScroll1 = useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])

  return (
    <section className={`${className}`} ref={ref}>
      <div className="container px-4 mx-auto pb-20">
        <div className="text-start lg:max-w-xl pb-0 md:pb-10 relative z-[5]">
          {cardDescriptionContent.heading.subTitle && (
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
              className="uppercase tracking-[3px] text-[12.5px] inline-block "
            >
              {cardDescriptionContent.heading.subTitle}
            </motion.span>
          )}

          {cardDescriptionContent.heading.title && (
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
              className="text-2xl lg:text-4xl text-red-500"
            >
              {cardDescriptionContent.heading.title}
            </motion.h2>
          )}
        </div>

        <div className="lg:flex justify-center">
          <div className="w:12/12 lg:flex gap-20 items-center md:items-start">
            <div className="mb-7 lg:mb-0 lg:w-6/12 lg:order-2 relative">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.4,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                style={{ y: imgScroll1 }}
                className="z-[2] relative bg-cover bg-center"
              >
                <Image
                  src={cardDescriptionContent.content.img}
                  className="w-[500px] h-[400px] lg:max-w-2xl object-end rounded-md"
                  alt="Andy profile"
                  width={350}
                  height={400}
                />
              </motion.div>
            </div>

            <div className="lg:w-6/12 text-justify lg:text-base mt-10">
              {cardDescriptionContent.content.descriptions.map(
                (description, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.2,
                        duration: 0.5,
                      },
                    }}
                    viewport={{ once: true }}
                    className="text-lg mb-7 text-gray-500"
                  >
                    {description}
                  </motion.p>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardDescription
