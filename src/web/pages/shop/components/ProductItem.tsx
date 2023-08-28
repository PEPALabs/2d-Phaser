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
import { shopActions } from '../../../../data/useGameStore'

interface ProductItemProps {
  product: ItemType
  index: number
}

const ProductItem = ({ product, index }: ProductItemProps) => {
  const { ref, focused, focusSelf } = useFocusable()

  const theme = useMantineTheme()

  useEffect(() => {
    if (focused) {
      shopActions.setIndex(index)
    }
  }, [focused, index])

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
          'overflow-hidden bg-white/70 outline outline-2 transition-all',
          focused ? 'scale-110 shadow-lg outline-pepa-gold' : 'outline-gray-200'
        )}
        onClick={() => focusSelf()}>
        <Card.Section pt="xs" px="xs">
          <Image
            className="aspect-square"
            src={product.icon}
            alt={product.name}
          />
        </Card.Section>
        <Card.Section pt="xs" px="xs" h={36}>
          {product.price && (
            <Flex align="center">
              <IconMoneybag size="1rem" color={theme.colors.orange[6]} />
              <Text span fw="bold" color="orange">
                {product.price}
              </Text>
            </Flex>
          )}
        </Card.Section>
      </Card>
    </Indicator>
  )
}

export default ProductItem
