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
      header={{ height: 56 }}
      navbar={{
        width: 280,
        breakpoint: 0,
        collapsed: { desktop: !isLoggedIn }
      }}
      padding={0}
      withBorder={false}
      bg="url(/assets/images/main-background.png)"
      bgsz="cover">
      <AppHeader />
      <AppNavBar />
      <AppShell.Main className="h-screen">
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}

export default AppLayout
