
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Physics from "../components/Physics";
import PlayerMovement from "../components/PlayerMovement";
import PigAnimation from "../components/PigAnimation";
import Teleport from "./Teleport";
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

		this.load.pack("png-asset-pack", "assets/tiled/png-asset-pack.json");
		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	editorCreate(): void {

		// exchange
		this.add.image(475, 518, "exchange");

		// pig
		const pig = this.physics.add.sprite(-502, 1137, "pig");
		pig.scaleX = 0.3;
		pig.scaleY = 0.3;
		pig.body.setSize(1134, 1572, false);

		// teleport
		const teleport = new Teleport(this, -1213, 1524);
		this.add.existing(teleport);
		teleport.scaleX = 3;
		teleport.scaleY = 3;

		// pig (components)
		new Physics(pig);
		const pigPlayerMovement = new PlayerMovement(pig);
		pigPlayerMovement.velocity = 250;
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
