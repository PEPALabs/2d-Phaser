import React from 'react'
import { AppShell } from '@mantine/core'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <AppShell
      padding={0}
      withBorder={false}
      bg="url(/assets/images/main-background.png)"
      bgsz="cover">
      <AppShell.Main className="h-screen">
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}

export default AppLayout
