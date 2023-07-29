import { Text, Image, Box } from '@mantine/core'
import React from 'react'

const PepaLogo = () => {
  return (
    <Box className="absolute !items-start !justify-end " pt="xl" pr={64}>
      <Image
        src="/assets/images/pepa.png"
        height={48}
        width="auto"
        styles={{ caption: { marginTop: 0 } }}
        caption={
          <Text className="text-pepa-textBlue" size="lg" fw="bold">
            PEPA
          </Text>
        }
      />
    </Box>
  )
}

export default PepaLogo
