import React from 'react'
import { Stack, Center, Group } from '@mantine/core'

import UserProfile from './components/UserProfile'
import ResourceList from './components/ResourceList'
import PlantList from './components/PlantList'

const DashboardPage = () => {
  return (
    <Center className="h-full">
      <Group
        className="border-image-primary border-solid"
        align="flex-start"
        p="xs">
        <Stack>
          <UserProfile />
          <ResourceList />
        </Stack>
        <PlantList />
      </Group>
    </Center>
  )
}

export default DashboardPage

export const Component = DashboardPage
