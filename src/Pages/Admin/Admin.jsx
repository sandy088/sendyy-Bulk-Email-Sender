import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/Admin/Sidebar'

export const Admin = () => {
  return (
    <div>
      <div className=' relative z-50 h-screen w-screen bg-[#101728] flex'>
        <Sidebar/>
          <div className='h-screen  overflow-y-scroll overflow-x-hidden'>
            <Outlet/>
          </div>
         
      </div>
     
    </div>
  )
}
