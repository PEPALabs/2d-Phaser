import React from 'react'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { RouterProvider } from 'react-router-dom'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@mantine/core/styles.css'

import router from './router'
import mantineTheme from './config/mantineTheme'

const getLibrary = provider => new Web3Provider(provider)

const queryClient = new QueryClient()

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MantineProvider theme={mantineTheme}>
        <Notifications position="top-center" />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </MantineProvider>
    </Web3ReactProvider>
  )
}

export default App
