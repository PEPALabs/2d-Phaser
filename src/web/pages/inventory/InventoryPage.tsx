import React from 'react'
import { Text, Group, Stack, Image, Grid, ScrollArea } from '@mantine/core'
import ProductList from './components/ProductList'
import InventoryBar from './components/InventoryBar'
import ProductCategoryTabs from './components/ProductCategoryTabs'
import useProductCategory from './hooks/useProductCategory'
import useGameStore from '../../../data/useGameStore'

// import linkImage from "./assets/bg.png";

function InventoryUI() {
  const { category } = useProductCategory()

  const products = useGameStore(state => state.inventories.products)

  const categorizedProducts =
    category === 'all'
      ? products
      : products.filter(product => product.category === category)

  const index = useGameStore(state => state.inventories.index)

  const balance = useGameStore(state => state.inventories.balance)

  const selectedProduct = categorizedProducts[index]

  return (
    <Stack className="h-full w-full overflow-hidden">
      <Grid className="w-full" align="center" gutter={0}>
        <Grid.Col span={9}>
          <ProductCategoryTabs />
        </Grid.Col>
        <Grid.Col span={3}>
          <Group position="center" spacing="sm">
            <Image width={36} height={36} src="/assets/coin.png" />
            <Text size="lg">{balance} ETH</Text>
          </Group>
        </Grid.Col>
      </Grid>
      <Grid className="h-full overflow-hidden">
        <Grid.Col className="h-full" span={9}>
          {categorizedProducts.length > 0 && (
            <ScrollArea className="h-full">
              <ProductList products={categorizedProducts} />
            </ScrollArea>
          )}
        </Grid.Col>
        <Grid.Col span={3}>
          {selectedProduct && selectedProduct.name && (
            <InventoryBar product={selectedProduct} />
          )}
        </Grid.Col>
      </Grid>
    </Stack>
  )
}

export default InventoryUI
