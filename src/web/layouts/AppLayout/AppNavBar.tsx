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
  Stack,
  ActionIcon
} from '@mantine/core'
import {
  IconDashboard,
  IconInbox,
  IconLogin,
  IconLogout,
  IconShoppingBag,
  IconUserUp
} from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import ChatBox from '../../widgets/ChatBox'
import { TargetId } from '../../../web/widgets/GuidedTours/getSteps'
import NabBarParchmentBackground from './NabBarParchmentBackground'
import userAPI from '../../apis/userAPI'
import useAuthStore from '../../shared/useAuthStore'

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
  }
  // {
  //   color: 'violet',
  //   text: 'Sign In',
  //   icon: IconLogin
  // },
  // {
  //   color: 'grape',
  //   text: 'Sign Up',
  //   icon: IconUserUp
  // }
]

const AppNavBar = () => {
  const logoutMutation = useMutation({
    ...userAPI.logout(),
    onSettled() {
      useAuthStore.setState({ token: null })
    }
  })

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
      <ChatBox />
      <Divider color="primary" size="sm" />
      <Navbar.Section>
        <Group p="xs" position="apart">
          <Group>
            <Avatar color="primary" />
            <Box>
              <Text size="md" weight={500} className="font-JotiOne">
                HelloWorld
              </Text>
              <Text size="xs">helloworld@gmail.com</Text>
            </Box>
          </Group>
          <ActionIcon
            variant="filled"
            size="lg"
            color="primary"
            disabled={logoutMutation.isPending}
            onClick={() => {
              logoutMutation.mutate()
            }}>
            <IconLogout size="1.3rem" />
          </ActionIcon>
        </Group>
      </Navbar.Section>
    </Navbar>
  )
}

export default AppNavBar
