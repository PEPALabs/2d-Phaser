import React from 'react'
import { Overlay, Title, Transition } from '@mantine/core'
import useSocketStatus from './useSocketStatus'
import useGameStore from '../../../data/useGameStore'

const ConnectionStatus = () => {
  const { isOpen, closeEvent } = useSocketStatus()

  const goBack = () => {
    if (closeEvent) {
      useGameStore.setState({ roomId: null })
    }
  }

  return (
    <Transition mounted={!isOpen} transition="fade">
      {styles => (
        <Overlay
          className="flex flex-col justify-center"
          gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
          style={styles}
          onClick={goBack}>
          <Title order={1} c="white" ta="center">
            {closeEvent ? (
              <>Game Disconnected. Reason : {closeEvent.reason}</>
            ) : (
              'Connecting......'
            )}
          </Title>
          {closeEvent && (
            <Title order={2} c="white" ta="center">
              Click anywhere to continue
            </Title>
          )}
        </Overlay>
      )}
    </Transition>
  )
}

export default ConnectionStatus
