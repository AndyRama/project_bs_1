import React from 'react'
import SubHero from '../components/blog/SubHero'
import Posts from '../components/blog/Posts'
import TeamImage from './../../public/images/Express3.png'
import Hero from '../components/Hero'


export const metadata = {
  title: 'Blogs - Express Dépannage Plomberie',
}

const page = () => {
  return (
    <>
      <SubHero
        className="pt-32 lg:mb-22 xl:mb-32"
        subTitle="Blog "
        title="les Dernier articles"
        image={TeamImage}
        description="Expresse Dépannage, votre solution d’urgence en plomberie, disponible 24h/24 et 7j/7. Que ce soit pour une fuite d’eau, un chauffe-eau défectueux ou une canalisation bouchée, nos experts interviennent rapidement pour vous offrir des solutions efficaces et durables."
      />
      <Posts className="pt-10 pb-32" itemsPerPage={3} />
      <Hero className="pt-32 md:pt-22 pb-22" />
    </>
  )
}

export default page
