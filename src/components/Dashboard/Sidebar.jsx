import React from 'react'
import {SideBarLinks} from '../../data/SidebarLinks'
import { SidebarLinks } from './SidebarLinks'

export const Sidebar = () => {
  return (
    <div className='relative z-10 h-screen overflow-x-scroll bg-[#101728] w-[250px] flex items-center justify-center  border-r border-slate-800'>
        <div className=' text-lg flex flex-col gap-5'>
            {
                SideBarLinks.map((link)=>(
                    <SidebarLinks key={link.id} link={link} iconName={link.icon}/>
                ))
            }
        </div>
    </div>
  )
}
