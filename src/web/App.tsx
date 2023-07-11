// src/App.jsx
import React, { useState } from 'react'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { RouterProvider } from 'react-router-dom'
import router from './router'

function App() {
  const [messages, setMessage] = useState('')
  const [showDialogBox, setShowDialogBox] = useState(false)
  const [showLogin, setShowLogin] = useState(true)
  const [login, setLogin] = useState(false)

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
