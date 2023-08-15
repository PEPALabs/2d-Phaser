import React from 'react'
import {
  Navbar,
  Text,
  NavLink,
  ThemeIcon,
  Divider,
  Avatar,
  Group,
  Box,
  Stack
} from '@mantine/core'
import {
  IconDashboard,
  IconInbox,
  IconLogin,
  IconShoppingBag,
  IconUserUp
} from '@tabler/icons-react'
import { Link, useMatch } from 'react-router-dom'
import ChatBox from '../../widgets/ChatBox'
import { TargetId } from '../../../web/widgets/GuidedTours/getSteps'
import NabBarParchmentBackground from './NabBarParchmentBackground'

const navList = [
  {
    color: 'blue',
    text: 'Dashboard',
    icon: IconDashboard,
    path: '/resources',
    id: TargetId.Resources
  },
  {
    color: 'green',
    text: 'Inbox',
    icon: IconInbox
  },
  {
    color: 'yellow',
    text: 'Quest Book',
    path: '/quests',
    icon: IconShoppingBag
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

const AppNavBar = () => {
  const match = useMatch({ path: 'login' })

  return (
    <Navbar
      width={{ base: 300 }}
      withBorder={false}
      p="xs"
      className="gap-y-4 bg-transparent">
      <NabBarParchmentBackground />
      <Navbar.Section>
        <Stack spacing="xs">
          {navList.map(navItem => (
            <Box
              key={navItem.text}
              className="border-image-third border-solid transition-transform hover:scale-105">
              <NavLink
                className="hover:bg-transparent"
                py={4}
                component={Link}
                to={navItem.path ?? '/login'}
                label={<Text size="md">{navItem.text}</Text>}
                icon={
                  <ThemeIcon color={navItem.color} variant="light">
                    <navItem.icon size="1rem" />
                  </ThemeIcon>
                }
                id={navItem.id}
              />
            </Box>
          ))}
        </Stack>
      </Navbar.Section>
      <Divider color="primary" size="sm" />
      {match ? <Navbar.Section grow>{null}</Navbar.Section> : <ChatBox />}
      <Divider color="primary" size="sm" />
      <Navbar.Section>
        <Group p="xs">
          <Avatar color="primary" />
          <Box>
            <Text size="md" weight={500} className="font-JotiOne">
              HelloWorld
            </Text>
            <Text size="xs">helloworld@gmail.com</Text>
          </Box>
        </Group>
      </Navbar.Section>
    </Navbar>
  )
}

export default AppNavBar
