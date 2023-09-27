import React from 'react'
import { Grid, ScrollArea } from '@mantine/core'
import ProductList from './components/ProductList'
import ShoppingBar from './components/ShoppingBar'
import useGameStore from '../../../data/useGameStore'
import useSpatialNavigationInit from '../../shared/useSpatialNavigationInit'

function ShopPage() {
  useSpatialNavigationInit()

  const products = useGameStore(state => state.shop.products)

  const index = useGameStore(state => state.shop.index)

  const selectedProduct = products[index]

  return (
    <Grid className="h-full">
      <Grid.Col className="h-full" span={9}>
        <ScrollArea className="h-full">
          <ProductList products={products} />
        </ScrollArea>
      </Grid.Col>
      <Grid.Col span={3}>
        {selectedProduct && <ShoppingBar product={selectedProduct} />}
      </Grid.Col>
    </Grid>
  )
}

export default ShopPage

export const Component = ShopPage
