import React from 'react'
import { useAuth } from '../context/useAuth'
import { Navigate } from 'react-router-dom'

const RequireAuth=({children})=> {
    const {authState}=useAuth()
  return (
    authState.isUserActive ? children : <Navigate to='/login' replace/>
  )
}

export default RequireAuth