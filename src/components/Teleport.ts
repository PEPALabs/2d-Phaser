
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Teleport {

	constructor(gameObject: Phaser.GameObjects.Rectangle) {
		this.gameObject = gameObject;
		(gameObject as any)["__Teleport"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		const scene = this.gameObject.scene;
		scene.physics.add.existing(this.gameObject);

		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Rectangle): Teleport {
		return (gameObject as any)["__Teleport"];
	}

	private gameObject: Phaser.GameObjects.Rectangle;

	/* START-USER-CODE */
	private scene: Phaser.Scene;
	private teleportScene: string;

	// Write your code here.
	update() {
		// console.log("update1");


	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
