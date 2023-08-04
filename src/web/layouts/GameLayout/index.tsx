import React from 'react'
import { Box, Center, CloseButton, Container, Paper } from '@mantine/core'
import { Outlet, useNavigate } from 'react-router-dom'
import GameCanvas from '../../widgets/GameCanvas'

const GameLayout = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate('/home')
  }

  return (
    <Container className="h-full" size="xl">
      <GameCanvas />
      <Center className="relative h-full">
        <GameCanvas />
        <Box className="absolute w-11/12">
          <Paper className="relative overflow-hidden" shadow="lg">
            <CloseButton
              className="absolute right-4 top-4 z-10"
              color="blue"
              size="lg"
              onClick={handleGoBack}
            />
            <Outlet />
          </Paper>
        </Box>
      </Center>
    </Container>
  )
}

export default GameLayout
