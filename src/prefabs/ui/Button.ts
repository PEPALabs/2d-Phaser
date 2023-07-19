
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Button extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		this.setInteractive(new Phaser.Geom.Rectangle(0, 0, 111.3, 51.2), Phaser.Geom.Rectangle.Contains);

		// image
		const image = scene.add.image(0, 0, "Button_Green");
		image.scaleX = 0.15;
		image.scaleY = 0.2;
		image.setOrigin(0, 0);
		this.add(image);

		// text
		const text = scene.add.text(57, 25, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Plant";
		text.setStyle({ "align": "center", "fontSize": "25px" });
		this.add(text);

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.image = image;
		this.text = text;
		/* END-USER-CTR-CODE */
	}

	public image!: Phaser.GameObjects.Image;
	public text!: Phaser.GameObjects.Text;

	/* START-USER-CODE */

	// Write your code here.
	public setText(text: string) {
		this.text.text = text;
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
