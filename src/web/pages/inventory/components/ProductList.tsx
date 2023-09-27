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
      <SimpleGrid
        ref={ref}
        py="md"
        px="xs"
        cols={{ sm: 2, md: 3, lg: 4 }}
        spacing={{ base: 'sm', lg: 'xl' }}>
        {products.map((product, index) => (
          <ProductItem key={index} product={product} index={index} />
        ))}
      </SimpleGrid>
    </FocusContext.Provider>
  )
}

export default ProductList
