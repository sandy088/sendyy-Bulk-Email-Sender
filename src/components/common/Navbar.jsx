import React, { useContext, useState } from 'react'
import SendyyLogos from '../../assets/Logos/SendyyLogos.png'
import { NavbarLinks } from '../../data/NavData'
import { Link } from 'react-router-dom'
import { CTAButton } from '../core/CTAButton'
import { DataContext } from '../../context/DataProvider'

export const Navbar = () => {
  const { authToken, signOut } = useContext(DataContext)
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='bg-[#101728] fixed z-20 w-screen py-3 border-b-2 border-gray-800 backdrop-blur-md backdrop-brightness-105 bg-transparent'>
      <div className='w-11/12 mx-auto flex justify-between items-center'>
        {/* for logo and text logo */}
        <div className='flex items-center gap-4'>
          <img src={SendyyLogos} alt='sendyy-logo' height={40} width={40} />
          <p className='text-white font-bold text-[22px] font-sans'>Sendyy</p>
        </div>

        {/* for nav links */}
        <div className={`lg:flex gap-4 font-sans text-white items-center text-[18px] transition-all ${isOpen? 'flex' : 'hidden'}`}>
          {NavbarLinks.map((item, index) => (
            <div key={index} className='hover:text-[#8b6acf] hover:scale-95'>
              <Link to={item.path}>{item.title}</Link>
            </div>
          ))}
        </div>

        {/* responsive menu button */}
        <div className='lg:hidden'>
          <button
            onClick={toggleMenu}
            className='text-white focus:outline-none'>
            <svg
              className='w-6 h-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              {isOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>

        {/* now Buttons */}
        <div className='hidden lg:flex items-center gap-3'>
          {authToken !== null ? (
            <>
              <CTAButton text='Dashboard' path='dashboard/setupsmtp' />
              <div className='bg-white rounded-lg py-2 px-3'>
                <button onClick={signOut}>Sign out</button>
              </div>
            </>
          ) : (
            <>
              <CTAButton text="Try Now- It's Free" path='/signup' />
              <CTAButton text='Login' path='/login' isPurple={false} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
