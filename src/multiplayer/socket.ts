import { WebSocket } from 'partysocket'
import useAuthStore from '../web/shared/useAuthStore'
import env from '../web/shared/env'
import emitter from './emitter'
import useGameStore from '../data/useGameStore'

const getSocketUrl = () => {
  const url = new URL(
    env.MULTIPLAYER_API_PATH + '/' + useGameStore.getState().roomId
  )

  url.searchParams.append('token', useAuthStore.getState().token)

  return url.toString()
}

const socket = new WebSocket(getSocketUrl, undefined, { startClosed: true })

socket.addEventListener('message', event => {
  const data = JSON.parse(event.data)

  emitter.emit(data.event, data)
})

export default socket
