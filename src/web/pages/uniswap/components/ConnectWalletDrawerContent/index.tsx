import React from 'react'
import { InjectedConnector } from '@web3-react/injected-connector'
import { useWeb3React } from '@web3-react/core'
import { Button, Space, Stack, Text, Title } from '@mantine/core'
import WalletInfo from './WalletInfo'

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42]
})

const ConnectWalletDrawerContent = () => {
  const { active, activate } = useWeb3React()

  const connect = () => {
    activate(injected)
  }

  if (active) {
    return <WalletInfo />
  }

  return (
    <Stack px="md">
      <Title order={2}>Sign in with your wallet</Title>
      <Text color="dimmed" size="sm">
        Sign in with one of available wallet providers or create a new wallet.
      </Text>
      <Space />
      <Button size="md" onClick={connect}>
        Sign in with MetaMask
      </Button>
    </Stack>
  )
}

export default ConnectWalletDrawerContent
