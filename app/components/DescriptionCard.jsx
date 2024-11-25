'use client'

import React, { useState } from 'react'
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
      img: '/images/banner.jpg',
      descriptions: [
        "Expresse Dépannage intervient 24h/24 et 7j/7 pour tous vos besoins en plomberie et sanitaires. En cas de fuite d'eau ou de problème avec vos installations, notre équipe de professionnels qualifiés se déplace rapidement pour vous dépanner efficacement.",
        "Avec Expresse Dépannage, vous n’êtes jamais seul face à une urgence plomberie. Disponible jour et nuit, nos techniciens qualifiés se mobilisent pour intervenir rapidement et efficacement sur toutes vos installations, du débouchage à la réparation de fuites.",
        "Avec notre expertise et notre réactivité, nous garantissons des solutions fiables pour protéger vos installations et vous offrir une tranquillité d’esprit. Faites confiance à Expresse Dépannage, le choix numéro un pour vos besoins urgents en plomberie.",

      ],
    },
  }

  const [visibleCount, setVisibleCount] = useState(2) // Par défaut, on affiche 2 paragraphe
  const [isExpanded, setIsExpanded] = useState(false)

  const loadMore = () => {
    setVisibleCount(cardDescriptionContent.content.descriptions.length) // Affiche tous les paragraphes
    setIsExpanded(true) // Affiche le bouton "Voir moins"
  }

  const loadLess = () => {
    setVisibleCount(2) // Réduit à 2 paragraphe
    setIsExpanded(false) // Cache le bouton "Voir moins"
  }

  return (
    <section className={`${className}`}>
      <div className="px-4 mx-auto  ">
        <div className="text-start lg:max-w-xl relative z-[5]">
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
              className="uppercase tracking-[3px] text-[12.5px] inline-block"
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

        <div className="lg:flex justify-center ">
          <div className="w:10/12 lg:flex gap-20 items-center md:items-start">
            <div className="mb-7 lg:mb-0 lg:w-12/12 lg:order-1 relative mx-auto">
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
                className="z-[2] relative "
              >
                <Image
                  src={cardDescriptionContent.content.img}
                  className="md:flex w-[500px] h-[450px] lg:w-[650px] lg:h-[500px] object-fit lg:max-w-2xl rounded-md"
                  alt="Plumber"
                  width={250}
                  height={300}
                />
              </motion.div>
            </div>

            <div className="lg:w-6/12 text-justify lg:text-base mt-10">
              {cardDescriptionContent.content.descriptions
                .slice(0, visibleCount)
                .map((description, index) => (
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
                ))}

              <div className="justify-center mt-6">
                {!isExpanded &&
                  visibleCount <
                    cardDescriptionContent.content.descriptions.length && (
                    <motion.button
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
                      onClick={loadMore}
                      className="bg-gradient-to-r from-red-500 to-red-800 text-white px-4 py-2 rounded-md"
                    >
                      Plus d&apos;infos
                    </motion.button>
                  )}

                {isExpanded && (
                  <button
                    onClick={loadLess}
                    className="bg-gradient-to-r from-red-500 to-red-800 text-white px-4 py-2 rounded-md"
                  >
                    Voir moins
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardDescription
