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

const UniswapPage = () => {
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
        className="relative h-full w-full"
        bg="radial-gradient(100% 100% at 50% 0%, rgba(255, 184, 226, 0.51) 0%, rgba(255, 255, 255, 0) 100%), rgb(255, 255, 255)">
        <PepaLogo />
        <Center className="h-full px-8 py-8 lg:px-0">
          <Card withBorder className="w-full lg:w-7/12 xl:w-1/2 2xl:w-1/3">
            <Tabs color="pink" defaultValue="swap">
              <Group position="apart">
                <Tabs.List>
                  <Tabs.Tab value="swap">Swap</Tabs.Tab>
                  <Tabs.Tab value="buy">Buy</Tabs.Tab>
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
              <Tabs.Panel value="buy">{null}</Tabs.Panel>
            </Tabs>
          </Card>
        </Center>
      </Stack>
    </>
  )
}

export default UniswapPage

export const Component = UniswapPage
