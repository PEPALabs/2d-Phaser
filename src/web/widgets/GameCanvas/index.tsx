import React, { useEffect, useRef } from 'react'
import Phaser from 'phaser'
import { AspectRatio, Center } from '@mantine/core'
import createGame from './createGame'

const game = createGame(null)

const GameCanvas = () => {
  const gameContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    game.input.keyboard.enabled = true

    game.scale.parent = gameContainerRef.current

    Phaser.DOM.AddToDOM(game.canvas, game.scale.parent)

    return () => {
      game.input.keyboard.enabled = false

      game.scale.parent = null
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
