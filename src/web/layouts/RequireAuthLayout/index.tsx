import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useIsLoggedIn from '../../shared/useIsLoggedIn'

const RequireAuthLayout = () => {
  const isLoggedIn = useIsLoggedIn()

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default RequireAuthLayout
