// src/App.jsx
import React, { useState } from 'react'
import { MantineProvider, AppShell } from '@mantine/core'

import UI from './UI'
import GameRoot from './Game'
import SigninBox from './Signin'

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
      <AppShell header={<UI />}>
        <SigninBox />
        <div id="game">
          <GameRoot />
        </div>
      </AppShell>
    </MantineProvider>
  )
}

export default App
