import React from 'react'
import Hero from '../components/Hero'
import CardContact from '../components/contact/CardContact'

export const metadata = {
  title: 'Contact Andy Ramaroson',
}
const page = () => {
  return (
    <>
      <Hero className="pt-32 md:pt-22 pb-22" />
      <CardContact />
    </>
  )
}

export default page
