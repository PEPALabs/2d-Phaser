import React, { useEffect, useRef, useState } from 'react'
import {
  Alert,
  Stack,
  Title,
  Text,
  Group,
  NumberInputHandlers,
  ActionIcon,
  Button,
  NumberInput,
  rem,
  Divider
} from '@mantine/core'
import { type ItemType } from '../../../../data/items.type'
import {
  IconMinus,
  IconPlus,
  IconTrash,
  IconArrowRight
} from '@tabler/icons-react'
import InventoryBarSection from './InventoryBarSection'
import { inventoryActions } from '../../../../data/useGameStore'

interface InventoryBarProps {
  product: ItemType
}

const InventoryBar = ({ product }: InventoryBarProps) => {
  const [count, setCount] = useState(() => (product.value === '' ? 0 : 1))

  useEffect(() => {
    setCount(product.value === '' ? 0 : 1)
  }, [product])

  const handlers = useRef<NumberInputHandlers>()

  return (
    <Alert
      className="border-image-primary w-full border-solid bg-transparent"
      my="xs"
      color="primary">
      <Stack>
        <Title color="primary" order={3}>
          {product.name}
        </Title>
        <Text size="md">{product.description}</Text>
        <Divider />
        <Stack>
          <InventoryBarSection name="Owns">{product.value}</InventoryBarSection>
          <InventoryBarSection name="Amount">
            <Group spacing={4} align="center">
              <ActionIcon
                variant="default"
                size={36}
                onClick={() => handlers.current.decrement()}>
                <IconMinus size="1rem" />
              </ActionIcon>
              <NumberInput
                hideControls
                styles={{
                  input: { width: rem(54), textAlign: 'center' }
                }}
                handlersRef={handlers}
                min={0}
                max={+product.value}
                value={count}
                onChange={value => {
                  setCount(value === '' ? 0 : value)
                }}
              />
              <ActionIcon
                variant="default"
                size={36}
                onClick={() => {
                  handlers.current.increment()
                }}>
                <IconPlus size="1rem" />
              </ActionIcon>
            </Group>
          </InventoryBarSection>
          <Group position="apart">
            <Button
              rightIcon={<IconArrowRight />}
              disabled={count === 0 || +product.value === 0}
              onClick={() => {
                inventoryActions.updateAmount(count)
              }}>
              Use
            </Button>
            <Button
              rightIcon={<IconTrash />}
              disabled={count === 0 || +product.value === 0}
              onClick={() => {
                inventoryActions.updateAmount(count)
              }}>
              Drop
            </Button>
          </Group>
        </Stack>
      </Stack>
    </Alert>
  )
}

export default InventoryBar
