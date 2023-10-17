import { Image, Box } from '@mantine/core'
import React from 'react'

const PepaLogo = () => {
  return (
    <Box className="absolute right-0" pt="xl" pr={64}>
      <Image src="/assets/images/pepa.png" h={48} w="auto" />
    </Box>
  )
}

export default PepaLogo
