import React, { useRef, useState } from 'react'
import {
  Alert,
  Stack,
  Title,
  Text,
  Group,
  NumberInputHandlers,
  ActionIcon,
  Box,
  Button,
  NumberInput,
  rem
} from '@mantine/core'
import { type ItemType } from '../../../../data/items.type'
import { IconMinus, IconPlus, IconCoin } from '@tabler/icons-react'
import useShopStore from '../stores/useShopStore'

interface ShoppingBarProps {
  product: ItemType
}

const ShoppingBar = ({ product }: ShoppingBarProps) => {
  const [count, setCount] = useState(() => (product.value === '' ? 0 : 1))

  const purchase = useShopStore(state => state.purchase)

  const handlers = useRef<NumberInputHandlers>()

  return (
    <Alert
      className="w-full max-w-[80%]"
      title={<Title order={3}>{product.name}</Title>}
      color="blue">
      <Stack>
        <Text size="md">{product.description}</Text>
        <Group spacing="xl" position="right" align="flex-end">
          <Box>
            <Text>In Stock</Text>
            <Text color="yellow" size={26} fw="bold">
              {product.value}
            </Text>
          </Box>
          <Box>
            <Text>Price</Text>
            <Text color="yellow" size={26} fw="bold">
              {product.price * count}
            </Text>
          </Box>
          <Box>
            <Text>Amount</Text>
            <Group spacing={4} align="center">
              <ActionIcon
                variant="default"
                size={42}
                onClick={() => handlers.current.decrement()}>
                <IconMinus size="1rem" />
              </ActionIcon>
              <NumberInput
                hideControls
                styles={{
                  input: { width: rem(64), textAlign: 'center' }
                }}
                handlersRef={handlers}
                size="md"
                min={0}
                max={+product.value}
                value={count}
                onChange={value => {
                  setCount(value === '' ? 0 : value)
                }}
              />
              <ActionIcon
                variant="default"
                size={42}
                onClick={() => {
                  handlers.current.increment()
                }}>
                <IconPlus size="1rem" />
              </ActionIcon>
            </Group>
          </Box>

          <Button
            size="md"
            rightIcon={<IconCoin />}
            disabled={count === 0 || +product.value === 0}
            onClick={() => {
              purchase(count)
            }}>
            Purchase
          </Button>
        </Group>
      </Stack>
    </Alert>
  )
}

export default ShoppingBar
