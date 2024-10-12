'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const AnimatedBanner = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => setIsVisible(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <motion.div
        className="w-full h-20 bg-gradient-to-r from-red-200 to-red-500"
        initial={{ x: '100%' }}
        animate={{
          x: isVisible ? 0 : '-99%',
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{
          padding: '80vh',
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
          zIndex: 1000,
        }}
      ></motion.div>
    </>
  )
}

export default AnimatedBanner
