import React, { useMemo } from 'react'
import { Text, Group, Stack, Image, Grid, ScrollArea } from '@mantine/core'
import ProductList from './components/ProductList'
import InventoryBar from './components/InventoryBar'
import ProductCategoryTabs from './components/ProductCategoryTabs'
import useProductCategory from './hooks/useProductCategory'
import useGameStore from '../../../data/useGameStore'
import { emptyItem } from '../../../data/getItems'
import useSpatialNavigationInit from '../../shared/useSpatialNavigationInit'

// import linkImage from "./assets/bg.png";

function InventoryPage() {
  useSpatialNavigationInit()

  const { category } = useProductCategory()

  const products = useGameStore(state => state.inventories.products)

  const categorizedProducts = useMemo(() => {
    const result =
      category === 'all'
        ? products
        : products.filter(product => product.category === category)

    return result.concat(
      Array.from({ length: 21 - result.length }, () => emptyItem)
    )
  }, [category, products])

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
            <InventoryBar product={selectedProduct} />
          )}
        </Grid.Col>
      </Grid>
    </Stack>
  )
}

export default InventoryPage

export const Component = InventoryPage
