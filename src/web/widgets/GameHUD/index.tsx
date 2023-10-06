import React from 'react'
import { Box, Stack } from '@mantine/core'
import PlayerInfo from './components/PlayerInfo'
import PlayerCurrency from './components/PlayerCurrency'
import PlayerInventory from './components/PlayerInventory'
import NavigationList from './components/NavigationList'
import HelpButton from './components/HelpButton'

const GameHUD = () => {
  return (
    <Box className="absolute grid h-full w-full grid-cols-2 grid-rows-2" p="lg">
      <Box className="justify-self-start">
        <Stack gap={48}>
          <PlayerInfo />
          <NavigationList />
        </Stack>
      </Box>
      <Box className="justify-self-end">
        <PlayerCurrency />
      </Box>
      <Box className="col-span-2 place-self-end">
        <Stack align="end" gap="sm">
          <HelpButton />
          <PlayerInventory />
        </Stack>
      </Box>
    </Box>
  )
}

export default GameHUD
