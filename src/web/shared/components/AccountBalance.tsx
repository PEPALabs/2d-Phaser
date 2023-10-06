import React from 'react'
import { Group, Image, Text } from '@mantine/core'

const AccountBalance = () => {
  return (
    <Group>
      <Image
        src="/assets/images/account-coin.png"
        alt="account-coin"
        className="h-10 w-10"
      />
      <Text size="xl" fw="bold">
        1000 ETH
      </Text>
    </Group>
  )
}

export default AccountBalance
