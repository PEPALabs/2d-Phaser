import React from 'react'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { RouterProvider } from 'react-router-dom'
import { init } from '@noriginmedia/norigin-spatial-navigation'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

import router from './router'

init({})

const getLibrary = provider => new Web3Provider(provider)

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ defaultRadius: 'md' }}>
        <Notifications position="top-center" />
        <RouterProvider router={router} />
      </MantineProvider>
    </Web3ReactProvider>
  )
}

export default App
