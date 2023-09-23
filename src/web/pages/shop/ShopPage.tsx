import React, { useMemo } from 'react'
import { Text, Group, Stack, Image, Grid, ScrollArea } from '@mantine/core'
import ProductList from './components/ProductList'
import ShoppingBar from './components/ShoppingBar'
import ProductCategoryTabs from './components/ProductCategoryTabs'
import useProductCategory from './hooks/useProductCategory'
import useGameStore from '../../../data/useGameStore'
import { emptyItem } from '../../../data/getItems'
import useSpatialNavigationInit from '../../shared/useSpatialNavigationInit'

function ShopPage() {
  useSpatialNavigationInit()
  const { category } = useProductCategory()

  const products = useGameStore(state => state.shop.products)

  const categorizedProducts = useMemo(() => {
    const result =
      category === 'all'
        ? products
        : products.filter(product => product.category === category)

    return result.concat(
      Array.from({ length: 21 - result.length }, () => emptyItem)
    )
  }, [category, products])

  const index = useGameStore(state => state.shop.index)

  const balance = useGameStore(state => state.shop.balance)

  const selectedProduct = categorizedProducts[index]

  return (
    <Stack className="h-full w-full overflow-hidden">
      <Grid className="w-full" align="center" gutter={0}>
        <Grid.Col span={9}>
          <ProductCategoryTabs />
        </Grid.Col>
        <Grid.Col span={3}>
          <Group justify="center" gap="sm">
            <Image width={36} height={36} src="/assets/coin.png" />
            <Text size="lg" className="font-bold tracking-wider">
              {balance} ETH
            </Text>
          </Group>
        </Grid.Col>
      </Grid>
      <Grid className="h-full overflow-hidden">
        <Grid.Col className="h-full" span={{ md: 12, lg: 9 }}>
          {categorizedProducts.length > 0 && (
            <ScrollArea className="h-full">
              <ProductList products={categorizedProducts} />
            </ScrollArea>
          )}
        </Grid.Col>
        <Grid.Col span={{ md: 12, lg: 3 }}>
          {selectedProduct && selectedProduct.name && (
            <ShoppingBar product={selectedProduct} />
          )}
        </Grid.Col>
      </Grid>
    </Stack>
  )
}

export default ShopPage

export const Component = ShopPage
