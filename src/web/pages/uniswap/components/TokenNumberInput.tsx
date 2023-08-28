import React from 'react'
import { NumberInput } from '@mantine/core'
import SelectTokenButton from './SelectTokenButton'

const TokenNumberInput = () => {
  return (
    <NumberInput
      variant="filled"
      size="xl"
      placeholder="0"
      hideControls
      rightSection={<SelectTokenButton />}
      rightSectionWidth={144}
      styles={theme => ({
        rightSection: {
          justifyContent: 'flex-end',
          paddingRight: theme.spacing.sm
        }
      })}
    />
  )
}

export default TokenNumberInput
