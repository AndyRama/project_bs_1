'use client'

import React from 'react'
import CardInfo from 'app/components/contact/CardInfo'
import CardMap from 'app/components/contact/CardMap'
import CardPricing from 'app/components/contact/CardPricing'

const CardContact = ({ className }) => (
  <section className={`${className}`}>
    <div className="container mx-auto mt-[-30px] lg:mt-[-70px]">
      <div className="flex justify-around">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-auto">
          <CardInfo className="w-12/12 px-0 lg:px-4 mb-10 md:pr-4" />
          <CardMap className="w-12/12 px-0 lg:px-4 mb-10" />
          <CardPricing className="w-12/12 px-0 lg:px-4 mb-10" />
        </div>
      </div>
    </div>
  </section>
)

export default CardContact
