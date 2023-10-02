import React, { useEffect } from 'react'
import { Image, Card, Title } from '@mantine/core'
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
    <Card
      ref={ref}
      className={clsx(
        'item-background h-fit bg-transparent transition-transform',
        focused && 'scale-110 drop-shadow-lg'
      )}
      padding={0}
      onClick={() => focusSelf()}>
      <Card.Section p="xl">
        <Image src={product.icon} alt={product.name} className="w-full" />
        <Title ta="center" order={6}>
          {product.name}
        </Title>
      </Card.Section>
    </Card>
  )
}

export default ProductItem
