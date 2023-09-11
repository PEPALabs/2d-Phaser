import React from 'react'
import {
  AspectRatio,
  Box,
  Center,
  CloseButton,
  Container,
  ScrollArea,
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
  '/resources': 'PEPA Dashboard',
  '/unity': 'PEPA Games'
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
                    <Title
                      className="justify-self-center whitespace-nowrap font-Avara text-yellow-700"
                      color="primary">
                      {pageTitle}
                    </Title>
                    <CloseButton
                      className="self-center justify-self-end"
                      color="primary"
                      size="lg"
                      onClick={handleGoBack}
                    />
                  </SimpleGrid>
                  <ScrollArea
                    className="h-full w-full"
                    offsetScrollbars
                    classNames={{ viewport: '[&>div]:h-full' }}>
                    <Outlet />
                  </ScrollArea>
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

export const Component = GameLayout
