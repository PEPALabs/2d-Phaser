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
          className="flex-col"
          gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
          opacity={0.85}
          style={styles}
          onClick={goBack}>
          <Title order={1} color="white" ta="center">
            {closeEvent ? (
              <>Game Disconnected. Reason : {closeEvent.reason}</>
            ) : (
              'Connecting......'
            )}
          </Title>
          {closeEvent && (
            <Title order={2} color="white" ta="center">
              Click anywhere to continue
            </Title>
          )}
        </Overlay>
      )}
    </Transition>
  )
}

export default ConnectionStatus
