import React from 'react'
import { FaUsers, FaClock, FaDollarSign, FaSmile } from 'react-icons/fa'

function CTA2() {
  return (
    <div className="bg-[#1D1D1D] text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 items-center text-center">
        {/* Icône et description 1 */}
        <div className="flex flex-col items-center">
          <FaUsers className="text-5xl mb-4 border border-white rounded-full py-2" />
          <h4 className="text-lg font-bold text-white">Équipe d&apos;experts</h4>
          <p className="text-sm">Assurant un service de haute qualité et des solutions fiables.</p>
        </div>

        {/* Icône et description 2 */}
        <div className="flex flex-col items-center">
          <FaClock className="text-5xl mb-4 " />
          <h4 className="text-lg font-bold text-white">Services d&apos;urgence 24h/24 et 7j/7</h4>
          <p className="text-sm">Résolvez rapidement les problèmes urgents et minimisez les perturbations.</p>
        </div>

        {/* Icône et description 3 */}
        <div className="flex flex-col items-center">
          <FaDollarSign className="text-5xl mb-4 border border-white rounded-full py-2" />
          <h4 className="text-lg font-bold text-white">Tarification transparente</h4>
          <p className="text-sm">Nous proposons des tarifs clairs et précis, sans frais cachés.</p>
        </div>

        {/* Icône et description 4 */}
        <div className="flex flex-col items-center">
          <FaSmile className="text-5xl mb-4 border border-white rounded-full py-2" />
          <h4 className="text-lg font-bold text-white">Satisfaction client</h4>
          <p className="text-sm">Des solutions sur mesure pour répondre à vos besoins spécifiques.</p>
        </div>
      </div>
    </div>
  )
}

export default CTA2
