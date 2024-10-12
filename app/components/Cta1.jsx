import React from 'react'

const CTA1 = () => {
  return (
    <div className="bg-black text-white py-8">
      <div className="container h-[380] md:h-[180px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-8">
        {/* Partie gauche avec le texte et les numéros */}
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
            Expresse Dépannage intervient 24h/24 et 7j/7 <br /> pour tous vos
            besoins en plomberie et sanitaires <br /> au
            <span className="text-red-500"> 05 56 34 89 79</span>.
          </h3>
          <p className="text-sm md:text-base bg-red-500 inline-block px-4 py-2 rounded-md font-bold">
            en cas d&apos;urgence :{' '}
            <span className="bg-black px-2 py-1 rounded-md">
              06 56 34 69 55
            </span>
          </p>
        </div>

        {/* Partie droite avec les statistiques */}
        <div className="grid grid-cols-2 gap-6 text-center">
          <div>
            <p className="text-xl font-bold">+16</p>
            <p className="text-sm">Des années d&apos;expérience</p>
          </div>
          <div>
            <p className="text-xl font-bold">+500</p>
            <p className="text-sm">Projets Réalisations</p>
          </div>
          <div>
            <p className="text-xl font-bold">+1.6k</p>
            <p className="text-sm">Clients satisfaits</p>
          </div>
          <div>
            <p className="text-xl font-bold">+12</p>
            <p className="text-sm">Notre équipe expérimentée</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA1
