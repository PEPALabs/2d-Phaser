
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import Phaser,{ Physics } from 'phaser';
// import { publish} from '../event';
import PubSub from 'pubsub-js';
/* END-USER-IMPORTS */

export default class OpenShop {

	constructor(gameObject: Phaser.Physics.Arcade.Image) {
		this.gameObject = gameObject;
		(gameObject as any)["__OpenShop"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		const scene = this.gameObject.scene;
		this.scene = scene;
		this.cursors = scene.input.keyboard.createCursorKeys();
		this.emitter = new Phaser.Events.EventEmitter();
		this.emitter.emit("MY_EVENT","String_Data")
		this.emitter.addListener("player:shoptext", (data: string) => {PubSub.publish("player:shop", data);});
		this.emitter.addListener("player:shoptextstop", (data: string) => {});
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.Physics.Arcade.Image): OpenShop {
		return (gameObject as any)["__OpenShop"];
	}

	private gameObject: Phaser.Physics.Arcade.Image;

	/* START-USER-CODE */
	private cursors: Phaser.Types.Input.Keyboard.CursorKeys;
	private scene: Phaser.Scene;
	private emitter: Phaser.Events.EventEmitter;
	private proximity: false;

	update() {

		var hit = false;
		// game.physics.arcade.collide(this.gameObject, this.scene.Player, ballHitBrick);
		// if () {

	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
