
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import { Physics } from 'phaser';
// import { publish} from '../event';
import PubSub from 'pubsub-js';
/* END-USER-IMPORTS */

export default class PlayerMovement {

	constructor(gameObject: Phaser.Physics.Arcade.Sprite) {
		this.gameObject = gameObject;
		(gameObject as any)["__PlayerMovement"] = this;

		/* START-USER-CTR-CODE */
        /** @type {number} */
        this.velocity = 20;

		const scene = this.gameObject.scene;
		this.scene = scene;
		this.cursors = scene.input.keyboard.createCursorKeys();

		//this.keyW = this.scene.input.keyboard.addKey('W');
		//this.keyA = this.scene.input.keyboard.addKey('A');
		//this.keyS = this.scene.input.keyboard.addKey('S');
		//this.keyD = this.scene.input.keyboard.addKey('D');

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
	private cursors: Phaser.Types.Input.Keyboard.CursorKeys;
	private scene: Phaser.Scene;
	// private gameObject: Phaser.Physics.Arcade.Sprite;
	// private velocity: number;
	// Write your code here.
	update() {

		const body = this.gameObject.body;

		if (!body){
			return
		}
		if (this.cursors.left.isDown) {
			this.gameObject.setVelocity(-this.velocity,0);
			// this.gameObject.anims.play('left', true);
		}
		else if (this.cursors.right.isDown) {
			this.gameObject.setVelocity(this.velocity,0);
			// this.gameObject.anims.play('right', true);
		}
		else if (this.cursors.up.isDown) {
			this.gameObject.setVelocity(0,-this.velocity);
			// this.gameObject.anims.play('right', true);
		}
		else if (this.cursors.down.isDown) {
			this.gameObject.setVelocity(0,this.velocity);
			// this.gameObject.anims.play('right', true);
		}
		// todo: move to collision object 
		// todo: trigger key on collision
		else if (this.cursors.space.isDown) {
			// dispatch events
			PubSub.publish('player:shop',"hello");
		}
		else if (this.cursors.shift.isDown) {
			// dispatch events
			PubSub.publish('player:close',"close");
		}
		else {
			this.gameObject.setVelocity(0,0);
			// this.gameObject.anims.play('turn');
		}
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
