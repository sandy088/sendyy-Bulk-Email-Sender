import React, { useContext } from 'react'
import { DataContext } from '../../context/DataProvider'
import { Navigate } from 'react-router-dom'

const AdminRoute = ({children}) => {
 const {role} = useContext(DataContext)
 console.log("Role from admin Route: ", role)
  if( role == 'Admin'){
    return children
  }else{
    return <Navigate to="/login"/>
  }
}

export default AdminRoute
