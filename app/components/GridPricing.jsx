'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MdPlumbing } from 'react-icons/md'

const program = {
  heading: {
    title: 'FOURCHETTE DE PRIX FIXE',
    subTitle: 'Nos services',
  },
}

const services = [
  {
    title: "Réparation d'une fuite d'un tuyau",
    price: '149€ - 199€',
  },
  {
    title: "Débouchage d'un wc",
    price: '100€ - 200€',
  },
  {
    title: 'Débouchage de canalisation',
    price: '275€ - 390€',
  },
  {
    title: "Autre réparation d'un ballon d'eau chaude",
    price: '150€ - 350€',
  },
  {
    title: 'Recherche de fuite non destructive par détection technique',
    price: '380€ - 480€',
  },
  {
    title: "Réparation d'une fuite sur chasse d'eau",
    price: '149€ - 200€',
  },
  {
    title: "Installation d'un robinet",
    price: '150€ - 450€',
  },
  {
    title: "Installation d'un ballon d'eau chaude",
    price: '250€ - sur devis',
  },
  {
    title: "Installation d'un wc classique",
    price: '200€ - 500€',
  },
  {
    title: "Réparation d'une fuite de douche",
    price: '149€ - 200€',
  },
]

const PriceTable = () => {
  return (
    <section className="max-w-6xl mx-auto mt-20 pb-20">
      {/* Section header */}
      <div className="container px-4 mx-auto w-12/12 mb-10">
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

      {/* Table */}
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th className="py-2 px-4 font-semibold text-gray-700">Nos services</th>
            <th className="py-2 px-4 font-semibold text-gray-700">Prix</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: index * 0.1,
                  duration: 0.4,
                },
              }}
              viewport={{ once: true }}
              className="border-b border-gray-200"
            >
              <td className="py-3 px-4 text-black-600 flex items-center">
                <MdPlumbing className="mr-2 text-red-500" />
                <span>{service.title}</span>
              </td>
              <td className="py-3 px-4 text-gray-600">{service.price}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default PriceTable
