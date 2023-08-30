// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import { Physics } from 'phaser'
// import { publish} from '../event';
import PubSub from 'pubsub-js'
import GameManager from '../GameManager'
import { assert } from "ethers";
// import Phaser from 'phaser';
/* END-USER-IMPORTS */

export default class PlayerMovement {

	constructor(gameObject: Phaser.Physics.Arcade.Sprite) {
		this.gameObject = gameObject;
		(gameObject as any)["__PlayerMovement"] = this;

		/* START-USER-CTR-CODE */
    /** @type {number} */
    this.velocity = 20

    const scene = this.gameObject.scene
    this.scene = scene
    this.keyW = this.scene.input.keyboard.addKey('W')
    this.keyA = this.scene.input.keyboard.addKey('A')
    this.keyS = this.scene.input.keyboard.addKey('S')
    this.keyD = this.scene.input.keyboard.addKey('D')
    this.cursors = this.scene.input.keyboard.createCursorKeys()

  this.scene.input.keyboard.disableGlobalCapture();

    //this.keyW = this.scene.input.keyboard.addKey('W');
    //this.keyA = this.scene.input.keyboard.addKey('A');
    //this.keyS = this.scene.input.keyboard.addKey('S');
    //this.keyD = this.scene.input.keyboard.addKey('D');

    console.log("cursor",this.cursors.up,this.cursors.down, this.keyW)

    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this)
    /* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.Physics.Arcade.Sprite): PlayerMovement {
		return (gameObject as any)["__PlayerMovement"];
	}

	private gameObject: Phaser.Physics.Arcade.Sprite;
	public speed: number = 2;
	public velocity: number = 50;

	/* START-USER-CODE */
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys
  private keyW: Phaser.Input.Keyboard.Key
  private keyA: Phaser.Input.Keyboard.Key
  private keyS: Phaser.Input.Keyboard.Key
  private keyD: Phaser.Input.Keyboard.Key
  private scene: Phaser.Scene
  private gameManager: GameManager = GameManager.getInstance()
  private shopText: Phaser.GameObjects.Text = null

  private spaceDown: boolean = false
  private spaceActivated: boolean = false
  public shopMessage: string = 'player:shop'
  public stopMessage: string = 'player:close'
  public textVariableName: string = 'shopText'
  public openVariableName: string = 'shopOpen'
  // private gameObject: Phaser.Physics.Arcade.Sprite;
  // private velocity: number;
  // Write your code here.
  update() {
    // check collide
    const body = this.gameObject.body

    // movement
    if (!body) {
      return
    }
    if (this.cursors.shift.isDown || this.keyA.isDown ) {
      this.gameObject.setVelocity(-this.velocity, 0)
      this.gameObject.anims.play({ key: 'walk', repeat: 1 }, true)
      this.gameObject.flipX = false // Flip the sprite to face left
    } else if (this.cursors.right.isDown || this.keyD.isDown) {
      this.gameObject.setVelocity(this.velocity, 0)
      this.gameObject.anims.play({ key: 'walk', repeat: 1 }, true)
      this.gameObject.flipX = true // Reset the flipX property to face right
      // this.gameObject.anims.play('right', true);
    } else if (this.cursors.up.isDown || this.keyW.isDown) {
      this.gameObject.setVelocity(0, -this.velocity)
      this.gameObject.anims.play({ key: 'walk', repeat: 1 }, true)
      // this.gameObject.anims.play('right', true);
    } else if (this.cursors.down.isDown || this.keyS.isDown) {
      this.gameObject.setVelocity(0, this.velocity)
      this.gameObject.anims.play({ key: 'walk', repeat: 1 }, true)
      // this.gameObject.anims.play('right', true);
    }
    // todo: move to collision object
    // todo: trigger key on collision
    // else if (this.cursors.space.isDown) {
    // 	// dispatch events
    // 	PubSub.publish('player:shop',"hello");
    // }
    // else if (this.cursors.shift.isDown) {
    // 	// dispatch events
    // 	PubSub.publish('player:close',"close");
    // }
    else {
      this.gameObject.setVelocity(0, 0)
      this.gameObject.anims.play({ key: 'walk', repeat: 1 }, true)
      this.gameObject.anims.pause()
      // this.gameObject.anims.play('turn');
    }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
