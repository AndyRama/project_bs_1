'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero2 = () => {
  return (
    <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-32 md:pt-52">
      {/* Texte à gauche */}
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
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Réalisations effectuer en matière d&apos;excellence de plomberie depuis 2016
        </h2>
        <p className="text-gray-600 mb-6">
          Chez Expresse Dépannage, notre mission est de vous accompagner face à toutes vos urgences en plomberie, 24h/24 et 7j/7. Que ce soit pour une fuite d&apos;eau, un débouchage ou une réparation urgente, nos techniciens qualifiés interviennent rapidement pour garantir votre sérénité.
        </p>
        <ul className="hidden lg:contents list-none text-gray-600 space-y-4 mb-6">
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <span className="mr-2">✔️</span> <strong>Service 24h/24 et 7j/7</strong>: Toujours disponibles pour répondre à vos urgences.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.4 } }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <span className="mr-2">✔️</span> <strong>Interventions rapides et efficaces</strong>: Des techniciens qualifiés à votre service.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.6 } }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <span className="mr-2">✔️</span> <strong>Transparence et tarifs compétitifs</strong>: Aucune mauvaise surprise, des prix clairs.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.8 } }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <span className="mr-2">✔️</span> <strong>Fiabilité et solutions durables</strong>: Votre satisfaction, notre priorité.
          </motion.li>
        </ul>
        <Link
          href="/contact"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-500 transition"
        >
          À propos de nous →
        </Link>
      </motion.div>

      {/* Images à droite */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        <Image
          className="rounded-lg shadow-lg"
          src="/images/plumber7.jpg"
          alt="Image 1"
          width={280}
          height={370}
        />
        <Image
          className="rounded-lg shadow-lg"
          src="/images/plumbing-job.jpg"
          alt="Image 2"
          width={320}
          height={530}
        />
      </motion.div>
    </div>
  );
};

export default Hero2;
