import React, { useEffect, useRef } from 'react'
import { AspectRatio, Center } from '@mantine/core'
import createGame from './createGame'

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
        ref={gameContainerRef}
        className="absolute w-full overflow-hidden"
        ratio={16 / 9}
        sx={theme => ({ borderRadius: theme.radius[theme.defaultRadius] })}
      />
    </Center>
  )
}

export default GameCanvas
