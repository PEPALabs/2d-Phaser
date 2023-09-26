import React from 'react'
import { UnstyledButton, Image, Tooltip } from '@mantine/core'
import { NavLink } from 'react-router-dom'

const PlayerInventory = () => {
  return (
    <Tooltip label="Inventory">
      <UnstyledButton component={NavLink} to="/inventory">
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
