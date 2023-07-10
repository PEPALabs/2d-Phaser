
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import { Physics } from 'phaser';
/* END-USER-IMPORTS */

class Actor extends Physics.Arcade.Sprite {

	private keyW: Phaser.Input.Keyboard.Key;
	private keyA: Phaser.Input.Keyboard.Key;
	private keyS: Phaser.Input.Keyboard.Key;
	private keyD: Phaser.Input.Keyboard.Key;
	private minX: number;
	private minY: number;
	private maxX: number;
	private maxY: number;
	public velocity: number;
	private gameObject: Phaser.Physics.Arcade.Sprite;
	public speed: number = 2;

	constructor(scene: Phaser.Scene, gameObject: Phaser.Physics.Arcade.Sprite, x:number, y:number, texture: string, frame?: string | number) {
		super(scene, x, y, texture, frame);
		this.gameObject = gameObject;
		this.scene = scene;
		(gameObject as any)["__PlayerMovement"] = this;

		/* START-USER-CTR-CODE */
        /** @type {number} */
        this.velocity = 20;
        /** @type {number} */
        this.minX = 0;
		this.minY = 0;
        /** @type {number} */
        this.maxX = 3070;
		this.maxY = 3070;

		this.keyW = this.scene.input.keyboard.addKey('W');
		this.keyA = this.scene.input.keyboard.addKey('A');
		this.keyS = this.scene.input.keyboard.addKey('S');
		this.keyD = this.scene.input.keyboard.addKey('D');
		/* END-USER-CTR-CODE */
	}

	// static getComponent(gameObject: Phaser.Physics.Arcade.Sprite): PlayerMovement {
	// 	return (gameObject as any)["__PlayerMovement"];
	// }

	update(): void {
		this.getBody().setVelocity(0);
		if (this.keyW?.isDown) {
		  this.body.velocity.y = -110;
		}
		if (this.keyA?.isDown) {
		  this.body.velocity.x = -110;
		  this.checkFlip();
		  this.getBody().setOffset(48, 15);
		}
		if (this.keyS?.isDown) {
		  this.body.velocity.y = 110;
		}
		if (this.keyD?.isDown) {
		  this.body.velocity.x = 110;
		  this.checkFlip();
		  this.getBody().setOffset(15, 15);
		}
	  }
	
	  protected checkFlip(): void {
		if (this.body.velocity.x < 0) {
		  this.scaleX = -1;
		} else {
		  this.scaleX = 1;
		}
	  }
	protected getBody(): Physics.Arcade.Body {
	    return this.body as Physics.Arcade.Body;
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
