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
  Title,
  Transition
} from '@mantine/core'
import { Outlet, useNavigate } from 'react-router-dom'
import GameCanvas from '../../widgets/GameCanvas'
import ParchmentBackground from './ParchmentBackground'
import useEscapeToHomepage from './useEscapeToHomepage'
import usePageTitle from './usePageTitle'

const GameLayout = () => {
  useEscapeToHomepage()

  const pageTitle = usePageTitle()

  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate('/home')
  }

  return (
    <Container className="h-full" fluid>
      <Center className="relative h-full">
        <GameCanvas />
        <Transition mounted={!!pageTitle} transition="fade">
          {styles => (
            <Box className="absolute w-11/12" p="lg" style={styles}>
              <ParchmentBackground />
              <AspectRatio className="w-full" ratio={16 / 9}>
                <Stack>
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
          )}
        </Transition>
      </Center>
    </Container>
  )
}

export default GameLayout

export const Component = GameLayout
