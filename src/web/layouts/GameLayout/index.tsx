import React from 'react'
import {
  AspectRatio,
  Box,
  Center,
  CloseButton,
  Container,
  Paper,
  SimpleGrid,
  Stack,
  Title
} from '@mantine/core'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import GameCanvas from '../../widgets/GameCanvas'

const pageTitles = {
  '/shop': 'PEPA Shop',
  '/uniswap': 'Uniswap',
  '/inventory': 'PEPA Inventory',
  '/quests': 'PEPA Quest Book',
  '/resources': 'PEPA Dashboard'
}

const GameLayout = () => {
  const location = useLocation()

  const pageTitle = pageTitles[location.pathname]

  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate('/home')
  }

  return (
    <Container className="h-full" size="xl">
      <GameCanvas />
      <Center className="relative h-full">
        <GameCanvas />
        {pageTitle && (
          <Paper
            className="absolute w-11/12 overflow-hidden border border-amber-700 bg-cover bg-center"
            bg="radial-gradient(rgb(229, 195, 158), rgb(232, 196, 156))"
            p="lg"
            shadow="lg">
            <AspectRatio className="w-full" ratio={16 / 9}>
              <Stack>
                <SimpleGrid cols={3} className="w-full">
                  <Box />
                  <Title
                    className="justify-self-center font-title"
                    color="second">
                    {pageTitle}
                  </Title>
                  <CloseButton
                    className="self-center justify-self-end"
                    color="second"
                    size="lg"
                    onClick={handleGoBack}
                  />
                </SimpleGrid>
                <Outlet />
              </Stack>
            </AspectRatio>
          </Paper>
        )}
      </Center>
    </Container>
  )
}

export default GameLayout
