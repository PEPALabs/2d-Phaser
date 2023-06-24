
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import { Physics } from 'phaser';
// import { publish} from '../event';
import PubSub from 'pubsub-js';
import EventDispatcher from '../EventDispatcher';
import Level from '../scenes/Level';
import Farm from '../scenes/Farm';
import GameManager from '../GameManager';
/* END-USER-IMPORTS */

export default class OpenShop {

	constructor(gameObject: Phaser.GameObjects.Rectangle) {
		this.gameObject = gameObject;
		(gameObject as any)["__OpenShop"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		const scene = this.gameObject.scene;
		this.scene = scene;
		this.cursors = scene.input.keyboard.createCursorKeys();

		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Rectangle): OpenShop {
		return (gameObject as any)["__OpenShop"];
	}

	private gameObject: Phaser.GameObjects.Rectangle;

	/* START-USER-CODE */
	private cursors: Phaser.Types.Input.Keyboard.CursorKeys;
	private scene: Phaser.Scene;
	private gameManager: GameManager = GameManager.getInstance();
	private shopText: Phaser.GameObjects.Text = null;

	private spaceDown: boolean = false;
	private spaceActivated: boolean = false;
	public shopMessage:string = "player:shop";
	public stopMessage:string = "player:close";
	public shopTextMessage:string = "player:shopText";
	public shopTextStopMessage:string = "player:shopTextStop";
	public textVariableName:string = "shopText";
	public openVariableName:string = "shopOpen";

	update() {
		// check collide
		const body = this.gameObject.body;
		var touching = this.gameManager.values[this.textVariableName];

		// check space key
		this.spaceActivated = this.cursors.space.isDown && !this.spaceDown;
		this.spaceDown = this.cursors.space.isDown;

		// var proximity = ("shopText" in this.gameManager.values)? this.gameManager.values["shopText"] : false;

		if (touching) {

			if (this.shopText == null)
				// this.shopText = this.scene.add.text(this.gameManager.values["shopLocation"][0]-300, this.gameManager.values["shopLocation"][1], 'Press SPACE to open shop', { fontSize: '32px' });
				// this.shopText = this.scene.add.text(this.gameObject.x-300, this.gameObject.y, 'Press SPACE to open shop', { fontSize: '32px' });
				PubSub.publish(this.shopTextMessage,"hello");

			var shopOpen = (this.openVariableName in this.gameManager.values)? this.gameManager.values[this.openVariableName] : false;
			if (shopOpen) {
				PubSub.publish(this.shopMessage,"hello");
			}
			else {
				PubSub.publish(this.stopMessage,"close");
			}

			if (this.spaceActivated) {
				// set shop open status
				shopOpen = !shopOpen;
				this.gameManager.values[this.openVariableName] = shopOpen;
				this.scene.scene.start("Farm");
			}
		}
		else{
			if (this.shopText != null) {
				this.shopText.destroy();
				this.shopText = null;
			}
			this.gameManager.values[this.textVariableName] = false;
			this.gameManager.values[this.openVariableName] = false;
			PubSub.publish(this.stopMessage,"close");
			PubSub.publish(this.shopTextStopMessage,"hello");
		}

	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
