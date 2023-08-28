// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class RectPhysics {

	constructor(gameObject: Phaser.GameObjects.Rectangle) {
		this.gameObject = gameObject;
		(gameObject as any)["__RectPhysics"] = this;

		/* START-USER-CTR-CODE */
    // Write your code here.
    const scene = this.gameObject.scene
	scene.events.on(Phaser.Scenes.Events.CREATE, ()=>{
		scene.physics.add.existing(this.gameObject ,this.static)
	}, this)
    // scene.physics.add.existing(this.gameObject ,true)
	// this.gameObject.body.setImmovable(true);
    /* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Rectangle): RectPhysics {
		return (gameObject as any)["__RectPhysics"];
	}

	private gameObject: Phaser.GameObjects.Rectangle;
	public static: boolean = false;

	/* START-USER-CODE */

  // Write your code here.

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
