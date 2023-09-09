
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

export default class inside_cabin extends Phaser.Scene {

	constructor() {
		super("inside_cabin");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	preload(): void {

		this.load.pack("asset-pack", "static/assets/asset-pack.json");
		this.load.pack("png-asset-pack", "static/assets/tiled/png-asset-pack.json");
	}

	editorCreate(): void {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(656, 375, 128, 128);
		rectangle_1.scaleX = 14.157713156844872;
		rectangle_1.scaleY = 8.374805845754306;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 0;

		// container_1
		const container_1 = this.add.container(374, 204);
		container_1.scaleX = 0.5;
		container_1.scaleY = 0.5;

		// log_cabin
		const log_cabin = this.add.image(548, 318, "log_cabin");
		container_1.add(log_cabin);

		// pig
		const pig = this.physics.add.sprite(550, 594, "pig");
		pig.scaleX = 0.1;
		pig.scaleY = 0.1;
		pig.body.setSize(1134, 1572, false);
		container_1.add(pig);

		// teleport
		const teleport = new Teleport(this, 411, 649);
		container_1.add(teleport);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(321, 386, 128, 128);
		rectangle_2.scaleX = 0.39376556125616724;
		rectangle_2.scaleY = 10.749507542775936;

		// rectangle
		const rectangle = this.add.rectangle(957, 425, 128, 128);
		rectangle.scaleX = 0.39376556125616724;
		rectangle.scaleY = 10.749507542775936;

		// rectangle_3
		const rectangle_3 = this.add.rectangle(711, 45, 128, 128);
		rectangle_3.scaleX = 10.12449144648944;
		rectangle_3.scaleY = 0.47242117316818444;

		// rectangle_4
		const rectangle_4 = this.add.rectangle(670, 665, 128, 128);
		rectangle_4.scaleX = 10.12449144648944;
		rectangle_4.scaleY = 0.47242117316818444;

		// lists
		const list = [rectangle_2, rectangle, rectangle_3, rectangle_4];

		// collider
		this.physics.add.collider(pig, list);

		// pig (components)
		const pigPlayerMovement = new PlayerMovement(pig);
		pigPlayerMovement.velocity = 250;
		new Physics(pig);
		new PigAnimation(pig);

		// teleport (prefab fields)
		teleport.teleportScene = "Level";
		teleport.player = pig;

		// rectangle_2 (components)
		const rectangle_2RectPhysics = new RectPhysics(rectangle_2);
		rectangle_2RectPhysics.static = true;

		// rectangle (components)
		const rectangleRectPhysics = new RectPhysics(rectangle);
		rectangleRectPhysics.static = true;

		// rectangle_3 (components)
		const rectangle_3RectPhysics = new RectPhysics(rectangle_3);
		rectangle_3RectPhysics.static = true;

		// rectangle_4 (components)
		const rectangle_4RectPhysics = new RectPhysics(rectangle_4);
		rectangle_4RectPhysics.static = true;

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
