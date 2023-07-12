
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import FarmPlant from "../components/FarmPlant";
import Button from "./ui/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Farmland extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);
		// PlantImage
		const plantImage = scene.add.image(0, 0, "guapen");
		plantImage.scaleX = 0.8;
		plantImage.scaleY = 0.8;
		plantImage.setOrigin(0, 0);
		this.add(plantImage);

		// ActionButton
		const actionButton = new Button(scene, 26, 3);
		this.add(actionButton);

		// this (components)
		const thisFarmPlant = new FarmPlant(this);
		thisFarmPlant.actionButton = actionButton;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.plantImage = plantImage;

		scene.physics.add.existing(this)

		const body = this.body as Phaser.Physics.Arcade.Body
        body.setSize(plantImage.displayWidth, plantImage.displayHeight)
		/* END-USER-CTR-CODE */
	}

	public plantImage!: Phaser.GameObjects.Image;
	public id: string = "0";

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
