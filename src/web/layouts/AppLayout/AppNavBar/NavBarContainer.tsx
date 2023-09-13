import React, { PropsWithChildren } from 'react'
import { Box, Navbar, Stack } from '@mantine/core'

const NavBarContainer = ({ children }: PropsWithChildren) => {
  return (
    <Navbar width={{ base: 280 }} withBorder={false} py="sm" bg="transparent">
      <Box
        className="h-full bg-[#FED8D8]"
        p="xs"
        sx={theme => ({ borderRadius: theme.radius.lg })}>
        <Stack
          className="h-full border-4 border-dashed border-[#FCB0B0]"
          sx={theme => ({ borderRadius: theme.radius.lg })}
          p="xs">
          {children}
        </Stack>
      </Box>
    </Navbar>
  )
}

export default NavBarContainer
