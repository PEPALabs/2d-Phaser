import Phaser from 'phaser'
import emitter from './emitter'
import useSceneDataStore from './useSceneDataStore'
import initializeOtherPlayer from './initializeOtherPlayer'

const initializeMultiplayer = (scene: Phaser.Scene) => {
  const sceneData = useSceneDataStore.getState()

  const playerGroup = scene.physics.add.group()

  const initializePlayerGroup = () => {
    sceneData.players.forEach(player => {
      if (player.id !== sceneData.playerId) {
        const otherPlayer = initializeOtherPlayer(scene, player)

        playerGroup.add(otherPlayer)
      }
    })

    const clearEvents = () => {
      emitter.all.clear()
    }

    const initializeEvents = () => {
      emitter.on('enter_scene', data => {
        useSceneDataStore.setState(data)

        clearEvents()

        scene.scene.switch(data.sceneKey)
      })

      emitter.on('player_moved', data => {
        const targetPlayer = playerGroup.getChildren().find(otherPlayer => {
          const id = otherPlayer.getData('id')

          return id === data.player.id && id !== sceneData.playerId
        }) as Phaser.Types.Physics.Arcade.SpriteWithDynamicBody

        if (targetPlayer) {
          targetPlayer.setData('position', data.player.position)
        }
      })

      emitter.on('player_enter_scene', data => {
        if (data.player.id !== sceneData.playerId) {
          const otherPlayer = initializeOtherPlayer(scene, data.player)

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

    initializeEvents()
  }

  initializePlayerGroup()

  scene.events.on(Phaser.Scenes.Events.WAKE, () => {
    initializePlayerGroup()
  })

  scene.events.on(Phaser.Scenes.Events.SLEEP, () => {
    playerGroup.clear(true, true)
  })
}

export default initializeMultiplayer
