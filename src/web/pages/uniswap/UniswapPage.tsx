import React from 'react'
import { Center, AspectRatio, Container } from '@mantine/core'

const iframeSrc =
  'https://app.uniswap.org/#/swap?outputCurrency=0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359'

const UniswapPage = () => {
  return (
    <Container className=" h-full" size="xl">
      <Center className="h-full">
        <AspectRatio className="w-full" ratio={16 / 9}>
          <iframe className="border-0" src={iframeSrc} />
        </AspectRatio>
      </Center>
    </Container>
  )
}

export default UniswapPage
