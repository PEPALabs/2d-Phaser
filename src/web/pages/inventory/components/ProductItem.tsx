import React, { useEffect } from 'react'
import {
  Image,
  clsx,
  Text,
  Indicator,
  Card,
  Flex,
  useMantineTheme
} from '@mantine/core'
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation'
import { IconMoneybag } from '@tabler/icons-react'
import { type ItemType } from '../../../../data/items.type'
import useInventoryStore from '../stores/useInventoryStore'

interface ProductItemProps {
  product: ItemType
  index: number
}

const ProductItem = ({ product, index }: ProductItemProps) => {
  const { ref, focused, focusSelf } = useFocusable()

  const theme = useMantineTheme()

  const setIndex = useInventoryStore(state => state.setIndex)

  useEffect(() => {
    if (focused) {
      setIndex(index)
    }
  }, [focused, index, setIndex])

  return (
    <Indicator
      label={product.value}
      color="dark"
      size={20}
      position="bottom-end"
      disabled={product.name === ''}>
      <Card
        ref={ref}
        className={clsx(
          'overflow-hidden outline outline-2 transition-all',
          focused ? 'scale-110 shadow-lg outline-pepa-gold' : 'outline-gray-200'
        )}
        onClick={() => focusSelf()}>
        <Card.Section p="xs">
          <Image
            className="aspect-square"
            src={product.icon}
            alt={product.name}
          />
        </Card.Section>
      </Card>
    </Indicator>
  )
}

export default ProductItem
