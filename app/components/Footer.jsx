import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Footer = ({ isDarkMode }) => {
  const socialMediaLinks = [
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/ritesh-pandey2024/',
    },
    {
      name: 'Portfolio',
      href: 'https://riteshpandeyportfolio.vercel.app/',
    },
    {
      name: 'Github',
      href: 'https://github.com/riteshpandey2024-cyber',
    },
  ];

  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2' />

        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
          pandeyriteshp2003@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p> 2025 Ritesh Pandey. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          {socialMediaLinks.map((link, index) => (
            <li key={index}>
              <a target='_blank' rel='noopener noreferrer' href={link.href}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer