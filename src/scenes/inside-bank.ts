
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PigAnimation from "../components/PigAnimation";
import PlayerMovement from "../components/PlayerMovement";
import Physics from "../components/Physics";
import Teleport from "./Teleport";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class inside-bank extends Phaser.Scene {

	constructor() {
		super("inside-bank");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	preload(): void {

		this.load.pack("asset-pack", "assets/asset-pack.json");
		this.load.pack("png-asset-pack", "assets/tiled/png-asset-pack.json");
	}

	editorCreate(): void {

		// bank
		const bank = this.add.image(403, 398, "bank");

		// player
		const player = this.physics.add.sprite(381, 305, "pig");
		player.scaleX = 0.05;
		player.scaleY = 0.05;
		player.body.setSize(1134, 1572, false);

		// container_1
		const container_1 = this.add.container(202, 320);
		container_1.scaleX = 0.5;
		container_1.scaleY = 0.5;

		// teleport
		const teleport = new Teleport(this, 280, 512);
		container_1.add(teleport);

		// player (components)
		new PigAnimation(player);
		new PlayerMovement(player);
		new Physics(player);

		// teleport (prefab fields)
		teleport.teleportScene = "Level";
		teleport.player = player;

		this.bank = bank;
		this.player = player;

		this.events.emit("scene-awake");
	}

	private bank!: Phaser.GameObjects.Image;
	private player!: Phaser.Physics.Arcade.Sprite;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
