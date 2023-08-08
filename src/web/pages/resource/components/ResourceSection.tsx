import React, { type PropsWithChildren } from 'react'
import { Box, Stack, Title } from '@mantine/core'

interface ResourceSectionProps {
  name: string
}

const ResourceSection = ({
  name,
  children
}: PropsWithChildren<ResourceSectionProps>) => {
  return (
    <Stack spacing="xs">
      <Title color="primary" order={3}>
        {name}
      </Title>
      <Box p="xl" className="border-image-primary">
        {children}
      </Box>
    </Stack>
  )
}

export default ResourceSection
