import React, { useEffect, useState } from 'react'
import * as Icons from 'react-icons/hi'
import { NavLink, useLocation } from 'react-router-dom'

export const SidebarLinks = ({ link, iconName }) => {

    const location = useLocation();
    const routePath = location.pathname;
    const [current, setCurrent]= useState('')

    useEffect(()=>{

        getLastSegment()
        console.log(current)
        
    },[routePath])
    const getLastSegment = () => {
        const segments = routePath.split('/',-1);
        setCurrent("dashboard/"+ segments[segments.length - 1])
        // Retrieve the value before the last '/'
    };
    
    const Icon = Icons[iconName]
    return (
        <div className={` p-2 rounded-md flex gap-4 text-white items-center text-lg ${current == link.path? 'bg-purple-900':`bg-transparent`}`}>

            <Icon className=" text-lg" />


            <NavLink to={link.path}>
                {link.title}
            </NavLink>
        </div>
    )
}
