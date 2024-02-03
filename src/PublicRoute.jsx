import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PublicRoute = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        const token  = localStorage.getItem('token')
        const user = localStorage.getItem('data')
        if(token && user){
            navigate('/user/show')
        }
    })
  return (
    <>
      
    </>
  )
}

export default PublicRoute
