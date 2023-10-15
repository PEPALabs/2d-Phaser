import Phaser from 'phaser'
import { Player, Position } from '../multiplayer/emitter'
import DisplayText from '../components/DisplayText'

const initializeOtherPlayer = (scene: Phaser.Scene, player: Player) => {
  const otherPlayer = scene.physics.add.sprite(
    player.position.x,
    player.position.y,
    'pig'
  )

  const playerDisplayText = new DisplayText(otherPlayer)
  playerDisplayText.sender = player.name

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

export default initializeOtherPlayer
