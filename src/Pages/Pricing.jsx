import React from 'react'
import { PrincingTwo } from '../components/core/Pricing'
import { FooterFour } from '../components/common/Footer'

export const Pricing = () => {
  return (
    <div className=' h-screen w-screen bg-[#101728] text-white overflow-y-scroll'>
        <div className=' lg:h-[4.9rem]'>

        </div>
        <div>
            <PrincingTwo/>
        </div>

        <FooterFour/>
    </div>
  )
}
