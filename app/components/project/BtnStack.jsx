'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TbBrandNextjs } from 'react-icons/tb'
import { TbBrandFramerMotion } from 'react-icons/tb'
import { SiTypescript } from 'react-icons/si'
import { GrReactjs } from 'react-icons/gr'
import { TbDeviceMobileCode } from 'react-icons/tb'
import { SiVercel } from 'react-icons/si'
import { BsFiletypeMdx } from 'react-icons/bs'
import { FaCcStripe } from 'react-icons/fa'
import { MdMarkEmailRead } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
import { FaFigma } from 'react-icons/fa6'
import { FaTrello } from 'react-icons/fa6'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { TbDatabaseHeart } from 'react-icons/tb'

const iconMappingProjectCode = {
  icon1: (
    <TbBrandNextjs className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon2: (
    <GrReactjs className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon3: (
    <FaGithub className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon4: (
    <SiVercel className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon5: (
    <BsFiletypeMdx className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon6: (
    <FaCcStripe className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon7: (
    <MdMarkEmailRead className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon8: (
    <TbDeviceMobileCode className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon9: (
    <FaFigma className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon10: (
    <FaTrello className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon11: (
    <TbBrandFramerMotion className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
}

const BtnStackContentProjectCode = {
  heading: {
    title: '',
    subTitle: '',
    description: '',
  },
  step: [
    {
      title1: 'Nextjs',
      icon1: 'icon1',
      title2: 'React',
      icon2: 'icon2',
      title3: 'Github',
      icon3: 'icon3',
      title4: 'Vercel',
      icon4: 'icon4',
      title5: 'Mdx',
      icon5: 'icon5',
      title6: 'Stripe',
      icon6: 'icon6',
      title7: 'Resend',
      icon7: 'icon7',
      title8: 'Responsive',
      icon8: 'icon8',
      title9: 'Figma',
      icon9: 'icon9',
      title10: 'Trello',
      icon10: 'icon10',
      title11: 'Motion',
      icon11: 'icon11',
    },
  ],
}

const iconMappingProjectNoCode = {
  icon1: (
    <TbBrandNextjs className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon2: (
    <GrReactjs className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon3: (
    <TbBrandFramerMotion className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon4: (
    <FaGithub className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon5: (
    <FaCcStripe className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon6: (
    <TbDatabaseHeart className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon7: (
    <TbDatabaseHeart className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon8: (
    <BsFillShieldLockFill className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon9: (
    <SiTypescript className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon10: (
    <MdMarkEmailRead className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon11: (
    <TbDeviceMobileCode className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
}

const BtnStackContentProjectNoCode = {
  heading: {
    title: '',
    subTitle: '',
    description: '',
  },
  step: [
    {
      title1: 'Nextjs',
      icon1: 'icon1',
      title2: 'React',
      icon2: 'icon2',
      title3: 'Motion',
      icon3: 'icon3',
      title4: 'Github',
      icon4: 'icon4',
      title5: 'Vercel',
      icon5: 'icon5',
      title6: 'Stripe',
      icon6: 'icon6',
      title7: 'Postgres',
      icon7: 'icon7',
      title8: 'NextAuth',
      icon8: 'icon8',
      title9: 'Typescript',
      icon9: 'icon9',
      title10: 'Resend',
      icon10: 'icon10',
      title11: 'Responsive',
      icon11: 'icon11',
    },
  ],
}

const BtnStack = ({ className, contentType }) => {
  const isProject = contentType === 'project'
  const iconMapping = isProject
    ? iconMappingProjectCode
    : iconMappingProjectNoCode
  const BtnStackContent = isProject
    ? BtnStackContentProjectCode
    : BtnStackContentProjectNoCode

  return (
    <section className={className} id="projects-min">
      <div className="contents mx-auto px-4">
        {BtnStackContent.step.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: index * 0.2,
                duration: 0.5,
              },
            }}
            viewport={{ once: true }}
            className=" relative rounded-md"
          >
            <div className="mt-10 pb-10 grid grid-cols-3 md:grid-cols-4  xl:grid-cols-6 gap-4 ">
              {[
                'title1',
                'title2',
                'title3',
                'title4',
                'title5',
                'title6',
                'title7',
                'title8',
                'title9',
                'title10',
                'title11',
              ].map((titleKey, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10, transition: 0.1 }}
                  className="flex flex-col items-center"
                >
                  <span className="text-2xl md:text-3xl flex flex-col items-center ">
                    {iconMapping[step[`icon${idx + 1}`]]}
                    <h3
                      className="text-xl hover:text-gray-500 text-[#2F2E2E] pb-2 inline-block duration-300 transition-all bg-white-600 ease-in-out 
                      relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-tr from-[#e78738] to-[#fb923c]
                      before:origin-[100%, 50%] before:transition-all before:duration-300 before:ease-in-out before:scale-x-0
                      before:scale-y-[1] before:scale-z[1] before:will-change-transform hover:before:origin-[100%, 0%] hover:before:scale-x-[1] 
                      hover:before:scale-y-[1] hover:before:scale-z-[1]"
                    >
                      {step[titleKey]}
                    </h3>
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default BtnStack
