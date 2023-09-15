
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

export default class inside_adventure extends Phaser.Scene {

	constructor() {
		super("inside_adventure");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	preload(): void {

		this.load.pack("asset-pack", "static/assets/asset-pack.json");
		this.load.pack("png-asset-pack", "static/assets/tiled/png-asset-pack.json");
	}

	editorCreate(): void {

		// rectangle_4
		const rectangle_4 = this.add.rectangle(608, 362, 128, 128);
		rectangle_4.scaleX = 9.959234630797546;
		rectangle_4.scaleY = 7.212942530022344;
		rectangle_4.isFilled = true;
		rectangle_4.fillColor = 0;

		// container_1
		const container_1 = this.add.container(-208, 0);
		container_1.scaleX = 1.25;
		container_1.scaleY = 1.25;

		// adventure_1
		const adventure_1 = this.add.image(656, 289, "adventure");
		adventure_1.scaleX = 0.15;
		adventure_1.scaleY = 0.15;
		container_1.add(adventure_1);

		// pig
		const pig = this.physics.add.sprite(656, 362, "pig");
		pig.scaleX = 0.05;
		pig.scaleY = 0.05;
		pig.body.setSize(1134, 1572, false);
		container_1.add(pig);

		// teleport
		const teleport = new Teleport(this, 589, 405);
		teleport.scaleX = 0.5;
		teleport.scaleY = 0.5;
		container_1.add(teleport);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(393, 249, 128, 128);
		rectangle_1.scaleX = 0.4189179275473359;
		rectangle_1.scaleY = 4.8451941292431835;
		container_1.add(rectangle_1);

		// rectangle
		const rectangle = this.add.rectangle(921, 273, 128, 128);
		rectangle.scaleX = 0.4189179275473359;
		rectangle.scaleY = 4.8451941292431835;
		container_1.add(rectangle);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(653, 487, 128, 128);
		rectangle_2.scaleX = 5.2211048064505405;
		rectangle_2.scaleY = 0.34685670273060865;
		container_1.add(rectangle_2);

		// rectangle_3
		const rectangle_3 = this.add.rectangle(666, 79, 128, 128);
		rectangle_3.scaleX = 5.2211048064505405;
		rectangle_3.scaleY = 0.34685670273060865;
		container_1.add(rectangle_3);

		// lists
		const list = [rectangle_1, rectangle, rectangle_2, rectangle_3];

		// collider
		this.physics.add.collider(list, pig);

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
