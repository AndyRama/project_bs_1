import React from 'react'
import SubHero from '../components/project/SubHero'
import Cta1 from '../components/Cta1'
import Cta2 from '../components/Cta2'
import Hero from '../components/Hero'
import GridPricing from '../components/GridPricing'
import Projects from '../components/project/Projects'
import FAQ from '../components/FAQ'
import Express from './../../public/images/Express3.png'

export const metadata = {
  title: 'Réalisation - Express Dépannage Plomberie',
}

const page = () => {
  return (
    <>
      <SubHero
        className="pt-32 lg:mb-22 xl:mb-32"
        subTitle="Interventions"
        title=" Courantes"
        image={Express}
        description={`Avec Expresse Dépannage, vous n’êtes jamais seul face à une urgence plomberie. Disponible jour et nuit, nos techniciens qualifiés se mobilisent pour intervenir rapidement et efficacement sur toutes vos installations, du débouchage à la réparation de fuites.`}
      />
      <Projects className="pt-10 pb-32" itemsPerPage={9} />
      <Cta1 />
      <GridPricing />
      <Cta2 />
      <FAQ />
      <Hero />
    </>
  )
}

export default page
