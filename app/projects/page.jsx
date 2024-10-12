import React from 'react'
import SubHero from '../components/project/SubHero'
import Subscribe from '../components/Subscribe'
import Hero from '../components/Hero'
import GridPricing from '../components/GridPricing'
import CardProgram from '../components/CardProgram'

import banner from './../../public/images/Express3.png'

export const metadata = {
  title: 'Réalisation - Express Dépannage Plomberie',
}

const page = () => {
  return (
    <>
      <SubHero
        className="pt-32 lg:mb-22 xl:mb-32"
        subTitle="Dernier ajout"
        title="Projets réalisés"
        image={banner}
        description={`Avec Expresse Dépannage, vous n’êtes jamais seul face à une urgence plomberie. Disponible jour et nuit, nos techniciens qualifiés se mobilisent pour intervenir rapidement et efficacement sur toutes vos installations, du débouchage à la réparation de fuites.`}
      />      
      <CardProgram/>
      <GridPricing/>
      <Hero/>
    </>
  )
}

export default page
