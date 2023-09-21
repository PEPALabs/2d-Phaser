import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Badge, Button, Group, Stack, Text, Title } from '@mantine/core'
import { ethers } from 'ethers'
import { match, P } from 'ts-pattern'

const WalletInfo = () => {
  const { account, library, deactivate } = useWeb3React()

  const [balance, setBalance] = useState<string>()

  const disconnect = () => {
    deactivate()
  }

  useEffect(() => {
    if (account && library) {
      library.getBalance(account).then(balance => {
        setBalance(ethers.formatEther(balance.toString()))
      })
    }
  }, [account, library])

  return (
    <Stack>
      <Group>
        <Title order={2}>MetaMask</Title>
        <Badge>Connected</Badge>
      </Group>

      <Group wrap='nowrap'>
        <Text className="whitespace-nowrap">account:</Text>
        <Text className="truncate">{account}</Text>
      </Group>
      <Group>
        <Text>balance:</Text>
        <Text className="truncate">
          {match(balance)
            .with(P.string, () => balance)
            .otherwise(() => 'Loading...')}
        </Text>
      </Group>
      <Button onClick={disconnect}>Disconnect</Button>
    </Stack>
  )
}

export default WalletInfo
