import { WebSocket } from 'partysocket'
import useAuthStore from '../web/shared/useAuthStore'
import env from '../web/shared/env'
import emitter, { Position } from './emitter'

const getSocketUrl = () => {
  const url = new URL(env.MULTIPLAYER_API_PATH)

  url.searchParams.append('token', useAuthStore.getState().token)

  return url.toString()
}

const socket = new WebSocket(getSocketUrl, undefined, { startClosed: true })

socket.addEventListener('message', event => {
  const data = JSON.parse(event.data)

  emitter.emit(data.event, data)
})

const initSocket = () => {
  socket.reconnect()
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

const sendEvent = (data: SwitchSceneDTO | PlayerMovementDTO) => {
  socket.send(JSON.stringify(data))
}

export { initSocket, sendEvent }

export default socket
