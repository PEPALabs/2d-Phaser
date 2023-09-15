import React, { useState } from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import {
  Button,
  Collapse,
  Container,
  Group,
  Paper,
  Radio,
  Stack,
  Switch,
  Table,
  Title
} from '@mantine/core'
import multiplayerAPI from '../../apis/multiplayerAPI'
import useGameStore from '../../../data/useGameStore'

const GameLobby = () => {
  const { data: rooms, refetch } = useSuspenseQuery({
    ...multiplayerAPI.getRooms(),
    select(data) {
      return data.rooms
    }
  })

  const [roomId, setRoomId] = useState<string>(rooms[0].id)
  const [isOnlineMode, setIsOnlineMode] = useState(true)

  const handleEnterGame = () => {
    useGameStore.setState({ isOnlineMode, roomId })
  }

  return (
    <Container size="sm" className="w-full">
      <Paper p="md" radius="md" className="w-full">
        <Stack className="w-full">
          <Group position="apart">
            <Title order={2}>GameLobby</Title>
            <Switch
              label={isOnlineMode ? 'Multiplayer' : 'Single player'}
              checked={isOnlineMode}
              onChange={event => setIsOnlineMode(event.currentTarget.checked)}
            />
          </Group>
          <Collapse in={isOnlineMode}>
            <Radio.Group label="Game Rooms" value={roomId} onChange={setRoomId}>
              <Table
                highlightOnHover
                horizontalSpacing="md"
                verticalSpacing="md">
                <thead>
                  <tr>
                    <th>Select</th>
                    <th>Name</th>
                    <th>Player Count</th>
                    <th>Max Players Count</th>
                  </tr>
                </thead>
                <tbody>
                  {rooms.map(room => (
                    <tr key={room.id} onClick={() => setRoomId(room.id)}>
                      <td>
                        <Radio value={room.id} />
                      </td>
                      <td>{room.name}</td>
                      <td>{room.playerCount}</td>
                      <td>{room.maxPlayersCount}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Radio.Group>
          </Collapse>
          <Group position="apart">
            <Button
              onClick={() => {
                refetch()
              }}>
              Refresh
            </Button>
            <Button onClick={handleEnterGame}>Start Game</Button>
          </Group>
        </Stack>
      </Paper>
    </Container>
  )
}

export default GameLobby
