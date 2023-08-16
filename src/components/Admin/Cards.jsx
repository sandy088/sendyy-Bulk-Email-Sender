import React from 'react'
import {FaUsers} from 'react-icons/fa'
import {MdMarkEmailRead} from 'react-icons/md'
import {FaListAlt} from 'react-icons/fa'


export const Cards = ({icon, text, value}) => {
  return (
    <div>{/* first box */}
    <div className=' flex gap-10 text-white bg-[#2e2772] p-5 rounded-xl w-1/4 min-w-fit'>
      {icon === 'User' && <FaUsers className=' text-6xl'/>}
      {icon === 'Emails' && <MdMarkEmailRead className=' text-6xl'/>}
      {icon === 'emailsList' && <FaListAlt className=' text-6xl'/>}

      <div>
        <p className=' text-3xl font-bold'>{text}</p>
        <p className=' text-3xl'>{value}</p>
      </div>
      
    </div>
</div>
  )
}
