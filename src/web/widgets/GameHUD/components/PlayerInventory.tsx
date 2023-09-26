import React from 'react'
import { UnstyledButton, Image, Tooltip } from '@mantine/core'

const PlayerInventory = () => {
  return (
    <Tooltip label="Inventory">
      <UnstyledButton>
        <Image
          src="/assets/images/inventory-icon.png"
          alt="Inventory"
          className="h-28"
        />
      </UnstyledButton>
    </Tooltip>
  )
}

export default PlayerInventory
