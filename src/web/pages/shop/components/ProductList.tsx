import React, { useEffect } from 'react'
import { SimpleGrid } from '@mantine/core'
import {
  useFocusable,
  FocusContext
} from '@noriginmedia/norigin-spatial-navigation'
import { type ItemType } from '../../../../data/items.type'
import ProductItem from './ProductItem'

interface ProductListProps {
  products: ItemType[]
}

const ProductList = ({ products }: ProductListProps) => {
  const { ref, focusKey, focusSelf } = useFocusable<HTMLDivElement>({
    isFocusBoundary: true
  })

  useEffect(() => {
    focusSelf()
  }, [focusSelf])

  return (
    <FocusContext.Provider value={focusKey}>
      <SimpleGrid ref={ref} cols={8} spacing={32}>
        {products.map((product, index) => (
          <ProductItem key={index} product={product} index={index} />
        ))}
      </SimpleGrid>
    </FocusContext.Provider>
  )
}

export default ProductList
