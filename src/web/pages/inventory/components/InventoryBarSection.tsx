import { Group, Text } from '@mantine/core'
import React, { PropsWithChildren } from 'react'

interface InventoryBarSectionProps {
  name: string
}

const InventoryBarSection = ({
  name,
  children
}: PropsWithChildren<InventoryBarSectionProps>) => {
  return (
    <Group className="w-full" justify="space-between">
      <Text size="md">{name}</Text>
      {typeof children !== 'object' ? (
        <Text c="yellow" size="md" fw="bold">
          {children}
        </Text>
      ) : (
        children
      )}
    </Group>
  )
}

export default InventoryBarSection
