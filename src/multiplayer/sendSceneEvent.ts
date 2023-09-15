import { match } from 'ts-pattern'
import socket from './socket'
import useGameStore from '../data/useGameStore'
import emitter, { Position, SceneMessage } from './emitter'

interface SwitchSceneDTO {
  sceneKey: string
  event: 'switch_scene'
}

interface PlayerMovementDTO {
  sceneKey: string
  event: 'player_movement'
  position: Position
}

interface SendSceneMessageDTO {
  sceneKey: string
  event: 'send_scene_message'
  message: Omit<SceneMessage, 'sender'>
}

const sendSceneEvent = (
  data: SwitchSceneDTO | PlayerMovementDTO | SendSceneMessageDTO
) => {
  if (useGameStore.getState().isOnlineMode) {
    socket.send(JSON.stringify(data))
  } else {
    match(data).with({ event: 'switch_scene' }, data => {
      emitter.emit('enter_scene', {
        event: 'enter_scene',
        playerId: 'player_id',
        players: [
          {
            id: 'player_id',
            name: 'player',
            position: match(data.sceneKey)
              .with('Level', () => ({ x: 1640, y: 1264 }))
              .with('Farm', () => ({ x: 1064, y: 1222 }))
              .otherwise(() => ({ x: 0, y: 0 }))
          }
        ],
        sceneKey: data.sceneKey
      })
    })
  }
}

export default sendSceneEvent
