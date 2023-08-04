import React from 'react'
import { Stack, Center, Group, AspectRatio } from '@mantine/core'

import UserProfile from './components/UserProfile'
import ResourceList from './components/ResourceList'
import PlantList from './components/PlantList'

const ResourcePage = () => {
  return (
    <AspectRatio ratio={16 / 9}>
      <Center className="h-full">
        <Group className="gap-10" align="flex-start">
          <Stack className="gap-10">
            <UserProfile />
            <ResourceList />
          </Stack>
          <PlantList />
        </Group>
      </Center>
    </AspectRatio>
  )
}

export default ResourcePage
