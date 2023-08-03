import React from 'react'
import { Header, Group, Anchor, Avatar, Title, Button } from '@mantine/core'
import { NavLink } from 'react-router-dom'
import GuidedTours from '../../../web/widgets/GuidedTours'
import { TargetId } from '../../widgets/GuidedTours/getSteps'

const headerNavList = [
  { name: 'Login', to: 'login' },
  { name: 'Shop', to: 'shop', id: TargetId.Shop },
  { name: 'Home', to: 'home', id: TargetId.Game },
  { name: 'Uniswap', to: 'uniswap', id: TargetId.Uniswap },
  { name: 'Inventory', to: 'inventory', id: TargetId.Inventory }
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
            <NavLink key={navItem.to} to={navItem.to} id={navItem.id}>
              {({ isActive }) => (
                <Button variant={isActive ? 'outline' : 'light'}>
                  {navItem.name}
                </Button>
              )}
            </NavLink>
          ))}
          <GuidedTours />
        </Group>
      </Group>
    </Header>
  )
}

export default AppHeader
