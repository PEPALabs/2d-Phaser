
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import { messageActions } from "../data/useGameStore";
/* END-USER-IMPORTS */

export default class TriggerText {

	constructor(gameObject: Phaser.Physics.Arcade.Sprite) {
		this.gameObject = gameObject;
		(gameObject as any)["__TriggerText"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		const scene = this.gameObject.scene;
		this.scene = scene;
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		scene.physics.add.existing(this.gameObject);
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.Physics.Arcade.Sprite): TriggerText {
		return (gameObject as any)["__TriggerText"];
	}

	private gameObject: Phaser.Physics.Arcade.Sprite;
	public sender: string = "undefined";
	public player!: Phaser.GameObjects.GameObject;
	public message: string = "";

	/* START-USER-CODE */
	private scene: Phaser.Scene;
	private messageSet: boolean = false;
	private overlap: boolean = false;
	// Write your code here.

	setMessage(msg:string) {
			messageActions.addMessage({sender:this.sender,message:msg});
			return true
	}

	update() {
		
		
		if (this.scene.physics.overlap(this.gameObject, this.player)) {
			if(!this.overlap){
				this.overlap = true;
				this.messageSet = false;
			}
			if(!this.messageSet){
				this.setMessage(this.message);
				this.messageSet = true;
			}
		}else {
			if(this.overlap){
				this.overlap = false;
				this.messageSet = false;
			}
			if(!this.messageSet){
				this.setMessage(""); // TODO: find a way to disable message display
				this.messageSet = true;
			}
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
