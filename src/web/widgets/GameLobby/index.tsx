import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import {
  Button,
  Collapse,
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
  const { data: rooms, refetch } = useQuery({
    ...multiplayerAPI.getRooms(),
    select(data) {
      return data.rooms
    }
  })

  const [roomId, setRoomId] = useState<string>(null)
  const [isOnlineMode, setIsOnlineMode] = useState(true)

  const handleEnterGame = () => {
    useGameStore.setState({
      isOnlineMode,
      roomId: isOnlineMode ? roomId : 'default_room'
    })
  }

  return (
    <Paper p="md" radius="md" className="w-2/5">
      <Stack className="w-full">
        <Group justify="space-between">
          <Title order={2}>Game Lobby</Title>
          <Switch
            label={isOnlineMode ? 'Multiplayer' : 'Single player'}
            checked={isOnlineMode}
            onChange={event => setIsOnlineMode(event.currentTarget.checked)}
          />
        </Group>
        <Collapse in={isOnlineMode}>
          <Radio.Group label="Game Rooms" value={roomId} onChange={setRoomId}>
            <Table highlightOnHover horizontalSpacing="md" verticalSpacing="md">
              <Table.Thead>
                <Table.Tr>
                  <th>Select</th>
                  <th>Name</th>
                  <th>Player Count</th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {rooms.map(room => (
                  <Table.Tr key={room.id} onClick={() => setRoomId(room.id)}>
                    <Table.Td>
                      {room.playerCount < room.maxPlayerCount && (
                        <Radio value={room.id} />
                      )}
                    </Table.Td>
                    <Table.Td>{room.name}</Table.Td>
                    <Table.Td>
                      {room.playerCount}/{room.maxPlayerCount}
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Radio.Group>
        </Collapse>
        <Group justify="space-between">
          <Button
            onClick={() => {
              refetch()
            }}>
            Refresh
          </Button>
          <Button onClick={handleEnterGame}>Play Now</Button>
        </Group>
      </Stack>
    </Paper>
  )
}

export default GameLobby
