import React, { useContext } from 'react'
import SendyyLogos from '../../assets/Logos/SendyyLogos.png'
import { NavbarLinks } from '../../data/NavData'
import { Link } from 'react-router-dom'
import { CTAButton } from '../core/CTAButton'
import { DataContext } from '../../context/DataProvider'

export const Navbar = () => {
    const { authToken, signOut } = useContext(DataContext)
    return (
        <div className=' bg-[#101728] fixed z-20 w-screen py-3 border-b-2 border-gray-800 backdrop-blur-md backdrop-brightness-105 bg-transparent'>
            <div className=' bg-transparent w-11/12 flex mx-auto justify-between'>
                {/* for logo and text logo */}
                <div className='flex items-center gap-4'>
                    <img src={SendyyLogos} alt='sendyy-logo' height={40} width={40} />
                    <p className=' text-white font-bold text-[22px] font-sans'>Sendyy</p>
                </div>

                {/* for nav links */}
                <div className='flex gap-4 font-sans text-white items-center text-[18px] transition-all'>
                    {
                        NavbarLinks.map((item, index) => {
                            return <div key={index} className='hover:text-[#8b6acf] hover:scale-95'>
                                <Link to={item.path}>
                                    {item.title}
                                </Link>
                            </div>
                        })
                    }
                </div>

                {/* now Buttons */}
                {
                    authToken !== null ? <div className='flex items-center gap-3'>
                        <CTAButton text="Dashboard" path='/dashboard' />
                        <div className='bg-white rounded-lg py-2 px-3'>
                            <button onClick={signOut}>Sign out</button>
                        </div>
                    </div> : <div className='flex items-center gap-3'>
                        <CTAButton text="Try Now- It's Free" path='/signup' />
                        <CTAButton text="Login" path='/login' isPurple={false} />
                    </div>
                }



            </div>
        </div>
    )
}
