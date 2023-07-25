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
import useShopStore from './stores/useShopStore'
import ShoppingBar from './components/ShoppingBar'
import ProductCategoryTabs from './components/ProductCategoryTabs'
import useProductCategory from './hooks/useProductCategory'

function ShopUI() {
  const { category } = useProductCategory()

  const products = useShopStore(state => state.products)

  const categorizedProducts =
    category === 'all'
      ? products
      : products.filter(product => product.category === category)

  const index = useShopStore(state => state.index)

  const balance = useShopStore(state => state.balance)

  const selectedProduct = categorizedProducts[index]

  return (
    <Container className="h-full" size="xl">
      <Center className="h-full">
        <AspectRatio className="w-full bg-pepa-blue" ratio={16 / 9}>
          <Stack className="h-full overflow-hidden" p="xl">
            <Group className="w-full" position="apart">
              <Title order={2} color="blue">
                PEPA Shop
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
                  <ShoppingBar product={selectedProduct} />
                )}
              </Grid.Col>
            </Grid>
          </Stack>
        </AspectRatio>
      </Center>
    </Container>
  )
}

export default ShopUI
