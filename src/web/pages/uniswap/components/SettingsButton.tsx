import { Menu, ActionIcon } from '@mantine/core'
import { IconSettings } from '@tabler/icons-react'
import React from 'react'

const SettingsButton = () => {
  return (
    <Menu shadow="md" position="bottom-end" width={256}>
      <Menu.Target>
        <ActionIcon>
          <IconSettings />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>Application</Menu.Item>
        <Menu.Divider />
        <Menu.Item>Hello World</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default SettingsButton
