import React from 'react'

const CTA1 = () => {
  return (
    <div className="bg-[#1D1D1D] text-white lg:py-12 py-8">
      <div className="container h-[380] md:h-[200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-4 md:px-8">
        {/* Partie gauche avec le texte et les numéros */}
        <div>
          <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-4 text-white">
            Expresse Dépannage intervient 24h/24 et 7j/7 pour tous vos besoins en plomberie au
            <span className="text-red-500"> 05 56 34 89 79</span>
          </h3>
          <p className="text-lg bg-red-500 inline-block px-4 py-4 rounded-md font-bold">
            en cas d&apos;urgence :{' '}
            <span className="bg-[#1D1D1D] px-2 py-2 rounded-md">
              06 56 34 69 55
            </span>
          </p>
        </div>

        {/* Partie droite avec les statistiques */}
        <div className="grid grid-cols-2 gap-6 text-center">
          <div>
            <p className="text-3xl lg:text-5xl font-bold">+10</p>
            <p className="text-md md:text-lg">Nos années d&apos;expérience</p>
          </div>
          <div>
            <p className="text-3xl lg:text-5xl font-bold">+500</p>
            <p className="text-md md:text-lg">Réalisations</p>
          </div>
          <div>
            <p className="text-3xl lg:text-5xl font-bold">+600</p>
            <p className="text-md md:text-lg">Clients satisfaits</p>
          </div>
          <div>
            <p className="text-3xl lg:text-5xl font-bold">+8</p>
            <p className="text-md md:text-lg">Notre équipe expérimentée</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA1
