import mitt from 'mitt'

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

type SocketEvents = {
  enter_scene: EnterSceneData
  player_moved: PlayerMovedData
  player_enter_scene: PlayerEnterSceneData
  player_exit_scene: PlayerExitScene
}

const emitter = mitt<SocketEvents>()

export default emitter
