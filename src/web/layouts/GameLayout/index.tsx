import React from 'react'
import { Center, Container } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import GameCanvas from '../../widgets/GameCanvas'
import SubWindow from './SubWindow'

const GameLayout = () => {
  return (
    <Container className="h-full" fluid>
      <Center className="relative h-full">
        <GameCanvas />
        <SubWindow>
          <Outlet />
        </SubWindow>
      </Center>
    </Container>
  )
}

export default GameLayout

export const Component = GameLayout
