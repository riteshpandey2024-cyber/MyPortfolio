import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef , useEffect , useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {
   
  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  }

  useEffect(()=>{
    window.addEventListener('scroll', ()=> {
      if (scrollY > 0) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  },[])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt="" className='w-full'/>
    </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white backdrop-blur-lg shadow-sm dark:bg-[#0a0118]/90 dark:shadow-purple-900/20" : "bg-white shadow-sm dark:bg-transparent dark:shadow-none"}`}>
        <a href="#top">
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="" className='w-28 
            cursor-pointer mr-14'/>
        </a>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3'>
            <li><a className='font-Outfit text-sm tracking-[0.2em] uppercase transition-colors duration-300 hover:text-purple-400 dark:text-gray-300 dark:hover:text-purple-400' href="#top">Home</a></li>
            <li><a className='font-Outfit text-sm tracking-[0.2em] uppercase transition-colors duration-300 hover:text-purple-400 dark:text-gray-300 dark:hover:text-purple-400' href="#about">About</a></li>
            <li><a className='font-Outfit text-sm tracking-[0.2em] uppercase transition-colors duration-300 hover:text-purple-400 dark:text-gray-300 dark:hover:text-purple-400' href="#services">Services</a></li>
            <li><a className='font-Outfit text-sm tracking-[0.2em] uppercase transition-colors duration-300 hover:text-purple-400 dark:text-gray-300 dark:hover:text-purple-400' href="#work">Work</a></li>
            <li><a className='font-Outfit text-sm tracking-[0.2em] uppercase transition-colors duration-300 hover:text-purple-400 dark:text-gray-300 dark:hover:text-purple-400' href="#contact">Contact</a></li>
        </ul>

        <div className='flex items-center gap-4'>

             <button onClick={()=> setIsDarkMode(prev => !prev)}>
                <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className='w-6'/>
             </button>

            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border-2 border-purple-500 rounded-full ml-4 font-Outfit text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-purple-500 hover:text-white dark:border-purple-500 dark:text-white dark:hover:bg-purple-500'>Contact Me
            </a>

            <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className='w-6'/>
            </button>
        </div>

        {/* -- ----- Mobile Menu ----- -- */}

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-[#0a0118] dark:text-white'>

            <div className='absolute right-6 top-6' onClick={closeMenu}>
                  <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="" className='w-5 cursor pointer'/>
            </div>

            <li><a className='font-Outfit uppercase tracking-widest' onClick={closeMenu} href="#top">Home</a></li>
            <li><a className='font-Outfit uppercase tracking-widest' onClick={closeMenu} href="#about">About</a></li>
            <li><a className='font-Outfit uppercase tracking-widest' onClick={closeMenu} href="#services">Services</a></li>
            <li><a className='font-Outfit uppercase tracking-widest' onClick={closeMenu} href="#work">Work</a></li>
            <li><a className='font-Outfit uppercase tracking-widest' onClick={closeMenu} href="#contact">Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
// 1:15:03