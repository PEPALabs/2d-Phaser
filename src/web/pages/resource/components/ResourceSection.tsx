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
      <Title
        color="primary"
        order={2}
        className="font-JotiOne tracking-wide text-black/70">
        {name}
      </Title>
      <Box p="xl" className="border-image-primary border-solid">
        {children}
      </Box>
    </Stack>
  )
}

export default ResourceSection
