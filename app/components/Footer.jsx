'use client'

import React from 'react'
import { BiSolidHeart } from 'react-icons/bi'
import { FaGithub } from 'react-icons/fa'
import IconLinkedin from './../../public/images/linkedin.svg'
import IconMalt from './../../public/images/malt.svg'

import Link from 'next/link'
import Image from 'next/image'

const footerContent = {
  footerLinks: [
    {
      heading: '',
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
      ],
    },
    {
      heading: '',
      links: [
        {
          href: '/projects',
          label: 'Projects',
          badge: 'New',
        },
        {
          href: '/contact',
          label: 'Contact',
        },
      ],
    },
    {
      heading: '',
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
      <div className="container mx-auto px-4 relative mt-10">
        <div className="md:flex ">
          <div className="md:w-4/12 mb-5 md:mb-0">
            <Link href="#" className="text-[28px] text-[#2F2E2E] font-bold">
              Express Dépannage
              <span className="text-[#2F2E2E]">.</span>
            </Link>
          </div>
          <div className="md:w-7/12 ">
            <div className="grid grid-cols-3 md:grid-cols-3 ">
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

        {/* Version 2 */}
        <div className="text-right items-right mx-auto text-sm pb-0">
          <Link
            href="/document/privacy"
            target="_blank"
            className="text-red-500 hover:text-[#2F2E2E]"
          >
            Privacy{' '}
          </Link>{' '}
          <Link
            href="/document/terms"
            target="_blank"
            className="text-[#2F2E2E] hover:text-red-500"
          >
            Terms{' '}
          </Link>
        </div>
        <Copyright />
      </div>
    </footer>
  )
}

export default Footer
