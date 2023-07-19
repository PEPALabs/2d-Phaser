import React from 'react'
import {
  Stack,
  Group,
  Title,
  Avatar,
  Indicator,
  Badge,
  Anchor
} from '@mantine/core'
import ResourceSection from './ResourceSection'

const UserProfile = () => {
  const title = 'Beginner'
  const name = 'Felix'
  const email = 'xyz@pepamarket.com'

  return (
    <ResourceSection name="Profile">
      <Group>
        <Indicator label={<Badge variant="filled">LV.16</Badge>} size={0}>
          <Avatar size="xl">{name}</Avatar>
        </Indicator>
        <Stack spacing="xs">
          <Group spacing="xs">
            <Title order={5}>{name}</Title>
            <Badge>{title}</Badge>
          </Group>
          <Anchor href={`mailto:${email}`}>{email}</Anchor>
        </Stack>
      </Group>
    </ResourceSection>
  )
}

export default UserProfile
