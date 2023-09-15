
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

export default class inside_clothing extends Phaser.Scene {

	constructor() {
		super("inside_clothing");

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
		const rectangle_1 = this.add.rectangle(643, 342, 128, 128);
		rectangle_1.scaleX = 13.619777307723384;
		rectangle_1.scaleY = 8.113026797333477;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 131072;

		// container_1
		const container_1 = this.add.container(109, 138);
		container_1.scaleX = 1.5;
		container_1.scaleY = 1.5;

		// container_2
		const container_2 = this.add.container(-612, -552);
		container_1.add(container_2);

		// clothing_store
		const clothing_store = this.add.image(358, 144, "clothing_store");
		container_1.add(clothing_store);

		// pig
		const pig = this.physics.add.sprite(468, 223, "pig");
		pig.scaleX = 0.05;
		pig.scaleY = 0.05;
		pig.body.setSize(1134, 1572, false);
		container_1.add(pig);

		// teleport
		const teleport = new Teleport(this, 442, 244);
		teleport.scaleX = 0.5;
		teleport.scaleY = 0.5;
		container_1.add(teleport);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(275, 319, 128, 128);
		rectangle_2.scaleX = 0.3033864664664985;
		rectangle_2.scaleY = 7.731736474054453;

		// rectangle
		const rectangle = this.add.rectangle(1014, 363, 128, 128);
		rectangle.scaleX = 0.3033864664664985;
		rectangle.scaleY = 7.731736474054453;

		// rectangle_3
		const rectangle_3 = this.add.rectangle(692, 85, 128, 128);
		rectangle_3.scaleX = 8.590625367660795;
		rectangle_3.scaleY = 0.6547873726798454;

		// rectangle_4
		const rectangle_4 = this.add.rectangle(734, 626, 128, 128);
		rectangle_4.scaleX = 8.590625367660795;
		rectangle_4.scaleY = 0.6547873726798454;

		// lists
		const list = [rectangle_2, rectangle_4, rectangle_3, rectangle];

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

		this.pig = pig;
		this.list = list;

		this.events.emit("scene-awake");
	}

	private pig!: Phaser.Physics.Arcade.Sprite;
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
