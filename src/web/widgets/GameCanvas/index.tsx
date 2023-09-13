import React, { useEffect, useRef } from 'react'
import { AspectRatio, Center } from '@mantine/core'
import createGame from './createGame'
import { TargetId } from '../GuidedTours/getSteps'

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
        className="absolute w-full overflow-hidden border-4 border-solid border-pepa-secondary"
        ratio={16 / 9}
        sx={theme => ({ borderRadius: theme.radius[theme.defaultRadius] })}
      />
    </Center>
  )
}

export default GameCanvas
