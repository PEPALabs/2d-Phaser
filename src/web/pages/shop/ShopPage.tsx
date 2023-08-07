import React from 'react'
import { Text, Group, Stack, Image, Grid, ScrollArea } from '@mantine/core'
import ProductList from './components/ProductList'
import ShoppingBar from './components/ShoppingBar'
import ProductCategoryTabs from './components/ProductCategoryTabs'
import useProductCategory from './hooks/useProductCategory'
import useGameStore from '../../../data/useGameStore'

function ShopUI() {
  const { category } = useProductCategory()

  const products = useGameStore(state => state.shop.products)

  const categorizedProducts =
    category === 'all'
      ? products
      : products.filter(product => product.category === category)

  const index = useGameStore(state => state.shop.index)

  const balance = useGameStore(state => state.shop.balance)

  const selectedProduct = categorizedProducts[index]

  return (
    <Stack className="h-full overflow-hidden">
      <Group className="w-full" position="apart">
        <ProductCategoryTabs />
        <Group spacing="sm">
          <Image width={36} height={36} src="/assets/coin.png" />
          <Text>User Balance: {balance} ETH</Text>
        </Group>
      </Group>
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
            <ShoppingBar product={selectedProduct} />
          )}
        </Grid.Col>
      </Grid>
    </Stack>
  )
}

export default ShopUI
