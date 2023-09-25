import React from 'react'
import { Center, Card, Tabs, Space, Group, Stack } from '@mantine/core'
import PepaLogo from './components/PepaLogo'

import { Theme, SwapWidget } from '@uniswap/widgets'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'

const theme: Theme = {
  fontFamily: '"Comic Neue"'
}

const css = `
.uniswap [color='container'] > div > div:nth-child(3) {
  position: relative;
}
`

const ExchangePage = () => {
  const web3React = useWeb3React()

  const onConnectClick = () => {
    web3React.activate(
      new InjectedConnector({
        supportedChainIds: [1, 3, 4, 5, 42]
      })
    )
    return false
  }

  console.log({ web3React })

  return (
    <>
      <style>{css}</style>
      <Stack
        className="relative h-full w-full !bg-cover"
        bg="url(/assets/images/main-background.png)">
        <PepaLogo />
        <Center className="h-full px-8 py-8 lg:px-0">
          <Card withBorder className="w-full lg:w-7/12 xl:w-1/2 2xl:w-1/3">
            <Tabs color="pink" defaultValue="swap">
              <Group justify="space-between">
                <Tabs.List>
                  <Tabs.Tab value="swap">Swap</Tabs.Tab>
                  <Tabs.Tab value="pool">Pool</Tabs.Tab>
                </Tabs.List>
              </Group>
              <Space h={16} />
              <Tabs.Panel value="swap">
                <div className="uniswap">
                  <SwapWidget
                    width="100%"
                    className="mx-auto"
                    provider={web3React.library}
                    onConnectWalletClick={onConnectClick}
                    theme={theme}
                  />
                </div>
              </Tabs.Panel>
              <Tabs.Panel value="pool">
                <div className="uniswap">
                  <SwapWidget
                    width="100%"
                    className="mx-auto"
                    provider={web3React.library}
                    onConnectWalletClick={onConnectClick}
                    theme={theme}
                  />
                </div>
              </Tabs.Panel>
            </Tabs>
          </Card>
        </Center>
      </Stack>
    </>
  )
}

export default ExchangePage

export const Component = ExchangePage
