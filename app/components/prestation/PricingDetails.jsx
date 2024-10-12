'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BiLayer } from 'react-icons/bi'
import {
  HiOutlineSparkles,
  HiOutlineFolder,
  HiOutlineCode,
} from 'react-icons/hi'

const PricingContentDetails = {
  features: [
    {
      icon: HiOutlineCode,
      title: 'Développement Web Sur Mesure',
      description:
        "En tant que développeur web indépendant, je vous propose des solutions entièrement personnalisées pour répondre à vos besoins spécifiques. Que vous cherchiez à créer un site e-commerce, un portail d'entreprise ou une plateforme de gestion de contenu, je conçois des sites web sur mesure, optimisés pour offrir une expérience utilisateur exceptionnelle et des performances de pointe. Grâce à mon expertise approfondie dans les dernières technologies web, je vous garantis un produit final de qualité supérieure, évolutif et sécurisé.",
    },
    {
      icon: HiOutlineSparkles,
      title: "Créez votre site web en un clin d'œil avec IA",
      description:
        "Grâce à notre IA de pointe, créez un site web personnalisé en quelques clics. Notre technologie analyse vos besoins pour concevoir un site sur mesure, professionnel et attrayant.Que ce soit pour améliorer l'engagement des utilisateurs, automatiser des tâches ou exploiter les données de manière intelligente, l'intégration de l'IA apportera une valeur ajoutée significative à votre site web.",
    },
    {
      icon: BiLayer,
      title: 'Optimisation pour les Moteurs de Recherche (SEO)',
      description:
        "Je comprends l'importance cruciale du référencement naturel pour assurer la visibilité et le succès de votre site web. C'est pourquoi j'intègre des stratégies SEO avancées dès la phase de conception, afin d'optimiser votre site pour les moteurs de recherche les plus populaires. En analysant en profondeur votre secteur d'activité, vos mots-clés cibles et la concurrence, je mets en place des techniques éprouvées qui amélioreront le classement de votre site dans les résultats de recherche.",
    },
    {
      icon: HiOutlineFolder,
      title: 'Maintenance et Assistance Continues',
      description:
        "Je ne me contente pas de livrer un site web fonctionnel ; je m'engage à assurer sa pérennité et son succès à long terme. Mon service de maintenance et d'assistance continue vous offre un soutien technique régulier, des mises à jour de sécurité, des sauvegardes régulières et une surveillance constante des performances. De plus, je suis disponible pour répondre à toutes vos questions ou préoccupations, garantissant ainsi une expérience client exceptionnelle.",
    },
  ],
}

const PricingDetails = ({ className }) => {
  return (
    <>
      <section className="mt-10 pb-20">
        <div className="transform-gpu blur-3xl">
          <div className="absolute left-0 opacity-30 md:opacity-50 -z-20 w-56 h-64 bg-gradient-to-r from-orange-300 to-orange-500"></div>
        </div>
        <div className="container px-4 mx-auto">
          <h3 className="text-[#ff5e29] text-xl text-left">
            Ce que je te propose
          </h3>
          <h2 className="text-[#2F2E2E] text-3xl text-left mb-20">
            Détails de mes services
          </h2>
          <div className="lg:flex justify-center">
            <div className="w-full lf:w-8/12 flex gap-0 items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {PricingContentDetails.features.map((feature, index) => {
                  index *= 0.2
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: index,
                          duration: 0.5,
                        },
                      }}
                      viewport={{ once: true }}
                      key={feature.title}
                      className="relative z-5 flex gap-3
                      items-start "
                    >
                      <div>
                        <div className="flex">
                          <span className="text-3xl text-[#ff5e29] mr-4">
                            <feature.icon />
                          </span>
                          <h3 className="text-lg mb-4 text-[#2F2E2E]">
                            {feature.title}
                          </h3>
                        </div>
                        <p
                          className="leading-relaxed text-[15px] text-[#2F2E2E]
                          text-opacity-75 mb-7 text-justify"
                        >
                          {/* <span>• </span> */}
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
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
            className="btn-container text-left mt-5"
          ></motion.div>
        </div>
        <div className="transform-gpu blur-3xl">
          <div className="absolute right-0 opacity-30 md:opacity-50 -z-20 w-56 h-64 bg-gradient-to-tr from-orange-300 to-orange-500"></div>
        </div>
      </section>
    </>
  )
}

export default PricingDetails
