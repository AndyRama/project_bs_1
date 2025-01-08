'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const faqs = [
    {
      question: 'Quels sont vos tarifs ?',
      answer:
        'Nos tarifs sont compétitifs et varient en fonction du type d’intervention. Nous proposons une grille tarifaire claire, sans frais cachés, pour garantir une totale transparence.',
    },
    {
      question: 'Notre rapidité d’intervention en 40 min ?',
      answer:
        'Nous sommes fiers de nos délais d’intervention ultra-rapides. En cas d’urgence, nous pouvons être sur place en moins de 30 minutes. Vos problèmes de plomberie sont notre priorité !',
    },
    {
      question: 'Proposez-vous des garanties ?',
      answer:
        'Oui, toutes nos interventions et pièces sont couvertes par une garantie. Cela vous assure des réparations de qualité, durables dans le temps. Votre satisfaction est notre engagement.',
    },
    {
      question: 'Vos plombiers sont-ils certifiés ?',
      answer:
        'Bien entendu ! Tous nos plombiers sont certifiés et assurés. Ils suivent régulièrement des formations pour se tenir au courant des dernières techniques et réglementations en plomberie.',
    },
    {
      question: 'Quels types de services offrez-vous ?',
      answer:
        'Nous proposons une large gamme de services, incluant les dépannages d’urgence, les installations, et l’entretien courant. Que ce soit pour une petite fuite ou un projet plus complexe, nous sommes là pour vous aider !',
    },
    {
      question: 'Intervenez-vous en dehors de la Gironde ?',
      answer:
        'Nous sommes principalement actifs en Gironde pour des interventions rapides, mais nous pouvons nous déplacer au-delà selon les besoins et la nature de l’intervention.',
    },
    {
      question: 'Comment éviter une urgence plomberie ?',
      answer:
        'Pour éviter une urgence, il est recommandé d’effectuer un entretien régulier de vos installations (débouchage, vérification des joints et des conduites d’eau, etc.). Nos services de maintenance peuvent vous aider à prévenir ces incidents.',
    },
    {
      question: 'Comment contacter votre service d’urgence ?',
      answer:
        'Vous pouvez nous contacter 24h/24 et 7j/7 via notre numéro dédié aux urgences ou directement via notre formulaire en ligne. Nous sommes toujours disponibles pour intervenir rapidement.',
    },
    {
      question: 'Quels sont vos délais pour un dépannage d’urgence ?',
      answer:
        'Nos délais sont en général de 30 à 60 minutes, selon votre localisation en Gironde. Nous faisons tout notre possible pour être sur place au plus vite.',
    },
  ]

  return (
    <div className="container mx-auto max-w-6xl mt-20 pb-20 px-4 ">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Section gauche : titre et bouton de contact */}
        <div className="md:col-span-1">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.05, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            FAQs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.1, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="mb-4"
          >
            Retrouvez ici les réponses à vos questions sur nos services de
            plomberie.
          </motion.p>
          <motion.Link
            href="/contact"
            alt="page contact"
            className="bg-black text-white px-4 py-2 rounded"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.15, duration: 0.5 },
            }}
            viewport={{ once: true }}
          >
            {' '}
            Contact
          </motion.Link>
        </div>

        {/* Section droite : questions et réponses */}
        <div className="md:col-span-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 border-b"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.1, duration: 0.4 },
              }}
              viewport={{ once: true }}
            >
              <div
                className="flex justify-between items-center cursor-pointer py-4"
                onClick={() => toggleAccordion(index)}
              >
                <motion.h3
                  className="text-md md:text-lg font-semibold"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.1, duration: 0.4 },
                  }}
                  viewport={{ once: true }}
                >
                  {faq.question}
                </motion.h3>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: { delay: 0.2, duration: 0.3 },
                  }}
                  viewport={{ once: true }}
                >
                  {activeIndex === index ? '-' : '+'}
                </motion.span>
              </div>
              {activeIndex === index && (
                <motion.div
                  className="text-gray-600 pb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.4 },
                  }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ
