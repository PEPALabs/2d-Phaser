import React, { PropsWithChildren } from 'react'
import { Group, Text } from '@mantine/core'

interface ShoppingBarSectionProps {
  name: string
}

const ShoppingBarSection = ({
  name,
  children
}: PropsWithChildren<ShoppingBarSectionProps>) => {
  return (
    <Group className="w-full" justify="space-between">
      <Text size="md" fw="bold">
        {name}
      </Text>
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
