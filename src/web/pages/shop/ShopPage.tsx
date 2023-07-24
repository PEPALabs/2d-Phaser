import React from 'react'
import { Text, Group, Stack, Box, Title, Container, Image } from '@mantine/core'
import ProductList from './components/ProductList'
import useShopStore from './stores/useShopStore'
import ShoppingBar from './components/ShoppingBar'

function ShopUI() {
  const products = useShopStore(state => state.products)

  const index = useShopStore(state => state.index)

  const amount = useShopStore(state => state.amount)

  const selectedProduct = products[index]

  return (
    <Box className="h-full bg-pepa-blue">
      <Container className="h-full py-14" size="lg">
        <Stack className="h-full gap-y-16" align="center">
          <Group className="w-full" position="apart">
            <Title
              order={2}
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}>
              PEPA Shop
            </Title>
            <Group spacing="sm">
              <Image width={36} height={36} src="/assets/coin.png" />
              <Text>User Balance: {amount} ETH</Text>
            </Group>
          </Group>
          <Box className="grow">
            <ProductList products={products} />
          </Box>
          {selectedProduct?.name && <ShoppingBar product={selectedProduct} />}
        </Stack>
      </Container>
    </Box>
  )
}

export default ShopUI
