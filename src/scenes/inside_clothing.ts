
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PlayerMovement from "../components/PlayerMovement";
import Physics from "../components/Physics";
import PigAnimation from "../components/PigAnimation";
import Teleport from "./Teleport";
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

		this.load.pack("asset-pack", "assets/asset-pack.json");
		this.load.pack("png-asset-pack", "assets/tiled/png-asset-pack.json");
	}

	editorCreate(): void {

		// clothing_store
		this.add.image(485, 348, "clothing_store");

		// pig
		const pig = this.physics.add.sprite(607, 431, "pig");
		pig.scaleX = 0.05;
		pig.scaleY = 0.05;
		pig.body.setSize(1134, 1572, false);

		// container_1
		const container_1 = this.add.container(306, 276);
		container_1.scaleX = 0.5;
		container_1.scaleY = 0.5;

		// teleport
		const teleport = new Teleport(this, 511, 357);
		container_1.add(teleport);

		// pig (components)
		const pigPlayerMovement = new PlayerMovement(pig);
		pigPlayerMovement.velocity = 250;
		new Physics(pig);
		new PigAnimation(pig);

		// teleport (prefab fields)
		teleport.teleportScene = "Level";
		teleport.player = pig;

		this.pig = pig;

		this.events.emit("scene-awake");
	}

	private pig!: Phaser.Physics.Arcade.Sprite;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
