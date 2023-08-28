// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import { Physics } from 'phaser'
import PubSub from 'pubsub-js'
import React from 'react'
import { Kbd } from '@mantine/core'
import { notifications } from '@mantine/notifications'
/* END-USER-IMPORTS */

export default class TeleportScene {

	constructor(gameObject: Phaser.GameObjects.Rectangle) {
		this.gameObject = gameObject;
		(gameObject as any)["__TeleportScene"] = this;

		/* START-USER-CTR-CODE */
    // Write your code here.
    const scene = this.gameObject.scene
    this.scene = scene
    this.scene.physics.add.existing(this.gameObject)
    this.cursors = scene.input.keyboard.createCursorKeys()
    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this)

    /* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Rectangle): TeleportScene {
		return (gameObject as any)["__TeleportScene"];
	}

	private gameObject: Phaser.GameObjects.Rectangle;
	public targetScene: string = "";
	public player!: Phaser.GameObjects.GameObject;

	/* START-USER-CODE */
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys
  private proximity: Boolean = false
  private textShown: Boolean = false
  private scene: Phaser.Scene
  private teleport12TextId = 'teleport12:text'
  // Write your code here.

  update() {
    if (this.scene.physics.overlap(this.gameObject, this.player)) {
      // display text
      if (!this.proximity) {
        console.log('teleporting1')
        this.proximity = true
        notifications.show({
          id: this.teleport12TextId,
          autoClose: false,
          message: React.createElement(
            React.Fragment,
            null,
            'Press ',
            React.createElement(Kbd, null, 'SPACE'),
            ' to teleport'
          )
        })
      }
    } else {
      if (this.proximity) {
        console.log('teleporting2')
        this.proximity = false
        notifications.hide(this.teleport12TextId)
      }
    }

    if (this.proximity && this.cursors.space.isDown) {
      console.log('teleporting3')
      this.proximity = false
      notifications.hide(this.teleport12TextId)
      this.scene.scene.start(this.targetScene)
    }
  }
  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
