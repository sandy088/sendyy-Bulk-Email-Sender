import React from 'react'
import { Sidebar } from '../components/Dashboard/Sidebar'
import { Outlet } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <div className=' h-screen w-screen flex overflow-y-scroll bg-[#101728]'>
      
      <Sidebar/>

      <div className=' w-11/12'>
        <Outlet/>
      </div>
    </div>
  )
}
