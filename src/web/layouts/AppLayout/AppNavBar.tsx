import React from 'react'
import {
  Navbar,
  Text,
  NavLink,
  ThemeIcon,
  Divider,
  Avatar,
  Group,
  Box
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

const navList = [
  {
    color: 'blue',
    text: 'Dashboard',
    icon: IconDashboard,
    path: '/resources'
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
    <Navbar width={{ base: 300 }} p="xs" className="gap-y-4">
      <Navbar.Section>
        {navList.map(navItem => (
          <NavLink
            key={navItem.text}
            component={Link}
            to={navItem.path}
            label={<Text size="md">{navItem.text}</Text>}
            icon={
              <ThemeIcon color={navItem.color} variant="light">
                <navItem.icon size="1rem" />
              </ThemeIcon>
            }
          />
        ))}
      </Navbar.Section>
      <Divider />
      {match ? <Navbar.Section grow>{null}</Navbar.Section> : <ChatBox />}
      <Divider />
      <Navbar.Section>
        <Group p="xs">
          <Avatar color="blue" />
          <Box>
            <Text size="sm" weight={500}>
              HelloWorld
            </Text>
            <Text color="dimmed" size="xs">
              helloworld@gmail.com
            </Text>
          </Box>
        </Group>
      </Navbar.Section>
    </Navbar>
  )
}

export default AppNavBar
