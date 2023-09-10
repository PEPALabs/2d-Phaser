import React from 'react'
import { Overlay, Title } from '@mantine/core'
import useSocketStatus from './useSocketStatus'

const ConnectionStatus = () => {
  const { isOpen } = useSocketStatus()

  return (
    <>
      {!isOpen && (
        <Overlay
          gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
          opacity={0.85}>
          <Title color="white">Connecting......</Title>
        </Overlay>
      )}
    </>
  )
}

export default ConnectionStatus
