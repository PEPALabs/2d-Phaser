import Phaser from 'phaser'
import { Player, Position, emitter } from '../web/shared/emitter'
import useSceneDataStore from './useSceneDataStore'

const initializeMultiplayer = (scene: Phaser.Scene, player: Player) => {
  const otherPlayer = scene.physics.add.sprite(
    player.position.x,
    player.position.y,
    'pig'
  )

  otherPlayer.setScale(0.1)
  otherPlayer.body.setSize(1134, 1572, false)
  otherPlayer.setData('id', player.id)
  otherPlayer.setData('position', player.position)

  otherPlayer.anims.play({ key: 'walk', repeat: 0 }, true)
  otherPlayer.anims.pause()

  scene.events.on(Phaser.Scenes.Events.UPDATE, () => {
    const newPosition: Position = otherPlayer.getData('position')

    if (
      newPosition &&
      (otherPlayer.x !== newPosition.x || otherPlayer.y !== newPosition.y)
    ) {
      otherPlayer.anims.play({ key: 'walk', repeat: 0 }, true)

      otherPlayer.setFlipX(otherPlayer.x < newPosition.x)
      otherPlayer.setPosition(newPosition.x, newPosition.y)
    }
  })

  otherPlayer.on(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
    otherPlayer.anims.play({ key: 'walk', repeat: 0 }, true)
    otherPlayer.anims.pause()
  })

  return otherPlayer
}

const initializePlayers = (scene: Phaser.Scene) => {
  const sceneData = useSceneDataStore.getState()

  const initializeGroup = () => {
    const playerGroup = scene.physics.add.group()

    sceneData.players.forEach(player => {
      if (player.id !== sceneData.playerId) {
        const otherPlayer = initializeMultiplayer(scene, player)

        playerGroup.add(otherPlayer)
      }
    })

    const clearEvents = () => {
      playerGroup.destroy(true)
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
          const otherPlayer = initializeMultiplayer(scene, data.player)

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

  scene.events.on(Phaser.Scenes.Events.WAKE, () => {
    initializeGroup()
  })

  scene.events.on(Phaser.Scenes.Events.CREATE, () => {
    initializeGroup()
  })
}

export default initializePlayers
