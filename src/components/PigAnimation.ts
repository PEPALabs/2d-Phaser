// You can write more code here

/* START OF COMPILED CODE */

import Phaser from 'phaser'
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PigAnimation {
  constructor(gameObject: Phaser.Physics.Arcade.Sprite) {
    this.gameObject = gameObject
    ;(gameObject as any)['__PigAnimation'] = this

    /* START-USER-CTR-CODE */
    // Write your code here.
    this.gameObject.scene.events.once('update', () => {
      if (
        Math.abs(this.gameObject.body.velocity.x) > 0 &&
        Math.abs(this.gameObject.body.velocity.y) > 0
      )
        this.gameObject.play(this.animationKey)
    })
    /* END-USER-CTR-CODE */
  }

  static getComponent(gameObject: Phaser.Physics.Arcade.Sprite): PigAnimation {
    return (gameObject as any)['__PigAnimation']
  }

  private gameObject: Phaser.Physics.Arcade.Sprite
  public animationKey: string = ''

  /* START-USER-CODE */

  // Write your code here.
  update() {}

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
