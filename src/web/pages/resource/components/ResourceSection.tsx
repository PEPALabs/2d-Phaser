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
    <Stack gap="xs">
      <Title
        c="primary"
        order={2}
        className="font-JotiOne tracking-wide text-black/70">
        {name}
      </Title>
      <Box p="md" className="border-image-primary border-solid">
        {children}
      </Box>
    </Stack>
  )
}

export default ResourceSection
