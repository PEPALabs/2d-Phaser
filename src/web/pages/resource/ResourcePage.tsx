import React from 'react'
import { Stack, Center, Group } from '@mantine/core'

import UserProfile from './components/UserProfile'
import ResourceList from './components/ResourceList'
import PlantList from './components/PlantList'

const ResourcePage = () => {
  return (
    <Center className="h-full">
      <Group
        className="border-image-primary gap-10 border-solid"
        align="flex-start"
        p="md">
        <Stack className="gap-10">
          <UserProfile />
          <ResourceList />
        </Stack>
        <PlantList />
      </Group>
    </Center>
  )
}

export default ResourcePage
