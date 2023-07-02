import React, { useContext, useEffect, useState } from 'react'
import { Sidebar } from '../components/Dashboard/Sidebar'
import { Outlet } from 'react-router-dom'
import { DataContext } from '../context/DataProvider'
import {GiHamburgerMenu} from 'react-icons/gi'

export const Dashboard = () => {
  const {getEmailList} = useContext(DataContext)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
        
    const emailsListName = getEmailList()
}, [])
  return (
    <div className=' h-screen w-screen flex overflow-y-scroll bg-[#101728]'>
      <div className='z-20 lg:hidden absolute left-3 top-[10%] text-2xl text-white' onClick={()=>setToggle(!toggle)}><GiHamburgerMenu className=' text-2xl'/></div>
      <div className={`${toggle? 'block': 'hidden'} lg:block`}>
        <Sidebar/>
      </div>
      

      <div className=' w-11/12'>
        <Outlet/>
      </div>
    </div>
  )
}
