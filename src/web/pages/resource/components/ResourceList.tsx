import React from 'react'
import { Group, SimpleGrid, Text, useMantineTheme } from '@mantine/core'
import ResourceSection from './ResourceSection'

const resources = [
  {
    name: 'PEPA',
    count: 0,
    icon: '🐧'
  },
  {
    name: 'Gold',
    count: 0,
    icon: '🌟'
  },
  {
    name: 'Level',
    count: 1,
    icon: '🆙'
  },
  {
    name: 'Worker',
    count: 0,
    icon: '👷'
  },
  {
    name: 'Wood',
    count: 0,
    icon: '🌳'
  },
  {
    name: 'Stone',
    count: 0,
    icon: '🗿'
  },
  {
    name: 'Iron',
    count: 0,
    icon: '⚙️'
  },
  {
    name: 'Water',
    count: 0,
    icon: '💧'
  }
]

const ResourceList = () => {
  const theme = useMantineTheme()

  return (
    <ResourceSection name="Resources">
      <SimpleGrid cols={2}>
        {resources.map(resource => (
          <Group justify="space-between" key={resource.name} className="tracking-wide">
            <Text>{`${resource.icon} ${resource.name}`}</Text>

            <Text span fw="bold" c={theme.primaryColor}>
              {resource.count}
            </Text>
          </Group>
        ))}
      </SimpleGrid>
    </ResourceSection>
  )
}

export default ResourceList
