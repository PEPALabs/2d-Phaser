
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Physics from "../components/Physics";
import PlayerMovement from "../components/PlayerMovement";
import PigAnimation from "../components/PigAnimation";
import Teleport from "./Teleport";
import RectPhysics from "../components/RectPhysics";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class inside_exchange extends Phaser.Scene {

	constructor() {
		super("inside_exchange");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	preload(): void {

		this.load.pack("png-asset-pack", "static/assets/tiled/png-asset-pack.json");
		this.load.pack("asset-pack", "static/assets/asset-pack.json");
	}

	editorCreate(): void {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(698, 375, 128, 128);
		rectangle_1.scaleX = 14.898631528427925;
		rectangle_1.scaleY = 8.887469917237537;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 0;

		// container_1
		const container_1 = this.add.container(578, 271);
		container_1.scaleX = 0.2;
		container_1.scaleY = 0.2;

		// exchange
		const exchange = this.add.image(475, 518, "exchange");
		container_1.add(exchange);

		// pig
		const pig = this.physics.add.sprite(-418, 1250, "pig");
		pig.scaleX = 0.3;
		pig.scaleY = 0.3;
		pig.body.setSize(1134, 1572, false);
		container_1.add(pig);

		// teleport
		const teleport = new Teleport(this, -1213, 1524);
		teleport.scaleX = 3;
		teleport.scaleY = 3;
		container_1.add(teleport);

		// container_2
		const container_2 = this.add.container(0, 0);
		container_2.scaleX = 0.4;
		container_2.scaleY = 0.4;

		// rectangle_2
		const rectangle_2 = this.add.rectangle(293, 347, 128, 128);
		rectangle_2.scaleX = 1.0666491715220632;
		rectangle_2.scaleY = 7.852267796736732;

		// rectangle
		const rectangle = this.add.rectangle(1044, 366, 128, 128);
		rectangle.scaleX = 1.0666491715220632;
		rectangle.scaleY = 7.852267796736732;

		// rectangle_3
		const rectangle_3 = this.add.rectangle(719, 88, 128, 128);
		rectangle_3.scaleX = 10.019484476225713;
		rectangle_3.scaleY = 0.7367271235000157;

		// rectangle_4
		const rectangle_4 = this.add.rectangle(698, 673, 128, 128);
		rectangle_4.scaleX = 10.019484476225713;
		rectangle_4.scaleY = 0.7367271235000157;

		// lists
		const list = [rectangle_2];

		// collider
		this.physics.add.collider(pig, list);

		// pig (components)
		new Physics(pig);
		const pigPlayerMovement = new PlayerMovement(pig);
		pigPlayerMovement.velocity = 250;
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
