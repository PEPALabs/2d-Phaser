import React, { useEffect, useRef } from 'react'
import { AspectRatio, Center } from '@mantine/core'
import { useLocation } from 'react-router-dom'
import Phaser from 'phaser'
import createGame from './createGame'
import { TargetId } from '../GuidedTours/getSteps'

const GameCanvas = () => {
  const gameContainerRef = useRef<HTMLDivElement>(null)
  const gameRef = useRef<Phaser.Game>(null)

  const location = useLocation()

  useEffect(() => {
    const game = createGame(gameContainerRef.current)
    gameRef.current = game

    return () => {
      game.destroy(true)
      gameRef.current = null
    }
  }, [])

  useEffect(() => {
    if (gameRef.current) {
      gameRef.current.input.keyboard.enabled = location.pathname === '/home'
    }
  }, [location])

  return (
    <Center>
      <AspectRatio
        id={TargetId.GameCanvas}
        ref={gameContainerRef}
        className="absolute w-full overflow-hidden border-4 border-solid border-pepa-secondary"
        ratio={16 / 9}
      />
    </Center>
  )
}

export default GameCanvas
