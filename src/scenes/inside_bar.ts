
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

export default class inside_bar extends Phaser.Scene {

	constructor() {
		super("inside_bar");

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
		const rectangle_1 = this.add.rectangle(684, 378, 128, 128);
		rectangle_1.scaleX = 14.245814137595259;
		rectangle_1.scaleY = 8.059605729828485;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 0;

		// container_1
		const container_1 = this.add.container(411, 159);
		container_1.scaleX = 0.35;
		container_1.scaleY = 0.35;

		// bar_map_1
		const bar_map_1 = this.add.image(700, 576, "bar_map_1");
		bar_map_1.scaleX = 0.5;
		bar_map_1.scaleY = 0.5;
		container_1.add(bar_map_1);

		// pig
		const pig = this.physics.add.sprite(299, 991, "pig");
		pig.scaleX = 0.15;
		pig.scaleY = 0.15;
		pig.body.setSize(1134, 1572, false);
		container_1.add(pig);

		// teleport
		const teleport = new Teleport(this, -104, 1034);
		container_1.add(teleport);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(293, 343, 128, 128);
		rectangle_2.scaleX = 0.676847459784534;
		rectangle_2.scaleY = 6.948122048252152;

		// rectangle
		const rectangle = this.add.rectangle(1022, 371, 128, 128);
		rectangle.scaleX = 0.676847459784534;
		rectangle.scaleY = 6.948122048252152;

		// rectangle_3
		const rectangle_3 = this.add.rectangle(670, -27, 128, 128);
		rectangle_3.scaleX = 7.618579428606838;
		rectangle_3.scaleY = 0.5879543109400194;

		// rectangle_4
		const rectangle_4 = this.add.rectangle(657, 632, 128, 128);
		rectangle_4.scaleX = 7.618579428606838;
		rectangle_4.scaleY = 0.5879543109400194;

		// lists
		const list = [rectangle_4, rectangle_3, rectangle, rectangle_2];

		// collider
		this.physics.add.collider(pig, list);

		// pig (components)
		const pigPlayerMovement = new PlayerMovement(pig);
		pigPlayerMovement.velocity = 250;
		new Physics(pig);
		new PigAnimation(pig);

		// teleport (prefab fields)
		teleport.teleportScene = "Level.scene";
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
