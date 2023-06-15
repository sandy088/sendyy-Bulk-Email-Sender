import React from 'react'
import { Link } from 'react-router-dom'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

export const CTAButton = ({text, path, isPurple= true, isIcon= false }) => {
  return (
   
        <button className={`rounded-lg ${isPurple? `bg-[#7450BB] text-white`: `bg-white text-black`} px-4 py-2 hover:bg-[#4f3485] hover:text-white transition-color duration-150 relative z-[10]`}>
            <Link to={path} className=' flex gap-2 items-center'>{text} {
              isIcon && <BsFillArrowRightCircleFill/>
            }  </Link>
            
        </button>
  
  )
}
