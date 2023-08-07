import React from 'react'
import { DefaultMantineColor, MantineProvider, Tuple } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { RouterProvider } from 'react-router-dom'
import { init } from '@noriginmedia/norigin-spatial-navigation'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

import router from './router'

init({})

const getLibrary = provider => new Web3Provider(provider)

type ExtendedCustomColors = 'second' | DefaultMantineColor

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>
  }
}

const second: Tuple<string, 10> = [
  '#FBF5EE',
  '#F3E9DD',
  '#E8D0B5',
  '#DFB589',
  '#D69F63',
  '#D2914C',
  '#D08A3F',
  '#B87631',
  '#A4692A',
  '#8F591F'
]

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ defaultRadius: 'md', colors: { second } }}>
        <Notifications position="top-center" />
        <RouterProvider router={router} />
      </MantineProvider>
    </Web3ReactProvider>
  )
}

export default App
