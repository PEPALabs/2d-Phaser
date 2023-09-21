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
import { IconMinus, IconPlus, IconCoin } from '@tabler/icons-react'
import { shopActions } from '../../../../data/useGameStore'
import ShoppingBarSection from './ShoppingBarSection'

interface ShoppingBarProps {
  product: ItemType
}

const ShoppingBar = ({ product }: ShoppingBarProps) => {
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
        <Title c="primary" order={3}>
          {product.name}
        </Title>
        <Text size="md">{product.description}</Text>
        <Divider />
        <Stack>
          <ShoppingBarSection name="In Stock">
            {product.value}
          </ShoppingBarSection>
          <ShoppingBarSection name="Price">{product.price}</ShoppingBarSection>
          <ShoppingBarSection name="Amount">
            <Group gap={4} align="center">
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
                  setCount(value === '' ? 0 : Number(value))
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
          </ShoppingBarSection>
          <ShoppingBarSection name="Total">
            {product.price * count}
          </ShoppingBarSection>
          <Button
            className="self-end"
            rightSection={<IconCoin />}
            disabled={count === 0 || +product.value === 0}
            onClick={() => {
              shopActions.purchase(count)
            }}>
            Purchase
          </Button>
        </Stack>
      </Stack>
    </Alert>
  )
}

export default ShoppingBar
