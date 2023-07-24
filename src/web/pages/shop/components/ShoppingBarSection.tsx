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
    <Group className="w-full" position="apart">
      <Text size="md">{name}</Text>
      {typeof children !== 'object' ? (
        <Text color="yellow" size="md" fw="bold">
          {children}
        </Text>
      ) : (
        children
      )}
    </Group>
  )
}

export default ShoppingBarSection
