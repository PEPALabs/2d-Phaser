import React from 'react'
import { Stack, Image, UnstyledButton, Tooltip } from '@mantine/core'
import { NavLink } from 'react-router-dom'

interface NavItem {
  name: string
  icon: string
  path: string
  id?: string
}

const navList: NavItem[] = [
  { name: 'Inbox', icon: '/assets/images/inbox-icon.png', path: '/inbox' },
  { name: 'Chat', icon: '/assets/images/chat-icon.png', path: '/' },
  { name: 'Quests', icon: '/assets/images/quests-icon.png', path: '/quests' }
]

const NavigationList = () => {
  return (
    <Stack gap="md">
      {navList.map(navItem => (
        <Tooltip key={navItem.path} label={navItem.name} position="right">
          <UnstyledButton
            component={NavLink}
            className="w-fit"
            to={navItem.path}>
            <Image src={navItem.icon} alt={navItem.name} className="h-11" />
          </UnstyledButton>
        </Tooltip>
      ))}
    </Stack>
  )
}

export default NavigationList
