
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
		// this.emitter = new Phaser.Events.EventEmitter();
		// this.emitter.emit("MY_EVENT","String_Data")
		// this.emitter.addListener("player:shoptext", (data: string) => {PubSub.publish("player:shop", data);});
		// this.emitter.addListener("player:shoptextstop", (data: string) => {});

		this.token1 = PubSub.subscribe("player:shoptext", (msg: string, data: string) => {
			console.log(msg, data);
			this.proximity = true;
		});
		this.token2 = PubSub.subscribe("player:shoptextstop", (msg: string, data: string) => {
			console.log(msg, data);
			this.proximity = false;
		});
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
	private proximity: boolean = false;
	private token1: string;
	private token2: string;
	private shopText: Phaser.GameObjects.Text = null;
	private shopOpen: boolean = false;

	update() {

		var hit = false;
		// game.physics.arcade.collide(this.gameObject, this.scene.Player, ballHitBrick);
		if (this.proximity ) {
			//display text
			if (this.shopText == null)
				this.shopText = this.scene.add.text(this.gameObject.x, this.gameObject.y, 'Press SPACE to open shop', { fontSize: '32px' });
			
			if (this.cursors.space.isDown) {
				this.shopOpen = !this.shopOpen;
				if (this.shopOpen) {
					PubSub.publish("player:shop", "open");
				}else{
					PubSub.publish("player:close", "close");
				}
			}
		} else {
			if (this.shopText != null) {
				this.shopText.destroy();
				this.shopText = null;
			}
			PubSub.publish("player:close", "close");
			this.shopOpen = false;
		}

	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here