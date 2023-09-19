import React, { useEffect, useRef } from 'react'
import { AspectRatio, Center } from '@mantine/core'
import createGame from './createGame'
import { TargetId } from '../GuidedTours/getSteps'
import ConnectionStatus from './ConnectionStatus'
import GameMenu from './GameMenu'

const GameCanvas = () => {
  const gameContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const game = createGame(gameContainerRef.current)

    return () => {
      game.destroy(true)
    }
  }, [])

  return (
    <Center>
      <AspectRatio
        id={TargetId.GameCanvas}
        ref={gameContainerRef}
        className="absolute w-full overflow-hidden"
        ratio={16 / 9}
        sx={theme => ({ borderRadius: theme.radius[theme.defaultRadius] })}>
        <ConnectionStatus />
        <GameMenu />
      </AspectRatio>
    </Center>
  )
}

export default GameCanvas
