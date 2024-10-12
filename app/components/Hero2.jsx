import Image from "next/image";
import React from "react";

const Hero2 = () => {
  return (
    <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Texte à gauche */}
      <div>
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
          Réalisations effectuer en matière d&apos;excellence de plomberie depuis 2006
        </h2>
        <p className="text-gray-600 mb-6">
          Notre entreprise a commencé avec la vision de révolutionner
          l&apos;industrie de la plomberie en France. Ce qui a commencé comme une
          petite entreprise familiale est devenue un nom de confiance connu pour
          sa fiabilité et son savoir-faire de qualité.
        </p>
        <ul className="list-none text-gray-600 space-y-2 mb-6">
          <li className="flex items-center">
            <span className="mr-2">✔️</span> Flexible et rentable
          </li>
          <li className="flex items-center">
            <span className="mr-2">✔️</span> Programmes Pass Annuels
          </li>
          <li className="flex items-center">
            <span className="mr-2">✔️</span> Employés formés
          </li>
          <li className="flex items-center">
            <span className="mr-2">✔️</span> Solutions de qualité et
            satisfaction
          </li>
        </ul>
        <a
          href="#"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-500 transition"
        >
          À propos de nous →
        </a>
      </div>

      {/* Images à droite */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Image
          className="rounded-lg shadow-lg"
          src="/public/images/plumber7.jpg"
          alt="Image 1"
          width={280}
          height={370}
        />
        <Image
          className="rounded-lg shadow-lg"
          src="/public/images/plumber9.jpg"
          alt="Image 2"
          width={320}
          height={530}
        />
        <div className="col-span-2 flex items-center space-x-4 mt-4">
          <div className="flex items-center space-x-2">
            <Image
              className="w-10 h-10 rounded-full"
              src="/public/images/fara.png"
              alt="Client 1"
              width={40}
              height={40}
            />
            <Image
              className="w-10 h-10 rounded-full"
              src="/public/images/user6.jpg"
              alt="Client 2"
               width={40}
              height={40}
            />
            <Image
              className="w-10 h-10 rounded-full"
              src="/public/images/user5.jpg"
              alt="Client 3"
               width={40}
              height={40}
            />
          </div>
          <div>
            <p className="text-gray-600">
              Nos clients se déclarent satisfaits de nos précieux services.
            </p>
            <p className="text-lg font-semibold text-gray-800">4.7 / 5 ⭐</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
