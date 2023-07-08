import React, { useState } from 'react'
import Alert from './Alert'
import InventoryUI from './InventoryUI'
import MessageBox from './MessageBox'
import SigninBox from './Signin'
import ShopUI from './ShopUI'
import Quests from './widgets/Quests'
import questData from '../data/questData'
import {
  Navbar,
  Text,
  NavLink,
  ThemeIcon,
  Stack,
  Divider,
  Title,
  SimpleGrid,
  Button,
  Avatar,
  Group
} from '@mantine/core'
import {
  IconDashboard,
  IconInbox,
  IconShoppingBag,
  IconLogin,
  IconUserUp
} from '@tabler/icons-react'

function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : '' }}
    />
  )
}

function Sidebar({
  showShopText,
  showUniswap,
  showDialogBox,
  showLogin,
  showShop,
  showInventory,
  message,
  dialogDone,
  loginDone,
  username,
  teleport12
}) {
  const [showQuest, setShowQuest] = useState(false)

  //uniswap test iframe
  const iframe =
    '<iframe src="https://app.uniswap.org/#/swap?outputCurrency=0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359" height="660px" width="100%" style="border: 0;margin: 0 auto;display: block;border-radius: 10px;max-width: 600px;min-width: 300px;">'

  const navList = [
    {
      color: 'blue',
      text: 'Dashboard',
      icon: IconDashboard
    },
    {
      color: 'green',
      text: 'Inbox',
      icon: IconInbox
    },
    {
      color: 'yellow',
      text: 'Quest Book',
      icon: IconShoppingBag,
      onClick() {
        setShowQuest(!showQuest)
      }
    },
    {
      color: 'violet',
      text: 'Sign In',
      icon: IconLogin
    },
    {
      color: 'grape',
      text: 'Sign Up',
      icon: IconUserUp
    }
  ]

  const resources = [
    {
      name: 'PEPA',
      count: 0
    },
    {
      name: 'Gold',
      count: 0
    },
    {
      name: 'Level',
      count: 1
    },
    {
      name: 'Worker',
      count: 0
    },
    {
      name: 'Wood',
      count: 0
    },
    {
      name: 'Stone',
      count: 0
    },
    {
      name: 'Iron',
      count: 0
    },
    {
      name: 'Water',
      count: 0
    }
  ]

  return (
    <>
      <Navbar width={{ base: 300 }} p="xs" className="gap-y-4">
        <Navbar.Section>
          {navList.map(navItem => (
            <NavLink
              key={navItem.text}
              label={<Text size="md">{navItem.text}</Text>}
              icon={
                <ThemeIcon color={navItem.color} variant="light">
                  <navItem.icon size="1rem" />
                </ThemeIcon>
              }
              onClick={navItem.onClick}
            />
          ))}
        </Navbar.Section>
        <Divider />
        <Navbar.Section grow>
          <Stack px="xs">
            <Title order={3}>Dashboard</Title>
            <SimpleGrid cols={2}>
              {resources.map(resource => (
                <Button
                  key={resource.name}
                  variant="default"
                  rightIcon={<Text color="blue">{resource.count}</Text>}>
                  {resource.name}
                </Button>
              ))}
            </SimpleGrid>
          </Stack>
        </Navbar.Section>
        <Divider />
        <Navbar.Section>
          <Group p="xs">
            <Avatar color="blue" />
            <Stack spacing={0}>
              <Text size="sm" weight={500}>
                HelloWorld
              </Text>
              <Text color="dimmed" size="xs">
                helloworld@gmail.com
              </Text>
            </Stack>
          </Group>
        </Navbar.Section>
      </Navbar>
    </>
  )
}

export default Sidebar
