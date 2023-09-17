import React from 'react'
import { AppShell } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import AppHeader from './AppHeader'
import AppNavBar from './AppNavBar'
import useIsLoggedIn from '../../shared/useIsLoggedIn'

const AppLayout = () => {
  const isLoggedIn = useIsLoggedIn()

  return (
    <AppShell
      header={<AppHeader />}
      navbar={isLoggedIn && <AppNavBar />}
      bg="url(/assets/images/main-background.png)"
      bgsz="cover"
      padding={0}
      styles={{ main: { maxHeight: '100vh' } }}>
      <Outlet />
    </AppShell>
  )
}

export default AppLayout
