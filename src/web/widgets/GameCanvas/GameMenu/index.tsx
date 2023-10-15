import React, { useEffect } from 'react'
import { useMatch } from 'react-router-dom'
import { Button, Overlay, Paper, Stack, Text, Transition } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import useGameStore from '../../../../data/useGameStore'

const GameMenu = () => {
  const [opened, handlers] = useDisclosure(false)

  const isHomePage = useMatch('/home')

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isHomePage) {
        handlers.toggle()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handlers, isHomePage])

  const handleResume = () => {
    handlers.close()
  }

  const handleQuit = () => {
    useGameStore.setState({ roomId: null })
  }

  return (
    <Transition mounted={opened} transition="fade">
      {styles => (
        <Overlay
          className="flex items-center justify-center"
          gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
          style={styles}>
          <Stack className="w-1/5">
            <Text c="white" fw="bold" ta="center">
              Press Escape to Continue
            </Text>
            <Paper p="md">
              <Stack>
                <Button onClick={handleResume}>Resume</Button>
                <Button onClick={handleQuit}>Quit</Button>
              </Stack>
            </Paper>
          </Stack>
        </Overlay>
      )}
    </Transition>
  )
}

export default GameMenu
