import React from 'react'
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
import { Link } from 'react-router-dom'

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

const AppNavBar = () => {
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
