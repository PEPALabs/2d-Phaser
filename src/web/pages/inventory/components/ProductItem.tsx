import React, { useEffect } from 'react'
import { Image, Indicator, Card } from '@mantine/core'
import { clsx } from 'clsx'
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation'
import { type ItemType } from '../../../../data/items.type'
import { inventoryActions } from '../../../../data/useGameStore'

interface ProductItemProps {
  product: ItemType
  index: number
}

const ProductItem = ({ product, index }: ProductItemProps) => {
  const { ref, focused, focusSelf } = useFocusable()

  useEffect(() => {
    if (focused) {
      inventoryActions.setIndex(index)
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
