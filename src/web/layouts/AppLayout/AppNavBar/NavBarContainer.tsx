import React, { PropsWithChildren } from 'react'
import { Box, AppShell, Stack } from '@mantine/core'

const NavBarContainer = ({ children }: PropsWithChildren) => {
  return (
    <AppShell.Navbar py="sm" bg="transparent">
      <Box
        className="h-full bg-[#FED8D8]"
        p="xs"
        style={theme => ({ borderRadius: theme.radius.lg })}>
        <Stack
          className="h-full border-4 border-dashed border-[#FCB0B0]"
          style={theme => ({ borderRadius: theme.radius.lg })}
          p="xs">
          {children}
        </Stack>
      </Box>
    </AppShell.Navbar>
  )
}

export default NavBarContainer
