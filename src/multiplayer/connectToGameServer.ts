import Phaser from 'phaser'
import useGameStore from '../data/useGameStore'
import socket from './socket'
import emitter from './emitter'

const connectToGameServer = (scene: Phaser.Scene) => {
  emitter.on('enter_scene', data => {
    emitter.off('enter_scene')
    useGameStore.setState({ sceneData: data })
    scene.scene.start(data.sceneKey)
  })

  if (useGameStore.getState().isOnlineMode) {
    socket.reconnect()
  } else {
    emitter.emit('enter_scene', {
      event: 'enter_scene',
      playerId: 'player_id',
      players: [
        { id: 'player_id', name: 'player', position: { x: 1640, y: 1264 } }
      ],
      sceneKey: 'Level'
    })
  }
}

export default connectToGameServer
