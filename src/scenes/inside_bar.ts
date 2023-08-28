
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

		// bar_map_1
		const bar_map_1 = this.add.image(350, 288, "bar_map_1");
		bar_map_1.scaleX = 0.5;
		bar_map_1.scaleY = 0.5;

		// pig
		const pig = this.physics.add.sprite(-49, 610, "pig");
		pig.scaleX = 0.15;
		pig.scaleY = 0.15;
		pig.body.setSize(1134, 1572, false);

		// teleport
		const teleport = new Teleport(this, -464, 775);
		this.add.existing(teleport);

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
