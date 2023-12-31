import React, { useContext } from 'react'
import { DataContext } from '../../context/DataProvider'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
 const {authToken} = useContext(DataContext)
  if( authToken !== null){
    return children
  }else{
    return <Navigate to="/login"/>
  }
}

export default PrivateRoute
