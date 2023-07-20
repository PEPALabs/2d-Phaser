import React from 'react'
import { AppShell } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import AppHeader from './AppHeader'
import AppNavBar from './AppNavBar'
import useGameEvent from './useGameEvent'

const AppLayout = () => {
  useGameEvent()

  return (
    <AppShell header={<AppHeader />} navbar={<AppNavBar />} padding={0}>
      <Outlet />
    </AppShell>
  )
}

export default AppLayout
