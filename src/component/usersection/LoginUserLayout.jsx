import React from 'react'
import UserNavnar from './UserNavnar'
import Footer from '../layouts/Footer'
import { Outlet } from 'react-router-dom'

function LoginUserLayout() {
  return (
   <>
    <UserNavnar/>
    <Outlet/>
    <Footer/>
   </>
  )
}

export default LoginUserLayout
