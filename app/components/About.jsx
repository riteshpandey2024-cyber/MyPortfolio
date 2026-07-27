import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({ isDarkMode }) => {
    return (
        <motion.div id='about' className='w-11/12 max-w-7xl mx-auto py-20 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Section Header */}
            <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-sm font-Outfit tracking-[0.2em] uppercase text-purple-500'
            >
                Introduction
            </motion.p>

            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-4xl sm:text-5xl font-bold font-Outfit dark:text-white'
            >
                About me
            </motion.h2>

            {/* Content - Two Column Layout */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex w-full flex-col lg:flex-row items-start gap-16 mt-16'
            >
                {/* Left - Profile Image with Effects */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='flex-shrink-0 relative group lg:-mt-16'
                >
                    <div className='relative w-80 sm:w-[420px]'>
                        {/* Soft glow behind image */}
                        <div className='absolute -inset-3 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-blue-500 opacity-40 blur-2xl group-hover:opacity-60 transition-opacity duration-500'></div>

                        {/* Gradient border */}
                        <div className='relative rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-blue-500 p-[3px] shadow-2xl shadow-purple-500/20'>
                            <div className='rounded-2xl overflow-hidden bg-white dark:bg-[#0a0118]'>
                                <Image
                                    src={assets.user_image}
                                    alt='Ritesh Pandey'
                                    className='w-full h-[500px] sm:h-[600px] lg:h-[580px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105 cursor-pointer'
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right - Info Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className='flex-1'
                >
                    <p className='mb-10 max-w-2xl font-Outfit text-gray-600 dark:text-gray-400 text-base leading-relaxed'>
                        I am an experienced Full-Stack & AI-ML Developer with over a years of professional expertise in the field. Throughout my career, I have had the privilege collaborating with prestigious organizations (IIITK), contributing to their success and growth.
                    </p>

                    {/* Info Cards */}
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description, link, accentColor }, index) => (
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                                whileHover={{ scale: 1.05 }}
                                className='relative border border-gray-400 rounded-xl cursor-pointer hover:shadow-black hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white bg-white dark:bg-[#0a0118]/60 overflow-hidden'
                                key={index}
                            >
                                {/* Colored Top Accent Border */}
                                <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${accentColor}`}></div>

                                {link ? (
                                    <a href={link} target={link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="block h-full w-full p-6">
                                        <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7' />
                                        <h3 className='mt-4 mb-2 font-semibold font-Outfit text-gray-800 dark:text-white text-base'>{title}</h3>
                                        <p className="text-sm font-Outfit font-medium text-gray-500 dark:text-gray-400 leading-relaxed">{description}</p>
                                    </a>
                                ) : (
                                    <div className="block h-full w-full p-6">
                                        <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7' />
                                        <h3 className='mt-4 mb-2 font-semibold font-Outfit text-gray-800 dark:text-white text-base'>{title}</h3>
                                        <p className="text-sm font-Outfit font-medium text-gray-500 dark:text-gray-400 leading-relaxed">{description}</p>
                                    </div>
                                )}
                            </motion.li>
                        ))}
                    </ul>

                    {/* Tools Section */}
                    <motion.h4
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className='my-6 text-gray-700 font-Outfit font-medium dark:text-gray-300'
                    >
                        Tools I use
                    </motion.h4>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className='flex items-center gap-4 sm:gap-5'
                    >
                        {toolsData.map((tool, index) => (
                            <motion.li
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                whileHover={{ y: -4, borderColor: '#a855f7', transition: { duration: 0.15 } }}
                                className='flex items-center justify-center w-12 sm:w-14 aspect-square border-2 border-gray-200 dark:border-purple-500/30 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-purple-500/10 bg-white dark:bg-[#0a0118]/50'
                                key={index}
                            >
                                <Image src={tool} alt='tool' className='w-5 sm:w-7' />
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About
