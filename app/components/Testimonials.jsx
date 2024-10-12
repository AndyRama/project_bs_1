import React from 'react'

import Image from 'next/image'

import user1 from './../../public/images/jeremy.jpg'
import user2 from './../../public/images/fara.png'
import user4 from './../../public/images/honore.png'
import user3 from './../../public/images/jeremy.jpg'
import user5 from './../../public/images/user5.jpg'
import user6 from './../../public/images/user6.jpg'

const testimonials = [
  {
    user: 'Jéremy Prat',
    company: 'Coach Sportif',
    image: user1,
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ipsum consectetur repellat, corporis eaque corrupti in dolores reprehenderit, enim consequatur dolore, nam !',
  },
  {
    user: 'Fara Rabefarihy',
    company: "Fondatrice de l'association",
    image: user2,
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ipsum consectetur repellat, corporis eaque corrupti in dolores reprehenderit, enim consequatur dolore, nam !',
  },
  // {
  //   user: 'Jane Smith',
  //   company: 'Blue Horizon Technologies',
  //   image: user5,
  //   text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ipsum consectetur repellat, corporis eaque corrupti in dolores reprehenderit, enim consequatur dolore, nam !',
  // },
  {
    user: 'Honoré Rabefarihy',
    company: 'Ingénieur Agronome',
    image: user4,
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ipsum consectetur repellat, corporis eaque corrupti in dolores reprehenderit, enim consequatur dolore, nam !',
  },
  {
    user: 'Jéremy Prat',
    company: 'Coach Sportif',
    image: user1,
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ipsum consectetur repellat, corporis eaque corrupti in dolores reprehenderit, enim consequatur dolore, nam !',
  },
  // {
  //   user: 'Marc Davis',
  //   company: 'Synergy Systems',
  //   image: user6,
  //   text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ipsum consectetur repellat, corporis eaque corrupti in dolores reprehenderit, enim consequatur dolore, nam !',
  // },
]

const Testimonials = () => {
  return (
    <div className="container mx-auto tracking-wide mb-24 md:mt-22 md:mb-32">
      <h4 className="uppercase tracking-[3px] text-sm inline-block px-4">
        Retour sur mes services
      </h4>
      <h3 className="text-2xl lg:text-3xl mb-4 lg:mb-10 px-4 text-[#ff5e29]">
        Quelques témoignage sur les prestations !
      </h3>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/2 px-4 py-2">
            <div className="text-[#2F2E2E] rounded-md p-6 text-md border border-[#2F2E2E] font-thin">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <Image
                  className="w-12 h-12 mr-6 rounded-full"
                  src={testimonial.image}
                  alt="profile"
                  width={48}
                  height={48}
                />
                <div>
                  <h3 className="text-md font-bold">{testimonial.user}</h3>
                  <span className="text-md font-bold italic text-[#ff5e29]">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
