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
        <Anchor className="hover:no-underline">
          <Group align="center" spacing="xs">
            <Avatar src="/assets/images/pepa.png" className="h-full w-16" />
            <Title className="font-title text-pepa-pink" order={2}>
              PEPA
            </Title>
          </Group>
        </Anchor>
        <Group spacing="xl" position="center" className="grow">
          {headerNavList.map(navItem => (
            <NavLink key={navItem.to} to={navItem.to} id={navItem.id}>
              {({ isActive }) => (
                <Button
                  variant={isActive ? 'outline' : 'light'}
                  className="tracking-wider">
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
