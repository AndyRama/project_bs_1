'use client'
import React from 'react'
import { motion } from 'framer-motion'

const pricingOptions = [
  {
    title: ' Programmation niveau',
    subtitle: 'Débutant(4 Mois)',
    price: '150€',
    subPrice: '(3 * 150€ / 3 mois) ',
    features: [
      'Pack adapté aux débutants dans la musculation.',
      'Programme de musculation personalisé en fonction de tes objectifs.',
      'Accompagnement sur les divers TCA ou problématique de santé.',
      'Plan alimentaire adapté à tes besoins.',
      'Bilan mensuel photo + mensuration avec un suivi plus approfondi.',
      'Communication whatsApp & Email + visio ou call chaque mois.',
    ],
  },
  {
    title: ' Programmation niveau',
    subtitle: 'Intermerdaire (4 Mois)',
    price: '150€',
    subPrice: '(3 * 150€ / 3 mois) ',
    features: [
      'Pack adapté aux initiés ayant déja des bases en musculation.',
      'Programme de musculation personalisé en fonction de tes objectifs. ',
      'Plan alimentaire adapté à tes besoins.',
      'Accompagnement sur les divers TCA ou problématique de santé.',
      'Bilan mensuel photo + mensuration avec un suivi plus approfondi.',
      'Communication whatsApp & Email + visio ou call chaque mois.',
    ],
  },
  {
    title: ' Programmation niveau',
    subtitle: 'Confirmé (4 Mois)',
    price: '150€',
    subPrice: '(3 * 150€ / 3 mois) ',
    features: [
      'Pack adapté aux initiés ayant déja des bases en musculation depuis plusieurs années.',
      'Programme de musculation personalisé en fonction de tes objectifs. ',
      'Plan alimentaire adapté à tes besoins.',
      'Accompagnement sur les divers TCA ou problématique de santé.',
      'Bilan mensuel photo + mensuration avec un suivi plus approfondi.',
      'Communication whatsApp & Email + visio ou call chaque mois.',
    ],
  },
]

const PricingPack = () => {
  const delay = (index) => index * 0.05

  return (
    <section className="mt-20 mb-20">
      <div className="transform-gpu blur-3xl">
        <div className="absolute right-0 opacity-30 md:opacity-50 -z-20 w-48 h-52 bg-gradient-to-r from-orange-300 to-orange-500 "></div>
      </div>
      <h2
        id="pack"
        className="text-[#2F2E2E] text-2xl md:text-5xl text-center mb-20"
      >
        Mes Services
      </h2>
      <div className="container px-4 md:px-4 mx-auto">
        {/* Main Card Pricing - content  */}
        <div className="flex flex-wrap ">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delay(index), duration: 0.5 }}
              className="w-full sm:w-1/2 lg:w-1/3 p-2"
            >
              <div className="p-10 bg-white border border-[#2F2E2E] rounded-md">
                {/* Card Pricing - Header - Title */}
                <p className="text-3xl mb-1 text-center text-[#2F2E2E]">
                  {option.title}
                </p>
                {/* Card Pricing - Header - subTitle */}
                <p className="text-xl mb-6 text-[#ff5e29] text-center">
                  {option.subtitle}
                </p>
                <hr />
                {/* Card Pricing - Header - Price  */}
                <p className="mt-2 mb-1 text-center">
                  <span className="text-4xl text-[#ff5e29]  mt-6 mr-2">
                    {option.price}
                  </span>
                  <span className="text-[#ff5e29] tracking-tight">/ Mois</span>
                </p>
                {/* Card Pricing - Header - subPrice  */}
                <p className="text-xl mb-6 text-[#2F2E2E] text-center">
                  {option.subPrice}
                </p>

                {/* Card Pricing - btn - action */}

                <motion.a
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: delay(pricingOptions.length),
                    duration: 0.5,
                  }}
                  className="inline-flex justify-center items-center text-black text-center
                   w-full h-12 p-5 tracking-tight text-xl bg-gradient-to-r from-orange-300 to-orange-500 hover:bg-transparent
                    hover:text-[#2F2E2E] rounded-md transition 
                   duration-200"
                >
                  Choisir le plan
                </motion.a>

                {/* Card Pricing - main - contents */}
                <ul>
                  {option.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: delay(index), duration: 0.5 }}
                      className="mt-8 flex items-center text-[#ff5e29]"
                    >
                      •<span className="ml-2 text-[#2F2E2E]">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingPack
