import React, { useContext, useEffect } from 'react'
import { Sidebar } from '../components/Dashboard/Sidebar'
import { Outlet } from 'react-router-dom'
import { DataContext } from '../context/DataProvider'

export const Dashboard = () => {
  const {getEmailList} = useContext(DataContext)

  useEffect(() => {
        
    const emailsListName = getEmailList()
}, [])
  return (
    <div className=' h-screen w-screen flex overflow-y-scroll bg-[#101728]'>
      
      <Sidebar/>

      <div className=' w-11/12'>
        <Outlet/>
      </div>
    </div>
  )
}
