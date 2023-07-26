import React from 'react'
import {
  Text,
  Group,
  Stack,
  Title,
  Container,
  Image,
  Grid,
  ScrollArea,
  AspectRatio,
  Center
} from '@mantine/core'
import ProductList from './components/ProductList'
import useInventoryStore from './stores/useInventoryStore'
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
    <Container className="h-full" size="xl">
      <Center className="h-full">
        <AspectRatio className="w-full bg-pepa-blue" ratio={16 / 9}>
          <Stack className="h-full overflow-hidden" p="xl">
            <Group className="w-full" position="apart">
              <Title order={2} color="blue">
                PEPA Inventory
              </Title>
              <Group spacing="sm">
                <Image width={36} height={36} src="/assets/coin.png" />
                <Text>User Balance: {balance} ETH</Text>
              </Group>
            </Group>
            <ProductCategoryTabs />
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
        </AspectRatio>
      </Center>
    </Container>
  )
}

export default InventoryUI
