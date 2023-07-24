import React, { type PropsWithChildren } from 'react'
import { Paper, Stack, Title } from '@mantine/core'

interface ResourceSectionProps {
  name: string
}

const ResourceSection = ({
  name,
  children
}: PropsWithChildren<ResourceSectionProps>) => {
  return (
    <Stack spacing="xs">
      <Title order={3}>{name}</Title>
      <Paper
        p="xl"
        className="transition-shadow"
        withBorder
        shadow="sm"
        sx={theme => ({ ...theme.fn.hover({ boxShadow: theme.shadows.xl }) })}>
        {children}
      </Paper>
    </Stack>
  )
}

export default ResourceSection
