import React from 'react'
import { AppShell } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import AppHeader from './AppHeader'
import AppNavBar from './AppNavBar'
import useGameEvent from './useGameEvent'

const AppLayout = () => {
  useGameEvent()

  return (
    <AppShell
      header={<AppHeader />}
      navbar={<AppNavBar />}
      bg="url(/assets/images/main-background.png)"
      padding={0}
      styles={{ main: { maxHeight: '100vh' } }}>
      <Outlet />
    </AppShell>
  )
}

export default AppLayout
