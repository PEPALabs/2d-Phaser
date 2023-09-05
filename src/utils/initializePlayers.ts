import Phaser, { Scene, Scenes } from 'phaser'
import { EnterSceneData, Player, emitter } from '../web/shared/emitter'

const createOtherPlayer = (scene: Phaser.Scene, player: Player) => {
  const otherPlayer = scene.physics.add.sprite(
    player.position.x,
    player.position.y,
    'pig'
  )
  otherPlayer.scaleX = 0.1
  otherPlayer.scaleY = 0.1
  otherPlayer.body.setSize(1134, 1572, false)

  otherPlayer.setData('id', player.id)

  return otherPlayer
}

const initializePlayers = (scene: Phaser.Scene, sceneData: EnterSceneData) => {
  const playerGroup = scene.physics.add.group()

  sceneData.players.forEach(player => {
    if (player.id !== sceneData.playerId) {
      const otherPlayer = createOtherPlayer(scene, player)

      playerGroup.add(otherPlayer)
    }
  })

  const initializeEvents = () => {
    emitter.on('enter_scene', data => {
      scene.scene.start(data.sceneKey, data)
    })

    emitter.on('player_moved', data => {
      const targetPlayer = playerGroup.getChildren().find(otherPlayer => {
        const id = otherPlayer.getData('id')

        return id === data.player.id && id !== sceneData.playerId
      }) as Phaser.Types.Physics.Arcade.SpriteWithDynamicBody

      if (targetPlayer) {
        targetPlayer.x = data.player.position.x
        targetPlayer.y = data.player.position.y
      }
    })

    emitter.on('player_enter_scene', data => {
      if (data.player.id !== sceneData.playerId) {
        const otherPlayer = createOtherPlayer(scene, data.player)

        playerGroup.add(otherPlayer)
      }
    })

    emitter.on('player_exit_scene', data => {
      const targetPlayer = playerGroup
        .getChildren()
        .find(
          otherPlayer => otherPlayer.getData('id') === data.player.id
        ) as Phaser.Types.Physics.Arcade.SpriteWithDynamicBody

      if (targetPlayer) {
        playerGroup.remove(targetPlayer, true)
      }
    })
  }

  const clearEvents = () => {
    emitter.off('enter_scene')
    emitter.off('player_moved')
    emitter.off('player_enter_scene')
    emitter.off('player_exit_scene')
  }

  initializeEvents()

  scene.events.on(Phaser.Scenes.Events.SHUTDOWN, clearEvents)

  return {
    playerGroup
  }
}

export default initializePlayers
