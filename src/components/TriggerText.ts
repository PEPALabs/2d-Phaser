// You can write more code here

/* START OF COMPILED CODE */

import Phaser from 'phaser'
/* START-USER-IMPORTS */
import useGameStore, { messageActions } from '../data/useGameStore'
/* END-USER-IMPORTS */

export default class TriggerText {
  constructor(gameObject: Phaser.Physics.Arcade.Sprite) {
    this.gameObject = gameObject
    ;(gameObject as any)['__TriggerText'] = this

    /* START-USER-CTR-CODE */
    // Write your code here.
    const scene = this.gameObject.scene
    this.scene = scene
    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this)
    scene.physics.add.existing(this.gameObject)
    /* END-USER-CTR-CODE */
  }

  static getComponent(gameObject: Phaser.Physics.Arcade.Sprite): TriggerText {
    return (gameObject as any)['__TriggerText']
  }

  private gameObject: Phaser.Physics.Arcade.Sprite
  public sender: string = 'undefined'
  public player!: Phaser.GameObjects.GameObject
  public message: string = ''

  /* START-USER-CODE */
  private scene: Phaser.Scene
  // Write your code here.

  setMessage() {
    messageActions.addMessage({
      senderId: this.sender,
      sender: this.sender,
      content: this.message
    })
  }

  update() {
    if (this.scene.physics.overlap(this.gameObject, this.player)) {
      const messages = useGameStore.getState().messages
      const latestMessage = messages[messages.length - 1]

      if (latestMessage?.sender !== this.sender) {
        this.setMessage()
      }
    }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
