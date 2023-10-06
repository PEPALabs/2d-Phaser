import React from 'react'
import { UnstyledButton, Image, Tooltip } from '@mantine/core'

const HelpButton = () => {
  return (
    <Tooltip label="Help">
      <UnstyledButton className="w-fit">
        <Image src="/assets/images/help-icon.png" alt="Help" className="h-14" />
      </UnstyledButton>
    </Tooltip>
  )
}

export default HelpButton
