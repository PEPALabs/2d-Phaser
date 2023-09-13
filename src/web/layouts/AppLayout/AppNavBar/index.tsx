import React from 'react'
import {
  Navbar,
  Text,
  NavLink,
  Image,
  Divider,
  Avatar,
  Group,
  Box,
  Stack,
  ActionIcon,
  Center
} from '@mantine/core'
import { IconLogout } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import ChatBox from '../../../widgets/ChatBox'
import { TargetId } from '../../../widgets/GuidedTours/getSteps'
import userAPI from '../../../apis/userAPI'
import useAuthStore from '../../../shared/useAuthStore'
import NavBarContainer from './NavBarContainer'

const navList = [
  {
    color: 'blue',
    text: 'Dashboard',
    icon: '/assets/images/dashboard-icon.png',
    path: '/resources',
    background: '/assets/images/dashboard-button-bg.png',
    id: TargetId.Resources
  },
  {
    color: 'green',
    text: 'Inbox',
    icon: '/assets/images/inbox-icon.png',
    background: '/assets/images/inbox-button-bg.png'
  },
  {
    color: 'yellow',
    text: 'Quest Book',
    path: '/quests',
    icon: '/assets/images/quest-book-icon.png',
    background: '/assets/images/quest-book-button-bg.png'
  }
]

const AppNavBar = () => {
  const logoutMutation = useMutation({
    ...userAPI.logout(),
    onSettled() {
      useAuthStore.setState({ token: null })
    }
  })

  return (
    <NavBarContainer>
      <Navbar.Section>
        <Stack spacing="xs">
          {navList.map(navItem => (
            <NavLink
              key={navItem.text}
              component={Link}
              pl={20}
              sx={theme => ({
                borderImage: `url(${navItem.background}) 0 fill`,
                boxShadow: theme.shadows.lg
              })}
              to={navItem.path ?? '/login'}
              className="transition-transform hover:scale-105"
              icon={
                <Center className="w-8 text-center">
                  <Image
                    src={navItem.icon}
                    height={24}
                    width="auto"
                    className="drop-shadow-md"
                  />
                </Center>
              }
              label={
                <Text size="xl" className="font-bold text-white drop-shadow-md">
                  {navItem.text}
                </Text>
              }
              id={navItem.id}
            />
          ))}
        </Stack>
      </Navbar.Section>
      <Divider color="primary" size="sm" />
      <ChatBox />
      <Divider color="primary" size="sm" />
      <Navbar.Section>
        <Group position="apart">
          <Group>
            <Avatar color="secondary" />
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
            color="secondary"
            disabled={logoutMutation.isPending}
            onClick={() => {
              logoutMutation.mutate()
            }}>
            <IconLogout size="1.3rem" />
          </ActionIcon>
        </Group>
      </Navbar.Section>
    </NavBarContainer>
  )
}

export default AppNavBar
