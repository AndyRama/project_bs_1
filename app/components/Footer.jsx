'use client'

import React from 'react'
import { BiSolidHeart } from 'react-icons/bi'
import Link from 'next/link'
import Image from 'next/image'
import IconLogo from '@/app/express-depannage.jpg'

const footerContent = {
  footerLinks: [
    {
      heading: 'Site',
      links: [
        {
          href: '/',
          label: 'Home',
        },
        {
          href: '/blog',
          label: 'Blog',
          badge: 'New',
        },
        {
          href: '/projects',
          label: 'Services',
        },
      ],
    },
    {
      heading: 'Ville',
      links: [
        {
          href: 'https://www.websitecarbon.com/website/project-bs-1-vercel-app/',
          label: 'Bordeaux',
          badge: 'New',
          target: '_blank',
        },
        {
          href: 'https://www.websitecarbon.com/website/project-bs-1-vercel-app/',
          label: 'Mérignac',
          badge: 'New',
          target: '_blank',
        },
        {
          href: 'https://www.websitecarbon.com/website/project-bs-1-vercel-app/',
          label: 'Pessac',
          badge: 'New',
          target: '_blank',
        },
      ],
    },
    {
      heading: '',
      links: [
        {
          href: 'https://www.websitecarbon.com/website/project-bs-1-vercel-app/',
          label: 'Bordeaux',
          badge: 'New',
          target: '_blank',
        },
        {
          href: 'https://www.websitecarbon.com/website/project-bs-1-vercel-app/',
          label: 'Mérignac',
          badge: 'New',
          target: '_blank',
        },
        {
          href: 'https://www.websitecarbon.com/website/project-bs-1-vercel-app/',
          label: 'Pessac',
          badge: 'New',
          target: '_blank',
        },
      ],
    },
    {
      heading: 'Performance',
      links: [
        {
          href: 'https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fproject-bs-1.vercel.app%2F&strategy=desktop&category=performance&category=accessibility&category=best-practices&category=seo&utm_source=lh-chrome-ext#',
          label: 'LighHouse',
          target: '_blank',
        },
        {
          href: 'https://www.websitecarbon.com/website/project-bs-1-vercel-app/',
          label: 'Co²',
          badge: 'New',
          target: '_blank',
        },
      ],
    },
  ],
}

const Copyright = () => {
  return (
    <div className="pt-2 mb-5 md:mt-5 md:pt-3 mr-1 border-t border-t-gray-100 text-center text-[#2F2E2E] ">
      <div className="text-center items-center mx-auto text-sm">
        &copy; 2024
        <Link href="/" className="text-red-500 ml-1 mr-1">
          Express Dépannage Plomberie
        </Link>
        Crée avec <BiSolidHeart className="text-red-400 inline-block mr-1" />
        par
        <Link href="/" className="text-red-500 ml-1">
          Andy Ramaroson
        </Link>
      </div>
    </div>
  )
}

const Footer = ({ className }) => {
  return (
    <footer className={`${className} overflow-hidden w-full h-full z-[2] `}>
      <div className="container mx-auto px-4 relative mt-8">
        <div className="lg:flex ">
          <div className="mb-6 md:mb-0">
            <Link
              href="/"
              className=" flex flex-row text-2xl sfont-bold "
            >
              {/* Logo - Navigation - left */}
              <span className="pt-2 py-4 pr-2">
                <Image src={IconLogo} weight={60} height={60} alt="logo" />
              </span>
              <span className="text-red-500">
                Express <br /> Dépannage Plomberie
              </span>
            </Link>
            {/* <div className='ml-10 md:ml-50'> */}
              <p className=" text-start text-black">
                217 avenue rue de la <br className="hidden md:contents"/> marne 33700 Mérignac
              </p>
              <p className="text-start text-black">
                plomberie.depannage33@gmail.com
              </p>
              <p className=" md:text-start text-black font-bold text-center"> 05.56.34.89.79</p>
              <p className=" md:text-start text-red-500 font-bold text-center"> 06.56.34.89.79</p>
            {/* </div> */}
          </div>
          <div className="md:w-7/12 mx-auto ">
            <div className="grid grid-cols-2 md:grid-cols-4 ">
              {footerContent.footerLinks.map((item, index) => (
                <div className="mb-5 md:mb-0" key={item.heading}>
                  <h3 className="text-gray-400 mb-3">{item.heading}</h3>
                  <ul className="list-none">
                    {item.links.map((link, index) => (
                      <li className="mb-2" key={link.label}>
                        <Link
                          href={link.href}
                          target={link.target || '_self'}
                          className={`${
                            link.badge ? 'flex gap-2 items-center' : ''
                          }
                            text-[#2F2E2E] duration-300 transition-all ease-in-out hover:text-red-500`}
                        >
                          {link.label === 'Co²' ? (
                            <>
                              <span>{link.label}</span>
                              <span
                                className="py-0.5 px-1 rounded-full bg-orange-100
                                    border border-red-500 text-[10px] text-red-500
                                    invisible sm:visible"
                              >
                                {link.badge}
                              </span>
                            </>
                          ) : (
                            link.label
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Copyright />
      </div>
    </footer>
  )
}

export default Footer
