import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoute = () => {

 const isAuth =  localStorage.getItem('usuario');
 console.log(isAuth)

  return (
    <div></div>
  )
}

export default PrivateRoute
