
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PlayerMovement from "../components/PlayerMovement";
import Physics from "../components/Physics";
import PigAnimation from "../components/PigAnimation";
import Teleport from "./Teleport";
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

		this.load.pack("asset-pack", "assets/asset-pack.json");
		this.load.pack("png-asset-pack", "assets/tiled/png-asset-pack.json");
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

		// pig (components)
		const pigPlayerMovement = new PlayerMovement(pig);
		pigPlayerMovement.velocity = 250;
		new Physics(pig);
		new PigAnimation(pig);

		// teleport (prefab fields)
		teleport.teleportScene = "Level";
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
