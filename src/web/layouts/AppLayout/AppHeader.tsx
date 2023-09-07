import React from 'react'
import {
  Header,
  Group,
  Anchor,
  Avatar,
  Title,
  Button,
  BackgroundImage
} from '@mantine/core'
import { NavLink } from 'react-router-dom'
import GuidedTours from '../../../web/widgets/GuidedTours'
import { TargetId } from '../../widgets/GuidedTours/getSteps'
import useIsLoggedIn from '../../shared/useIsLoggedIn'

const headerNavList = [
  { name: 'Shop', to: 'shop', id: TargetId.Shop },
  { name: 'Home', to: 'home', id: TargetId.Game },
  { name: 'Uniswap', to: 'uniswap', id: TargetId.Uniswap },
  { name: 'Inventory', to: 'inventory', id: TargetId.Inventory },
  { name: 'Unity', to: 'unity', id: TargetId.Inventory }
]

const AppHeader = () => {
  const isLoggedIn = useIsLoggedIn()

  return (
    <Header height={64} className="bg-transparent" withBorder={false}>
      <BackgroundImage
        className="h-full"
        src="/assets/images/heroTop-shadow.png"
        px="xl">
        <Group className="h-full" position="apart" noWrap>
          <Group align="center" className="h-full grow-[0.5]" noWrap>
            <Anchor className="hover:no-underline">
              <Group align="center" spacing="xs" noWrap>
                <Avatar src="/assets/images/pepa.png" className="h-full w-16" />
                <Title className="font-title text-pepa-pink" order={2}>
                  PEPA
                </Title>
              </Group>
            </Anchor>

            {isLoggedIn && (
              <Group spacing="xl" position="center" className="grow" noWrap>
                {headerNavList.map(navItem => (
                  <NavLink key={navItem.to} to={navItem.to} id={navItem.id}>
                    {({ isActive }) => (
                      <Button variant={isActive ? 'filled' : 'light'}>
                        {navItem.name}
                      </Button>
                    )}
                  </NavLink>
                ))}
              </Group>
            )}
          </Group>
          {isLoggedIn && <GuidedTours />}
        </Group>
      </BackgroundImage>
    </Header>
  )
}

export default AppHeader
