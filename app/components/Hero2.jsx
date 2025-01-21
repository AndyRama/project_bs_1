'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';


const Hero2 = () => {
  return (
    <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Texte à gauche avec animations */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
        viewport={{ once: true }}
      >
        <h3 className="text-gray-600 text-sm mb-2 flex items-center">
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.5 18v-6h-3v6h-2v-7.5h-1.5v-2h1.5V8.5C7 7.671 7.671 7 8.5 7H11V4.5h2V7h2v2h-2v2h3v1.5h-3v6h-2z" />
          </svg>
          À propos de nous
        </h3>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Réalisations effectuer en matière d&apos;excellence de plomberie depuis 2006
        </h2>
        <p className="text-gray-600 mb-6">
          Notre entreprise a commencé avec la vision de révolutionner l&apos;industrie de la plomberie en France. Ce qui a commencé comme une petite entreprise familiale est devenu un nom de confiance connu pour sa fiabilité et son savoir-faire de qualité.
        </p>
        <ul className="space-y-3 text-gray-600 mb-6">
          {[
            "Flexible et rentable",
            "Programmes Pass Annuels",
            "Employés formés",
            "Solutions de qualité et satisfaction",
          ].map((text, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: index * 0.2 } }}
              viewport={{ once: true }}
              className="flex items-center"
            >
              <span className="mr-2 text-red-500">✔️</span> {text}
            </motion.li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-500 transition mt-10"
        >
          À propos de nous →
        </Link>
      </motion.div>

      {/* Images à droite avec animations */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-4"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.5 } }}
          viewport={{ once: true }}
          className="relative"
        >
          <Image
            src="/images/plumber7.jpg"
            alt="Plombier au travail"
            className="rounded-lg shadow-lg object-cover"
            width={500}
            height={600}
            priority
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
          viewport={{ once: true }}
          className="relative"
        >
          <Image
            src="/images/plumbing-job.jpg"
            alt="Réparation lavabo"
            className="rounded-lg shadow-lg object-cover"
            width={500}
            height={600}
          />
        </motion.div>

        {/* Section Avis */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.4 } }}
          viewport={{ once: true }}
          className="col-span-2 mt-4 bg-gray-50 rounded-lg p-4 shadow-lg flex flex-col items-center"
        >
          <p className="text-gray-800 text-sm text-center mb-2">
            Nos clients se déclarent satisfaits de nos précieux services.
          </p>
          <div className="flex items-center space-x-2 mb-2">
            {[1, 2, 3].map((i) => (
              <Image
                key={i}
                src={`/images/avatar${i}.jpg`}
                alt={`Client ${i}`}
                width={30}
                height={30}
                className="rounded-full"
              />
            ))}
          </div>
          <div className="flex items-center text-yellow-500">
            <span className="text-2xl font-bold mr-2">4.7</span>
            <span className="text-sm">/ 5</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero2;
