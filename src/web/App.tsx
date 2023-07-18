// src/App.jsx
import React from 'react'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { RouterProvider } from 'react-router-dom'
import router from './router'

function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ defaultRadius: 'md' }}>
      <Notifications position="top-center" />
      <RouterProvider router={router} />
    </MantineProvider>
  )
}

export default App
