import React from 'react'
import { Grid, ScrollArea } from '@mantine/core'
import ProductList from './components/ProductList'
import InventoryBar from './components/InventoryBar'
import useGameStore from '../../../data/useGameStore'
import useSpatialNavigationInit from '../../shared/useSpatialNavigationInit'

function InventoryPage() {
  useSpatialNavigationInit()

  const products = useGameStore(state => state.inventories.products)

  const index = useGameStore(state => state.inventories.index)

  const selectedProduct = products[index]

  return (
    <Grid className="h-full">
      <Grid.Col className="h-full" span={9}>
        <ScrollArea className="h-full">
          <ProductList products={products} />
        </ScrollArea>
      </Grid.Col>
      <Grid.Col span={3}>
        {selectedProduct && <InventoryBar product={selectedProduct} />}
      </Grid.Col>
    </Grid>
  )
}

export default InventoryPage

export const Component = InventoryPage
