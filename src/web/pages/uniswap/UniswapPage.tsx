import React from 'react'
import {
  Center,
  AspectRatio,
  Card,
  Button,
  Tabs,
  Space,
  Group,
  ActionIcon,
  Flex,
  Drawer,
  Stack
} from '@mantine/core'
import TokenNumberInput from './components/TokenNumberInput'
import SettingsButton from './components/SettingsButton'
import { IconArrowDown } from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks'
import PepaLogo from './components/PepaLogo'
import ConnectWalletDrawerContent from './components/ConnectWalletDrawerContent'

const UniswapPage = () => {
  const [opened, handlers] = useDisclosure(false)

  const [drawerOpened, drawerHandlers] = useDisclosure(false)

  return (
    <>
      <Drawer
        opened={drawerOpened}
        onClose={drawerHandlers.close}
        position="right"
        size="sm">
        <ConnectWalletDrawerContent />
      </Drawer>

      <Stack
        className="relative h-full w-full"
        bg="radial-gradient(100% 100% at 50% 0%, rgba(255, 184, 226, 0.51) 0%, rgba(255, 255, 255, 0) 100%), rgb(255, 255, 255)">
        <PepaLogo />
        <Center className="h-full">
          <Card withBorder>
            <Tabs color="pink" defaultValue="swap">
              <Group position="apart">
                <Tabs.List>
                  <Tabs.Tab value="swap">Swap</Tabs.Tab>
                  <Tabs.Tab value="buy">Buy</Tabs.Tab>
                </Tabs.List>
                <SettingsButton />
              </Group>
              <Space h={24} />
              <Tabs.Panel value="swap">
                <Flex direction={opened ? 'column-reverse' : 'column'}>
                  <TokenNumberInput />
                  <ActionIcon
                    variant="light"
                    size="lg"
                    className="z-10 -my-3 mx-auto border-4 border-white"
                    onClick={handlers.toggle}>
                    <IconArrowDown />
                  </ActionIcon>
                  <TokenNumberInput />
                </Flex>
                <Button
                  variant="light"
                  mt="xs"
                  color="pink"
                  fullWidth
                  size="xl"
                  onClick={drawerHandlers.open}>
                  Connect Wallet
                </Button>
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
