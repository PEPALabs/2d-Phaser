import { match } from 'ts-pattern'
import socket from './socket'
import useGameStore from '../data/useGameStore'
import emitter, { Position, SceneMessage } from './emitter'
import initialPlayerPosition from './initialPlayerPosition'

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
    match(data)
      .with({ event: 'switch_scene' }, data => {
        emitter.emit('enter_scene', {
          event: 'enter_scene',
          playerId: 'player_id',
          players: [
            {
              id: 'player_id',
              name: 'player',
              position: initialPlayerPosition[data.sceneKey]
            }
          ],
          sceneKey: data.sceneKey
        })
      })
      .with({ event: 'send_scene_message' }, data => {
        emitter.emit('receive_scene_message', {
          event: 'receive_scene_message',
          message: { ...data.message, sender: 'player' },
          sceneKey: data.sceneKey
        })
      })
  }
}

export default sendSceneEvent
