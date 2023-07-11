import React from 'react'
import { Header, Group, Anchor, Avatar, Title, Button } from '@mantine/core'
import { NavLink } from 'react-router-dom'

const headerNavList = [
  { name: 'Login', to: 'login' },
  { name: 'Shop', to: 'shop' },
  { name: 'Home', to: 'home' },
  { name: 'Uniswap', to: 'uniswap' },
  { name: 'Inventory', to: 'inventory' }
]

const AppHeader = () => {
  return (
    <Header height={64} px="xl">
      <Group align="center" className="h-full max-w-screen-xl">
        <Anchor href="https://flowbite.com">
          <Group align="center" spacing="xs">
            <Avatar
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
            />
            <Title order={2}>PEPA</Title>
          </Group>
        </Anchor>
        <Group spacing="xl" position="center" className="grow">
          {headerNavList.map(navItem => (
            <NavLink key={navItem.to} to={navItem.to}>
              {({ isActive }) => (
                <Button variant={isActive ? 'filled' : 'light'}>
                  {navItem.name}
                </Button>
              )}
            </NavLink>
          ))}
        </Group>
      </Group>
    </Header>
  )
}

export default AppHeader
