import React from 'react'
import {
  AspectRatio,
  Box,
  Center,
  CloseButton,
  Container,
  SimpleGrid,
  Stack,
  Title
} from '@mantine/core'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import GameCanvas from '../../widgets/GameCanvas'
import ParchmentBackground from './ParchmentBackground'

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
    <Container className="h-full max-w-screen-2xl">
      <Center className="relative h-full">
        <GameCanvas />
        {pageTitle && (
          <>
            <Box className="absolute w-11/12 overflow-hidden" p="lg">
              <ParchmentBackground />
              <AspectRatio className="w-full" ratio={16 / 9}>
                <Stack className="!justify-start">
                  <SimpleGrid cols={3} className="w-full">
                    <Box />
                    <Title className="justify-self-center" color="primary">
                      {pageTitle}
                    </Title>
                    <CloseButton
                      className="self-center justify-self-end"
                      color="primary"
                      size="lg"
                      onClick={handleGoBack}
                    />
                  </SimpleGrid>
                  <Outlet />
                </Stack>
              </AspectRatio>
            </Box>
          </>
        )}
      </Center>
    </Container>
  )
}

export default GameLayout
