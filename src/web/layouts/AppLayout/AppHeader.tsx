import React from 'react'
import { Header, Group, Button, Image, Flex } from '@mantine/core'
import { NavLink } from 'react-router-dom'
import GuidedTours from '../../../web/widgets/GuidedTours'
import { TargetId } from '../../widgets/GuidedTours/getSteps'
import useIsLoggedIn from '../../shared/useIsLoggedIn'

const headerNavList = [
  { name: 'Shop', to: 'shop', id: TargetId.Shop },
  { name: 'Home', to: 'home', id: TargetId.Game },
  { name: 'Uniswap', to: 'uniswap', id: TargetId.Uniswap },
  { name: 'Inventory', to: 'inventory', id: TargetId.Inventory }
]

const AppHeader = () => {
  const isLoggedIn = useIsLoggedIn()

  return (
    <Header
      height={56}
      className="border-0 border-b-2 border-solid border-b-pepa-secondary bg-[#FFF4DD]"
      px="xl"
      withBorder={false}>
      <Group className="h-full" position="apart" noWrap>
        <Flex align="center" className="h-full basis-2/3" wrap="nowrap">
          <NavLink to="/home">
            <Image
              src="/assets/images/pepa.png"
              className="h-full"
              height={50}
            />
          </NavLink>
          {isLoggedIn && (
            <Group spacing="xl" position="center" className="grow" noWrap>
              {headerNavList.map(navItem => (
                <NavLink key={navItem.to} to={navItem.to} id={navItem.id}>
                  {({ isActive }) => (
                    <Button
                      className="glossy-button glossy-button-text text-base"
                      color={isActive ? 'secondary' : 'primary'}
                      sx={theme => ({
                        boxShadow: theme.shadows.lg
                      })}>
                      {navItem.name}
                    </Button>
                  )}
                </NavLink>
              ))}
            </Group>
          )}
        </Flex>
        {isLoggedIn && <GuidedTours />}
      </Group>
    </Header>
  )
}

export default AppHeader
