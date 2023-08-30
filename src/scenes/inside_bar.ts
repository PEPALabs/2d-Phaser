
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PlayerMovement from "../components/PlayerMovement";
import Physics from "../components/Physics";
import PigAnimation from "../components/PigAnimation";
import Teleport from "./Teleport";
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

		this.load.pack("asset-pack", "assets/asset-pack.json");
		this.load.pack("png-asset-pack", "assets/tiled/png-asset-pack.json");
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

		// pig (components)
		const pigPlayerMovement = new PlayerMovement(pig);
		pigPlayerMovement.velocity = 250;
		new Physics(pig);
		new PigAnimation(pig);

		// teleport (prefab fields)
		teleport.teleportScene = "Level.scene";
		teleport.player = pig;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
