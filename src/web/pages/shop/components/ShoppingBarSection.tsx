import { Group, Text } from '@mantine/core'
import React, { PropsWithChildren } from 'react'

interface ShoppingBarSectionProps {
  name: string
}

const ShoppingBarSection = ({
  name,
  children
}: PropsWithChildren<ShoppingBarSectionProps>) => {
  return (
    <Group className="w-full" gap="apart">
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

export default ShoppingBarSection
