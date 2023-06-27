
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import FarmPlant from "../components/FarmPlant";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface Farmland {

	 body: Phaser.Physics.Arcade.StaticBody;
}

export default class Farmland extends Phaser.Physics.Arcade.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "guapen", frame);

		scene.physics.add.existing(this, true);
		this.body.setSize(208, 240, false);

		// this (components)
		new FarmPlant(this);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
