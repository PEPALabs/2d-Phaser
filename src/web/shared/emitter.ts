import mitt from 'mitt'
import useAuthStore from './useAuthStore'

export interface Position {
  x: number
  y: number
}

export interface Player {
  id: string
  name: string
  position: Position
}

export interface EnterSceneData {
  sceneKey: string
  event: string
  players: Player[]
  playerId: string
}

interface SwitchSceneDTO {
  event: 'switch_scene'
  sceneKey: string
}

interface PlayerMovementDTO {
  sceneKey: string
  event: 'player_movement'
  position: Position
}

interface PlayerMovedData {
  event: 'player_moved'
  sceneKey: string
  player: Player
}

interface PlayerEnterSceneData {
  event: 'player_enter_scene'
  sceneKey: string
  player: Player
}

interface PlayerExitScene {
  event: 'player_exit_scene'
  player: Player
}

type socketEvents = {
  send: SwitchSceneDTO | PlayerMovementDTO
  enter_scene: EnterSceneData
  player_moved: PlayerMovedData
  player_enter_scene: PlayerEnterSceneData
  player_exit_scene: PlayerExitScene
}

const emitter = mitt<socketEvents>()

const initSocket = () => {
  const socket = new WebSocket(
    `ws://localhost:8818/ws?token=${useAuthStore.getState().token}`
  )

  socket.addEventListener('message', event => {
    const data = JSON.parse(event.data)

    emitter.emit(data.event, data)
  })

  emitter.on('send', data => {
    socket.send(JSON.stringify(data))
  })
}

export { emitter, initSocket }
