import React from 'react'
import Link from 'next/link'

const statContent = {
  stats: [
    { number: '5', label: 'Projets achevés' },
    { number: '3', label: "Années d'expériences" },
    { number: '2', label: 'Cafés par jour' },
    { number: '4', label: 'Clients' },
  ],
  getStarted: {
    heading: 'Besoin d’un développeur pour créer votre site ?',
    description: 'Contactez-moi, je reviendrai vers vous très rapidement.',
    image: '/images/icon.',
    cta: {
      cta_href: 'https://calendly.com/andyramaroson/30min',
      cta_label: 'Prendre rendez-vous',
    },
  },
}

const Stats = (className) => {
  return (
    <>
      <div className="transform-gpu blur-3xl">
        <div className="absolute left-0 opacity-30 md:opacity-50 -z-20 w-18 h-24 bg-gradient-to-tr from-red-300 to-red-500"></div>
      </div>
      <section className="mt-22 pb-32">
        {/* Content - Blur red - background - bottom-left */}
        <div className="container px-8 mx-auto lg:border border-black rounded-md">
          <div className="lg:flex justify-between items-center space-x-0">
            <div className="w-full lg:w-9/12 mb-10 lg:mb-0">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {statContent.stats.map((stat, index) => (
                  <div
                    className="text-center pt-8 w-full hover:shadow-lg transition-all duration-300 ease-in-out rounded-md h-[150px]"
                    key={index}
                  >
                    <strong className="text-primary text-4xl xl:text-[52px] font-bold leading-tight">
                      {stat.number}
                    </strong>
                    <br />
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <div className="bg-light py-10 lg:px-8 md:pr-32 rounded-lg relative">
                {statContent.getStarted.heading && (
                  <h3 className="text-heading font-bold text-xl mb-3">
                    {statContent.getStarted.heading}
                  </h3>
                )}

                {statContent.getStarted.description && (
                  <p className="text-md mb-5">
                    {statContent.getStarted.description}
                  </p>
                )}

                {statContent.getStarted.cta.cta_label && (
                  <Link
                    href={statContent.getStarted.cta.cta_href}
                    target="_blank"
                    className="block text-center text-[11.5px] tracking-[2px] font-bold uppercase 
                  bg-gradient-to-r from-red-300 to-red-500 py-4 px-5 hover:text-black text-white
                  rounded-md hover:shadow-2xl "
                  >
                    <span>{statContent.getStarted.cta.cta_label}</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Stats
