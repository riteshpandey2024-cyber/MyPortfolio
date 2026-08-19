import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-7xl mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 pt-20 pb-10' id="top">

      {/* Left Column - Text Content */}
      <div className='flex-1 text-center lg:text-left'>
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='flex items-center justify-center lg:justify-start gap-2 text-lg md:text-xl mb-4 font-Outfit text-gray-700 dark:text-gray-300'>
          Hi, I'm Ritesh Pandey <Image src={assets.hand_icon} alt='' className='w-6' />
        </motion.h3>

        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='text-3xl sm:text-5xl lg:text-[56px] font-bold font-Outfit leading-tight'>
          <span className='dark:text-white'>Full-Stack & AI-ML Developer{' '}</span>
          <span className='dark:text-white'>based in </span>
          <span className='text-purple-500'>Lucknow.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className='max-w-xl mx-auto lg:mx-0 mt-6 font-Outfit text-gray-600 dark:text-gray-400 text-base leading-relaxed'>
          I'm a Final-year B.Tech Computer Science student specializing in Cyber Security at the Indian Institute of Information Technology (IIIT) Kottayam. I build AI-powered applications, RAG systems, and full-stack solutions using Python, LangChain, PyTorch, Django, React, and REST APIs. My experience includes LLM applications, vector search, NLP, SQL, database integration, and backend development. I enjoy turning real-world problems into practical, user-focused software and exploring AI-driven automation.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8'>

          <a
            href="#contact"
            className='w-44 py-2.5 rounded-full border-2 border-purple-500 font-Outfit text-sm tracking-[0.15em] uppercase text-center transition-all duration-300 hover:bg-purple-500 hover:text-white dark:border-purple-500 dark:text-white dark:hover:bg-purple-500'
          >
            Contact Me
          </a>

          <a
            href="/RiteshPandey.pdf" download
            className='w-44 py-2.5 rounded-full border-2 border-purple-500 font-Outfit text-sm tracking-[0.15em] uppercase text-center transition-all duration-300 hover:bg-purple-500 hover:text-white dark:border-purple-500 dark:text-white dark:hover:bg-purple-500'
          >
            Resume
          </a>
        </motion.div>
      </div>

      {/* Right Column - Profile Image with Glow */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        className='flex-shrink-0 relative'
      >
        {/* Glowing ring behind profile */}
        <div className='relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px]'>
          {/* Outer glow ring */}
          <div className='absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 via-blue-500 to-purple-400 opacity-60 blur-xl animate-pulse dark:opacity-40'></div>

          {/* Circle border */}
          <div className='absolute inset-2 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-500 to-purple-400 p-[3px]'>
            <div className='w-full h-full rounded-full bg-white dark:bg-[#0a0118] overflow-hidden'>
              <Image
                src={assets.profile_img}
                alt='Ritesh Pandey'
                className='w-full h-full object-cover rounded-full'
              />
            </div>
          </div>


        </div>
      </motion.div>
    </div>
  )
}

export default Header
