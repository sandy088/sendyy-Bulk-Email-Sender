import React from 'react'
import * as Icons from 'react-icons/hi'
import { NavLink } from 'react-router-dom'

export const SidebarLinks = ({ link, iconName }) => {
    const Icon = Icons[iconName]
    return (
        <div className={`flex gap-4 text-white items-center text-lg`}>

            <Icon className=" text-lg" />


            <NavLink to={link.path}>
                {link.title}
            </NavLink>
        </div>
    )
}
