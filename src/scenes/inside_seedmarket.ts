
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PlayerMovement from "../components/PlayerMovement";
import Physics from "../components/Physics";
import PigAnimation from "../components/PigAnimation";
import Teleport from "./Teleport";
import RectPhysics from "../components/RectPhysics";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class inside_seedmarket extends Phaser.Scene {

	constructor() {
		super("inside_seedmarket");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	preload(): void {

		this.load.pack("asset-pack", "assets/asset-pack.json");
		this.load.pack("png-asset-pack", "assets/tiled/png-asset-pack.json");
	}

	editorCreate(): void {

		// seedmarket_1
		this.add.image(656, 289, "seedmarket_1");

		// pig
		const pig = this.physics.add.sprite(654, 350, "pig");
		pig.scaleX = 0.04;
		pig.scaleY = 0.04;
		pig.body.setSize(1134, 1572, false);

		// teleport
		const teleport = new Teleport(this, 588, 359);
		this.add.existing(teleport);
		teleport.scaleX = 0.5;
		teleport.scaleY = 0.5;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(393, 249, 128, 128);
		rectangle_1.scaleX = 0.4189179275473359;
		rectangle_1.scaleY = 4.8451941292431835;

		// rectangle
		const rectangle = this.add.rectangle(921, 273, 128, 128);
		rectangle.scaleX = 0.4189179275473359;
		rectangle.scaleY = 4.8451941292431835;

		// rectangle_2
		const rectangle_2 = this.add.rectangle(651, 470, 128, 128);
		rectangle_2.scaleX = 5.2211048064505405;
		rectangle_2.scaleY = 0.34685670273060865;

		// rectangle_3
		const rectangle_3 = this.add.rectangle(666, 79, 128, 128);
		rectangle_3.scaleX = 5.2211048064505405;
		rectangle_3.scaleY = 0.34685670273060865;

		// lists
		const list = [rectangle_1, rectangle, rectangle_2, rectangle_3];

		// pig (components)
		const pigPlayerMovement = new PlayerMovement(pig);
		pigPlayerMovement.velocity = 250;
		new Physics(pig);
		new PigAnimation(pig);

		// teleport (prefab fields)
		teleport.teleportScene = "Level";
		teleport.player = pig;

		// rectangle_1 (components)
		const rectangle_1RectPhysics = new RectPhysics(rectangle_1);
		rectangle_1RectPhysics.static = true;

		// rectangle (components)
		const rectangleRectPhysics = new RectPhysics(rectangle);
		rectangleRectPhysics.static = true;

		// rectangle_2 (components)
		const rectangle_2RectPhysics = new RectPhysics(rectangle_2);
		rectangle_2RectPhysics.static = true;

		// rectangle_3 (components)
		const rectangle_3RectPhysics = new RectPhysics(rectangle_3);
		rectangle_3RectPhysics.static = true;

		this.list = list;

		this.events.emit("scene-awake");
	}

	private list!: Phaser.GameObjects.Rectangle[];

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
