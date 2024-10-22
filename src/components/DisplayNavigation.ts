// You can write more code here

/* START OF COMPILED CODE */

import Phaser, { Display } from 'phaser'
/* START-USER-IMPORTS */
import { Physics } from 'phaser'
import PubSub from 'pubsub-js'
/* END-USER-IMPORTS */

export default class DisplayNavigation {
  constructor(gameObject: Phaser.GameObjects.Image) {
    this.gameObject = gameObject
    ;(gameObject as any)['__DisplayNavigation'] = this

    /* START-USER-CTR-CODE */
    // Write your code here.
    const scene = this.gameObject.scene
    this.scene = scene
    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this)

    /* END-USER-CTR-CODE */
  }

  static getComponent(gameObject: Phaser.GameObjects.Image): DisplayNavigation {
    return (gameObject as any)['__DisplayNavigation']
  }

  private gameObject: Phaser.GameObjects.Image

  /* START-USER-CODE */
  public itemList: {} = {}

  public player!: Phaser.Physics.Arcade.Sprite
  public target!: Phaser.GameObjects.Rectangle
  private scene: Phaser.Scene
  private radius: number = 150
  // Write your code here.

  update() {
    var focusItem = localStorage.getItem('quest.focusedItem')
    // Note: always use a json parse
    try {
      focusItem = JSON.parse(focusItem)
    } catch (e) {
      console.log(e)
      focusItem = ''
    }
    //TODO: get a map of name->target
    var target = this.target
    if (focusItem in this.itemList) {
      this.gameObject.visible = true

      // if(this.itemList[focusItem] === undefined){
      // 	var target = this.itemList[focusItem];
      // }else{
      // 	var target = this.itemList[focusItem];
      // }
      target = this.itemList[focusItem] ? this.itemList[focusItem] : this.target

      var angle = Phaser.Math.Angle.Between(
        this.player.x,
        this.player.y,
        target.x,
        target.y
      )
      var vector = new Phaser.Math.Vector2(this.radius, 0)
      vector.setAngle(angle)
      this.gameObject.x = this.player.body.x + vector.x
      this.gameObject.y = this.player.body.y + vector.y
      this.gameObject.rotation = angle
    } else {
      this.gameObject.visible = false
    }
  }
  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
