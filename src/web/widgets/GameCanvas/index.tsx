import React, { useEffect, useRef } from 'react'
import { Box, Center } from '@mantine/core'
import { useLocation } from 'react-router-dom'
import Phaser from 'phaser'
import createGame from './createGame'
import { TargetId } from '../GuidedTours/getSteps'
import GameHUD from '../GameHUD'
import GameMenu from './GameMenu'
import ConnectionStatus from './ConnectionStatus'

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
    <Box className="relative aspect-video h-full">
      <Center
        className="absolute"
        id={TargetId.GameCanvas}
        ref={gameContainerRef}
      />
      <GameHUD />
      <ConnectionStatus />
      <GameMenu />
    </Box>
  )
}

export default GameCanvas
