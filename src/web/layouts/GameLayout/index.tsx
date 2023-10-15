import React, { Suspense } from 'react'
import { Center, Container } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import useGameStore from '../../../data/useGameStore'
import GameCanvas from '../../widgets/GameCanvas'
import GameLobby from '../../widgets/GameLobby'
import SubWindow from './SubWindow'

const GameLayout = () => {
  const roomId = useGameStore(state => state.roomId)

  return (
    <Container className="h-full" fluid>
      <Center className="relative h-full">
        <Suspense>{roomId ? <GameCanvas /> : <GameLobby />}</Suspense>
        <SubWindow>
          <Outlet />
        </SubWindow>
      </Center>
    </Container>
  )
}

export default GameLayout

export const Component = GameLayout
