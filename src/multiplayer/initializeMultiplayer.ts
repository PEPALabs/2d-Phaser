import Phaser from 'phaser'
import emitter from './emitter'
import initializeOtherPlayer from './initializeOtherPlayer'
import useGameStore from '../data/useGameStore'

// This function is called only within the create lifecycle of a Phaser scene
const initializeMultiplayer = (
  scene: Phaser.Scene,
  currentPlayer: Phaser.Physics.Arcade.Sprite
) => {
  const playerGroup = scene.physics.add.group()

  const initializePlayerGroup = () => {
    const sceneData = useGameStore.getState().sceneData

    sceneData.players.forEach(player => {
      if (player.id === sceneData.playerId) {
        currentPlayer.setPosition(player.position.x, player.position.y)
      } else {
        const otherPlayer = initializeOtherPlayer(scene, player)

        playerGroup.add(otherPlayer)
      }
    })
  }

  const initializeEvents = () => {
    emitter.on('enter_scene', data => {
      useGameStore.setState({ sceneData: data })

      scene.scene.switch(data.sceneKey)
    })

    emitter.on('player_moved', data => {
      const targetPlayer = playerGroup.getChildren().find(otherPlayer => {
        const id = otherPlayer.getData('id')

        const sceneData = useGameStore.getState().sceneData

        return id === data.player.id && id !== sceneData.playerId
      }) as Phaser.Types.Physics.Arcade.SpriteWithDynamicBody

      if (targetPlayer) {
        targetPlayer.setData('position', data.player.position)
      }
    })

    emitter.on('player_enter_scene', data => {
      const sceneData = useGameStore.getState().sceneData

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

  const initializePlayerGroupAndEvents = () => {
    initializePlayerGroup()
    initializeEvents()
  }

  initializePlayerGroupAndEvents()

  const cleanUpScene = () => {
    if (playerGroup.children) {
      playerGroup.clear(true, true)
    }
    emitter.all.clear()
  }

  scene.events.on(Phaser.Scenes.Events.WAKE, initializePlayerGroupAndEvents)
  scene.events.on(Phaser.Scenes.Events.SLEEP, cleanUpScene)
  scene.events.on(Phaser.Scenes.Events.DESTROY, cleanUpScene)
}

export default initializeMultiplayer
