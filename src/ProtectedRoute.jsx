import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        const token  = localStorage.getItem('token')
        const user = localStorage.getItem('data')
        if(!token && !user){
            navigate('/login')
        }
    })
  return (
    <>
      
    </>
  )
}

export default ProtectedRoute
