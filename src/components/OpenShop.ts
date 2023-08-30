// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import { Physics } from "phaser";
import PubSub from 'pubsub-js'
import React from 'react'
import { Kbd } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import router from '../web/router'
import EventDispatcher from '../EventDispatcher'
import Level from '../scenes/Level'
import Farm from '../scenes/Farm'
import GameManager from '../GameManager'
/* END-USER-IMPORTS */

export default class OpenShop {

	constructor(gameObject: Phaser.GameObjects.Rectangle) {
		this.gameObject = gameObject;
		(gameObject as any)["__OpenShop"] = this;

		/* START-USER-CTR-CODE */
    // Write your code here.
    const scene = this.gameObject.scene
    this.scene = scene
    this.space = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)


    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this)

    /* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Rectangle): OpenShop {
		return (gameObject as any)["__OpenShop"];
	}

	private gameObject: Phaser.GameObjects.Rectangle;
	public player!: Phaser.GameObjects.GameObject;

	/* START-USER-CODE */
  private space: Phaser.Input.Keyboard.Key
  private scene: Phaser.Scene
  private gameManager: GameManager = GameManager.getInstance()
  private shopText: Phaser.GameObjects.Text = null
  private shopTextOn: boolean = false

  private spaceDown: boolean = false
  private spaceActivated: boolean = false
  public shopMessageId: string = 'player:shop'
  public shopTextMessageId: string = 'player:shopText'
  public textVariableName: string = 'shopText'
  public openVariableName: string = 'shopOpen'

  update() {
    // check collide
    const body = this.gameObject.body
    // var touching = this.gameManager.values[this.textVariableName];

    // check space key
    this.spaceActivated = this.space.isDown && !this.spaceDown
    this.spaceDown = this.space.isDown

    // var proximity = ("shopText" in this.gameManager.values)? this.gameManager.values["shopText"] : false;

    if (this.scene.physics.overlap(this.gameObject, this.player)) {
      // if (this.shopText == null)
      // 	// this.shopText = this.scene.add.text(this.gameManager.values["shopLocation"][0]-300, this.gameManager.values["shopLocation"][1], 'Press SPACE to open shop', { fontSize: '32px' });
      // 	// this.shopText = this.scene.add.text(this.gameObject.x-300, this.gameObject.y, 'Press SPACE to open shop', { fontSize: '32px' });
      // 	PubSub.publish(this.shopTextMessage,"hello");
      if (!this.shopTextOn) {
        console.log('shop text on')
        notifications.show({
          id: this.shopTextMessageId,
          autoClose: false,
          message: React.createElement(
            React.Fragment,
            null,
            'Press ',
            React.createElement(Kbd, null, 'SPACE'),
            ' to Open Shop'
          )
        })
        this.shopTextOn = true
      }
      var shopOpen =
        this.openVariableName in this.gameManager.values
          ? this.gameManager.values[this.openVariableName]
          : false

      if (shopOpen) {
        router.navigate('/shop')
      }


      if (this.spaceActivated) {
        // set shop open status
        shopOpen = !shopOpen
        this.gameManager.values[this.openVariableName] = shopOpen
      }
    } else {
      if (this.shopText != null) {
        this.shopText.destroy()
        this.shopText = null
      }
      console.log('shop text off')
      this.shopTextOn = false
      this.gameManager.values[this.textVariableName] = false
      this.gameManager.values[this.openVariableName] = false
      notifications.hide(this.shopTextMessageId)
    }
  }
  // Write your code here.

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
