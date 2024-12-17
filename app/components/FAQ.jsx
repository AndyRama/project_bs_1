'use client'

import Link from 'next/link'
import { useState } from 'react'

const FAQ = () => {
  // Utilisation du hook useState pour suivre l'index actif
  const [activeIndex, setActiveIndex] = useState(null)

  // Fonction pour basculer l'état de l'accordéon
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index) // Ouvre ou ferme la question
  }

  // Liste des questions et réponses de la FAQ
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
    <div className="container mx-auto w-full md:w-10/12 mt-20 pb-20 px-4 ">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Section gauche : titre et bouton de contact */}
        <div className="md:col-span-1">
          <h2 className="text-3xl font-bold mb-4">FAQs</h2>
          <p className="mb-4">
            Retrouvez ici les réponses à vos questions sur nos services de
            plomberie.
          </p>
          <Link
            href="/contact"
            alt="page contact"
            className="bg-black text-white px-4 py-2 rounded"
          >
            {' '}
            Contact
          </Link>
          {/* <button  href="/Contact">Contact</button> */}
        </div>

        {/* Section droite : questions et réponses */}
        <div className="md:col-span-2">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b">
              <div
                className="flex justify-between items-center cursor-pointer py-4"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-md md:text-lg font-semibold">
                  {faq.question}
                </h3>
                <span>{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && (
                <div className="text-gray-600 pb-4">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ
